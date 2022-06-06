import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConvertorComponent } from './convertor/convertor.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'convertor',component:ConvertorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }