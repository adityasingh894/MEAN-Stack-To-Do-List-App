import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }


  taskId: string;
  listId: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          this.taskId = params.taskId;
          this.listId = params.listId;
      }
    )
  }

  updateTask(title: string) {
     this.taskService.updateTask(this.listId, this.taskId, title).subscribe(() => {
      this.router.navigate([`/lists`, this.listId]);
     })
  }

}
