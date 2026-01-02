import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  info = {
    name: 'Jigyasa Gohil',
    location: 'Udaipur, Rajasthan',
    email: 'jigyasagohil101@gmail.com',
    phone: '+91 8302760220',
    education: 'Bachelor of Technology (B.Tech)',
    university: 'Aravali Institute of Technical Studies',
    yearRange: 'August 2020 – July 2023'
  };

  highlights = [
    {
      icon: 'clock-history',
      title: '2+ Years',
      description: 'Professional Experience'
    },
    {
      icon: 'palette',
      title: 'UI/UX Expert',
      description: 'Elegant & Responsive Design'
    },
    {
      icon: 'graph-up',
      title: 'Performance',
      description: '40% faster load times'
    },
    {
      icon: 'bug',
      title: 'Quality',
      description: '45% reduction in bugs'
    }
  ];

  interests = [
    { icon: 'code-slash', name: 'Coding' },
    { icon: 'palette', name: 'UI/UX Design' },
    { icon: 'lightbulb', name: 'Innovation' },
    { icon: 'people', name: 'Collaboration' }
  ];
}