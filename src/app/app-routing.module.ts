import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./services/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
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

const routes: Routes = [
		{path : 'manufacturer',     			component:ManufacturerFormComponent},
		{path : 'manufacturer/:id',     			component:ManufacturerFormComponent},
		{path : 'estimate',     			component:EstimateFormComponent},
		{path : 'estimate/:id',     			component:EstimateFormComponent},
		{path : 'customer',     			component:CustomerFormComponent},
		{path : 'customer/:id',     			component:CustomerFormComponent},
		{path : 'garment',     			component:GarmentFormComponent},
		{path : 'garment/:id',     			component:GarmentFormComponent},
		{path : 'settings',     			component:SettingsFormComponent},
		{path : 'settings/:id',     			component:SettingsFormComponent},
		{path : 'defaults',     			component:DefaultsFormComponent},
		{path : 'defaults/:id',     			component:DefaultsFormComponent},
		{path : 'expenses',     			component:ExpensesFormComponent},
		{path : 'expenses/:id',     			component:ExpensesFormComponent},
		{path : 'invoiceitems',     			component:InvoiceItemsFormComponent},
		{path : 'invoiceitems/:id',     			component:InvoiceItemsFormComponent},
		{path : 'manufacturers',     			component:ManufacturerTableComponent},
		{path : 'estimates',     			component:EstimateTableComponent},
		{path : 'customers',     			component:CustomerTableComponent},
		{path : 'garments',     			component:GarmentTableComponent},
		{path : 'settingss',     			component:SettingsTableComponent},
		{path : 'defaultss',     			component:DefaultsTableComponent},
		{path : 'invoiceitemss',     			component:InvoiceItemsTableComponent},
		{path : 'expensess',     			component:ExpensesTableComponent},

   {path : 'home',             component: HomeComponent},
   {path : 'login',            component: LoginComponent},
   {path : 'callback',         component: CallbackComponent},
   {path : 'dashboard',        component: DashboardComponent,canActivate: [AuthGuard]},
   {path : 'docs',             loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
   {path : '**',               redirectTo: '/home'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
