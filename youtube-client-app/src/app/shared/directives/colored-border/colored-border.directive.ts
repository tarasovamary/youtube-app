import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

const TimeInMilliseconds = {
  sixMonth: 6 * 30 * 24 * 60 * 60 * 1000,
  sevenDays: 7 * 24 * 60 * 60 * 1000,
  oneMonth: 1 * 30 * 24 * 60 * 60 * 1000,
}

enum BorderColors {
  red = 'red',
  yellow = 'yellow',
  green = 'limegreen',
  blue = 'blue',
}

@Directive({
  selector: '[appColoredBorder]'
})

export class ColoredBorderDirective implements OnChanges {
  @Input('appColoredBorder') publishedDate: string;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnChanges(): void {
    const timeAfterPublication = this.getTimeInMilliseconds('') - this.getTimeInMilliseconds(this.publishedDate);
    const setColoredBorder = this.getColoredBorder(timeAfterPublication);

    this.render.setStyle(this.el.nativeElement, 'border-color', setColoredBorder);
  }

  getColoredBorder(timeAfterPublication: number): string {
    if (timeAfterPublication > TimeInMilliseconds.sixMonth){
      return BorderColors.red;
    }
    if (TimeInMilliseconds.sevenDays < timeAfterPublication && timeAfterPublication < TimeInMilliseconds.oneMonth){
      return BorderColors.green;
    } 
    if (timeAfterPublication < TimeInMilliseconds.sevenDays) {
      return BorderColors.blue;
    }
    return BorderColors.yellow;
  }

  getTimeInMilliseconds(date: string): number {
    if (date) {
      return new Date(date).getTime();
    }
    return new Date().getTime();
  }
}
