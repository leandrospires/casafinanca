import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/ideia',         title: '1.ideia',         icon:'nc-bulb-63',       class: '' },
    { path: '/inicio',        title: '2.inicio',        icon:'nc-button-play',    class: '' },
    { path: '/planilhando',   title: '3.planilhando',   icon:'nc-money-coins',      class: '' },
    { path: '/opcoes',        title: '4.opções',        icon:'nc-tap-01',    class: '' },
    { path: '/evoluindo',     title: '5.evoluindo',      icon:'nc-user-run',  class: '' }
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
