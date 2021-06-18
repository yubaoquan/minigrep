import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import AppleStore from "./mobx/appleStore.js";
import AppleBasket from "./mobx/AppleBasket.jsx";

const appleStore = new AppleStore();

ReactDOM.render(<AppleBasket store={ appleStore } />, document.getElementById('app'))
