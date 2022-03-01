import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudent-admission';

  constructor(private router: Router) { }

  gotoDetails(){
    this.router.navigate(["preview-student-details"]);
  }
}
