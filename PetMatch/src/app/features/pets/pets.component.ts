import { Component, OnInit } from '@angular/core'
import { Pet } from '~/app/models/pet.model'
import { PetService } from '~/app/services/pet.service'

@Component({
  selector: 'ns-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = []

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.pets = this.petService.getPets()
  }
}
