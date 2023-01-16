import { Component, OnInit, Input } from '@angular/core';
import { Appareil } from '../appareil/Appareil'

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

@Input() appareil! : Appareil

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
