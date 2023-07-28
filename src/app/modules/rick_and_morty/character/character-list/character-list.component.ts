import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass'],
  providers: [DatePipe],
})
export class CharacterListComponent implements OnInit {
  rows = [];
  loading = true;
  isModalByCharacterOpen = false;
  infoByCharacter: any = null;

  constructor(private core: CoreService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.core.getCharacters().subscribe(
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

  getCharacter(id: number) {
    this.core.getCharacter(id).subscribe((data) => {
      this.openModalByCharacter(data);
    });
  }

  openModalByCharacter(data: any) {
    data['dateFormat'] = this.dateFormated(data['created'].substring(0, 10));
    data['hourFormat'] = data['created'].substring(11, 19);
    this.isModalByCharacterOpen = true;
    this.infoByCharacter = data;
  }

  dateFormated(date: string) {
    const dateFormat = new Date(date);
    return this.datePipe.transform(dateFormat, 'EEEE, d MMMM y');
  }
}
