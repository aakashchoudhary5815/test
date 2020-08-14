import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { college } from '../models/college';
import { ActivatedRoute } from '@angular/router';
import { CollegeService } from '../college.service';
import { debounceTime , distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  public college: college[];
  public college1 : college[];
  public error: string;
  public loading = true;
  public title = "title";

  constructor(private route: ActivatedRoute, private collegeservice: CollegeService, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.pipe(debounceTime(500), distinctUntilChanged()).subscribe(params =>{
      const id = params.search;
      this.collegeservice.getFilteredCollegeList(this.title, id)
        .subscribe((college: college[]) => {
          this.college1 = college;
          console.log(this.college1)
          this.loading = false;
        },
        (error) => {
          this.error = error.message;
          this.loading = false;
        }
        );  
    })
  }

}
