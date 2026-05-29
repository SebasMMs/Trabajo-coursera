import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'

import { PageTitleComponent } from './components/page-title/page-title.component'
import { MinLengthDirective } from './directives/min-length.directive'
import { LongPressDirective, DoubleTapDirective } from './directives/gesture.directive'

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  declarations: [PageTitleComponent, MinLengthDirective, LongPressDirective, DoubleTapDirective],
  exports: [PageTitleComponent, MinLengthDirective, LongPressDirective, DoubleTapDirective, NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
