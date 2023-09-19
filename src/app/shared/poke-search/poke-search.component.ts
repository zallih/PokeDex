import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {

  @Output() public emmiterSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
    // console.log(value);
    this.emmiterSearch.emit(value);
  }
}
