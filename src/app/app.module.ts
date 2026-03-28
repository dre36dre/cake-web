import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app';
import { routes } from './app.route';

import { ProdutoList } from './pages/produtos/produto-list/produto-list';
import { ProdutoForm } from './pages/produtos/produto-form/produto-form';
import { ProdutoDetail } from './pages/produtos/produto-detail/produto-detail';


@NgModule({

  declarations: [
    AppComponent,
    ProdutoList,
    ProdutoForm,
    ProdutoDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
