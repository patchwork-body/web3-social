import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  @Input() title!: string;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.title += ' ' + this.firebase.app.name;
  }
}
