import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() typeSelected = new EventEmitter<string>();

  onSelect(type: string) {
    this.typeSelected.emit(type);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
