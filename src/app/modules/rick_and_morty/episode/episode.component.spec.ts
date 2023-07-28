import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeComponent } from './episode.component';

describe('EpisodesComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeComponent],
    });
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
