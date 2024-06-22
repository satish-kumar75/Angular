import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  students: any = {
    name: '',
    username: '',
    first_name: '',
    last_name: '',
    city: '',
    state: '',
    phone: '',
    company: '',
    isAcceptTerms: false,
  };

  formsData: any;

  onSubmitForm() {
    this.formsData = this.students;
    this.onResetForm();
  }
  onResetForm() {
    this.students = {
      name: '',
      username: '',
      first_name: '',
      last_name: '',
      city: '',
      state: '',
      phone: '',
      company: '',
      isAcceptTerms: false,
    };
  }
}
