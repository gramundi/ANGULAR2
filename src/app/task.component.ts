import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';


@Component({
    selector:'mytasks',
    templateUrl:'./view/task.component.html',
    styleUrls:['./css/task.component.css']
})

export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  selectedTask: Task; 

  constructor(private taskService: TaskService) { 
    
    
  };

onSelect(task:Task){
  this.selectedTask=task;
}

getTasks() {
    return this.taskService
    .getTasks()
    .map(
      (tasks) => {
        console.log('tasks' + tasks);
        this.tasks = tasks;
        console.log('this.tasks ' + this.tasks);
      })
     .catch((error) => {
        console.log('error ' + error);
        throw error;
      })
 };
 
 delete(task: Task): void {
  this.taskService
      .delete(task.id)
      .then(() => {
        this.tasks = this.tasks.filter(h => h !== task);
        if (this.selectedTask === task) { this.selectedTask = null; }
      });
}

 ngOnInit() {
    this.getTasks().subscribe(_ => {;
      console.log('ngOnit after getTasks() ' + this.tasks);
    });
  }
  
  
}