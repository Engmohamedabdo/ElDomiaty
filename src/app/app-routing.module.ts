import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { LocationComponent } from './components/profile/location/location.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { VerficationComponent } from './components/register/verfication/verfication.component';
import { AuthGuard } from './components/auth/auth.guard';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ConfirmPassComponent } from './components/confirm-pass/confirm-pass.component';
import { RecoverPassComponent } from './components/recover-pass/recover-pass.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/profile/address/address.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shoppingCart', canActivate: [AuthGuard], component: ShoppingCartComponent },
  { path: 'allOrders', canActivate: [AuthGuard], component: AllOrdersComponent },
  { path: 'order-details', canActivate: [AuthGuard], component: OrderDetailsComponent },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/verfication', component: VerficationComponent },
  { path: 'forgetPassword', component: RecoverPassComponent },
  { path: 'confirmPass', component: ConfirmPassComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'notifications', canActivate: [AuthGuard], component: NotificationsComponent, },
  { path: 'allProduct', component: AllProductComponent },
  { path: 'favourite', canActivate: [AuthGuard], component: FavouriteComponent },
  { path: 'settings', canActivate: [AuthGuard], component: SettingsComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'customerService', canActivate: [AuthGuard], component: CustomerServiceComponent },
  { path: 'aboutUs', canActivate: [AuthGuard], component: AboutUsComponent },
  { path: 'reviews', canActivate: [AuthGuard], component: ReviewsComponent },
  { path: 'termsAndConditions', canActivate: [AuthGuard], component: TermsAndConditionsComponent },
  { path: 'search', component:SearchComponent},
  { path: 'address', canActivate: [AuthGuard], component:AddressComponent},
  { path: '**', component:ErrorComponent},

  {
    path: 'settings',
    loadChildren: () =>
      import('./components/settings/settings.module').then(
        (x) => x.SettingsModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
