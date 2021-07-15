import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message/service/message.service';
import { DomhandlerService } from './common/domhandler.service';
import { ProgressloaderComponent } from './progressloader/progressloader.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    ProgressloaderComponent
  ],
  exports: [
    MessageComponent,
    ProgressloaderComponent
  ],
  providers: [ MessageService, DomhandlerService ]
})
export class ControlsModule { }
