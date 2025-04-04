import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { UserModalComponent } from '../components/user-modal/user-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, UserModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showUserModal = false;
  users = [
    { id: 1, name: 'Usuário 1', email: 'usuario1@email.com' },
    { id: 2, name: 'Usuário 2', email: 'usuario2@email.com' }
  ];

  openListModal() {
    this.showUserModal = true;
  }

  closeModal() {
    this.showUserModal = false;
  }

  editUser(user: any) {
    console.log('Editar usuário:', user);
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
