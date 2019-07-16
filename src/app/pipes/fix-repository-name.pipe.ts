import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fixRepositoryName'
})

export class FixRepositoryNamePipe implements PipeTransform 
{
    transform(value: any, args?: any): any
    {
        return value.replace(/-/g, ' ');
    }
}
