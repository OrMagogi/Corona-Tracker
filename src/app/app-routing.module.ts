import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCoronaComponent } from './about-corona/about-corona.component';
import { GlobalStatisticsComponent } from './global-statistics/global-statistics.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'homePage', component: HomepageComponent},
  {path: 'registrationPage', component: RegistrationComponent},
  {path: 'aboutCorona', component: AboutCoronaComponent},
  {path: 'globalStatistics', component: GlobalStatisticsComponent},
  {path: 'graphs', component: GraphsComponent},
  {path: 'myAccount', component: MyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
