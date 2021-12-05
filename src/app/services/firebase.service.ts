import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: FirebaseApp | null = null;
  analytics: Analytics | null = null;

  constructor() {}

  init() {
    this.app = initializeApp(environment.firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }
}
