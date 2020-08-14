import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RequestComponent } from './components/request/request.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { CollegedetailComponent } from './collegedetail/collegedetail.component';
import { CollegeService } from './college.service';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PricingComponent,
    RequestComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavigationComponent,
    CollegelistComponent,
    CollegedetailComponent,
    CoursedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
