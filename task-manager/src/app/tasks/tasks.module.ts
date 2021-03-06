import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService, TaskDoneDirective } from './shared';
import { ListTaskComponent } from './list';
import { RegisterTaskComponent } from './register';
import { EditTaskComponent } from './edit';

@NgModule({
  declarations: [
    ListTaskComponent,
    RegisterTaskComponent,
    EditTaskComponent,
    TaskDoneDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})

export class TasksModule { }
