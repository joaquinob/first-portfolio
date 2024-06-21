import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
   {
    path: '',
    component: MainComponent
   },
   {
    path: 'projects',
    component: TrabajosComponent
   },
   {
    path: 'skills',
    component: SkillsComponent
   },
   {
    path: 'about',
    component: AboutComponent
   },
   {
    path: 'contact',
    component: ContactComponent
   }
];
