import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;
  textForReport: string;
  constructor() { }

  ngOnInit() {
    debugger;
    let fieldsCtrls = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }

  onSubmitForm() {

    let formValues='';
    Object.keys(this.form.controls).forEach(key => {
      
      formValues+='<strong> '+key+' </strong>' +'  : '+this.form.controls[key].value+'<br/>';
      // console.log(key);
      // console.log(this.form.controls[key].value);
    });
   this.textForReport=formValues;
    // console.log('form controls');
    // console.log(this.form.controls)
    // console.log(this.form);
    //     const userStr = JSON.stringify(this.form.value);
    //  let a= JSON.parse(userStr, (key, value) => {
    //   if (typeof value === 'string') {
    //     return value.toUpperCase();
    //   }
    //   return value;
    // });
    //    this.textForReport=a.key;
  }
}
