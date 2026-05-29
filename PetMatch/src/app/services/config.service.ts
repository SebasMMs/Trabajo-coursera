import { Injectable } from '@angular/core'
import { StorageService } from './storage.service'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private ngrokUrl = 'http://localhost:3000'
  private readonly configKey = 'ngrok_url'

  constructor(private storageService: StorageService) {
    this.loadConfig()
  }

  private loadConfig(): void {
    const stored = this.storageService.getItem(this.configKey)
    if (stored) {
      this.ngrokUrl = stored
    }
  }

  getNgrokUrl(): string {
    return this.ngrokUrl
  }

  setNgrokUrl(url: string): void {
    this.ngrokUrl = url
    this.storageService.setItem(this.configKey, url)
  }

  getApiUrl(endpoint: string): string {
    return `${this.ngrokUrl}${endpoint}`
  }
}
