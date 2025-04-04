import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent {
  @Input() isOpen = false;
  @Input() users: any[] = [];
  @Output() closeModal = new EventEmitter<void>();
  @Output() editUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<number>();

  onEdit(user: any) {
    this.editUser.emit(user);
  }

  onDelete(userId: number) {
    this.deleteUser.emit(userId);
  }
}
