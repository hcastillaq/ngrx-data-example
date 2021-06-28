import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Contact } from '../entities/contact';

@Injectable({ providedIn: 'root' })
export class ContactCollectionService extends EntityCollectionServiceBase<Contact> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Contact', serviceElementsFactory);
  }
}
