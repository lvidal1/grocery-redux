import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from "app/pages/market/market.component";

export const routes: Routes = [
    { path: 'market', component: MarketComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/market' }
];

export const AppRouting = RouterModule.forRoot(routes);