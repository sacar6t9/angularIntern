import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { PdtccComponent } from './pdtcc/pdtcc.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildComponent } from './child/child.component';
import { TdformComponent } from './tdform/tdform.component';
import { UsdToNrsPipe } from './pipes/usd-to-nrs.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserListComponent,HeaderComponent,TodoComponent,PdtccComponent,UserDetailsComponent,ChildComponent,UsdToNrsPipe,TdformComponent],
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
num=4;
userDetails=[{
  name:"John Doe",
  email:'jhonkk@htk.com'
},{
  name:"Jane Smith",
  email:'janesmith@gmail.com'
}]
datas='x'
updateData(item:any){
  console.log(item)
  this.datas=item
}
  }
  

