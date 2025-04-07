import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);

  userForm = this.fb.group({
    name: this.fb.nonNullable.control('', Validators.required),
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    username: this.fb.nonNullable.control(''),
    bio: this.fb.nonNullable.control(''),
    profilePicture: this.fb.nonNullable.control('')
  });
  

  private cleanFormValue<T extends Record<string, any>>(formValue: T): Partial<T> {
    const cleaned: Partial<T> = {};
    for (const key in formValue) {
      const value = formValue[key];
      if (value !== null) {
        cleaned[key] = value;
      }
    }
    return cleaned;
  }

  submitForm() {
    if (this.userForm.invalid) return;

    const userData = this.cleanFormValue(this.userForm.value);

    this.userService.addUser(userData).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
