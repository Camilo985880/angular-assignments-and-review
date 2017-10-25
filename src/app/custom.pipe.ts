import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'summary'
})

export class CustomPipe implements PipeTransform {

    transform(value: any, limit?: number) {

        if (!value) {
            return null;
        }
        limit = limit ? limit : 50;
        return value.substr(0, limit) + '...';
    }

}