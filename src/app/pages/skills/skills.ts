import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

interface ProgrammingLanguage {
  name: string;
  level: number;
  color: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  activeTab = 0;

  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'palette-fill',
      skills: [
        { name: 'Angular', level: 95, icon: '🅰️' },
        { name: 'TypeScript', level: 92, icon: '📘' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS/SCSS', level: 90, icon: '🎨' },
        { name: 'Bootstrap', level: 88, icon: '🅱️' }
      ]
    },
    {
      title: 'UI/UX',
      icon: 'brush-fill',
      skills: [
        { name: 'Material UI', level: 90, icon: '💎' },
        { name: 'Responsive Design', level: 92, icon: '📱' },
        { name: 'UI Animation', level: 85, icon: '✨' },
        { name: 'Design Systems', level: 88, icon: '🎯' }
      ]
    },
    {
      title: 'Tools',
      icon: 'tools',
      skills: [
        { name: 'Git/GitHub', level: 88, icon: '🔧' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'Performance', level: 92, icon: '⚡' },
        { name: 'Postman', level: 85, icon: '📮' },     // Postbox
        { name: 'Chrome DevTools', level: 90, icon: '🔍' }
      ]
    }
  ];

  programmingLanguages: ProgrammingLanguage[] = [
    { name: 'TypeScript', level: 92, color: '#0ea5e9' },
    { name: 'JavaScript', level: 90, color: '#38bdf8' },
    { name: 'SQL', level: 80, color: '#7dd3fc' },
    { name: 'HTML/CSS', level: 95, color: '#0ea5e9' }
  ];

  achievements: Achievement[] = [
    {
      icon: 'speedometer2',
      title: '40% Performance Improvement',
      description: 'Optimized load times through lazy loading and code splitting'
    },
    {
      icon: 'bug-fill',
      title: '45% Bug Reduction',
      description: 'Enhanced code quality with rigorous testing practices'
    },
    {
      icon: 'heart-fill',
      title: '30% Engagement Boost',
      description: 'Improved user experience with dynamic UI animations'
    },
    {
      icon: 'award-fill',
      title: 'Enterprise Solutions',
      description: 'Delivered scalable applications for multiple companies'
    }
  ];

  selectTab(index: number): void {
    this.activeTab = index;
  }
}