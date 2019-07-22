import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;
  @Output() formControlChanged=new EventEmitter<boolean>(); 
  constructor() {

  }

  ngOnInit() {
    console.log(this.field);
  }

  handleChange(event:any){
    this.formControlChanged.emit(true);
  }
}
