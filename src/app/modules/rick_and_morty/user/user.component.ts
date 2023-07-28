import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent {
  list = 0;
  editId = 0;
  isCreate = 0;
  isLogout = 0;

  constructor(private core: CoreService, private router: Router) {}

  toggle(x: any) {
    this.list = x;
  }
  toggleEdit(id: number) {
    this.editId = id;
  }
  toggleCreate(isCreate: any) {
    this.isCreate = isCreate;
  }

  logout() {
    this.core.logout();
    this.router.navigate(['login']);
  }

  toggleLogout(isLogout: any) {
    this.isLogout = isLogout;
  }
}
