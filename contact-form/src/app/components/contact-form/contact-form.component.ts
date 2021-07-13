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

  Subjects: any = ['Temat wiadomości', 'Kolejny temat', 'I jeszcze jeden! :)']

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      nip: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      messageSubject: ['', Validators.required],
      drivingLicense: [''],
      message: [''],
      drivingLicenseYes: [false],
      drivingLicenseNo: [true],
      marketingContact: [false, Validators.required],
      telephoneContact: [false]
    });
  }

  changeCity(e:any) {
    console.log(e.value)
    this.frm.messageSubject.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onSubmit(){
    this.submitted = true;
      console.log('Nazwa Firmy / Imię i nazwisko: ', this.frm.name.value);
      console.log('Numer NIP: ', this.frm.nip.value);
      console.log('E-mail: ', this.frm.email.value);
      console.log('Numer telefonu: ', this.frm.phone.value);
      console.log('Temat: ', this.frm.topic.value);
      console.log('Prawo jazdy kat. B: ', this.frm.drivingLicense.value);
      console.log('Treść wiadomości: ', this.frm.message.value);
  }

  selectAll(){
    console.log('selectAll?');
    this.frm.marketingContact.setValue(!this.frm.marketingContact.value);
    this.frm.telephoneContact.setValue(!this.frm.telephoneContact.value);
    // this.frm.marketingContact.patchValue(true);
    // this.frm.telephoneContact.patchValue(true);
  }
}
