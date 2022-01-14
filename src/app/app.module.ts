import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SearchInputComponent} from "./search-input/search-input.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CallbackComponent} from "./callback/callback.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material-module";
import {FlexLayoutModule} from "@angular/flex-layout";

import {ServiceModule} from "./services/service.module";
import {environment} from "../environments/environment";
import {Config} from "./services/config";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServiceWorkerModule} from "@angular/service-worker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {MatCarouselModule} from "./carousel/carousel.module";
import {OAuthModule} from "angular-oauth2-oidc";
import {ManufacturerFormComponent} from "./manufacturer-form/manufacturer-form.component";
import {EstimateFormComponent} from "./estimate-form/estimate-form.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";
import {GarmentFormComponent} from "./garment-form/garment-form.component";
import {SettingsFormComponent} from "./settings-form/settings-form.component";
import {DefaultsFormComponent} from "./defaults-form/defaults-form.component";
import {ExpensesFormComponent} from "./expenses-form/expenses-form.component";
import {InvoiceItemsFormComponent} from "./invoiceitems-form/invoiceitems-form.component";
import {ManufacturerTableComponent} from "./manufacturer-table/manufacturer-table.component";
import {EstimateTableComponent} from "./estimate-table/estimate-table.component";
import {CustomerTableComponent} from "./customer-table/customer-table.component";
import {GarmentTableComponent} from "./garment-table/garment-table.component";
import {SettingsTableComponent} from "./settings-table/settings-table.component";
import {DefaultsTableComponent} from "./defaults-table/defaults-table.component";
import {InvoiceItemsTableComponent} from "./invoiceitems-table/invoiceitems-table.component";
import {ExpensesTableComponent} from "./expenses-table/expenses-table.component";


@NgModule({
  declarations: [
    SearchInputComponent,
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CallbackComponent,
    HomeComponent,
		ManufacturerFormComponent,
		EstimateFormComponent,
		CustomerFormComponent,
		GarmentFormComponent,
		SettingsFormComponent,
		DefaultsFormComponent,
		ExpensesFormComponent,
		InvoiceItemsFormComponent,
		ManufacturerTableComponent,
		EstimateTableComponent,
		CustomerTableComponent,
		GarmentTableComponent,
		SettingsTableComponent,
		DefaultsTableComponent,
		InvoiceItemsTableComponent,
		ExpensesTableComponent,

  ],
  imports: [
    HttpClientModule,
    ServiceModule,
    CommonModule ,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCarouselModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:9094/rest/'],
        sendAccessToken: true
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {provide: Config, useValue: ServiceModule.forRoot(environment)}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
