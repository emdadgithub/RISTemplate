import { ControlOption } from "./control-option";

export class DynamicControl {
    type: string
    name: string
    label: string
    value: string
    required: boolean
    options:ControlOption[]
}
