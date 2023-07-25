import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit{

  @Output() public emitItemTaskList = new EventEmitter();
  public addItemtaskList: string = "";

  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList(): void {
    this.addItemtaskList = this.addItemtaskList.trim();
    if(this.addItemtaskList) {
      this.emitItemTaskList.emit(this.addItemtaskList);
      this.addItemtaskList = "";
    }
  }
}
