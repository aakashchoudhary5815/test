import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { CollegedetailComponent } from './collegedetail/collegedetail.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'search', component : CollegelistComponent},
  {path : 'title', component : CollegedetailComponent},
  {path : 'courses', component : CoursedetailsComponent},
  {path : '', redirectTo : '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
