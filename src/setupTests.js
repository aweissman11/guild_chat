import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  }
}

configure({ adapter: new Adapter() });

class LocalStorage {
  constructor() {
    this.store = {};
  }

  getItem = (key) => {
    return this.store[key]
  }

  setItem = (key, value) => {
    this.store[key] = value;
  }

  removeItem = (key) => {
    delete this.store[key];
    console.log('fires')
  }

  clear = () => {
    this.store = {}
  }

}

export default LocalStorage;