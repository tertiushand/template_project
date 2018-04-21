export class FieldBase<T>{
    value: T;
    key: string;
    label: string;
    placeholder: string;
    required: boolean;
    pattern: string;
    email: boolean;
    minLength: number;
    maxLength: number;
    
    min: number;
    max: number;
    requiredTrue: boolean;
    
    order: number;
    controlType: string;
  
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        placeholder?: string,
        required?: boolean,
        pattern?: string,
        email?: boolean,
        minLength?: number,
        maxLength?: number,
        
        min?: number,
        max?: number,
        requiredTrue?: boolean,

        order?: number,
        controlType?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.placeholder = options.placeholder || '';
      this.required = !!options.required;
      this.pattern = options.pattern || '';
      this.email = !!options.email;
      this.minLength = options.minLength || null;
      this.maxLength = options.maxLength || null;
      
      this.min = options.min || null;
      this.max = options.max || null;
      this.requiredTrue = !!options.requiredTrue;
      
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
    }
  }