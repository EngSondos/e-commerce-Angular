import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registerForm:FormGroup;
  // registerForm!:any
  constructor(){
    this.registerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      userName: new FormControl('',[Validators.pattern(/^\w[a-zA-Z@#0-9.]*$/), Validators.required]),

      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required , this.match()])
    })
  }
  registration()
  {
  }


   match(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;
      return value !== this.registerForm?.controls['password']?.value ? {match:true}: null;
  }
}
}

