import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    bio: [''],
    profilePicture: [''],
    username: ['']
  });

  isLoading = true;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) return;

    this.userService.getUserById(id).subscribe((user: User) => {
      this.userForm.patchValue(user);
      this.isLoading = false;
    });
  }

  onSubmit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.userForm.invalid || !id) return;

    const userData: Partial<User> = Object.fromEntries(
      Object.entries(this.userForm.value).map(([key, value]) => [key, value ?? undefined])
    ) as Partial<User>;

    this.userService.patchUser(id, userData).subscribe(() => {
      this.router.navigate(['/usuarios/lista']);
    });
  }
}
