import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNav = 'recipes';
  navSelection(location: string) {
   this.selectedNav = location;
  }
}
