import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true, alias: 'price'})
  planPrice: number = 0;

  @Input({required: true, alias: 'text'})
  planType: string = "";

  @Input({required: true, alias: 'color'})
  cardColor: 'orange' | 'purple' = 'orange';

  @Output('buttonClicked') buttonClickedEmitt = new EventEmitter<void>()
  buttonClicked(){
    this.buttonClickedEmitt.emit()
  }
}
