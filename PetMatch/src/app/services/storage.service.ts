import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly storageKey = 'petmatch_'

  setItem(key: string, value: any): void {
    try {
      const json = typeof value === 'string' ? value : JSON.stringify(value)
      localStorage.setItem(this.storageKey + key, json)
    } catch (e) {
      console.error('Storage Error:', e)
    }
  }

  getItem(key: string): any {
    try {
      const item = localStorage.getItem(this.storageKey + key)
      return item ? JSON.parse(item) : null
    } catch (e) {
      console.error('Storage Error:', e)
      return null
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(this.storageKey + key)
    } catch (e) {
      console.error('Storage Error:', e)
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(localStorage)
      keys.forEach((key) => {
        if (key.startsWith(this.storageKey)) {
          localStorage.removeItem(key)
        }
      })
    } catch (e) {
      console.error('Storage Error:', e)
    }
  }
}
