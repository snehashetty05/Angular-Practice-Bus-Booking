import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';  

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // apiUrl:string = 'https://projectapi.gerasim.in/api/BusBooking/';
  constructor(private http: HttpClient) { }


  getLocations() : Observable<Location[]>{
    return this.http.get<Location[]>('/api/BusBooking/GetBusLocations');
  }

  searchBus(fromLocation: number, ToLocation: number, travelDate: string) : Observable<any[]> {
    return this.http.get<any[]>(`/api/BusBooking/searchBus?fromLocation=${fromLocation}&toLocation=${ToLocation}&travelDate=${travelDate}`);
  }
}
