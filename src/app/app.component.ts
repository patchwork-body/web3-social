import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.firebase.init();
  }
}
