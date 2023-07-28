import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesListComponent } from './episode-list.component';

describe('EpisodesListComponent', () => {
  let component: EpisodesListComponent;
  let fixture: ComponentFixture<EpisodesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodesListComponent],
    });
    fixture = TestBed.createComponent(EpisodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
