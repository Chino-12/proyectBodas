import { Injectable, inject, NgZone} from '@angular/core';
import { Auth, UserCredential, authState, signInWithEmailAndPassword, sendPasswordResetEmail, signOut} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface ErrorResponse {
    code: string;
    message: string;
  }

export interface Credential{
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

 userData: any;



     constructor( private auth: Auth,
        private http: HttpClient,
        private router: Router,
        private ngZone: NgZone){


    }

    login( credential: Credential): Promise<any> {
        return signInWithEmailAndPassword(this.auth, credential.email, credential.password);
      }
    
      register(credential: Credential): Promise<UserCredential> {
        return createUserWithEmailAndPassword(this.auth, credential.email, credential.password);
      }
    
    
      logout(): Promise<void> {
        return signOut(this.auth);
      }
    
      sendPasswordResetEmail(email: string): Promise<void> {
        return sendPasswordResetEmail(this.auth, email);
      }

}


     

   
    
   
    
    