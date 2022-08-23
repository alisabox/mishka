import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/main-page/categories/categories.component';
import { FeaturedComponent } from './components/main-page/featured/featured.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/main-page/modal/modal.component';
import { AboutComponent } from './components/main-page/about/about.component';
import { ReviewsComponent } from './components/main-page/reviews/reviews.component';
import { ContactsComponent } from './components/main-page/contacts/contacts.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    OrderFormComponent,
    NotFoundComponent,
    MainPageComponent,
    CartComponent,
    CategoriesComponent,
    FeaturedComponent,
    FooterComponent,
    ModalComponent,
    AboutComponent,
    ReviewsComponent,
    ContactsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
