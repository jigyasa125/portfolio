import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  roles = ['Frontend Developer', 'Angular Expert', 'UI/UX Designer'];
  currentRole = '';
  currentRoleIndex = 0;
  
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;
  private isDeleting = false;
  private charIndex = 0;
  private timeoutId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.typewriterEffect();
    });
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  typewriterEffect() {
    const currentText = this.roles[this.currentRoleIndex];
    
    if (!this.isDeleting && this.charIndex <= currentText.length) {
      this.ngZone.run(() => {
        this.currentRole = currentText.substring(0, this.charIndex);
      });
      this.charIndex++;
      
      if (this.charIndex > currentText.length) {
        this.timeoutId = setTimeout(() => {
          this.isDeleting = true;
          this.typewriterEffect();
        }, this.pauseTime);
        return;
      }
      
      this.timeoutId = setTimeout(() => this.typewriterEffect(), this.typingSpeed);
    }
    else if (this.isDeleting && this.charIndex >= 0) {
      this.ngZone.run(() => {
        this.currentRole = currentText.substring(0, this.charIndex);
      });
      this.charIndex--;
      
      if (this.charIndex < 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.charIndex = 0;
        
        this.timeoutId = setTimeout(() => this.typewriterEffect(), 500);
        return;
      }
      
      this.timeoutId = setTimeout(() => this.typewriterEffect(), this.deletingSpeed);
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Jigyasa-Gohil-Resume.pdf';
    link.click();
  }
}