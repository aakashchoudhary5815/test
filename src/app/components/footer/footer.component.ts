import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import {CollegeService} from '../../college.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(private http: HttpClient, private collegeservice: CollegeService, private router:Router, private ngZone:NgZone) { }


	submit(search:string) {
		this.collegeservice.subscribeToList(search)
      .subscribe(res => {
        alert('Subscribed!');
        this.ngZone.run(() => this.router.navigate(['']))
      }, err => {
        console.log(err);
      })
	}
  

  ngOnInit(): void {
  }

}
