import { Injectable } from '@angular/core'
import { Pet } from '~/app/models/pet.model'

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private pets: Pet[] = [
    {
      id: 1,
      name: 'Milo',
      type: 'Dog',
      age: '2 años',
      breed: 'Labrador',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
      favorite: true,
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Cat',
      age: '1 año',
      breed: 'Siamés',
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
      favorite: false,
    },
    {
      id: 3,
      name: 'Coco',
      type: 'Rabbit',
      age: '3 años',
      breed: 'Mini Lop',
      image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=600',
      favorite: true,
    },
  ]

  getPets(): Pet[] {
    return this.pets
  }

  getFavorites(): Pet[] {
    return this.pets.filter((pet) => pet.favorite)
  }
}
