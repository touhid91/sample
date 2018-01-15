import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
@Pipe({
  name: 'bypassSanity',
  pure: false
})
export class BypassSanityPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
