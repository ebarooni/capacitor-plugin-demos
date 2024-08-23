import { Pipe, PipeTransform } from '@angular/core';
import { PlatformFilter } from '../../../../services/store/store.service';

export interface MethodDetails {
  method: () => void;
  name: string;
  supportedPlatforms: string[];
}

@Pipe({
  name: 'filterForPlatform',
  standalone: true,
})
export class FilterForPlatformPipe implements PipeTransform {
  transform(
    methodsArray: MethodDetails[],
    platform?: PlatformFilter,
  ): MethodDetails[] {
    if (platform) {
      const lowerCasedPlatform = platform?.toLowerCase();
      return methodsArray.filter(
        (method) =>
          method.supportedPlatforms.includes(lowerCasedPlatform) ||
          lowerCasedPlatform === 'all',
      );
    } else return methodsArray;
  }
}
