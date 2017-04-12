import { Component, OnInit } from '@angular/core';

import { NavItem } from '../../shared/classes/index';
import { CoreService } from '../../shared/services/index';

@Component({
    moduleId: module.id,
    selector: 'beles-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

    navItems1: NavItem[];
    navItems2: NavItem[];

    constructor(private coreService: CoreService) { }

    getHeaderNavItems1(): void {
        this.coreService.getHeaderNavItems1()
            .subscribe(
                navItems1 => this.navItems1 = navItems1
            );
    }

    getHeaderNavItems2(): void {
        this.coreService.getHeaderNavItems2()
            .subscribe(
                navItems2 => this.navItems2 = navItems2
            );
    }

    ngOnInit() {
        this.getHeaderNavItems1();
        this.getHeaderNavItems2();
    }

}