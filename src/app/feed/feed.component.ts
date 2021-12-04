import { Component } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent {
  constructor(private firebase: FirebaseService) {}
}
