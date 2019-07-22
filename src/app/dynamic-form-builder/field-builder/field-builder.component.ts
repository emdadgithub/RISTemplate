import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.css']
})
export class FieldBuilderComponent implements OnInit {

  @Input() field:any;
  @Input() form:any;
  @Output() formControlChanged=new EventEmitter<boolean>();
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
  }

  handleChange(event:any){
    //console.log('from Field builder');
    this.formControlChanged.emit(true);
  }
}
