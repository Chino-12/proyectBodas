import { Component, inject } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import  socialIcons  from './../../../assets/data/pages/social-items.json';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService, Credential } from 'src/app/shared/services/authentication.service';
import { catchError } from 'rxjs';

interface LoginForm{
  email: FormControl<string>;
  password: FormControl<string>
}

@Component({
    templateUrl: './login-1.component.html'
})


export class Login1Component {
  hide = true;
  FormBuilder = inject(FormBuilder);
   private authService = inject (AuthenticationService)
   private router = inject (Router)

  form: FormGroup<LoginForm> = this.FormBuilder.group({
    email: this.FormBuilder.control('',{
      validators:[Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.FormBuilder.control('',{
      validators:[Validators.required, Validators.email],
      nonNullable: true,
    }),
      
  });

validateForm: any;



  async logIn(): Promise<void> {
    if (this.form.invalid) return;
  
    const credential: Credential= {
      email: this.form.value.email ||'',
      password: this.form.value.password ||'',
    };
    try{
      await this.authService.LogInWith(credential)
      this.router.navigate(['/dashboard/demo-one'])
    }catch(error){
      console.log(error)
    }
  }
 
 

  passwordVisible = false;
  password?: string;




}
