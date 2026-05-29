import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { SearchComponent } from './search.component'
import { PetDetailComponent } from './pet-detail/pet-detail.component'

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'detail/:id', component: PetDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SearchRoutingModule {}
