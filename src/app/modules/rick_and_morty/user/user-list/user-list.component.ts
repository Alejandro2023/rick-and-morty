import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrimeNGConfig } from 'primeng/api';
import { CoreService } from 'src/app/core.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
})
export class UserListComponent implements OnChanges, OnInit {
  rows = [];
  loading = true;
  isUserCourse = false;
  selectedCourses = [];
  courses = [];
  userSelected: any = null;
  @Input() list = 0;
  @Output() isCreate = new EventEmitter<any>();
  @Output() editId = new EventEmitter<any>();
  @Output() list2 = new EventEmitter<any>();
  @Output() isLogout = new EventEmitter<any>();
  constructor(
    private core: CoreService,
    private primengConfig: PrimeNGConfig,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.core.getUser().subscribe(
      (d) => {
        this.handleData(d);
      },
      (error) => {
        this.router.navigate(['login']);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.list) {
      this.loading = true;
      this.getList();
    }
  }

  getList() {
    this.core.getUser().subscribe((d) => {
      this.handleData(d);
    });
  }

  handleData(data: []) {
    this.rows = data;
    this.loading = false;
  }

  delete(id: number) {
    this.loading = true;
    this.core.userDelete(id).subscribe((Response) => this.getList());
    this.toastr.success('Datos eliminados exitosamente', 'Datos eliminados');
  }

  edit(id: number) {
    this.editId.emit(id);
    this.list2.emit(0);
    this.isCreate.emit(1);
  }

  statusForm() {
    this.isCreate.emit(1);
  }

  statusLogout() {
    this.isLogout.emit(1);
  }

  openModalUserCourse(user: any) {
    this.userSelected = user;
    this.isUserCourse = true;
    this.core.getCourse().subscribe((d) => {
      this.courses = d;
    });
  }

  saveUserCourse(data: any) {
    const form = {
      user_id: data.user_id,
      course_ids: this.selectedCourses
        .map((course) => {
          return course['course_id'];
        })
        .join(),
    };
    this.core.userCoursePost(form).subscribe((r) => {
      this.selectedCourses = [];
      this.toastr.success('Se guardo correctamente', 'Datos guardados');
      this.isUserCourse = false;
      this.getList();
    });
  }
}
