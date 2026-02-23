import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpUsersComponent } from './http-users/http-users.component'; 
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Default Route
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'contact', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'cart', component: CartComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      
      { path: 'http-users', component: HttpUsersComponent },

      // WILDCARD ROUTE (404)
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

// This is equivalent to: RouterModule.forRoot(routes) but in standalone style.
