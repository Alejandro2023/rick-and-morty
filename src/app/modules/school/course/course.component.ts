import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})
export class CourseComponent {
  list = 0;
  editId = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.list);
  }
  toggle(x: any) {
    this.list = x;
  }
  toggleEdit(id: number) {
    console.log(id);
    this.editId = id;
  }
}
