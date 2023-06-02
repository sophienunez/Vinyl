import { LikesAttributes } from "../components/Likes/Likes";
import { SuggestionAttributes } from "../components/Suggestions/Suggestions";
import "../components/export";
import { data } from "../data";
import { DataShape } from "../data";
import { addObserver, dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { Screens } from "../Types/types";

export default class Home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="../src/screens/home.css">
        <my-nav></my-nav>
        <my-player></my-player>
        <my-add></my-add>
        `;

    }
}

customElements.define("my-home", Home);
