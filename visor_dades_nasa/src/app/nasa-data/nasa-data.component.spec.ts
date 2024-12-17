import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaDataComponent } from './nasa-data.component';

describe('NasaDataComponent', () => {
  let component: NasaDataComponent;
  let fixture: ComponentFixture<NasaDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaDataComponent]
    });
    fixture = TestBed.createComponent(NasaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
