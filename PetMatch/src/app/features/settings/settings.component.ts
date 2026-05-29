import { Component, OnInit } from '@angular/core'
import { StorageService } from '~/app/services/storage.service'
import { ConfigService } from '~/app/services/config.service'

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  username = ''
  ngrokUrl = ''
  editingUsername = false
  editingUrl = false

  constructor(
    private storageService: StorageService,
    private configService: ConfigService,
  ) {}

  ngOnInit(): void {
    this.loadSettings()
  }

  private loadSettings(): void {
    this.username = this.storageService.getItem('username') || 'Usuario'
    this.ngrokUrl = this.configService.getNgrokUrl()
  }

  onEditUsername(): void {
    this.editingUsername = true
  }

  onSaveUsername(): void {
    if (this.username.trim()) {
      this.storageService.setItem('username', this.username)
      this.editingUsername = false
    }
  }

  onEditUrl(): void {
    this.editingUrl = true
  }

  onSaveUrl(): void {
    if (this.ngrokUrl.trim()) {
      this.configService.setNgrokUrl(this.ngrokUrl)
      this.editingUrl = false
    }
  }

  onCancel(): void {
    this.loadSettings()
    this.editingUsername = false
    this.editingUrl = false
  }
}
