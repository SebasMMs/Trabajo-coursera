import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { PageTitleComponent } from './components/page-title/page-title.component'

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [PageTitleComponent],
  exports: [PageTitleComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
