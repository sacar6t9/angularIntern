import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UpperCasePipe,SlicePipe } from '@angular/common';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,DatePipe,UpperCasePipe,SlicePipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
// @Output() updateDataEvent=new EventEmitter<string>()
info:any;
today= Date();
datas:string='xero'
title:string='hellokcahahah'
}
