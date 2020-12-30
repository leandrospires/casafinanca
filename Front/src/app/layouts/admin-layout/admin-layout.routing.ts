import { Routes } from '@angular/router';

import { IdeiaComponent } from 'app/pages/ideia/ideia.component';
import { InicioComponent } from 'app/pages/inicio/inicio.component';
import { PlanilhandoComponent } from 'app/pages/planilhando/planilhando.component';
import { OpcoesComponent } from 'app/pages/opcoes/opcoes.component';
import { EvoluindoComponent } from 'app/pages/evoluindo/evoluindo.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'ideia',          component: IdeiaComponent },
    { path: 'inicio',         component: InicioComponent },
    { path: 'planilhando',    component: PlanilhandoComponent },
    { path: 'opcoes',         component: OpcoesComponent },
    { path: 'evoluindo',      component: EvoluindoComponent }
];
