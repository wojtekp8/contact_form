import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ValidationExp } from '../../core/helpers/constans';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  get frm() { return this.contactForm.controls; }
  Subjects: any = ['Współpraca', 'Następny temat', 'Kolejny...']

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      nip: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      messageSubject: ['', Validators.required],
      drivingLicense: [false],
      message: [''],
      marketingContact: [, Validators.required],
      telephoneContact: []
    });
  }


  onSubmit() {
    this.submitted = true;
    if (!this.contactForm.valid || !this.frm.marketingContact.value) {
      return;
    } else {
      console.log('Nazwa Firmy / Imię i nazwisko: ', this.frm.name.value);
      console.log('Numer NIP: ', this.frm.nip.value);
      console.log('E-mail: ', this.frm.email.value);
      console.log('Numer telefonu: ', this.frm.phone.value);
      console.log('Temat: ', this.frm.messageSubject.value);
      console.log('Prawo jazdy kat. B: ', this.frm.drivingLicense.value);
      console.log('Treść wiadomości: ', this.frm.message.value);
      console.log('Zgoda na przetwarzanie danych osobowych: ', this.frm.marketingContact.value);
      console.log('Zgoda na kontakt telefoniczny: ', this.frm.telephoneContact.value);
    } 
  }

  selectAll(): void {
    this.frm.marketingContact.setValue(!this.frm.marketingContact.value);
    this.frm.telephoneContact.setValue(!this.frm.telephoneContact.value);
  }
}
