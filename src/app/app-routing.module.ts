import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './Components/departement/departement.component';

import { HomeComponent } from './Components/home/home.component';

import { DserviceComponent } from './Components/dservice/dservice.component';

import { UsersComponent } from './Components/users/users.component';

import { NatureTComponent } from './Components/nature-t/nature-t.component';
import { AddEditNtComponent } from './Components/add-edit-nt/add-edit-nt.component';
import { EquipeITComponent } from './Components/equipe-it/equipe-it.component';
import { NatureTicketComponent } from './Components/nature-ticket/nature-ticket.component';
import { AddEditDetailtComponent } from './Components/add-edit-detailt/add-edit-detailt.component';
import { AddTicketUserComponent } from './Components/add-ticket-user/add-ticket-user.component';
import { TicketUserComponent } from './Components/ticket-user/ticket-user.component';
import { TicketGestComponent } from './Components/ticket-gest/ticket-gest.component';
import { TicketEnCoursComponent } from './Components/ticket-en-cours/ticket-en-cours.component';
import { TicketTechComponent } from './Components/ticket-tech/ticket-tech.component';
import { TicketEscComponent } from './Components/ticket-esc/ticket-esc.component';
import { TicketPriseComponent } from './Components/ticket-prise/ticket-prise.component';
import { TicketCloComponent } from './Components/ticket-clo/ticket-clo.component';
import { TicketResComponent } from './Components/ticket-res/ticket-res.component';
import { TicketAprComponent } from './Components/ticket-apr/ticket-apr.component';

import { NavbarComponent } from './sharePages/navbar/navbar.component';
import { ProfileComponent } from './sharePages/profile/profile.component';
import { UserCloComponent } from './Components/user-clo/user-clo.component';

import { ProbSolComponent } from './Components/prob-sol/prob-sol.component';
import { AddprobSolComponent } from './Components/addprob-sol/addprob-sol.component';
import { SolutionUserComponent } from './Components/solution-user/solution-user.component';
import { VerifierEmailComponent } from './Components/verifier-email/verifier-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { CloturUserComponent } from './Components/clotur-user/clotur-user.component';
   

const routes: Routes = [

  {path:'',redirectTo:'Home', pathMatch:'full'},
  {path:'DepartementC',component: DepartementComponent},
  {path:'Dservice',component: DserviceComponent},
  
  {path:'Home',component: HomeComponent},
  {path:'users',component: UsersComponent},
  {path:'natureT',component: NatureTComponent},
  {path:'addEditN',component: AddEditNtComponent},
  {path:'equipeIT',component: EquipeITComponent},
  {path:'natureTicket',component: NatureTicketComponent},
  {path:'detail',component: AddEditDetailtComponent},
  {path:'TicketUser',component: TicketUserComponent},
  {path:'TicketGest',component:TicketGestComponent},
  {path:'TicketEC',component:TicketEnCoursComponent},
  {path:'TicketTech',component:TicketTechComponent},
  {path:'TicketEsc',component:TicketEscComponent},
  {path:'TicketPrise',component:TicketPriseComponent},
  {path:'TicketClo',component:TicketCloComponent},
  {path:'TicketRes',component:TicketResComponent},
  {path:'TicketApr',component:TicketAprComponent},
  {path:'Navbar',component:NavbarComponent},
  {path:'profile',component:ProfileComponent},
  {path:'Userclo',component:UserCloComponent},
  {path:'probSol',component:ProbSolComponent},
  {path:'addprobSol',component:AddprobSolComponent},
  {path:'solUser',component:SolutionUserComponent},
  {path:'verifyEmail',component:VerifierEmailComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'clotuser',component:CloturUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
