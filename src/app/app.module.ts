import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { ButtonComponent } from './shared/base/button/button.component';
import { TranslatePipe } from './shared/pipes/translate.pipe';
import { TranslateService } from './shared/services/translate.service';
import { AppConfigService } from './shared/services/app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { PricePipe } from './shared/pipes/price.pipe';
import { CartButtonComponent } from './shared/base/cart-button/cart-button.component';
import { ProductCardComponent } from './components/catalog/product-card/product-card.component';
import { PictureComponent } from './shared/base/picture/picture.component';
import { UnitsPipe } from './shared/pipes/units.pipe';
import { ProductionComponent } from './components/catalog/production/production.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';

export function setupTranslateServiceFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

export function setupAppConfigServiceFactory(
  service: AppConfigService
): Function {
  return () => service.load();
}


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
    ButtonComponent,
    CartButtonComponent,
    ProductCardComponent,
    PictureComponent,

    // Pipes
    TranslatePipe,
    PricePipe,
    UnitsPipe,
    ProductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [
        TranslateService
      ],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: setupAppConfigServiceFactory,
      deps: [
        AppConfigService
      ],
      multi: true
    },
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
