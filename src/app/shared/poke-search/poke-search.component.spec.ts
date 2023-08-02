import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSearchComponent } from './poke-search.component';

describe('PokeSearchComponent', () => {
  let component: PokeSearchComponent;
  let fixture: ComponentFixture<PokeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSearchComponent]
    });
    fixture = TestBed.createComponent(PokeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
