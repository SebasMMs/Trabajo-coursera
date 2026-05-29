import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Pet } from '~/app/models/pet.model'
import { selectReadLaterItems } from '~/app/store/read-later.selectors'
import { StorageService } from '~/app/services/storage.service'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  readLaterItems$: Observable<Pet[]>
  username = 'Usuario'

  constructor(
    private store: Store,
    private storageService: StorageService,
  ) {
    this.readLaterItems$ = this.store.select(selectReadLaterItems)
  }

  ngOnInit(): void {
    this.username = this.storageService.getItem('username') || 'Usuario'
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
