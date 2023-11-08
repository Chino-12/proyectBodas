import { Injectable } from '@angular/core';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { CustomUserFirebase } from 'src/app/models/user.models'; 

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  async getUser(uid: string): Promise<CustomUserFirebase> {
    const userDoc = doc(this.firestore, `users/${uid}`);
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      return docSnap.data() as CustomUserFirebase;
    } else {
      throw new Error('No such user!');
    }
  }

  createUser(uid: string, user: CustomUserFirebase): Promise<void> {
    console.log('createUser', uid, user);
    return setDoc(doc(this.firestore, `users/${uid}`), user);
  }
}