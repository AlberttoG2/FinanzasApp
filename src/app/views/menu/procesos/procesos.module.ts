import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesosPageRoutingModule } from './procesos-routing.module';

import { ProcesosPage } from './procesos.page';
import {ComponentsModule} from '../../../components/components.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProcesosPageRoutingModule,
        ComponentsModule,
      MatButtonModule, MatInputModule, MatListModule, MatIconModule, MatTooltipModule, MatDatepickerModule,
      MatNativeDateModule, MatButtonToggleModule, MatFormFieldModule, MatSnackBarModule,
      MatNativeDateModule, MatTableModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatCheckboxModule,
      MatCardModule, MatDialogModule, MatSortModule, MatToolbarModule, MatMenuModule,
      MatSlideToggleModule,
      MatRippleModule, MatStepperModule, MatProgressSpinnerModule

    ],
  declarations: [ProcesosPage]
})
export class ProcesosPageModule {}
