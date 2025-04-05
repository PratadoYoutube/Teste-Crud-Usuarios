import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios/novo', component: CreateUserComponent }
];
