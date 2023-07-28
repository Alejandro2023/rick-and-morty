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
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass'],
})
export class CourseListComponent {
  rows = [];
  loading = true;
  @Input() list = 0;
  @Output() editId = new EventEmitter<any>();
  @Output() list2 = new EventEmitter<any>();
  @Output() isCreate = new EventEmitter<any>();
  @Output() isLogout = new EventEmitter<any>();

  constructor(
    private core: CoreService,
    private primengConfig: PrimeNGConfig,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.core.getCourse().subscribe(
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
      this.getList();
    }
  }

  getList() {
    this.core.getCourse().subscribe((d) => {
      this.handleData(d);
    });
  }

  handleData(data: []) {
    this.rows = data;
    this.loading = false;
  }

  delete(id: number) {
    this.loading = true;
    this.core.courseDelete(id).subscribe((Response) => this.getList());
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
}
