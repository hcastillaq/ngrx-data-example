import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from './entities/contact';
import { ContactCollectionService } from './collectionServices/contact.collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-data';
  contacts: Observable<Contact[]>;
  form: FormGroup;
  loading: Observable<Boolean>;

  constructor(
    private contactCollectionService: ContactCollectionService,
    private fb: FormBuilder
  ) {
    this.contacts = this.contactCollectionService.entities$;

    this.loading = this.contactCollectionService.loading$;

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contactCollectionService.getAll();
  }

  delete(id: number) {
    this.contactCollectionService.delete(id);
  }

  create() {
    const contact: Contact = this.form.value;
    this.contactCollectionService.add(contact, {
      isOptimistic: false,
    });
  }
}
