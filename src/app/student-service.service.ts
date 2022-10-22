
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Staff } from './common/staff';
import { Student } from './common/student'
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService 
{
  
//Student link
private studentURL="http://localhost:8080/api/student";
private staffURL="http://localhost:8080/api/staff";
constructor(private httpClient:HttpClient) 
{

}
//method for get all students
getAllStudents():Observable<Student[]>
{
    return this.httpClient.get<getStudentResponse>(this.studentURL).pipe(map(response=>response._embedded.students))
}
//method for get all staffs
getAllStaff():Observable<Staff[]>
{
 return this.httpClient.get<getStaffResponse>(this.staffURL).pipe(map(response=>response._embedded.staffs))
}

//method for save the student data
saveStudent(students:Student):Observable<Student>
{
    const httpOptions=
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auto_token',
        'Access-control-Allow-Origin':'*'

      })
    };
    return this.httpClient.post<Student>(this.studentURL,students,httpOptions);
}
//method for the get student id
getStudentById(studentId:number):Observable<Student>
 {
        const studentIDURl=this.studentURL+"/"+studentId;
      return this.httpClient.get<Student>(studentIDURl);
  }

 
  //method for the update the student
   updateStudent(students:Student):Observable<Student>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.put<Student>(this.studentURL+`/${students.id}`,students,httpOptions);
  }
  //method for the delete the student data
  deleteStudent(id: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.delete<Student>(this.studentURL+`/${id}`,httpOptions);
  }
  getAllStudentsSearchByName(name : string) : Observable<Student[]> {
    const searchURL = "http://localhost:8080/api/student/search/findBynameIgnoreCase?name=" + name;

    return this.httpClient.get<GetSearchByName>(searchURL).pipe(map(response => response._embedded.students));
  } 
  //method for the staff 
  getAllStudentByStaffId(staff_id:number): Observable<Student[]>{
    const  staffIdURL = "http://localhost:8080/api/student/search/findByStaffId?id=" + staff_id ;
     
    return this.httpClient.get<getStudentResponse>(staffIdURL)
     .pipe(map(response=>response._embedded.students))
  
   }
}
//interface for the student data
interface getStudentResponse
{
  _embedded:
  {
    students:Student[]
  }
}
//interface for the student search

interface GetSearchByName
{
  _embedded : {
    students:Student[]
  }
}
//interface for the Staff data
interface getStaffResponse
{
  _embedded :
  {
    staffs:Staff[]
  }
}