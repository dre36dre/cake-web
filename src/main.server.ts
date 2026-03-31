import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app/app.module';
import { App } from './app/app';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [App],
})
export class AppServerModule {}

export default AppServerModule;