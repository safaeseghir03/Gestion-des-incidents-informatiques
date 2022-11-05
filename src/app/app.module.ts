import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatBadgeModule} from '@angular/material/badge';
import { MatTabsModule} from '@angular/material/tabs';
import { environment } from '../environments/environment';
import { UsersComponent } from './Components/users/users.component';
import { AddeditUserComponent } from './Components/addedit-user/addedit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { VoirNComponent } from './Components/voir-n/voir-n.component';
import { AuthentificationService } from './services/authentification.service';

import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { ChangeretatComponent } from './Components/changeretat/changeretat.component';
import { AddEditEquipeItComponent } from './Components/add-edit-equipe-it/add-edit-equipe-it.component';
import { AddEditDetailtComponent } from './Components/add-edit-detailt/add-edit-detailt.component';
import { AccepteTComponent } from './Components/accepte-t/accepte-t.component';
import { AddEditNtComponent } from './Components/add-edit-nt/add-edit-nt.component';
import { AddEditserviceComponent } from './Components/add-editservice/add-editservice.component';
import { AddTicketUserComponent } from './Components/add-ticket-user/add-ticket-user.component';
import { BarreTickComponent } from './Components/barre-tick/barre-tick.component';
import { DepartementComponent } from './Components/departement/departement.component';
import { DserviceComponent } from './Components/dservice/dservice.component';

import { NatureTComponent } from './Components/nature-t/nature-t.component';
import { NatureTicketComponent } from './Components/nature-ticket/nature-ticket.component';
import { PlanifierTComponent } from './Components/planifier-t/planifier-t.component';
import { RefuseTComponent } from './Components/refuse-t/refuse-t.component';
import { SansRtComponent } from './Components/sans-rt/sans-rt.component';
import { TicketAprComponent } from './Components/ticket-apr/ticket-apr.component';
import { TicketCloComponent } from './Components/ticket-clo/ticket-clo.component';
import { TicketEscComponent } from './Components/ticket-esc/ticket-esc.component';
import { TicketGestComponent } from './Components/ticket-gest/ticket-gest.component';
import { TicketPriseComponent } from './Components/ticket-prise/ticket-prise.component';
import { TicketResComponent } from './Components/ticket-res/ticket-res.component';
import { TicketUserComponent } from './Components/ticket-user/ticket-user.component';
import { TicketEnCoursComponent } from './Components/ticket-en-cours/ticket-en-cours.component';
import { ValiderAprComponent } from './Components/valider-apr/valider-apr.component';
import { ValiderEscComponent } from './Components/valider-esc/valider-esc.component';
import { ValiderTicketComponent } from './Components/valider-ticket/valider-ticket.component';
import { VoirNcComponent } from './Components/voir-nc/voir-nc.component';
import { VoirTComponent } from './Components/voir-t/voir-t.component';
import { EquipeITComponent } from './Components/equipe-it/equipe-it.component';
import { AddEditNaturetComponent } from './Components/add-edit-naturet/add-edit-naturet.component';
import { TicketTechComponent } from './Components/ticket-tech/ticket-tech.component';
import { NavbarComponent } from './sharePages/navbar/navbar.component';
import { ProfileComponent } from './sharePages/profile/profile.component';
import { SidenavComponent } from './sharePages/sidenav/sidenav.component';
import { ModifierPComponent } from './Components/modifier-p/modifier-p.component';
import { UserCloComponent } from './Components/user-clo/user-clo.component';
import { ProbSolComponent } from './Components/prob-sol/prob-sol.component';
import { AddprobSolComponent } from './Components/addprob-sol/addprob-sol.component';
import { VoirSComponent } from './Components/voir-s/voir-s.component';
import { SolutionUserComponent } from './Components/solution-user/solution-user.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifierEmailComponent } from './Components/verifier-email/verifier-email.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { CloturUserComponent } from './Components/clotur-user/clotur-user.component';
import { ValiderAccepteComponent } from './Components/valider-accepte/valider-accepte.component';
  
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddeditUserComponent,
    VoirNComponent,
    HomeComponent,
    ChangeretatComponent,
    AddEditEquipeItComponent,
    AddEditDetailtComponent,
    AccepteTComponent,
    AddEditNtComponent,
    AddEditserviceComponent,
    AddTicketUserComponent,
    BarreTickComponent,
    DepartementComponent,
    DserviceComponent,
   
    NatureTComponent,
    NatureTicketComponent,
    PlanifierTComponent,
    RefuseTComponent,
    SansRtComponent,
    TicketAprComponent,
    TicketCloComponent,
    TicketEscComponent,
    TicketGestComponent,
    TicketPriseComponent,
    TicketResComponent,
    TicketUserComponent,
    TicketEnCoursComponent,
    ValiderAprComponent,
    ValiderEscComponent,
    ValiderTicketComponent,
    VoirNcComponent,
    VoirTComponent,
    EquipeITComponent,
    AddEditNaturetComponent,
    TicketTechComponent,
    NavbarComponent,
    ProfileComponent,
    SidenavComponent,
    ModifierPComponent,
    UserCloComponent,
    ProbSolComponent,
    AddprobSolComponent,
    VoirSComponent,
    SolutionUserComponent,
    VerifyEmailComponent,
    VerifierEmailComponent,
    ForgotPasswordComponent,
    CloturUserComponent,
    ValiderAccepteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatTabsModule,
    HttpClientModule,
    
 AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule,
  
    HotToastModule.forRoot(),
    
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
