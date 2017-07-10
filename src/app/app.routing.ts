import { Routes, RouterModule } from '@angular/router';
import { MarketComponent } from "app/pages/market/market.component";

export const routes: Routes = [
    // otherwise redirect to home
    { path: '**', redirectTo: '/' }
];

export const AppRouting = RouterModule.forRoot(routes);