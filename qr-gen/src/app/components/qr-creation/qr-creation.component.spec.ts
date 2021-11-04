import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCreationComponent } from './qr-creation.component';

describe('QrCreationComponent', () => {
  let component: QrCreationComponent;
  let fixture: ComponentFixture<QrCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
