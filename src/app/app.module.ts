import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { routes } from './app.routes';
import { serverRoutes } from './app.routes.server';

import { ProdutoList } from './pages/produtos/produto-list/produto-list';
import { ProdutoForm } from './pages/produtos/produto-form/produto-form';
import { ProdutoDetail } from './pages/produtos/produto-detail/produto-detail';


@NgModule({

  declarations: [
    App,
    ProdutoList,
    ProdutoForm,
    ProdutoDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    Navbar
  ],
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ],
  bootstrap: [App]
})

export class AppModule {}
