import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe, KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
      } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const client1 = {
  name: 'Kevin',
  gender: 'male',
  age: 32,
  address: 'Villanueva'
}
const client2 = {
  name: 'Debora',
  gender: 'female',
  age: 29,
  address: 'Maracay'
}

@Component({
  selector: 'app-uncommon-pages',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-pages.component.html',
})
export default class UncommonPagesComponent {

  //i18nSelectPipe
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return
    };

    this.client.set(client1);

  }
  //i18nPluralPipe

  clientsmap = signal({
    '=0': 'no tenemos ningún cliente en espera...',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  })
  clients = signal(['Kevin', 'Debora', 'Jorge', 'María', 'Pedro', 'Luis', 'Carmen', 'Ana', 'José', 'Juan']);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));

  }

  //keyvaluepipe
  profile = {
    name: 'Kevin',
    age: 32,
    address: 'Villanueva, Colombia',
  }
//AsyncPipe
promiseValue: Promise<string>= new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Acá la promesa que se resolvió');
    console.log('Promesa resuelta');

  }, 3000);
});

  myObservabletimer = interval(2000)
  .pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap', value)),
  );
}
