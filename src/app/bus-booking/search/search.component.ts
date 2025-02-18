import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs';
import { Location } from '../../models/location.model';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, FormsModule, DatePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  location$: Observable<Location[]> = new Observable<Location[]>();

  searchObj = {
    fromLocation: 0,
    toLocation: 0,
    travelDate: ''
  };
   ngOnInit(): void {
     this.getAllLocations();
   }
   masterSvc = inject(MasterService);

   busList: any[] = [];
   getAllLocations(){
    this.location$ = this.masterSvc.getLocations();
   }

   onSearch(){
    const { fromLocation, toLocation, travelDate } = this.searchObj;
    this.masterSvc.searchBus(fromLocation, toLocation, travelDate).subscribe(data => {
        this.busList = data;
   });
  }
}
