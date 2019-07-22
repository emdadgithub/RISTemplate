import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {


  @Input() field:any = {};
  @Input() form:FormGroup;
  @Output() formControlChanged=new EventEmitter<boolean>(); 
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  
  constructor() { }

  ngOnInit() {
  }
  

}
