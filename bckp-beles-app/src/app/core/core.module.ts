import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HeaderComponent, FooterComponent } from './';
import { CoreService } from '../shared/services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        CoreService
    ],
})
export class CoreModule {}
