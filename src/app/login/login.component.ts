import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup;
  submitted = false;

  

  constructor(
    private fb: FormBuilder,) { }

    
  ngOnInit() {
    this.loginform = this.fb.group({
      username: [null,Validators.required],
      password: [null,Validators.required]
    });

  }
  get f() { return this.loginform.controls; }
  onSubmit() {
   

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginform.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginform.value))
}
  }

