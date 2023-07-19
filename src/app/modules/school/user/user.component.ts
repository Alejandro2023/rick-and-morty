import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnChanges {
  list = 0;
  editId = 0;

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  toggle(x: any) {
    this.list = x;
  }
  toggleEdit(id: number) {
    this.editId = id;
  }
}
