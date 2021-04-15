import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { RegisterTaskComponent } from './register';
import { EditTaskComponent } from './edit';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    },
    {
        path: 'tasks/register',
        component: RegisterTaskComponent
    },
    {
        path: 'tasks/edit/:id',
        component: EditTaskComponent
    }
];