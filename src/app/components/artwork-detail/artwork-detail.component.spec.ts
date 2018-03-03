import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDetailComponent } from './artwork-detail.component';

describe('OeuvreDetailComponent', () => {
  let component: ArtworkDetailComponent;
  let fixture: ComponentFixture<ArtworkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
