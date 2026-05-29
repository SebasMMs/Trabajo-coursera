import { Component, OnInit } from '@angular/core'
import { isAndroid } from '@nativescript/core'

@Component({
  selector: 'ns-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  platformMessage = 'PetMatch funciona en todas las plataformas.'

  ngOnInit(): void {
    if (isAndroid) {
      this.platformMessage = 'PetMatch en Android muestra un estilo nativo especial.'
    }
  }
}
