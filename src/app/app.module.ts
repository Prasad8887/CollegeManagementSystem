import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route,RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
const routes:Routes=[ {path :'',component:WelcomeComponent},{path:'students',component:StudentListComponent},{path:'studentForm',component:StudentFormComponent},{path:'updateStudent/:id',component:StudentFormComponent},{path:'search/:name',component:StudentListComponent},{path : 'students/:staff_id',component: StudentListComponent },{path : 'staffs',component:StaffListComponent}]

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    WelcomeComponent,
    StudentFormComponent,
    SearchComponent,
    StaffListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
