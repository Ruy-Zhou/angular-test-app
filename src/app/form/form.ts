import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.less',
})
export class Form {
  protected formGroup = new FormGroup({
    fullName: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    }),
    age: new FormControl(),
    gender: new FormControl()
  })

  protected message = signal('')


  onSubmit() {
    this.message.set(JSON.stringify(this.formGroup.value))
  }

}
