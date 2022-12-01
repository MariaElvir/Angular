import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mi-proyeto-reactive-form',
  templateUrl: './mi-proyeto-reactive-form.component.html',
  styleUrls: ['./mi-proyeto-reactive-form.component.css']
})
export class MiProyetoReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  element = false;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
        name: "",
        email: "",
        mensaje: " "
      }
    );
  }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group(
      {
        name: ["", [Validators.required,Validators.minLength(10)]],
        email: ["", [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
        mensaje: ["", [Validators.required, Validators.maxLength(500)]]
      }
    );
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    this.element = true
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}


