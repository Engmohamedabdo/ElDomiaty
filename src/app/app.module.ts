import { AuthGuard } from './components/auth/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { DragScrollModule } from 'ngx-drag-scroll';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SidebarModule } from 'ng-sidebar';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';

// swiper
import { SwiperModule } from 'swiper/angular';

// Range Slider
import { Ng5SliderModule } from 'ng5-slider';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                  //api
// import {CarouselModule} from 'primeng/carousel';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import {DropdownModule} from 'primeng/dropdown';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ImageModule} from 'primeng/image';



import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverPassComponent } from './components/recover-pass/recover-pass.component';
import { ConfirmPassComponent } from './components/confirm-pass/confirm-pass.component';
import { HammerjsCarouselModule } from 'ngx-hammerjs-carousel';
import { NguCarouselModule } from '@ngu/carousel';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';
import { VerficationComponent } from './components/register/verfication/verfication.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LocationComponent } from './components/profile/location/location.component';
import { AddressComponent } from './components/profile/address/address.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPassComponent,
    ConfirmPassComponent,
    NotificationsComponent,
    AllProductComponent,
    FavouriteComponent,
    ReviewsComponent,
    TermsAndConditionsComponent,
    SearchComponent,
    ErrorComponent,
    VerficationComponent,
    ChangePasswordComponent,
    LocationComponent,
    AddressComponent,
    AllOrdersComponent,
    OrderDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxStarRatingModule,
    HttpClientModule,
    NguCarouselModule,
    Ng5SliderModule,

    SwiperModule,
    HammerjsCarouselModule,

    AccordionModule,
    CarouselModule,
    RatingModule,
    ButtonModule,
    GalleriaModule,
    CascadeSelectModule,
    DropdownModule,
    ImageModule,
    // MenuItem,

    NgbCarouselModule,
    NgbModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
