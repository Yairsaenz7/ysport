import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksGifComponent } from './works-gif.component';

describe('WorksGifComponent', () => {
  let component: WorksGifComponent;
  let fixture: ComponentFixture<WorksGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
