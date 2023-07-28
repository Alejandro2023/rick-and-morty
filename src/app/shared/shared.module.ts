import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KnobModule } from 'primeng/knob';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectButtonModule,
    KnobModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TooltipModule,
  ],
  exports: [
    SelectButtonModule,
    KnobModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    TableModule,
    TooltipModule,
  ],
})
export class SharedModule {}
