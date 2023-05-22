import './screens/export';
import {addObserver, appState} from "./Strore/index"
import { Screens } from "./Types/types";


class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;
        switch (appState.screen) {

            case Screens.LOGIN:
                this.shadowRoot.innerHTML =`<my-login></my-login>`;
            break;

            case Screens.REGISTER:
                this.shadowRoot.innerHTML = `<my-register></my-register>`;
            break;

            case Screens.HOME:
                this.shadowRoot.innerHTML = `<my-home></my-home>`;
            break;
            default:
                break;
    } 
 }
}

customElements.define('app-container', AppContainer)