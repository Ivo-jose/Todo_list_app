import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList:Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }


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

  public validationInput(value: string, index: number): void {
    if(!value.length) {
      const confirm = window.confirm("Sua task está sem informação! Deseja deletar?");
      if(confirm) this.deleteItemTaskList(index);
    }
  }

  public setLocalStorage() {
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
