import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
  gradient: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'MACK (Managing Content & Knowledge)',
      description: 'Enterprise business management platform for streamlining workflows',
      features: [
        'Architected and implemented modules: Invoice, Quotation, Purchase Orders, Requisition',
        'Streamlined workflows reducing errors significantly',
        'Automated workflows reducing manual processing time',
        'Enterprise-level content management system with scalable architecture'
      ],
      technologies: ['Angular', 'TypeScript', 'Material UI', 'Enterprise Solutions', 'REST APIs'],
      icon: 'file-earmark-text',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      category: 'Enterprise',
      demoUrl: 'https://procdemo.solverminds.net/main',
      isPrivate: true
    },
    {
      title: 'VigorBooks',
      description: 'Financial management system for accounting and invoicing',
      features: [
        'Automated GST and tax calculations with real-time updates',
        'Comprehensive financial reporting with interactive dashboards',
        'Invoice and expense management with customizable templates',
        'Real-time transaction tracking and categorization',
        'PDF generation for invoices, receipts, and financial reports'
      ],
      technologies: ['Angular', 'TypeScript', 'OCR APIs', 'Financial APIs', 'Firebase'],
      icon: 'calculator',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      category: 'Finance',
      demoUrl: 'https://app.vigorbooks.com/',
      isPrivate: true
    },
    {
      title: 'CodeSpeedo',
      description: 'No-code/low-code platform for generating Ionic & Flutter apps',
      features: [
        'Drag-and-drop builder with real-time preview',
        'Generate production-ready Ionic and Flutter code',
        'Component library with pre-built templates',
        'Export code with full customization options',
        'Accelerate mobile app development workflow'
      ],
      technologies: ['Angular', 'TypeScript', 'Code Generation', 'Ionic', 'Flutter'],
      icon: 'code-square',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      category: 'Development Tools',
      demoUrl: 'https://www.codespeedo.com/',
      isPrivate: true
    },
    {
      title: 'MPRASS',
      description: 'Cloud-based inventory management system with real-time stock updates',
      features: [
        'Real-time inventory tracking across multiple locations',
        'Automated stock alerts and reorder notifications',
        'Built responsive UI to improve usability and performance',
        'Analytics dashboard for inventory insights',
        'Multi-warehouse management system'
      ],
      technologies: ['Angular', 'TypeScript', 'Cloud APIs', 'Real-time Database', 'Firebase'],
      icon: 'boxes',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      category: 'Enterprise',
      demoUrl: 'https://mprass-73c98.web.app/',
      isPrivate: true
    },
    {
      title: 'LOTAPP',
      description: 'E-commerce product management platform for seamless product handling',
      features: [
        'Implemented real-time data synchronization across platforms',
        'Product catalog management with bulk operations',
        'Order processing and tracking system',
        'Inventory integration with sales channels',
        'Analytics for product performance tracking'
      ],
      technologies: ['Angular', 'TypeScript', 'E-commerce APIs', 'Real-time Sync', 'Firebase'],
      icon: 'cart',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      category: 'E-commerce',
      demoUrl: 'https://app.unlikeanything.nl/',
      isPrivate: true
    },
    {
      title: 'Kite Cultures',
      description: 'Digital content platform with blogs, events, and social integration',
      features: [
        'Explore rich heritage and cultural significance of kite flying traditions',
        'Interactive blog platform with event calendar',
        'Social media integration for community engagement',
        'Designed interactive and mobile-friendly user interface',
        'Content management system for cultural stories'
      ],
      technologies: ['Angular', 'TypeScript', 'CMS', 'Social APIs', 'Firebase'],
      icon: 'wind',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffdde1 100%)',
      category: 'Cultural',
      demoUrl: 'https://kitecultures.in/',
      isPrivate: true
    }
  ];

  categories = ['All', 'Enterprise', 'Finance', 'Development Tools', 'E-commerce', 'Cultural'];
  selectedCategory = 'All';

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  hasGitHubUrl(project: Project): boolean {
    return !!(project.githubUrl && project.githubUrl.trim() !== '');
  }

  hasDemoUrl(project: Project): boolean {
    return !!(project.demoUrl && project.demoUrl.trim() !== '');
  }

  openGitHub(url: string | undefined) {
    if (url && url.trim() !== '') {
      window.open(url, '_blank');
    }
  }

  openDemo(url: string | undefined) {
    if (url && url.trim() !== '') {
      window.open(url, '_blank');
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Jigyasa-Gohil-Resume.pdf';
    link.click();
  }
}