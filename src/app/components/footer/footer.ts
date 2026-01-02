import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'github', url: 'https://github.com/jigyasa125', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/jigyasa-gohil', label: 'LinkedIn' },
    { icon: 'envelope', url: 'mailto:jigyasagohil101@gmail.com', label: 'Email' },
    { icon: 'telephone', url: 'tel:+918302760220', label: 'Phone' }
  ];
}