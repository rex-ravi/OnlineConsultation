import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registerForm: any;
  submitted = false;
  loading = false;
  passwordMismatch = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;
    if (this.registerForm.invalid) {
      this.loading = false;
      return;
    }
    if (this.f.password.value != this.f.confirmPassword.value) {
      this.loading = false;
      this.passwordMismatch = true;
      return;
    }
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['../login'], { relativeTo: this.route });
    }, 5000);
  }

  passwordUpdate(): void {
    this.passwordMismatch = false;
  }
}
