import { Injectable } from '@angular/core';
import { Task } from './';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor() { }

  static readonly TASKS: string = 'tasks';

  listAll(): Task[] {
    const tasks = localStorage[TaskService.TASKS];
    return tasks ? JSON.parse(tasks): [];
  }

  register(task: Task): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage[TaskService.TASKS] = JSON.stringify(tasks);
  }

  searchById(id: number): Task {
    const tasks: Task[] = this.listAll();
    return tasks.find(task => task.id === id);
  }

  update(task: Task): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage[TaskService.TASKS] = JSON.stringify(tasks);
  }
  
  remove(id: number): void {
    let tasks: Task[] = this.listAll();
    tasks = tasks.filter(task => task.id !== id);
    localStorage[TaskService.TASKS] = JSON.stringify(tasks);
  }

  updateStatus(id: number): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].done = !obj.done;
      }
    });
    localStorage[TaskService.TASKS] = JSON.stringify(tasks);
  }
}