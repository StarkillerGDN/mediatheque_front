import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtworksComponent } from './list-artworks.component';

describe('ListOeuvresComponent', () => {
  let component: ListArtworksComponent;
  let fixture: ComponentFixture<ListArtworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArtworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
