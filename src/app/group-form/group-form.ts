import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  imports: [ReactiveFormsModule],
  templateUrl: './group-form.html',
  styleUrl: './group-form.less',
})
export class GroupForm {
  private formBuilder = inject(FormBuilder)
  // protected formGroup = new FormGroup({
  //   firstName: new FormControl('Brule', [

  //   ]),
  //   lastName: new FormControl('Li'),
  //   age: new FormControl(18),
  //   gender: new FormControl('boy')
  // })

  protected formGroup = this.formBuilder.group({
    firstName: ['Bruce', Validators.required],
    lastName: ['Li', Validators.required],
    age: [18],
    gender: ['boy'],
    items: this.formBuilder.array([this.formBuilder.control('movies')])
  })

  singleControl = new FormControl('single')

  submitForm() {
    console.log(this.formGroup.value)
  }

  resetForm() {
    this.formGroup.patchValue({
      firstName: '',
      lastName: '',
      age: 0,
      gender: 'girl'
    })
  }
}
