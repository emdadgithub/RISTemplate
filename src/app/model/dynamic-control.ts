import { ControlOption } from "./control-option";

export class DynamicControl {
    id:number
    type: string
    name: string
    label: string
    value: string
    required: boolean
    options:ControlOption[]
}
