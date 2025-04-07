import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListUsersComponent } from './pages/users/list-users/list-users.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'usuarios/novo', component: CreateUserComponent },
      { path: 'usuarios/lista', component: ListUsersComponent },
      { path: 'usuarios/editar/:id', component: EditUserComponent }

    ]
  }
];
