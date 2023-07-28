import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.sass'],
  providers: [DatePipe],
})
export class LocationListComponent implements OnInit {
  rows = [];
  loading = true;
  isModalByLocationOpen = false;
  infoByLocation: any = null;

  constructor(private core: CoreService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.core.getLocations().subscribe(
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

  getLocation(id: number) {
    this.core.getLocation(id).subscribe((data) => {
      this.openModalByLocation(data);
    });
  }

  openModalByLocation(data: any) {
    data['dateFormat'] = this.dateFormated(data['created'].substring(0, 10));
    data['hourFormat'] = data['created'].substring(11, 19);
    this.isModalByLocationOpen = true;
    this.infoByLocation = data;
  }

  dateFormated(date: string) {
    const dateFormat = new Date(date);
    return this.datePipe.transform(dateFormat, 'EEEE, d MMMM y');
  }
}
