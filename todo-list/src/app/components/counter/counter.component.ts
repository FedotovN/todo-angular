import { Component } from "@angular/core"

@Component({
    templateUrl: 'counter.component.html',
    selector: 'app-counter',
    styleUrls: ['counter.component.scss']
})
export class CounterComponent{
    name: '';
    trueOrFalse: boolean = false;
    baseCounter: number = 0

    ngOnInit() {
        console.log('initialized!')
    }
}