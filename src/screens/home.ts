import { LikesAttributes } from "../components/Likes/Likes";
import { SuggestionAttributes } from "../components/Suggestions/Suggestions";
import "../components/export";
import { data } from "../data";
import { DataShape } from "../data";
import { dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { Screens } from "../Types/types";

export default class Home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="../src/screens/home.css">
        <my-nav></my-nav>
        <my-player></my-player>
        `;

        data.forEach((elem: DataShape) => {
            const cardLike = this.ownerDocument.createElement("my-likes");
            cardLike.classList.add("cards-like-container");

            cardLike.setAttribute(LikesAttributes.card_img, elem.card_img);
            cardLike.setAttribute(LikesAttributes.song_name, elem.song_name);
            cardLike.setAttribute(LikesAttributes.artist_name, elem.artist_name);

            this.shadowRoot?.appendChild(cardLike);

            
            const cardSuggestion = this.ownerDocument.createElement("my-suggestions");

            cardSuggestion.setAttribute(SuggestionAttributes.card_img, elem.card_img);
            cardSuggestion.setAttribute(SuggestionAttributes.song_name, elem.song_name);
            cardSuggestion.setAttribute(SuggestionAttributes.album_name, elem.album_name);

            this.shadowRoot?.appendChild(cardSuggestion);
        });
    }
}

customElements.define("my-home", Home);
