import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SaconceptComponent } from './saconcept/saconcept.component';
import { PipeconceptComponent } from './pipeconcept/pipeconcept.component';
import { DiconceptComponent } from './diconcept/diconcept.component';
import { ReferencesComponent } from './references/references.component';
import { DcloadingComponent } from './dcloading/dcloading.component';
import { FormsComponent } from './forms/forms/forms.component';
import { GridsystemComponent } from './bootstrap4/gridsystem/gridsystem.component';
import { ComponentsComponent } from './bootstrap4/components/components.component';
import { UtilitiesComponent } from './bootstrap4/utilities/utilities.component';
import { ControlValueComponent } from './control-value/control-value.component';

const conceptRoutes: Routes = [
    {
        path: '', component: BaseComponent,
        children: [
            { path: '' , redirectTo: '/databinding', pathMatch: 'full'},
            { path: 'databinding', component: DataBindingComponent },
            { path: 'directives', component: DirectivesComponent },
            { path: 'saconcepts', component: SaconceptComponent },
            { path: 'pipeconcepts', component: PipeconceptComponent },
            { path: 'diconcepts', component: DiconceptComponent },
            { path: 'reference', component: ReferencesComponent },
            { path: 'dcloading', component: DcloadingComponent },
            { path: 'forms', component: FormsComponent },
            { path: 'grids', component: GridsystemComponent },
            { path: 'b4components', component: ComponentsComponent },
            { path: 'utilities', component: UtilitiesComponent },
            { path: 'controlvalueaccessor', component: ControlValueComponent }
        ]
    },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forChild(conceptRoutes)],
    exports: [RouterModule]
})
export class ConceptsRoutingModule { }
