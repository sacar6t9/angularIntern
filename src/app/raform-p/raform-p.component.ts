import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-raform-p',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './raform-p.component.html',
  styleUrl: './raform-p.component.css'
})
export class RaformPComponent {
  loginForm= new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(2)])
  })
userDetails(){
  console.log(this.loginForm.value)
}
get user(){
return this.loginForm.get('user')
}
get password(){
  return this.loginForm.get('password');
}
}
