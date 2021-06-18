import ReactDOM from "react-dom";
import { makeAutoObservable, autorun } from "mobx";
import AppleStore from "./mobx/appleStore.js";
import AppleBasket from "./mobx/AppleBasket.jsx";

const appleStore = new AppleStore();

autorun(()=> {
  if (appleStore.isPicking) console.log('又在采摘新苹果了');
  else console.info(`摘完了, 饮茶先`)
});

ReactDOM.render(<AppleBasket store={ appleStore } />, document.getElementById('app'))
