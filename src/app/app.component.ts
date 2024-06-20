import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';
  // isDisabled: boolean = false;
  // isActive: boolean = false;
  // fruitName: string = 'apple';
  // stateName = signal('Bihar');

  // toggleActive() {
  //   this.isActive = !this.isActive;
  //   console.log('isActive:', this.isActive);
  // }
  // handleButtonClick() {
  //   // console.log('Button Clicked');
  //   this.stateName.set('Rajasthan');
  // }
  // handleKeyUp(event: any) {
  //   console.log(event.key);
  // }
  // handleKeyPress() {
  //   console.log('Key Pressed');
  // }

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;
  stateName: string = '';

  cityName: string[] = ['Patna', 'Bhagalpur', 'Ranchi', 'Gaya', 'Arwal'];

  students: any[] = [
    {
      Id: 1,
      Name: 'Amit Kumar',
      rollno: '2021001',
      address: 'Delhi, India',
      status: false,
    },
    {
      Id: 2,
      Name: 'Priya Sharma',
      rollno: '2021002',
      address: 'Mumbai, India',
      status: true,
    },
    {
      Id: 3,
      Name: 'Rahul Singh',
      rollno: '2021003',
      address: 'Bangalore, India',
      status: false,
    },
    {
      Id: 4,
      Name: 'Anjali Gupta',
      rollno: '2021004',
      address: 'Kolkata, India',
      status: false,
    },
    {
      Id: 5,
      Name: 'Vikram Patel',
      rollno: '2021005',
      address: 'Chennai, India',
      status: false,
    },
    {
      Id: 6,
      Name: 'Neha Verma',
      rollno: '2021006',
      address: 'Hyderabad, India',
      status: true,
    },
    {
      Id: 7,
      Name: 'Rajesh Kumar',
      rollno: '2021007',
      address: 'Pune, India',
      status: false,
    },
    {
      Id: 8,
      Name: 'Sneha Singhania',
      rollno: '2021008',
      address: 'Jaipur, India',
      status: false,
    },
    {
      Id: 9,
      Name: 'Arjun Mishra',
      rollno: '2021009',
      address: 'Ahmedabad, India',
      status: false,
    },
    {
      Id: 10,
      Name: 'Kavita Reddy',
      rollno: '2021010',
      address: 'Lucknow, India',
      status: true,
    },
  ];

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
