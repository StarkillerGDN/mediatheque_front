import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOeuvresComponent } from './list-oeuvres.component';

describe('ListOeuvresComponent', () => {
  let component: ListOeuvresComponent;
  let fixture: ComponentFixture<ListOeuvresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOeuvresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOeuvresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
