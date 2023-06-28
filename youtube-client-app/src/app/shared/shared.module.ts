import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FilterPipe, SortPipe,ColoredBorderDirective,
         ItemInfoComponent
        } from './index';

@NgModule({
  declarations: [
    ItemInfoComponent,
    ColoredBorderDirective,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ItemInfoComponent,
    ColoredBorderDirective,
    FilterPipe,
    SortPipe,
    ReactiveFormsModule,
  ]

})
export class SharedModule { }
