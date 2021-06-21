import { Body } from './Body';
import { Header } from './Header';

export class Doc {
  Header;
  Body;
  tmp;
  constructor() {
    this.Header = new Header();
    this.Body = new Body();
    this.tmp = 'Hello World';
    console.log('was here');
  }
}
