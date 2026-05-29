import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { AboutRoutingModule } from './about-routing.module'
import { AboutComponent } from './about.component'
import { SharedModule } from '~/app/shared/shared.module'

@NgModule({
  imports: [NativeScriptCommonModule, AboutRoutingModule, SharedModule],
  declarations: [AboutComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AboutModule {}
