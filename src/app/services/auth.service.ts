import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  onAuthStateChanged,
  useDeviceLanguage,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  provider: GoogleAuthProvider;
  auth: Auth;
  user: User | null = null;
  accessToken?: string;

  constructor(private router: Router) {
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    useDeviceLanguage(this.auth);

    onAuthStateChanged(this.auth, user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  async signIn() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      this.accessToken = credentials?.accessToken;
      this.user = result.user;
      this.router.navigate(['feed']);
    } catch (error) {
      // TODO: add error handling
    }
  }

  async signOut() {
    await signOut(this.auth);
  }
}
