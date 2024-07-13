import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern('(?=.*[A-Z]).{4,8}$')]]
    });
  }

  register() {
    // Check if the form is valid
    if (this.registerForm.invalid) {
      // Display errors if the form is invalid
      this.errorMessage = 'Please check all required fields';
      this.registerForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
      return;
    }

    const credentials = this.registerForm.value;

    this.authenticationService.register(credentials).subscribe({
      next: () => {
        this.errorMessage = '';
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errorMessage = 'Email already registered';
        console.error('Registration error:', error);
      },
      complete: () => {
        console.log('Registration observable completed');
      },
    });
  }
}
