import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { IPerson, Person } from '../models/Person.model';
import { PersonService } from '../services/person.service';



@Injectable({ providedIn: 'root' })
export class GeocrmRoutingResolveService implements Resolve<IPerson> {
  constructor(protected personService: PersonService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPerson> | Observable<never> {
    const id = route.params['id'];
    if (id && id !== 'new') {
      return this.personService.find(id).pipe(
        mergeMap((person: HttpResponse<Person>) => {
          if (person.body) {
            return of(person.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Person());
  }
}
