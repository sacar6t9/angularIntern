import { Component,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pdtcc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pdtcc.component.html',
  styleUrl: './pdtcc.component.css'
})
export class PdtccComponent {
@Input() user:{name:string,email:string}={name:'',email:''}
}
