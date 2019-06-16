import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersearchComponent } from './headersearch.component';

describe('HeadersearchComponent', () => {
  let component: HeadersearchComponent;
  let fixture: ComponentFixture<HeadersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
