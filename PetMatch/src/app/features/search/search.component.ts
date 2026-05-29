import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { action } from '@nativescript/core/ui/dialogs'
import { Pet } from '~/app/models/pet.model'
import { PetService } from '~/app/services/pet.service'
import { ApiService } from '~/app/services/api.service'
import { StorageService } from '~/app/services/storage.service'
import { Store } from '@ngrx/store'
import { addReadLater } from '~/app/store/read-later.actions'

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  pets: Pet[] = []
  filteredPets: Pet[] = []
  searchQuery = ''
  isLoading = false
  favorites: Set<number> = new Set()

  constructor(
    private petService: PetService,
    private apiService: ApiService,
    private storageService: StorageService,
    private routerExtensions: RouterExtensions,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.loadFavorites()
    this.loadPetsFromApi()
  }

  private loadFavorites(): void {
    const saved = this.storageService.getItem('favorites')
    if (saved && Array.isArray(saved)) {
      this.favorites = new Set(saved)
    }
  }

  private saveFavorites(): void {
    this.storageService.setItem('favorites', Array.from(this.favorites))
  }

  private loadPetsFromApi(): void {
    this.isLoading = true
    this.apiService.searchPets().subscribe(
      (response) => {
        if (response.success && response.data) {
          this.pets = response.data
          this.filteredPets = [...this.pets]
        }
        this.isLoading = false
      },
      (error) => {
        console.error('Error fetching pets:', error)
        this.isLoading = false
        // Fallback to local pets
        this.pets = this.petService.getPets()
        this.filteredPets = [...this.pets]
      },
    )
  }

  onSearchChange(): void {
    if (!this.searchQuery.trim()) {
      this.filteredPets = [...this.pets]
      return
    }

    this.isLoading = true
    this.apiService.searchPets(this.searchQuery).subscribe(
      (response) => {
        if (response.success && response.data) {
          this.filteredPets = response.data
        }
        this.isLoading = false
      },
      (error) => {
        console.error('Error searching:', error)
        this.filteredPets = this.pets.filter(
          (pet) =>
            pet.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            pet.breed.toLowerCase().includes(this.searchQuery.toLowerCase()),
        )
        this.isLoading = false
      },
    )
  }

  onRefresh(args: any): void {
    this.isLoading = true

    setTimeout(() => {
      this.loadPetsFromApi()
      const refresher = args.object
      refresher.refreshing = false
    }, 1500)
  }

  onToggleFavorite(pet: Pet): void {
    if (this.favorites.has(pet.id)) {
      this.favorites.delete(pet.id)
    } else {
      this.favorites.add(pet.id)
    }
    this.saveFavorites()
  }

  isFavorite(petId: number): boolean {
    return this.favorites.has(petId)
  }

  onPetTap(pet: Pet): void {
    this.routerExtensions.navigate(['search/detail', pet.id])
  }

  async onPetLongPress(pet: Pet): Promise<void> {
    const selectedIndex: any = await action({
      message: `Acción para ${pet.name}`,
      actions: ['Ver detalle', 'Agregar favorito', 'Leer después', 'Cancelar'],
    })

    switch (selectedIndex) {
      case 0:
        this.onPetTap(pet)
        break
      case 1:
        this.onToggleFavorite(pet)
        break
      case 2:
        this.store.dispatch(addReadLater({ pet }))
        break
    }
  }
}
