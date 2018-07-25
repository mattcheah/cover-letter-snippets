import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasKeywords'
})
export class HasKeywordsPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    // Only return categories if there is at least 1 keyword in the job description
    return value.filter(cat => cat.jobKeywords > 0);
  }

}
