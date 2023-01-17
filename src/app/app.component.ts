import { Component } from '@angular/core';
import { Appareil } from './appareil/Appareil'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  UA:  Appareil[] = [{nom: 'Macbook M1', nb: 12},{nom: 'Apple 1', nb: 12}]

  items = [ {name: 'livre A '},
            {name: 'livre A '},
            {name: 'livre B '},
            {name: 'livre C '},
          ]

  isVisible: boolean = true

  changeVisibilty (){
    this.isVisible = ! this.isVisible
  }
}
