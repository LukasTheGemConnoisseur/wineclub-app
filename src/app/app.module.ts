import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { PageComponentComponent } from './page-component/page-component.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RedWineProductsComponent } from './red-wine-products/red-wine-products.component';
import { WhiteWineProductsComponent } from './white-wine-products/white-wine-products.component';
import { WineGlassesProductsComponent } from './wine-glasses-products/wine-glasses-products.component';
import { FooterComponent } from './footer/footer.component';
import { WineCarouselComponent } from './wine-carousel/wine-carousel.component';
import { RedWineCardComponent } from './red-wine-card/red-wine-card.component';
import { WhiteWineCardComponent } from './white-wine-card/white-wine-card.component';
import { DessertWineCardComponent } from './dessert-wine-card/dessert-wine-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarNavComponent,
    PageComponentComponent,
    PageHeaderComponent,
    RedWineProductsComponent,
    WhiteWineProductsComponent,
    WineGlassesProductsComponent,
    FooterComponent,
    WineCarouselComponent,
    RedWineCardComponent,
    WhiteWineCardComponent,
    DessertWineCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
