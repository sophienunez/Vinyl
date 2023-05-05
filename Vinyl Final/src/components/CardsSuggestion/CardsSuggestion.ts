export enum CardsSuggestionAttributes {
    "card_img" = "card_img",
    "song_name" = "song_name",
    "album_name" = "album_name"
}

export default class CardsSuggestion extends HTMLElement {
    card_img?: string;
    album_name?: string;
    song_name?: string;

    static get observedAttributes(){
        const attrs: Record <CardsSuggestionAttributes, null> = {
            card_img: null,
            album_name: null,
            song_name: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: CardsSuggestionAttributes,
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
            <link rel="stylesheet" href="../src/components/CardsSuggestion/CardsSuggestion.css">
            <h1>${this.album_name}</h1>
            <h1>${this.song_name}</h1>
            <img src="${this.card_img}" class="suggestion-img"></img>
            `;
        }
    }
}

customElements.define("my-cardssuggestion", CardsSuggestion);