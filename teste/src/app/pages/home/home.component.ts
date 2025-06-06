import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { UserModalComponent } from '../../components/user-modal/user-modal.component';
import { HeaderComponent } from '../../components/header/header.component';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showUserModal = false;
  users: User[] = [];

  constructor(private userService: UserService) { }

  openListModal() {
    this.showUserModal = true;

    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
      }
    });
  }

  closeModal() {
    this.showUserModal = false;
  }

  editUser(user: User) {
    console.log('Editar usuário:', user);
  }

  deleteUser(user: User) {
    if (user.id !== undefined) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.id !== user.id);
          console.log('Usuário deletado:', user.id);
        },
        error: (err) => {
          console.error('Erro ao deletar usuário:', err);
        }
      });
    } else {
      console.warn('ID do usuário é indefinido. Exclusão não realizada.', user);
    }
  }

  searchTerm = '';

  onSearch(term: string) {
    this.searchTerm = term.toLowerCase();
  }
  get filteredUsers(): User[] {
    if (!this.searchTerm) return this.users;
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm)
    );
  }

}
