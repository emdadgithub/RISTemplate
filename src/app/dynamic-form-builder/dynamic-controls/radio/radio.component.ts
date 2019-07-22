import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {


  @Input() field:any = {};
  @Input() form:FormGroup;
  @Output() formControlChanged=new EventEmitter<boolean>();  
  
  constructor() { }

  ngOnInit() {
  }

  handleChange(event:any,value:any){
    let name=this.field.name;
    this.form.patchValue({
       name: value, 
    });
    this.formControlChanged.emit(true);
  }
}
