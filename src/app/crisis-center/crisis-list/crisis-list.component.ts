import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisesListComponent implements OnInit {
  selectedCrisis: Crisis;
  selectedId = 0;
  crises: Crisis[]; //array of type Crisis
  constructor(
    private crisisService: CrisisService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => {
          this.selectedId = Number(params.get('id'));
          return this.crisisService.getCrises();
        })
      )
      .subscribe((data) => (this.crises = data));
  }

  getCrises(): void {
    this.crisisService
      .getCrises()
      .subscribe((crises) => (this.crises = crises));
  }
  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
    this.messageService.add(
      `CrisesComponent: Selected Crisis id = ${this.selectedCrisis.id}`
    );
  }
}
