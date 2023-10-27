import { Injectable, inject } from '@angular/core';
import { Auth, UserCredential, authState, signInWithEmailAndPassword } from '@angular/fire/auth';

export interface Credential{
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private auth: Auth = inject(Auth);
     readonly authState$ = authState(this.auth);

     LogInWith(credential: Credential) {
        return signInWithEmailAndPassword(this.auth, credential.email, credential.password);
      }

     logOut(): Promise <void>{
        return this.auth.signOut()
     }
}