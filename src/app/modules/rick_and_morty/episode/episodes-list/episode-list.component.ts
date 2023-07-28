import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass'],
  providers: [DatePipe],
})
export class EpisodeListComponent implements OnInit {
  rows = [];
  loading = true;
  isModalByEpisodeOpen = false;
  infoByEpisode: any = null;

  constructor(private core: CoreService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.core.getEpisodes().subscribe(
      (data) => {
        this.handleLoadData(data);
      },
      (error) => {
        this.handleLoadError(error);
      }
    );
  }

  handleLoadData(data: any) {
    this.rows = data['results'];
    this.loading = false;
  }

  handleLoadError(error: any) {
    console.log(error);
  }

  getEpisode(id: number) {
    this.core.getEpisode(id).subscribe((data) => {
      this.openModalByEpisode(data);
    });
  }

  openModalByEpisode(data: any) {
    data['dateFormat'] = this.dateFormated(data['created'].substring(0, 10));
    data['hourFormat'] = data['created'].substring(11, 19);
    this.isModalByEpisodeOpen = true;
    this.infoByEpisode = data;
  }

  dateFormated(date: string) {
    const dateFormat = new Date(date);
    return this.datePipe.transform(dateFormat, 'EEEE, d MMMM y');
  }
}
