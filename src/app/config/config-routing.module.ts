import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigListComponent } from './config-list.component';

const routes: Routes = [{ path: '', component: ConfigListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }