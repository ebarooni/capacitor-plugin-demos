import { Pipe, PipeTransform } from '@angular/core';
import { MethodDetails } from '../filter-for-platform/filter-for-platform.pipe';

@Pipe({
  name: 'filterForMethod',
  standalone: true,
})
export class FilterForMethodPipe implements PipeTransform {
  transform(
    methodsArray: MethodDetails[],
    searchString?: string,
  ): MethodDetails[] {
    if (searchString) {
      return methodsArray.filter((method) =>
        method.name.includes(searchString),
      );
    } else return methodsArray;
  }
}
