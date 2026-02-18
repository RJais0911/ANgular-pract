import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { notAdminValidator } from '../validators/not-admin.validator';
import { passwordMatchValidator } from '../validators/password-match.validator';

@Component({
  selector: 'app-custom-validators',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.css']
})
export class CustomValidatorsComponent {

  // ✅ Single-field custom validator
  username = new FormControl('', notAdminValidator);

  // ✅ Cross-field (FormGroup-level) validator
  passwordForm = new FormGroup(
    {
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    },
    passwordMatchValidator
  );

}
