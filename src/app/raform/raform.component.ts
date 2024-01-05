import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-raform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './raform.component.html',
  styleUrl: './raform.component.css'
})
export class RaformComponent {
loginForm=new FormGroup({
  user:new FormControl(''),
  password:new FormControl('')
})
loginDetails(){
console.log(this.loginForm.value)
}
}
