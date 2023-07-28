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
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnInit, OnChanges {
  form = {
    name_: '',
    email: '',
    phone: 0,
    password_: '',
    user_type_id: '',
  };

  userTypes = [];
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
      this.core.user(this.editId).subscribe((d) => {
        this.handleEditSuccess(d);
      });
    }
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.core.getUserType().subscribe((d: any) => {
      this.handleData(d);
    });
  }

  handleData(data: []) {
    this.userTypes = data;
  }

  save() {
    this.toastr.success('Datos guardados exitosamente', 'Datos guardados');
    if (this.editId >= 1) {
      this.core
        .userPut(this.editId, this.form)
        .subscribe((response) => this.cleanForm());
    } else {
      this.core.userPost(this.form).subscribe();
    }
  }

  handleEditSuccess(data: any) {
    this.form.name_ = data.name_;
    this.form.email = data.email;
    this.form.phone = data.phone;
    this.form.password_ = data.password_;
    this.form.user_type_id = data.user_type_id;
  }

  cleanForm() {
    this.form.name_ = '';
    this.form.email = '';
    this.form.phone = 0;
    this.form.password_ = '';
    this.form.user_type_id = '';
    this.editId = 0;
    this.list = 1;
    this.list2.emit(this.list);
    this.edit2.emit(this.editId);
  }
}
