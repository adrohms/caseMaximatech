import { NgModule } from '@angular/core';
import { MatLineModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { AlertErrorComponent } from './alert/alert-error.component';
import { AlertComponent } from './alert/alert.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { DurationPipe } from './date/duration.pipe';
import { FormatMediumDatePipe } from './date/format-medium-date.pipe';
import { FormatMediumDatetimePipe } from './date/format-medium-datetime.pipe';
import { FilterComponent } from './filter/filter.component';
import { ItemCountComponent } from './pagination/item-count.component';
import { SharedLibsModule } from './shared-libs.module';
import { SortByDirective } from './sort/sort-by.directive';
import { SortDirective } from './sort/sort.directive';

@NgModule({
  imports: [
    SharedLibsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatInputModule,
    MatLineModule,
    MatDatepickerModule
  ],
  declarations: [
    AlertComponent,
    AlertErrorComponent,
    HasAnyAuthorityDirective,
    DurationPipe,
    FormatMediumDatetimePipe,
    FormatMediumDatePipe,
    SortByDirective,
    SortDirective,
    ItemCountComponent,
    FilterComponent,
  ],
  exports: [
    SharedLibsModule,
    AlertComponent,
    AlertErrorComponent,
    HasAnyAuthorityDirective,
    DurationPipe,
    FormatMediumDatetimePipe,
    FormatMediumDatePipe,
    SortByDirective,
    SortDirective,
    ItemCountComponent,
    FilterComponent,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatInputModule,
    MatLineModule,
    MatDatepickerModule
  ],
})
export class SharedModule {}
