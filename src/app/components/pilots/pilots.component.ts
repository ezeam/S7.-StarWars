  import { Component, inject, Input, OnInit } from '@angular/core';
  import { forkJoin, Observable } from 'rxjs';
  import { Pilot } from '../../interfaces/pilot';
  import { StarWarsService } from '../../services/star-wars.service';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-pilots',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pilots.component.html',
    styleUrl: './pilots.component.css'
  })
  export class PilotsComponent implements OnInit {
    @Input() pilots!: string[];
    pilotsData$!: Observable<Pilot[]>;
  
    constructor(private starWarsService: StarWarsService) {}
  
    ngOnInit():void {
      window.scrollTo(0, 0);
      if (this.pilots && this.pilots.length > 0) {
        const requests = this.pilots.map(url => this.starWarsService.getPilotDetails(url));
        this.pilotsData$ = forkJoin(requests);
      }
    }
  
    getPicture(url: string): string {
      const id = url.split('/');
      return `https://starwars-visualguide.com/assets/img/characters/${id[5]}.jpg`;
    }
  }
