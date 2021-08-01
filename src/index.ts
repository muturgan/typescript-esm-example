import path from 'path';
import moment from 'moment';
import { sayHello } from './utils/say_hallo';

sayHello();
console.log(path.join(process.cwd(), '..'));
console.log(moment().format());