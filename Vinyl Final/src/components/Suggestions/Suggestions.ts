import {CardsSuggestionAttributes} from "../CardsSuggestion/CardsSuggestion";

export enum SuggestionAttributes {
    "card_img" = "card_img",
    "song_name" = "song_name",
    "album_name" = "album_name"
}

export default class Suggestions extends HTMLElement {
    card_img: string = "";
    song_name: string = "";
    album_name: string = "";

    static get observedAttributes(){
        const attrs: Record <SuggestionAttributes, null> = {
            card_img: null,
            song_name: null,
            album_name: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: SuggestionAttributes,
        _: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;

        const container = this.ownerDocument.createElement('section');

        const cardsFigure = this.ownerDocument.createElement('my-cardssuggestion');
        cardsFigure.setAttribute(CardsSuggestionAttributes.card_img, this.card_img);
        cardsFigure.setAttribute(CardsSuggestionAttributes.song_name, this.song_name);
        cardsFigure.setAttribute(CardsSuggestionAttributes.album_name, this.album_name);

        container.appendChild(cardsFigure);

        this.shadowRoot?.append(container);
    }
}

customElements.define('my-suggestions', Suggestions);