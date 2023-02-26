import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';



@NgModule({
  declarations: [AppComponent, ShellComponent, SidebarComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
