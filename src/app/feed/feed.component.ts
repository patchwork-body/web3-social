import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent {
  constructor(public auth: AuthService) {}
}
