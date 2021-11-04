import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QrCreationComponent } from './components/qr-creation/qr-creation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',component: QrCreationComponent},  
  {path:'**',component: NotFoundComponent}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
