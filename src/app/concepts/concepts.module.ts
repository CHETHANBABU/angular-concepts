import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
    ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from '../charts/public_api';
import { BaseComponent } from './base/base.component';
import { ConceptsRoutingModule } from './concepts.routeConfig';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CommonUtilModule } from '../commonUtil/commonUtil.module';
import { DirectivesComponent } from './directives/directives.component';
import { SaconceptComponent } from './saconcept/saconcept.component';
import { PipeconceptComponent } from './pipeconcept/pipeconcept.component';
import { DiconceptComponent } from './diconcept/diconcept.component';
import { ReferencesComponent } from './references/references.component';
import { DcloadingComponent } from './dcloading/dcloading.component';
import { FordynamicComponent } from './fordynamic/fordynamic.component';
import { HostComponent } from './host/host.component';
import { HostdDirective } from '../concepts/directives/hostd.directive';
import { FormsComponent } from './forms/forms/forms.component';
import { GridsystemComponent } from './bootstrap4/gridsystem/gridsystem.component';
import { ComponentsComponent } from './bootstrap4/components/components.component';
import { UtilitiesComponent } from './bootstrap4/utilities/utilities.component';
import { ViewCComponent } from './view-c/view-c.component';
import { ControlValueComponent } from './control-value/control-value.component';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ConceptsRoutingModule,
      ChartsModule,
      CommonUtilModule
    ],
    declarations: [
        BaseComponent,
        DataBindingComponent,
        DirectivesComponent,
        SaconceptComponent,
        PipeconceptComponent,
        DiconceptComponent,
        ReferencesComponent,
        DcloadingComponent,
        FordynamicComponent,
        HostComponent,
        HostdDirective,
        FormsComponent,
        GridsystemComponent,
        ComponentsComponent,
        UtilitiesComponent,
        ViewCComponent,
        ControlValueComponent,
    ],
    entryComponents: [FordynamicComponent],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class ConceptConfigModule { }
