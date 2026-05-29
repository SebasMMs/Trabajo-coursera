import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'
import { PetDetailComponent } from './pet-detail/pet-detail.component'
import { SharedModule } from '~/app/shared/shared.module'

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule, SharedModule],
  declarations: [SearchComponent, PetDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
