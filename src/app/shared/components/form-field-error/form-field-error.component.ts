import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template:
    `
    <p class="text-danger">
      {{errorMsg}}
    </p>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  public get errorMsg(): string | null {
    if (this.mustShowErrorMsg())
      return this.getErrorMsg();
    else
      return null;
  }

  private mustShowErrorMsg(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMsg(): string | null {
    if (this.formControl.errors.required)
      return "Dado obrigatório";

    else if (this.formControl.errors.email)
      return "Formato de e-mail inválido";

    else if (this.formControl.errors.minlength) {
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `Deve ter no mínimo ${requiredLength} Caracteres`;

    } else if (this.formControl.errors.maxlength) {
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `Deve ter no máximo ${requiredLength} Caracteres`;
    }
  }

}
