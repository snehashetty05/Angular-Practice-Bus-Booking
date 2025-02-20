import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  scheduleId: number = 0;
  scheduleData: any;
  seatArray: number [] = [];
  bookedSeatsArray: number [] = [];
  userSelectedSeatArray : number [] = [];

  constructor(private activatedRoute: ActivatedRoute, private masterSvc: MasterService){
    this.activatedRoute.params.subscribe((res:any) =>{
      this.scheduleId = res.id;
      this.getScheduleDetailsById();
      this.getBookedSeats();
    })
  }

  getScheduleDetailsById(){
    this.masterSvc.getScheduleById(this.scheduleId).subscribe((res:any) => {
      this.scheduleData = res;
      for(let index = 1;index <= this.scheduleData.totalSeats;index++){
        this.seatArray.push(index);
      }
    })
  }

  getBookedSeats(){
    this.masterSvc.getBookedSeatsById(this.scheduleId).subscribe((res:any) =>{
      this.bookedSeatsArray = res;
    })
  }
  
  checkIfSeatBooked(seatNo: number){
    return this.bookedSeatsArray.indexOf(seatNo);
  }
  selectSeat(seatNo : number){
    this.userSelectedSeatArray.push(seatNo);
  }
  checkIfSeatSelected(seatNo : number) {
    return this.userSelectedSeatArray.indexOf(seatNo);
  }
}
