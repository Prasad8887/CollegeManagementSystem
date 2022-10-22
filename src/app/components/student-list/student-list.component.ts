import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
students:Student[];
hasSearchName: any;
hasStaffId:boolean;
searchName: string;
  constructor(private studentService:StudentServiceService,public activateRoute:ActivatedRoute ,private route:Router) 
  { 

  }

  ngOnInit(): void
  {
    this.activateRoute.paramMap.subscribe(()=>this.getAllStudents())
  }
  // method for get students
  getAllStudents():void
  {
   
    this.hasSearchName  = this.activateRoute.snapshot.paramMap.get("name");
    this.hasStaffId= this.activateRoute.snapshot.paramMap.has("staff_id");
     if(this.hasStaffId){
      const staff_id = +this.activateRoute.snapshot.paramMap.get("staff_id");
      this.studentService.getAllStudentByStaffId(staff_id).subscribe(data=>{
        console.log(data);
        this.students= data
      })
    }
    else if(this.hasSearchName)
    {
      console.log(this.hasSearchName)
      this.searchName  = this.activateRoute.snapshot.paramMap.get("name");
      console.log(this.searchName)
      console.log("hai")
    this.studentService.getAllStudentsSearchByName(this.searchName).subscribe(data=>{
      console.log(data);
      this.students= data;
      console.log("hai")
    });
  }
else{
    this.studentService.getAllStudents().subscribe(data=>{
      console.log(data);
      this.students=data;
    });
  }
}
// method for add student
addStudents():void{
  this.route.navigateByUrl("/studentForm")
}

  //method for update student
  updateStudent(id:number)
  {
    this.route.navigateByUrl("/updateStudent/"+id);
  }
  //method for delete student
  deleteStudent(id : number){
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.studentService.deleteStudent(id).subscribe(data=>{
        console.log(data);
        this.getAllStudents();
      })
    };

}
}
