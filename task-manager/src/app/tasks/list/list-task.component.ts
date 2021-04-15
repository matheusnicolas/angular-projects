import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];
  constructor(
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listAll();
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

  remove($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Are you sure to remove the task "' + task.name + '"?')) {
      this.taskService.remove(task.id);
      this.tasks = this.listAll();
    }
  }

  updateStatus(task: Task): void {
    if (confirm('Are you sure about update the status from task "' + task.name + '"?')) {
      this.taskService.updateStatus(task.id);
      this.tasks = this.listAll();
    }
  }
}
