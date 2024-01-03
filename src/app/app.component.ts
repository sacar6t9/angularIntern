import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserListComponent,HeaderComponent,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  disable:boolean=false;
  show:boolean=true;
  age:number=3;
  name:string='bishal'
  color='green'
  updatecolor(){
    this.color='blue'
  }
  count:number=0;
  data:string="";
  user:string='customer';
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
  productList=[{id:1,name:'bisal'},
{id:2,name:"Bikash"},
{id:3,name:"Rahul"}];
  }
  

