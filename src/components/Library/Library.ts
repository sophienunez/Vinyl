import { dispatch } from "../../Strore/index";
import { navigate } from "../../Strore/actions";
import { Screens } from "../../Types/types";

export enum LibraryAttributes {
    "card_img" = "card_img",
    "album_name" = "album_name",
    "artist_name" = "artist_name"
}

export default class Library extends HTMLElement {
    card_img?: string;
    album_name?: string;
    artist_name?: string;

    static get observedAttributes(){
        const attrs: Record <LibraryAttributes, null> = {
            card_img: null,
            album_name: null,
            artist_name: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: LibraryAttributes,
        _: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `

            
        <link rel="stylesheet" href="../src/components/Nav/Nav.css">
        <div id="sidebar">
        <nav class="nav">
        <h2>Vinyl</h2>
        <h3>Hello!</h3>
         <ul>
         <input type="search" class="search" placeholder="Search">
         <li>Home</li>
         <button class="tolibrary">Library</button>
         <button class="toadd">+</button>
         <button class="tolikes"><3</button>
         </ul>
        </nav>
        </div>

        <h2>LIBRARY</h2>
            
            `;
        }
    }
}

customElements.define("my-library", Library);