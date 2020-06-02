import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdatedListTableComponent } from './list/updated-list-table/updated-list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdatedListTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
