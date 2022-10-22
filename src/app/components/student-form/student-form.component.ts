import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit 
{
  students:Student=new Student(0,"harry","It","Saswad",new Date(),0,0,0);
  isEditable:boolean;
  constructor(private StudentService:StudentServiceService,public router:Router,public activateRoute :ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.activateRoute.paramMap.subscribe(()=>this.students);
    this.activateRoute.paramMap.subscribe(()=>this.getStudentById());
  }
  //submit button method
  onSubmit()
  {
    console.log(this.students);
    if(this.isEditable)
    {
      this.StudentService.updateStudent(this.students).subscribe(data=>
        this.router.navigateByUrl("/students"));
    }
    else
    {
    this.StudentService.saveStudent( this.students ).subscribe(data =>
      console.log(data));
      this.router.navigateByUrl("/students");
    }
  }
  //method for get id
  getStudentById()
  {
    const studentID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(studentID)
  if(studentID> 0)
  {
    this.isEditable = true;
    this.StudentService.getStudentById(studentID).subscribe(data=>{
      this.students = data;
      console.log(this.students)
    });
  }
}
}
  

  
  

