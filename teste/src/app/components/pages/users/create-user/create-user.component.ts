import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bio: [''],
      profilePicture: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log('Usuário cadastrado:', this.userForm.value);
      this.router.navigate(['/']); 
    }
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}
