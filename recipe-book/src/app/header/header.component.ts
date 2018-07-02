import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navSelectionChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  navigate(location: string) {
    this.navSelectionChanged.emit(location);
  }

}
