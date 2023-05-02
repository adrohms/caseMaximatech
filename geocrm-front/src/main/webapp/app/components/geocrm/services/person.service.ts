import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IPerson, getPersonId } from '../models/Person.model';

export type EntityResponseType = HttpResponse<IPerson>;
export type EntityArrayResponseType = HttpResponse<IPerson[]>;

@Injectable({ providedIn: 'root' })
export class PersonService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/person');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(person: IPerson): Observable<EntityResponseType> {
    return this.http.post<IPerson>(this.resourceUrl, person, { observe: 'response' });
  }

  update(person: IPerson): Observable<EntityResponseType> {
    return this.http.put<IPerson>(`${this.resourceUrl}/${getPersonId(person) as number}`, person, {
      observe: 'response',
    });
  }

  partialUpdate(person: IPerson): Observable<EntityResponseType> {
    return this.http.patch<IPerson>(
      `${this.resourceUrl}/${getPersonId(person) as number}`,
      person,
      { observe: 'response' }
    );
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPerson>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  findAllPersons(params: HttpParams): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(`${this.resourceUrl}/persons`, { params });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPerson[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addPersonToCollectionIfMissing(
    personCollection: IPerson[],
    ...personsToCheck: (IPerson | null | undefined)[]
  ): IPerson[] {
    const persons: IPerson[] = personsToCheck.filter(isPresent);
    if (persons.length > 0) {
      const personCollectionIdentifiers = personCollection.map(
        person => getPersonId(person)!
      );
      const personsToAdd = persons.filter(person => {
        const personIdentifier = getPersonId(person);
        if (personIdentifier == null || personCollectionIdentifiers.includes(personIdentifier)) {
          return false;
        }
        personCollectionIdentifiers.push(personIdentifier);
        return true;
      });
      return [...personsToAdd, ...personCollection];
    }
    return personCollection;
  }
}
