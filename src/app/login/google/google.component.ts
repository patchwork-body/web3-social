import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
})
export class GoogleComponent {
  constructor(public auth: AuthService) {}
}
