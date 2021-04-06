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
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import { AboutCoronaComponent } from './about-corona/about-corona.component';
import { GlobalStatisticsComponent } from './global-statistics/global-statistics.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';






@NgModule({
  declarations: [
    AppComponent,
    MyToolbarComponent,
    HomepageComponent,
    RegistrationComponent,
    LogoutDialogComponent,
    AboutCoronaComponent,
    GlobalStatisticsComponent,
    GraphsComponent,
    MyAccountComponent
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
    MatCheckboxModule,
    MatBadgeModule,
    RouterModule,
    MatSelectModule,
    MatExpansionModule,
    ],
  providers: [CoronaTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
