import { Component, OnInit } from '@angular/core'
import { Pet } from '~/app/models/pet.model'
import { PetService } from '~/app/services/pet.service'

@Component({
  selector: 'ns-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoritePets: Pet[] = []

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.favoritePets = this.petService.getFavorites()
  }
}
