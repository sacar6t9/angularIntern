import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
   
})
export class UserListComponent {
ready:boolean=true;
shippingMethod:string='idk';
users=[{
  id:1,name:'bishal'
},{
  id:2,name:'hari'
}]
tickets=[{
  "ticket": 12,
        "title": "Ticket#2",
        "description": "Ticket#2",
        "severity": "Normal",
        "status": "New",
        "assignee": {
            "id": 26,
            "employeeNumber": 101,
            "firstName": "Amy",
            "middleName": "Devie",
            "lastName": "Iliya",
            "department": "HR"
        }
}]
students=[{
  'name':'bishal',
  'socialAcc':{
    'social':"fb,insta,gmail"
    
  }
}]

}
