import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from "app/pages/market/market.component";

export const routes: Routes = [
    { path: 'grocery-redux', component: MarketComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/grocery-redux' }
];

export const AppRouting = RouterModule.forRoot(routes);