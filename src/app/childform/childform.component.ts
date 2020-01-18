import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Information } from '../information';

@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.css']
})
export class ChildformComponent implements OnInit {

  @Input() information: Information;
  @Output() formchildEvent = new EventEmitter();

  public parent = false;
  public child = true;


  constructor() { }

  ngOnInit() {
  }

  edit(index: Number) {
    this.child = false;
    this.parent = true;
    this.formchildEvent.emit(index)
    console.log(index);
  }

}
  