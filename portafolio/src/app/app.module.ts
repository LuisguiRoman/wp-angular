import { RouterModule, Routes } from '@angular/router';//habilitar rutas
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//animaciones
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';//ejecutar acci9ones http
import { FormsModule } from '@angular/forms';//modulo para control de formularios

import { CatsService } from './services/cats.service';
import { ItemsPortfolioService } from './services/items-portfolio.service';

import { AppComponent } from './app.component';
import { WallComponent } from './components/wall/wall.component';
import { BrickComponent } from './components/brick/brick.component';
import { ItemComponent } from './components/item/item.component';
import { CatsPipe } from './pipes/cats.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

//crear rutas
const rutasApp:Routes = [
   { path: 'el-diablo', component: AboutComponent, data: { animation: 'el-diablo' } },
   { path: 'contacto', component: ContactComponent, data: { animation: 'contacto' } },
   { path: ':slug', component: ItemComponent, data: { animation: 'item' } },
   { path: '', component: WallComponent, pathMatch: 'full', data: { animation: 'home' } }
];


@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    BrickComponent,
    ItemComponent,
    CatsPipe,
    SidebarComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    CatsService,
    ItemsPortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }