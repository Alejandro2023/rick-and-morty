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
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnInit, OnChanges {
  userTypes = [];
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
      this.core.user(this.editId).subscribe((d) => {
        this.handleEditSuccess(d);
      });
    }
  }

  ngOnInit() {
    this.core.getUserType().subscribe((d: any) => {
      this.handleData(d);
    });
  }

  handleData(data: []) {
    this.userTypes = data;
  }

  save() {
    if (this.form.valid) {
      this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
      if (this.editId >= 1) {
        this.core
          .userPut(this.editId, this.form.value)
          .subscribe((response) => this.cleanForm());
      } else {
        this.core
          .userPost(this.form.value)
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
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          ),
        ],
      ],
      phone: [0, [Validators.required, Validators.minLength(5)]],
      password_: ['', [Validators.required, Validators.minLength(6)]],
      user_type_id: ['', Validators.required],
    });
  }

  get invalidName() {
    return this.form.get('name_')?.invalid && this.form.get('name_')?.touched;
  }
  get invalidEmail() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }
  get invalidPhone() {
    return this.form.get('phone')?.invalid && this.form.get('phone')?.touched;
  }
  get invalidPassword() {
    return (
      this.form.get('password_')?.invalid && this.form.get('password_')?.touched
    );
  }
}
