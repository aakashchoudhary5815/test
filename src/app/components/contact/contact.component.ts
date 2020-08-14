import { Router } from '@angular/router';
import { CollegeService } from './../../college.service'
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contactform: FormGroup;

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private collegeservice: CollegeService) { this.mainForm(); }

  ngOnInit(): void { }

  mainForm() {
    this.contactform = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      message: ['', [Validators.required]],
    })
  }

  get myForm(){
    return this.contactform.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.contactform.valid) {
      return false;
    } else {
      this.collegeservice.createcontactdb(this.contactform.value).subscribe(
        (res) => {
          console.log('Contact Details successfully saved!')
          this.ngZone.run(() => this.router.navigate(['/home']))
        }, (error) => {
          console.log(error);
        });
    }
  }
}

