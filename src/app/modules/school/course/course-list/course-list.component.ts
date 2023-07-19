import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  constructor(
    private core: CoreService,
    private primengConfig: PrimeNGConfig,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.core.getCourse().subscribe((d) => {
      this.handleData(d);
    });
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
  }
}