import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custom'
})
export class CustomPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value.toLowerCase().replace(/\W/g, '')
    }
}