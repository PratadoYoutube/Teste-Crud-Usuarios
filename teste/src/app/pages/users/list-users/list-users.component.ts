import { Component, inject } from '@angular/core';
import { User, UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  imports: [],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})

export class ListUsersComponent {
  private router = inject(Router); 
  private userService = inject(UserService);

  users: User[] = [];
  isLoading = true;

  ngOnInit() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res;
      this.isLoading = false;
    });
  }

  onDelete(user: User) {
    if (user.id !== undefined) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.users = this.users.filter((u) => u.id !== user.id);
      });
    }
  }

  onEdit(user: User) {
    if (user.id !== undefined) {
      this.router.navigate(['/usuarios/editar', user.id]);
    }
  }
}