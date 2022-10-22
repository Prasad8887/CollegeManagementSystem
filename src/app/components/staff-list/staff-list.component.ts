import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Staff } from 'src/app/common/staff';
import { StudentServiceService } from 'src/app/student-service.service';


@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staffs:Staff[];
  constructor(public studentService:StudentServiceService)
  {

  }
  ngOnInit(): void {
   this.getAllStaffs();
  }
  
  getAllStaffs():void{
    this.studentService.getAllStaff().subscribe(data=>{
      console.log(data);
      this.staffs = data;
    });
}
}
