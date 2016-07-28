import { Greeting, Subject } from './constants';

export default class Foo {
    say() {
        return `${Greeting}, ${Subject}`;
    }
}