import {Component, OnInit} from '@angular/core';
import {ScrollEvent} from 'ngx-scroll-event';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: []
})

export class LandingComponent implements OnInit {

    goTop = false;
    goBot = false;

    constructor() {
    }

  ngOnInit() {}

    public handleScroll(event: ScrollEvent) {
        if (event.isReachingBottom) {
            console.log('Abajo');
            this.goTop = true;
            this.goBot = false;
        } else if (event.isReachingTop) {
            console.log('Arriba');
            this.goTop = false;
            this.goBot = !this.goBot;
        }

    }

    goToTheTop() {
        window.scroll(0, 0);
    }

    goToTheBottom() {
        window.scroll(0, 3000);
    }


}
