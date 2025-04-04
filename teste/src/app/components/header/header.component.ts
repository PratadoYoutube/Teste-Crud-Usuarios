import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchInput: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchInput = value;
    this.search.emit(value);
  }

  clearSearch() {
    this.searchInput = '';
    this.search.emit('');
  }
}
