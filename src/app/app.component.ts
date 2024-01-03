import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  disable:boolean=false;
  name:string='bishal'
  count:number=0;
  data:string="";
  getData(val:string){
    console.log(val)
    this.data=val;
  }
  increment(){
    this.count++;
    this.count++;
  }
  decrement(){
    this.count--;
  }
  counter(type:string){
    type==='add'?this.count++:this.count--
  }
  }

