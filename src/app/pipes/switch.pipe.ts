import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'switch'
})
export class SwitchPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '是' : '否';
  }

}
