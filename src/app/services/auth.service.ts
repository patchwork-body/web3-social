import { Injectable } from '@angular/core';
import { Auth, getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  provider: GoogleAuthProvider;
  auth: Auth;
  accessToken?: string;

  constructor(private firebase: FirebaseService) {
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.auth.useDeviceLanguage();
  }

  async signIn() {
    const result = await signInWithPopup(this.auth, this.provider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    this.accessToken = credentials?.accessToken;
  }

  async signOut() {
    await signOut(this.auth);
  }
}
