import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [CommonModule,],
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

  onClose() {
    this.closeModal.emit();
  }

  onEdit(user: User) {
    this.editUser.emit(user);
  }

  onDelete(user: User) {
    this.deleteUser.emit(user);
  }
}
