import { Component, OnInit } from '@angular/core';
import { Tasks } from "../tasks"
import { TASKS } from "../mock-tasks"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;
  selectedTask : Tasks;

  constructor() { }

  ngOnInit() {
  }

  onSelect(task: Tasks): void {
    this.selectedTask = task
  }
}
