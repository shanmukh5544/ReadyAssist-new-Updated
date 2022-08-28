import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermComponent } from './components/term/term.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'term',component:TermComponent},
  {path:'privacy',component:PrivacyPolicyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
