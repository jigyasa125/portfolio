import { Routes } from '@angular/router';
import { Home } from './pages/home/home';  // ✅ Changed
import { About } from './pages/about/about';  // ✅ Changed
import { Skills } from './pages/skills/skills';  // ✅ Changed
import { Experience } from './pages/experience/experience';  // ✅ Changed
import { Projects } from './pages/projects/projects';  // ✅ Changed
import { Contact } from './pages/contact/contact';  // ✅ Changed

export const routes: Routes = [
  { path: '', component: Home, title: 'Jigyasa Gohil - Portfolio' },
  { path: 'about', component: About, title: 'About - Jigyasa Gohil' },
  { path: 'skills', component: Skills, title: 'Skills - Jigyasa Gohil' },
  { path: 'experience', component: Experience, title: 'Experience - Jigyasa Gohil' },
  { path: 'projects', component: Projects, title: 'Projects - Jigyasa Gohil' },
  { path: 'contact', component: Contact, title: 'Contact - Jigyasa Gohil' },
  { path: '**', redirectTo: '' }
];