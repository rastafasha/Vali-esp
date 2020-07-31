import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, GalleryComponent, SpecialsComponent,
  WaxComponent,
  BodyComponent, BodyHandsComponent, BodySculptingComponent, BodyWrappingComponent,
  FacialComponent, FacialAntiageComponent, FacialBrighteningComponent, FacialCalmingComponent,
  FacialLuxuryComponent, FacialSpecialComponent, FacialRestorativeComponent,
  FibroblastComponent, FibroblastHypertrophicComponent, FibroblastFaceComponent, FibroblastBodyComponent,
  MakeupComponent, MakeupLookComponent, MakeupBridalComponent, MakeupClasesComponent,
  PermanentMakeupComponent, SpecialTreatmentComponent,
  BookingComponent, BookingBodyComponent, BookingFacialComponent, BookingFibroblastComponent,
  BookingMakeupComponent, BookingPermanentComponent, BookingSpecialTComponent, BookingWaxComponent,
  BookingBodyHComponent, BookingBodySComponent, BookingBodyWComponent, BookingFacialAComponent,
  BookingFacialBComponent, BookingFacialCComponent, BookingFacialLComponent, BookingFacialRComponent,
  BookingFacialSComponent, BookingFibroblastBComponent, BookingFibroblastFComponent, BookingFibroblastHComponent,
  BookingMakeupBComponent, BookingMakeupCComponent, BookingMakeupLComponent, FinancingComponent} from './pages/index.paginas';

import { ContactFormComponent} from './cmspage/contact-form/contact-form.component';

import { ResultadosComponent} from './resultados/resultados.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'depilacion-con-cera', component: WaxComponent},
  // Facial
  {path: 'facial', component: FacialComponent},
  {path: 'facial-anti-edad', component: FacialAntiageComponent},
  {path: 'tratamientos-brillo-claridad-facial', component: FacialBrighteningComponent},
  {path: 'tratamientos-relajantes-faciales', component: FacialCalmingComponent},
  {path: 'tratamientos-de-lujo-facial', component: FacialLuxuryComponent},
  {path: 'tratamientos-especiales-facial', component: FacialSpecialComponent},
  {path: 'tratamientos-restaurativos-faciales', component: FacialRestorativeComponent},
  // Body
  {path: 'cuerpo', component: BodyComponent},
  {path: 'cuerpo-manos-y-piernas', component: BodyHandsComponent},
  {path: 'body-sculpting', component: BodySculptingComponent},
  {path: 'body-wrapping', component: BodyWrappingComponent},
  // Fibroblast
  {path: 'fibroblast', component: FibroblastComponent},
  {path: 'fibroblast-rostro', component: FibroblastFaceComponent},
  {path: 'fibroblast-cuerpo', component: FibroblastBodyComponent},
  {path: 'fibroblast-cicatrices-hipertroficas-o-atroficas', component: FibroblastHypertrophicComponent},
  // Makeup
  {path: 'maquillaje', component: MakeupComponent},
  {path: 'look-maquillaje', component: MakeupLookComponent},
  {path: 'maquillaje-novia', component: MakeupBridalComponent},
  {path: 'maquillaje-curso', component: MakeupClasesComponent},
  {path: 'maquillaje-permanente', component: PermanentMakeupComponent},
  {path: 'tratamientos-especiales', component: SpecialTreatmentComponent},

  // booking
  {path: 'booking', component: BookingComponent},
  {path: 'booking-body', component: BookingBodyComponent},
  {path: 'booking-facial', component: BookingFacialComponent},
  {path: 'booking-fibroblast', component: BookingFibroblastComponent},
  {path: 'booking-makeup', component: BookingMakeupComponent},
  {path: 'booking-permanent-makeup', component: BookingPermanentComponent},
  {path: 'booking-special-treatments', component: BookingSpecialTComponent},
  {path: 'booking-wax', component: BookingWaxComponent},
  // {path: 'booking-cuerpo-manos-y-piernas', component: BookingBodyHComponent},
  // {path: 'booking-cuerpo-sculpting', component: BookingBodySComponent},
  // {path: 'booking-cuerpo-wrapping', component: BookingBodyWComponent},
  // {path: 'booking-facial-anti-edad', component: BookingFacialAComponent},
  // {path: 'booking-tratamientos-brillo-claridad-facial', component: BookingFacialBComponent},
  // {path: 'booking-tratamientos-relajantes-faciales', component: BookingFacialCComponent},
  // {path: 'booking-tratamientos-de-lujo-facial', component: BookingFacialLComponent},
  // {path: 'booking-tratamientos-restaurativos-faciales', component: BookingFacialRComponent},
  // {path: 'booking-tratamientos-especiales-facial', component: BookingFacialSComponent},
  // {path: 'booking-fibroblast-cuerpo', component: BookingFibroblastBComponent},
  // {path: 'booking-fibroblast-rostro', component: BookingFibroblastFComponent},
  // {path: 'booking-fibroblast-cicatrices-hipertroficas-o-atroficas', component: BookingFibroblastHComponent},
  // {path: 'booking-maquillaje-novia', component: BookingMakeupBComponent},
  // {path: 'booking-maquillaje-curso', component: BookingMakeupCComponent},
  // {path: 'booking-look-maquillaje', component: BookingMakeupLComponent},

  {path: 'financiamiento', component: FinancingComponent},
  {path: 'membresia', component: MembershipComponent},
  {path: 'franquicia', component: FranchiseComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: 'promos', component: SpecialsComponent},
  {path: 'contactenos', component: ContactComponent},
  {path: 'buscar', component: ResultadosComponent},
  {path: 'buscar/:termino', component: ResultadosComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
