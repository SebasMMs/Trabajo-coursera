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

  private petNames = ['Max', 'Bella', 'Rocky', 'Charlie', 'Daisy', 'Buddy', 'Lucy', 'Leo']
  private petTypes = ['Dog', 'Cat', 'Rabbit', 'Bird', 'Hamster']
  private petBreeds = ['Labrador', 'Golden', 'Siamés', 'Mini Lop', 'Persa', 'Beagle', 'Bulldog', 'Caniche']

  getPets(): Pet[] {
    return this.pets
  }

  getFavorites(): Pet[] {
    return this.pets.filter((pet) => pet.favorite)
  }

  getRandomPets(count: number): Pet[] {
    const newPets: Pet[] = []
    for (let i = 0; i < count; i++) {
      const id = Math.max(...this.pets.map((p) => p.id)) + 1
      const randomName = this.petNames[Math.floor(Math.random() * this.petNames.length)]
      const randomType = this.petTypes[Math.floor(Math.random() * this.petTypes.length)]
      const randomBreed = this.petBreeds[Math.floor(Math.random() * this.petBreeds.length)]

      newPets.push({
        id,
        name: `${randomName}`,
        type: randomType,
        age: `${Math.floor(Math.random() * 10) + 1} años`,
        breed: randomBreed,
        image:
          'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
        favorite: false,
      })

      this.pets.push(newPets[i])
    }

    return newPets
  }
}
