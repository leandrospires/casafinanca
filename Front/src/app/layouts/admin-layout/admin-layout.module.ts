import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';


import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IdeiaComponent } from 'app/pages/ideia/ideia.component';
import { InicioComponent } from 'app/pages/inicio/inicio.component';
import { PlanilhandoComponent } from 'app/pages/planilhando/planilhando.component';
import { OpcoesComponent } from 'app/pages/opcoes/opcoes.component';
import { EvoluindoComponent } from 'app/pages/evoluindo/evoluindo.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    IdeiaComponent,
    InicioComponent,
    PlanilhandoComponent,
    OpcoesComponent,
    EvoluindoComponent,
  ]
})

export class AdminLayoutModule {}
