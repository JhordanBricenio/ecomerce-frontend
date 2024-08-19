import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { CheckoutDetailsComponent } from './components/checkout/checkout-details/checkout-details.component';
import { CheckoutShippingComponent } from './components/checkout/checkout-shipping/checkout-shipping.component';
import { CheckoutPaymentComponent } from './components/checkout/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './components/checkout/checkout-review/checkout-review.component';
import { CheckoutCompleteComponent } from './components/checkout/checkout-complete/checkout-complete.component';
import { Error404Component } from './pages/error404/error404.component';
import { AddressesComponent } from './components/account/addresses/addresses.component';
import { OrdersComponent } from './components/account/orders/orders.component';
import { WishlistComponent } from './components/account/wishlist/wishlist.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { PaymentComponent } from './components/account/payment/payment.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { SigninComponent } from './components/account/signin/signin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpTopicsComponent } from './components/help-topics/help-topics.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';

export const routes: Routes = [
    {path:'',component:HomeComponent, pathMatch: 'full'},
    {path:'shop-cart',component:ShopCartComponent, pathMatch: 'full'},
    {path:'shop-single',component:ShopSingleComponent, pathMatch: 'full'},
    {path:'checkout-details',component:CheckoutDetailsComponent, pathMatch: 'full'},
    {path:'checkout-shipping',component:CheckoutShippingComponent, pathMatch: 'full'},
    {path:'checkout-payment',component:CheckoutPaymentComponent, pathMatch: 'full'},
    {path:'checkout-review',component:CheckoutReviewComponent, pathMatch: 'full'},
    {path:'checkout-complete',component:CheckoutCompleteComponent, pathMatch: 'full'},
    {path:'my-addresses',component:AddressesComponent, pathMatch: 'full'},
    {path:'my-orders',component:OrdersComponent, pathMatch: 'full'},
    {path:'my-wishlist',component:WishlistComponent, pathMatch: 'full'},
    {path:'forgot-password',component:ForgotPasswordComponent, pathMatch: 'full'},
    {path:'my-payment',component:PaymentComponent, pathMatch: 'full'},
    {path:'my-profile',component:ProfileComponent, pathMatch: 'full'},
    {path:'my-signin',component:SigninComponent, pathMatch: 'full'},
    {path:'404',component:Error404Component, pathMatch: 'full'},
    {path:'contact',component:ContactComponent, pathMatch: 'full'},
    {path:'help-topics',component:HelpTopicsComponent, pathMatch: 'full'},
];
