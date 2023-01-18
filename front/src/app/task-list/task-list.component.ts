import {Component, OnInit} from '@angular/core';
import {BackendService} from "../services/backend.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks = [];
  formNewTask: any;

  constructor(
    private backendService: BackendService
  ) {
    this.formNewTask = new FormGroup({
      task: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.get_tasks()
  }

  get_tasks(){
    this.backendService.get_tasks().subscribe(
      (data) => {
        this.tasks = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

  done(taskId: any) {
    console.log(taskId);
    this.backendService.mark_task_done(taskId).subscribe(
      (data) => {
        console.log(data);
        this.get_tasks();
      },
      error => console.log(error)
    )
  }

  onSubmit() {
    this.backendService.create_task(this.formNewTask.value).subscribe(
      (data) => {
        console.log(data);
        this.get_tasks();
      },
      error => {console.log(error)}
    )
  }

}
