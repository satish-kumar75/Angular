import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  isDisabled: boolean = false;
  isActive: boolean = false;
  fruitName: string = 'apple';
  stateName = signal('Bihar');

  toggleActive() {
    this.isActive = !this.isActive;
    console.log('isActive:', this.isActive);
  }
  handleButtonClick() {
    // console.log('Button Clicked');
    this.stateName.set('Rajasthan');
  }
  handleKeyUp(event: any) {
    console.log(event.key);
  }
  handleKeyPress() {
    console.log('Key Pressed');
  }
}
