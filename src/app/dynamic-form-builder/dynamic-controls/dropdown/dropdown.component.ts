import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;

  constructor() {

  }

  ngOnInit() {
    console.log(this.field);
  }


}
