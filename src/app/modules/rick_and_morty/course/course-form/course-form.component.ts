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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.sass'],
})
export class CourseFormComponent implements OnChanges {
  form!: FormGroup;
  @Output() list2 = new EventEmitter<any>();
  @Output() edit2 = new EventEmitter<any>();
  @Output() isCreateOutput = new EventEmitter<any>();
  @Input() list = 0;
  @Input() editId = 0;
  @Input() isCreate = 0;

  constructor(
    private core: CoreService,
    private primengConfig: PrimeNGConfig,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editId) {
      this.list = 0;
      this.core.course(this.editId).subscribe((d) => {
        this.handleEditSuccess(d);
      });
    }
  }

  save() {
    if (this.form.valid) {
      this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
      if (this.editId >= 1) {
        this.core
          .coursePut(this.editId, this.form.value)
          .subscribe((response) => {
            this.cleanForm();
          });
      } else {
        this.core
          .coursePost(this.form.value)
          .subscribe((response) => this.cleanForm());
      }
    }
  }

  handleEditSuccess(data: any) {
    this.form.patchValue(data);
  }

  cleanForm() {
    this.form.reset();
    this.editId = 0;
    this.list = 1;
    this.list2.emit(this.list);
    this.edit2.emit(this.editId);
    this.isCreateOutput.emit(0);
  }

  createForm() {
    this.form = this.fb.group({
      name_: ['', [Validators.required, Validators.minLength(3)]],
      hourlyintensity: [0, [Validators.required, Validators.minLength(2)]],
    });
  }

  get invalidName() {
    return this.form.get('name_')?.invalid && this.form.get('name_')?.touched;
  }
  get invalidHour() {
    return (
      this.form.get('hourlyintensity')?.invalid &&
      this.form.get('hourlyintensity')?.touched
    );
  }
}
