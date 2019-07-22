import { Component, OnInit, Output, EventEmitter, Input, DoCheck, AfterContentChecked, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from './Store';

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
  formState$ = this.store.select<FormGroup>('formState');
  prevControlsState$ = this.store.select<FormGroup>('prevAddedControls');

  constructor(private store: Store) { }

  ngOnInit() {

    this.fields.push({
      type: 'dropdown',
      name: 'Film',
      label: 'Film',
      required: true,
      options: [
        { key: 'Option 1', label: 'Option 1' },
        { key: 'Option 2', label: 'Option 2' },
        { key: 'Option 3', label: 'Option 3' },
      ]
    });

    this.loadFormControls();

    // this.form.controls['Film'].valueChanges.subscribe(data=>{

    // });
    // this.onFROMChange();
    // 

    // this.formState$.subscribe(data => {
    //   let control = Object.keys(data.controls)
    //   console.log(control);
    // })
    // //    this.formState$.forEach(element => {console.log(element)});
  }

  handleChange(event: boolean) {
    //alert('From Txt');
    if (event) {
      //store form state
      this.store.set('prevAddedControls', this.form);
      let text = this.form.controls['Film'].value;
      this.form.controls['Film'].setValue(text);
      this.onChangeValue(text);
      this.onSubmitForm();
      //set stored value to the form
      this.setDynamicFormValues();
    }
  }

  setDynamicFormValues() {
    let l = '';
    this.prevControlsState$.subscribe((data: FormGroup) => {
      if (data) {
        Object.keys(data.controls).forEach(key => {
          if (this.form.controls[key]) {
            this.form.controls[key].setValue(data.controls[key].value);
          }
        });
      }
    })
  }

  onChangeValue(value: string) {
    //form previous value save  to state
    this.store.set('formState', this.form);
    //checking for options to add filds
    if (value === 'Option 1') {

      if (!this.fields.find(x => x.name === 'Text 1')) {
        this.fields.push({
          type: 'text',
          name: 'Text 1',
          label: 'Text 1',
          value: '',
          required: true,
        });
      }
      this.removeControlsFromArray('Text 2');
      this.removeControlsFromArray('Text 3');
      this.loadFormControls();
    } else if (value === 'Option 2') {

      if (!this.fields.some(x => x.name === 'Text 1')) {
        this.fields.push({
          type: 'text',
          name: 'Text 1',
          label: 'Text 1',
          value: '',
          required: true,
        });

      }

      if (!this.fields.some(x => x.name === 'Text 2')) {
        this.fields.push({
          type: 'text',
          name: 'Text 2',
          label: 'Text 2',
          value: '',
          required: true,
        });
      }
      this.removeControlsFromArray('Text 3');
      this.loadFormControls();
    } else if (value === 'Option 3') {
      if (!this.fields.find(x => x.name === 'Text 1')) {
        this.fields.push({
          type: 'text',
          name: 'Text 1',
          label: 'Text 1',
          value: '',
          required: true,
        });

      }

      if (!this.fields.find(x => x.name === 'Text 2')) {
        this.fields.push({
          type: 'text',
          name: 'Text 2',
          label: 'Text 2',
          value: '',
          required: true,
        });
      }

      if (!this.fields.find(x => x.name === 'Text 3')) {
        this.fields.push({
          type: 'text',
          name: 'Text 3',
          label: 'Text 3',
          value: '',
          required: true,
        });
      }
    }
    this.loadFormControls();
  }

  removeControlsFromArray(controlName: string) {
    let rowData = this.fields.find(x => x.name === controlName)
    if (rowData) {
      let index = this.fields.indexOf(rowData);
      this.fields.splice(index, 1)
    }
  }





  onSubmitForm() {

    let formValues = '';
    Object.keys(this.form.controls).forEach(key => {

      formValues += '<strong> ' + key + ' </strong>' + '  : ' + this.form.controls[key].value + '<br/>';
      // console.log(key);
      // console.log(this.form.controls[key].value);
    });
    this.textForReport = formValues;
    this.loadFormControls();
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

  loadFormControls() {
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

}
