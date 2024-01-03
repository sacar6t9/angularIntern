import { Component } from "@angular/core";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  title: string = "todo app";
  list: any[] = [];
  addTask(item: any) {
    if (item != "") {
      this.list.push({ id: this.list.length, name: item });
    }
  }
  removeTask(ids: number) {
    this.list = this.list.filter((list) => list.id != ids);
  }
}
