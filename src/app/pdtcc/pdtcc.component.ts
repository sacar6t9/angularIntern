import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pdtcc',
  standalone: true,
  imports: [],
  templateUrl: './pdtcc.component.html',
  styleUrl: './pdtcc.component.css'
})
export class PdtccComponent {
@Input() user:{name:string,email:string}={name:'',email:''}
}
