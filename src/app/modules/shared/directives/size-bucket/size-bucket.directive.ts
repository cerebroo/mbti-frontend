import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {SizeBucket} from './size-bucket.enum';


@Directive({selector: '[mbSetSizeBucket]'})
export class SizeBucketDirective {

  private currentBucket: SizeBucket;

  constructor(private renderer: Renderer2, private host: ElementRef) {
    this.configureSizeBucket();
  }

  @HostListener('window:resize')
  configureSizeBucket() {
    const sizeBucket = this.getSizeBucket();

    if (this.currentBucket !== sizeBucket) {
      this.setSizeBucket(sizeBucket);
    }
  }

  getSizeBucket(): SizeBucket {
    const width = window.innerWidth;
    if (width >= 1920) {
      return SizeBucket.XL;
    } else if (width >= 1280) {
      return SizeBucket.LG;
    } else if (width >= 960) {
      return SizeBucket.MD;
    } else if (width >= 600) {
      return SizeBucket.SM;
    } else {
      return SizeBucket.XS;
    }
  }

  setSizeBucket(bucket: SizeBucket) {
    const el = this.host.nativeElement;

    // remove all size classes
    Object.keys(SizeBucket).forEach(key => {
      this.renderer.removeClass(el, SizeBucket[key]);
    });

    console.log('size bucket', bucket);
    this.renderer.addClass(el, bucket as string);
  }
}
