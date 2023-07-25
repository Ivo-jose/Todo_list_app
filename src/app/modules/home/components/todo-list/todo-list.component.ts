import { Component, OnInit } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList:Array<TaskList> = [];

  constructor() {}

  ngOnInit(): void {}

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false});
  }

  public deleteItemTaskList(value: number): void {
    this.taskList.splice(value,1)
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Você realmente deseja deletar todas as tarefas?");
    if(confirm) this.taskList = [];
  }
}
