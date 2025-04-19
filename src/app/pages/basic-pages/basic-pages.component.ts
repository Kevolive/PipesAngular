import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, Inject, LOCALE_ID, signal } from '@angular/core';
import { AvaliableLocale, LocalService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-pages',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPagesComponent {

  localService= inject(LocalService);
currentLocale = signal(inject(LOCALE_ID));

nameLower = signal("kevin")
nameUpper = signal("KEVIN")
fullName = signal("KeVin olIVelLa")

customDate = signal(new Date())


tickingDateEffect = effect((onCleanup) => {
  const interval = setInterval(() => {
    this.customDate.set(new Date());
    console.log("tick");

  }, 1000);
  onCleanup(() => {
    clearInterval(interval);

});
});

changeLocale(locale: AvaliableLocale) {
  console.log(locale);

  this.localService.changeLocale(locale);
}
}
