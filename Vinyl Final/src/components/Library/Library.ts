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
            
            `;
        }
    }
}

customElements.define("my-library", Library);