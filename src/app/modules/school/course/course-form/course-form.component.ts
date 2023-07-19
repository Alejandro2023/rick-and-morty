import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CoreService } from 'src/app/core.service';
import { PrimeNGConfig } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.sass'],
})
export class CourseFormComponent implements OnInit, OnChanges {
  form = {
    name_: '',
    hourlyintensity: '',
  };

  @Output() list2 = new EventEmitter<any>();
  @Output() edit2 = new EventEmitter<any>();
  @Input() list = 0;
  @Input() editId = 0;

  constructor(
    private core: CoreService,
    private primengConfig: PrimeNGConfig,
    private toastr: ToastrService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editId) {
      this.list = 0;
      this.core.course(this.editId).subscribe((d) => {
        this.handleEditSuccess(d);
      });
    }
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  save() {
    this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
    if (this.editId >= 1) {
      this.core.coursePut(this.editId, this.form).subscribe((response) => {
        this.cleanForm();
      });
    } else {
      this.core.coursePost(this.form).subscribe();
    }
  }

  handleEditSuccess(data: any) {
    this.form.name_ = data.name_;
    this.form.hourlyintensity = data.hourlyintensity;
  }

  cleanForm() {
    this.form.name_ = '';
    this.form.hourlyintensity = '';
    this.editId = 0;
    this.list = 1;
    this.list2.emit(this.list);
    this.edit2.emit(this.editId);
  }
}
