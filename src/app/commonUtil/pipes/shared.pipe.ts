import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

@Pipe({name: 'pipeRegex'})
export class PipeRegex implements PipeTransform {
  transform(value: any, to: any, expr: any, script: any, arg: any): any {
    switch(script) {
      case 'replace': return value.replace(expr, to);
      case 'split': return value.split(expr)[arg];
    }   
  }
}
