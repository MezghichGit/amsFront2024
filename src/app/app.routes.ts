import { Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

export const routes: Routes = [
{ path: "", pathMatch: "full", redirectTo: "app-navbar" },
{ path: "listProvider", component: ListProviderComponent },
{ path: "addProvider", component: AddProviderComponent },
{ path: "updateProvider/:id", component: UpdateProviderComponent },
];
