import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ConfigListComponent } from './config-list.component';
import { ConfigService } from './config.service';
import { MockInterceptor } from './mock.interceptor';

const routes: Routes = [{ path: '', component: ConfigListComponent }];

@NgModule({
  declarations: [ConfigListComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [
    ConfigService,
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
  ],
  exports: [ConfigListComponent]
})
export class ConfigModule { }