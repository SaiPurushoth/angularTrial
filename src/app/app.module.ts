import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './view/home/home.component';
import { SettingsComponent } from './view/settings/settings.component';
import { ConvertorComponent } from './view/convertor/convertor.component';
import { RupeesPipe } from './pipes/rupees.pipe';
import { AgePipe } from './pipes/age.pipe';
import { FahrenheitPipe } from './pipes/fahrenheit.pipe';
import { CelsiusPipe } from './pipes/celsius.pipe';
import { ObservableComponent } from './observable/observable.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeService } from './models/employee.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    SettingsComponent,
    ConvertorComponent,
    RupeesPipe,
    AgePipe,
    FahrenheitPipe,
    CelsiusPipe,
    ObservableComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
