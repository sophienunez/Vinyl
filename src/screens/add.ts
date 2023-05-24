import { LikesAttributes } from "../components/Likes/Likes";
import { SuggestionAttributes } from "../components/Suggestions/Suggestions";
import "../components/export";
import { data } from "../data";
import { DataShape } from "../data";

export default class Add extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="../src/screens/add.css">
        <h2>Aquí Puedes Subir Tus Favoritos</h2>        
        <input type="text" placeholder="Producto">
        <input type="text" placeholder="Precio">
        <button class="toupload">Subir</button>
        `;

    }
}

customElements.define("my-add", Add);