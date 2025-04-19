import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/canFly-case.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-pages',
  imports: [
    ToggleCasePipe,
    CanFlyPipe, HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
  HeroFilterPipe,
  TitleCasePipe
  ],
  templateUrl: './custom-pages.component.html',
})
export default  class CustomPagesComponent {
  name = signal('Kevin Olivella')

  upperCase=signal(true);

  toggleCase():void {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes)

  sortBy = signal<keyof Hero | null>(null)

  searchHero = signal('');

  titleSortBy(value: keyof Hero): void {
     const titlesortByValue = value;
     this.sortBy.set(titlesortByValue)
  }
 }
