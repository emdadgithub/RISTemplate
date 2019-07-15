import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { DynamicControl } from '../model/dynamic-control';
import { ControlOption } from '../model/control-option';

@Component({
  selector: 'app-ris-template',
  templateUrl: './ris-template.component.html',
  styleUrls: ['./ris-template.component.css']
})
export class RisTemplateComponent implements OnInit {

  controlTypes: SelectItem[] = [];
  controlType:SelectItem;
  control: string;
  controlName:string;
  optionName:string;
  displayControlInformation:boolean = false;

  option:ControlOption;
  options:ControlOption[] = [];

  controlList:DynamicControl[] = [];
  dynamicControl = {} as DynamicControl;
  cols:any;
  constructor() { }

  ngOnInit() {
    this.controlTypes = [];
    // this.genders.push({ label: "Select Gender", value: "" });
    this.controlTypes.push({ label: "Text", value: "T" });
    this.controlTypes.push({ label: "Text Area", value: "A" });
    this.controlTypes.push({ label: "Check Box", value: "C" });
    this.controlTypes.push({ label: "Radio Button", value: "R" });
    this.controlTypes.push({ label: "Drop Down List", value: "D" });
    this.controlTypes.push({ label: "Editor", value: "E" });

    this.cols = [
      { field: 'type', header: 'Control Type' },
      { field: 'label', header: 'Control Name' },
      { field: 'required', header: 'Is Required' },
  ];
  }

  selectControl() {
    this.control = this.controlType.value;
  }

  addControlValues() {
    let dynamicControl = new DynamicControl();
    dynamicControl.label = this.controlName;
    dynamicControl.type = this.controlType.label;
    dynamicControl.required = true;
    
    this.dynamicControl.options = this.options;
    this.controlList.push(dynamicControl);
    console.log(this.dynamicControl);
  }

  editDynamicControl(rowData:DynamicControl) {
    this.controlName = rowData.label;
    this.displayControlInformation = true;
  }

  showAddControl() {
    this.displayControlInformation = true;
  }

  closeControlInformation() {
    this.displayControlInformation = false;
  }

  addOptions() {
    let option = new ControlOption();
    option.label = this.optionName;
    option.key = this.optionName.split(' ')[0].toString().toLowerCase() + Math.floor(Math.random() * 10) + 1;
    this.options.push(option);
  }

  deleteDynamicControl(rowData:DynamicControl) {
    let index = this.controlList.indexOf(rowData);
    this.controlList.splice(index,1);
  }

  deleteOption(option:ControlOption) {
    let index = this.options.indexOf(option);
    this.options.splice(index,1);
    this.dynamicControl.options = this.options;
    console.log(this.dynamicControl);
  }
}
