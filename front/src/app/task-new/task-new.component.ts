import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BackendService} from "../services/backend.service";

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit{

  formNewTask: any;

  ngOnInit(): void {}

  constructor(
    private backendService: BackendService
  ) {
    this.formNewTask = new FormGroup({
      task: new FormControl(),
    })
  }

  onSubmit() {
    this.backendService.create_task(this.formNewTask.value).subscribe(
      (data) => {
        console.log(data);
      },
      error => {console.log(error)}
    )
  }

}
