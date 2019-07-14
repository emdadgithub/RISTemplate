import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-ris-template',
  templateUrl: './ris-template.component.html',
  styleUrls: ['./ris-template.component.css']
})
export class RisTemplateComponent implements OnInit {

  controlTypes: SelectItem[] = [];

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
  }

}
