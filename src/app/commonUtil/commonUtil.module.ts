import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/primeng';
import { NvD3Module } from 'ng2-nvd3';

import { CustomdropdownComponent } from './components/customdropdown/customdropdown.component';
import { StackbarComponent } from './charts/stackbar/stackbar.component';
import { HighlightDirective } from './customDirectives/highlight/highlight.directive';
import { ShadowDirective } from './customDirectives/shadow/shadow.directive';
import { DynamichighlightDirective } from './customDirectives/dynamic-highlight/dynamichighlight.directive';
import { BetterhighlightDirective } from './customDirectives/better-highlight/betterhighlight.directive';
import { CIfDirective } from './customDirectives/c-If/c-if.directive';
import { CForDirective } from './customDirectives/c-For/c-for.directive';
import { CDelayDirective } from './customDirectives/c-Delay/c-delay.directive';
import { GaugeComponent } from './charts/gauge/gauge.component';
import { ExponentialStrengthPipe, PipeRegex } from './pipes/shared.pipe';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';
import { TextSearchPipePipe } from './pipes/text-search-pipe.pipe';
import { FormsModule } from '@angular/forms';

const PIPES = [ ExponentialStrengthPipe, PipeRegex ];
const DIRECTIVES = [ ShadowDirective, HighlightDirective, DynamichighlightDirective,
    BetterhighlightDirective, CIfDirective, CForDirective, CDelayDirective, TextSearchPipePipe ];
@NgModule({
    imports: [
      CommonModule,
      NvD3Module,
      DropdownModule,
      FormsModule
    ],
    declarations: [
        PIPES,
        CustomdropdownComponent,
        StackbarComponent,
        GaugeComponent,
        DIRECTIVES,
        SearchDropdownComponent,
        TextSearchPipePipe,
    ],
    exports: [
        PIPES,
        CustomdropdownComponent,
        StackbarComponent,
        GaugeComponent,
        DIRECTIVES,
        SearchDropdownComponent,
    ],
    providers: [ ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class CommonUtilModule { }
