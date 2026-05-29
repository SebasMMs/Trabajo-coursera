import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { action } from '@nativescript/core/ui/dialogs'
import { Pet } from '~/app/models/pet.model'
import { PetService } from '~/app/services/pet.service'

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

  constructor(
    private petService: PetService,
    private routerExtensions: RouterExtensions,
  ) {}

  ngOnInit(): void {
    this.pets = this.petService.getPets()
    this.filteredPets = [...this.pets]
  }

  onSearchChange(): void {
    if (!this.searchQuery.trim()) {
      this.filteredPets = [...this.pets]
      return
    }

    this.filteredPets = this.pets.filter(
      (pet) =>
        pet.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        pet.breed.toLowerCase().includes(this.searchQuery.toLowerCase()),
    )
  }

  onRefresh(args: any): void {
    this.isLoading = true

    setTimeout(() => {
      const newPets = this.petService.getRandomPets(2)
      this.pets = [...this.pets, ...newPets]
      this.filteredPets = [...this.pets]

      const refresher = args.object
      refresher.refreshing = false
      this.isLoading = false
    }, 1500)
  }

  onPetTap(pet: Pet): void {
    this.routerExtensions.navigate(['search/detail', pet.id])
  }

  async onPetLongPress(pet: Pet): Promise<void> {
    const selectedIndex: any = await action({
      message: `Categoría de ${pet.name}`,
      actions: ['Pequeño', 'Mediano', 'Grande', 'Cancelar'],
    })

    if (selectedIndex !== 3 && selectedIndex !== undefined) {
      const categories = ['Pequeño', 'Mediano', 'Grande']
      pet.breed = `${pet.breed} (${categories[selectedIndex]})`
    }
  }
}
