import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AgentesComponent } from './pages/agentes/agentes.component';
import { AgentesReclutadosComponent } from './pages/agentes-reclutados/agentes-reclutados.component';
import { AgentesDetallesComponent } from './pages/agentes-detalles/agentes-detalles.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'agentes-reclutados', component: AgentesReclutadosComponent },
    { path: 'agentes', component: AgentesComponent},
    { path: 'agentes-detalles/:id', component: AgentesDetallesComponent }
];
