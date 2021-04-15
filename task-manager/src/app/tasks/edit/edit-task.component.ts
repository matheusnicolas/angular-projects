import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @ViewChild('formTask', {static: true}) formTask: NgForm;
  task: Task;
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task = this.taskService.searchById(id);
  }

  update(): void {
    if (this.formTask.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }

}
