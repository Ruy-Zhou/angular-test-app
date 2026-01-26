import { Component, signal } from '@angular/core';
import { applyEach, form, FormField, min, required, SchemaPathTree } from '@angular/forms/signals';

type Item = { name: string, year: number }

function itemShema(item: SchemaPathTree<Item>) {
  required(item.name, { message: 'Name is required.' })
  min(item.year, 2000)
}

@Component({
  selector: 'app-form',
  imports: [FormField],
  templateUrl: './form.html',
  styleUrl: './form.less',
})
export class Form {
  protected actorModel = signal({
    fullName: {
      firstName: 'Lucy',
      lastName: 'Cu',
    },
    age: 16,
    gender: 'girl',
    items: [{ name: 'Hello', year: 2005 }]
  });

  protected actorForm = form(this.actorModel, (schema) => {
    required(schema.fullName.firstName, { message: 'First Name is required.' })
    required(schema.fullName.lastName, { message: 'Last Name is required.' })
    min(schema.age, 20, { message: 'Age must be greater than 20.' })

    applyEach(schema.items, itemShema)
  })

  protected message = signal('');
  protected submitted = signal(false);

  onSubmit(e: Event) {
    e.preventDefault()
    this.message.set(JSON.stringify(this.actorModel()));
  }
}
