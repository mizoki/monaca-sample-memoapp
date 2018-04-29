import {Component, ViewChild} from '@angular/core';
import {OnsSplitterContent, OnsSplitterSide} from 'ngx-onsenui';
import {HomePage} from './home';
import {MenuPage} from './menu';
import {AboutPage} from './about';
import {SettingPage} from './setting';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class MyApp {
  @ViewChild(OnsSplitterContent) content: OnsSplitterContent;
  @ViewChild(OnsSplitterSide) side: OnsSplitterSide;

  pages = {
    home: HomePage,
    menu: MenuPage,
    about: AboutPage,
    setting: SettingPage
  };

  load(name) {
    if (this.pages.hasOwnProperty(name)) {
      this.content.element.load(this.pages[name]);
      this.side.element.close();
    } else {
      console.error(`page ${name} not found`);
    }
  }
}
