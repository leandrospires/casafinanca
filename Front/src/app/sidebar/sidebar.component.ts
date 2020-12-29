import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'ideia',         icon:'nc-bulb-63',       class: '' },
    { path: '/icons',         title: 'inicio',        icon:'nc-button-play',    class: '' },
    { path: '/maps',          title: 'planilhando',   icon:'nc-money-coins',      class: '' },
    { path: '/notifications', title: 'opções',        icon:'nc-tap-01',    class: '' },
    { path: '/user',          title: 'evoluindo',      icon:'nc-user-run',  class: '' },

    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
