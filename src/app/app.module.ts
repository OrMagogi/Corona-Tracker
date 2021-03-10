import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MyToolbarComponent } from './my-toolbar/my-toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { HomepageComponent } from './homepage/homepage.component';
import {CoronaTrackerService} from './corona-tracker.service';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder,FormControl, FormGroup, FormArray  } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






@NgModule({
  declarations: [
    AppComponent,
    MyToolbarComponent,
    HomepageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule ,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ],
  providers: [CoronaTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
