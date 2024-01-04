import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tdform.component.html',
  styleUrl: './tdform.component.css'
})
export class TdformComponent {
loginUser(item:any,loginForm:NgForm){
console.warn(item)
loginForm.resetForm()
}
}
