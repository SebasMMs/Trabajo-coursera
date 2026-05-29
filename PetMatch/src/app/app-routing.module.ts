import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pets',
    loadChildren: () => import('~/app/features/pets/pets.module').then((m) => m.PetsModule),
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/features/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('~/app/features/favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'about',
    loadChildren: () => import('~/app/features/about/about.module').then((m) => m.AboutModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
