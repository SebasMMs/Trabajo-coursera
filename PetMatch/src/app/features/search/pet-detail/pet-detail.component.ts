import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { Pet } from '~/app/models/pet.model'
import { PetService } from '~/app/services/pet.service'

@Component({
  selector: 'ns-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit {
  pet: Pet | null = null
  notes = ''

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private routerExtensions: RouterExtensions,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const petId = parseInt(params['id'], 10)
      const allPets = this.petService.getPets()
      this.pet = allPets.find((p) => p.id === petId) || null
    })
  }

  onSaveNotes(): void {
    // Notes saved (placeholder)
  }

  onToggleFavorite(): void {
    if (this.pet) {
      this.pet.favorite = !this.pet.favorite
    }
  }

  onGoBack(): void {
    this.routerExtensions.back()
  }
}
