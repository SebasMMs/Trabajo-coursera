import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pet } from '~/app/models/pet.model'
import { ConfigService } from './config.service'

interface ApiResponse {
  success: boolean
  total?: number
  data: Pet[]
  message?: string
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {}

  searchPets(search: string = '', type: string = ''): Observable<ApiResponse> {
    let params = ''
    if (search) params += `search=${encodeURIComponent(search)}&`
    if (type) params += `type=${encodeURIComponent(type)}`

    const url = this.configService.getApiUrl(`/api/pets?${params}`)
    return this.http.get<ApiResponse>(url)
  }

  getPetDetail(id: number): Observable<ApiResponse> {
    const url = this.configService.getApiUrl(`/api/pets/${id}`)
    return this.http.get<ApiResponse>(url)
  }

  checkHealth(): Observable<any> {
    const url = this.configService.getApiUrl('/api/health')
    return this.http.get<any>(url)
  }
}
