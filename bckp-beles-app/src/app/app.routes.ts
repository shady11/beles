import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LastComponent } from './articles';

// Route Configuration
const routes: Routes = [
    { path: "latest", component: LastComponent },
    { path: "", component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);