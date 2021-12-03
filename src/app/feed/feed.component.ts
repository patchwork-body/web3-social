import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent {
  @Input() title!: string;

  constructor() {}
}
