import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experiences {
  company: string;
  position: string;
  duration: string;
  location?: string;
  type: 'work' | 'training';
  description: string[];
  technologies: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

  experiences: Experiences[] = [
    {
      company: 'SANGLOB BUSINESS SERVICES PRIVATE LIMITED',
      position: 'Frontend Developer',
      duration: 'July 2024 - Present',
      location: 'Pune',
      type: 'work',
      current: true,
      description: [
        'Built MACK (Managing Content & Knowledge) enterprise platform using Angular & TypeScript',
        'Designed Material UI-based components to improve workflow efficiency and user experience',
        'Worked with cross-functional teams to deliver scalable enterprise solutions',
        'Architected reusable component library for consistent UI patterns'
      ],
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Enterprise Solutions', 'REST APIs']
    },
    {
      company: 'CrocoCode Pvt Ltd',
      position: 'Frontend Developer',
      duration: 'October 2023 - April 2025',
      type: 'work',
      description: [
        'Engineered responsive Angular applications achieving flawless cross-device performance',
        'Designed dynamic UI animations, boosting user engagement by 30%',
        'Improved performance by 40% using lazy loading and code optimization techniques',
        'Integrated REST APIs and collaborated with backend teams for seamless data flow',
        'Reduced UI bugs by 45% through rigorous testing and code quality improvements'
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'CSS/SCSS', 'Performance Optimization', 'REST APIs']
    }
  ];

  stats = [
    {
      icon: 'calendar-check',
      value: '2+',
      label: 'Years Experience',
      color: '#0ea5e9'
    },
    {
      icon: 'building',
      value: '2',
      label: 'Companies',
      color: '#10b981'
    },
    {
      icon: 'speedometer2',
      value: '40%',
      label: 'Performance Boost',
      color: '#fbbf24'
    },
    {
      icon: 'bug-fill',
      value: '45%',
      label: 'Bug Reduction',
      color: '#ef4444'
    }
  ];
}