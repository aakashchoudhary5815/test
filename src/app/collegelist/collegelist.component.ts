import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { college } from '../models/college';
import {CollegeService} from '../college.service';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup , FormBuilder } from "@angular/forms";
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})

export class CollegelistComponent implements OnInit {

  public loading=true;
  public college: college[];
  public college1 : college[];
  public error: string;
  public res: string;
  public filters;
  public usersForm: FormGroup;
  public filteredUsers: Observable<college[]>;
  public title = "title";
  public results: any[] = [];
  public userList1;
  public lastkeydown1: number = 0;

  constructor(private fb: FormBuilder , private collegeservice: CollegeService, private router: Router) { 
    this.collegeservice.getFilters().subscribe(
      data => {
        Object.assign(this.results, data);
      },
      error => {
        console.log("Something wrong here");
      });
  }



  ngOnInit(): void {


    this.usersForm = this.fb.group({
      userInput: null
    })

    this.filteredUsers = this.usersForm.get('userInput').valueChanges
    .pipe(
      debounceTime(300),
      switchMap(value =>
        this.collegeservice.getFilteredCollegeList(this.title ,value))
    );
      
    this.collegeservice.getFilters()
    .pipe(
      mergeMap(filters => {
        this.filters = filters;
        return this.collegeservice.getCollegeList();
      })
    )
    .subscribe((college: college[]) => {
      this.college = college;
      this.loading = false;

    },
    (error) => {
      this.error = error.message;
      this.loading = false;
    });
  }

  filterValues(type: string, value: string) {
    this.loading = true;
    this.collegeservice.getFilteredCollegeList(type, value)
    .subscribe((college: college[]) => {
      this.college = college;
      this.loading = false;

    },
    (error) => {
      this.error = error.message;
      this.loading = false;
    });
  }

  goToSearch(search:string){
    this.collegeservice.getFilteredCollegeList(this.title, search)
            .subscribe((college: college[]) => {
              this.college1 = college;
              this.loading = false;
            },
            (error) => {
              this.error = error.message;
              this.loading = false;
            }
            );
  }

  goToSearch1(search:string){
    this.router.navigate(['/title'], { queryParams: { search: search } });

}

getUserIdsFirstWay($event) {
  let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
  this.userList1 = [];

  if (userId.length > 2) {
    if ($event.timeStamp - this.lastkeydown1 > 200) {
      this.userList1 = this.searchFromArray(this.results, userId);
    }
  }
}  

searchFromArray(arr, regex) {
  regex = regex.toLowerCase();
  let matches = [], i;
  for (i = 0; i < arr.length; i++) {
    this.res = arr[i].toLowerCase();
    if (this.res.match(regex)) {
      matches.push(arr[i]);
    }
  }
  return matches;
};

 
}


