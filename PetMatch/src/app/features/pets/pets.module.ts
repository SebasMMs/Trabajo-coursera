import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { PetsRoutingModule } from './pets-routing.module'
import { PetsComponent } from './pets.component'
import { SharedModule } from '~/app/shared/shared.module'

@NgModule({
  imports: [NativeScriptCommonModule, PetsRoutingModule, SharedModule],
  declarations: [PetsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PetsModule {}
