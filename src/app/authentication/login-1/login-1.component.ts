import { NavigationEnd, RouterLink } from '@angular/router';

import { Auth, authState } from '@angular/fire/auth';
import { Component, inject, Input, OnDestroy, OnInit} from '@angular/core'
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import  socialIcons  from './../../../assets/data/pages/social-items.json';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { AuthenticationService, Credential } from 'src/app/shared/services/authentication.service';
import { catchError, Observable, Subject } from 'rxjs';






interface LogInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}



@Component({
    templateUrl: './login-1.component.html',
})


export class Login1Component implements OnInit, OnDestroy {
  isLoading = false;
  error = false;
  passwordVisible = false;
  password?: string;

  formBuilder = inject(FormBuilder);
  private authService = inject(AuthenticationService);
  
  loginForm!: UntypedFormGroup;

  errorsForm = {
    email: {
      required: 'auth.login.errors.email.required',
      email: 'auth.login.errors.email.invalid',
    },
    password: {
      required: 'auth.login.errors.password.required',
      minlength: 'auth.login.errors.password.minlength',
    },
  };
 

private destroy$: Subject<boolean> = new Subject<boolean>();

constructor() {}
  

ngOnInit(): void {
  this.initializeForm();
}

ngOnDestroy(): void {
  this.destroy$.next(true);
  this.destroy$.unsubscribe();
}

//
private initializeForm(): void {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [true],
  });
}




async logIn(): Promise<void> {
  if (this.loginForm.invalid) return;

  const credential: Credential = {
    email: this.loginForm.value.email || '',
    password: this.loginForm.value.password || '',
  };

  try {
    await this.authService.login(credential);
    

  } catch (error) {
    console.error(error);
  }
}

}

