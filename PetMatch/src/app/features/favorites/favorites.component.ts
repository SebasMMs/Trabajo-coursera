import { Component, OnInit } from '@angular/core'
import { Pet } from '~/app/models/pet.model'
import { PetService } from '~/app/services/pet.service'
import { StorageService } from '~/app/services/storage.service'
import { Store } from '@ngrx/store'
import { addReadLater } from '~/app/store/read-later.actions'

@Component({
  selector: 'ns-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoritePets: Pet[] = []
  favoriteIds: Set<number> = new Set()

  constructor(
    private petService: PetService,
    private storageService: StorageService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.loadFavorites()
  }

  private loadFavorites(): void {
    const saved = this.storageService.getItem('favorites')
    if (saved && Array.isArray(saved)) {
      this.favoriteIds = new Set(saved)
      const allPets = this.petService.getPets()
      this.favoritePets = allPets.filter((pet) => this.favoriteIds.has(pet.id))
    }
  }

  onReadNow(pet: Pet): void {
    this.store.dispatch(addReadLater({ pet }))
  }

  removeFavorite(petId: number): void {
    this.favoriteIds.delete(petId)
    this.storageService.setItem('favorites', Array.from(this.favoriteIds))
    this.favoritePets = this.favoritePets.filter((p) => p.id !== petId)
  }
}
