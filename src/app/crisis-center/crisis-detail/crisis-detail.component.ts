import { Component, OnInit, Input } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { CrisisService } from '../crisis.service';
import { DialogService } from '../../dialog.service';
@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  @Input() crisis: Crisis | undefined;
  editName: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.crisis = data['crisis'];
      this.editName = this.crisis.name
    });
  }
  cancel() {
    this.goToCrises();
  }
  save() {
    this.crisis.name = this.editName;
    this.goToCrises();
  }

  goToCrises() {
    //{id: 1} -> Route optional parameter
    this.router.navigate(['../', { id: this.crisis.id }]);
  }

  // canDeactivate(): Observable<boolean> | boolean {
  //   //this method can return sync true if no crisis was changed, but it can also send a  Promise/Observable and the router will wait for that to resolve to truthy(navigate) or falsy (stay on the current route).
  //   if (this.crisis.name == this.editName) {
  //     return true;
  //   }
  //   return this.dialogService.confirm('Discard changes');
  // }
}
