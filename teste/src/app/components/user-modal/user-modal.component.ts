import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent {
  @Input() isOpen = false;
  @Input() users: User[] = [];
  @Input() isLoading = false;

  @Output() closeModal = new EventEmitter<void>();
  @Output() editUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<User>();

  close() {
    this.closeModal.emit();
  }

  edit(user: User) {
    this.editUser.emit(user);
  }

  delete(user: User) {
    this.deleteUser.emit(user);
  }
}
