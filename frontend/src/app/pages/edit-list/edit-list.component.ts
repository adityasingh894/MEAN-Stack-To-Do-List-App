import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }


  listId: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
        } else {
          this.listId = params.listId;
        }
      }
    )
  }

  updateList(title: string) {
     this.taskService.updateList(this.listId, title).subscribe(() => {
      this.router.navigate([`/lists`, this.listId]);
     })
  }

}
