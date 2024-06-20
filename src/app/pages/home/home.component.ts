import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;
  stateName: string = '';

  constructor(private router: Router) {}

  cityName: string[] = ['Patna', 'Bhagalpur', 'Ranchi', 'Gaya', 'Arwal'];

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  handleNavigate() {
    this.router.navigateByUrl('/about');
  }
}
