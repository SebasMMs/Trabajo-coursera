import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { FavoritesRoutingModule } from './favorites-routing.module'
import { FavoritesComponent } from './favorites.component'
import { SharedModule } from '~/app/shared/shared.module'

@NgModule({
  imports: [NativeScriptCommonModule, FavoritesRoutingModule, SharedModule],
  declarations: [FavoritesComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FavoritesModule {}
