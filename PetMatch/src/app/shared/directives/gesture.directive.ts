import { Directive, EventEmitter, HostListener, Output } from '@angular/core'

@Directive({
  selector: '[nsLongPress]',
})
export class LongPressDirective {
  @Output() longPress = new EventEmitter<void>()
  private pressTimer: any

  @HostListener('touchstart', ['$event'])
  onTouchStart(): void {
    this.pressTimer = setTimeout(() => {
      this.longPress.emit()
    }, 500)
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    if (this.pressTimer) {
      clearTimeout(this.pressTimer)
    }
  }
}

@Directive({
  selector: '[nsDoubleTap]',
})
export class DoubleTapDirective {
  @Output() doubleTap = new EventEmitter<void>()
  private lastTap = 0

  @HostListener('tap', ['$event'])
  onTap(): void {
    const now = new Date().getTime()
    if (now - this.lastTap < 300) {
      this.doubleTap.emit()
      this.lastTap = 0
    } else {
      this.lastTap = now
    }
  }
}
