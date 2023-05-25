import "../../components/export";
import "../../screens/export"
import { dispatch } from "../../Strore/index";
import { navigate } from "../../Strore/actions";
import { Screens } from "../../Types/types";
import { data } from "../../data";
import { DataShape } from "../../data";
import {CardsLikeAttributes} from "../CardsLike/CardsLike";

export enum LikesAttributes {
    "card_img" = "card_img",
    "song_name" = "song_name",
    "artist_name" = "artist_name"
}

export default class Likes extends HTMLElement {
    card_img: string = "";
    song_name: string = "";
    artist_name: string = "";

    static get observedAttributes(){
        const attrs: Record <LikesAttributes, null> = {
            card_img: null,
            song_name: null,
            artist_name: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: LikesAttributes,
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

    handlehomeButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.HOME));
          console.log('Click handle button to back to home') 
    }

    handleLibraryButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.LIBRARY));
          console.log('Click handle button to library') 
    }

    handleAddButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.ADD));
          console.log('Click handle button to add') 
    }


    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Likes/Likes.css">
            <div id="sidebar">
        <nav class="nav">
        <h2>Vinyl</h2>
        <h3>Hello!</h3>
         <ul>
         <input type="search" class="search" placeholder="Search">
         <div class="buttons">
         <button class="tohome">Home</button>
         <button class="tolibrary">Library</button>
         <button class="toadd">+</button>
         <button class="tolikes"><3</button>
         </div>
         </ul>
        </nav>
        </div>
            
            <div class="librarycontent">
            <h2 class="tittle">LIKES</h2>
            </div>
            `;


            const container = this.ownerDocument.createElement('section');
            container.classList.add("likes")



            data.forEach((elem: DataShape) => {
            
            const cardslike = this.ownerDocument.createElement('my-cardslike');
            cardslike.setAttribute(CardsLikeAttributes.card_img, elem.card_img);
            cardslike.setAttribute(CardsLikeAttributes.song_name, elem.song_name);
            cardslike.setAttribute(CardsLikeAttributes.artist_name, elem.artist_name);

            container.appendChild(cardslike);
            this.shadowRoot?.appendChild(container);
            });

            const btnhome = this.shadowRoot?.querySelector('.tohome');
            console.log(btnhome);
            btnhome?.addEventListener("click", this.handlehomeButton);

            const btnlibrary = this.shadowRoot?.querySelector('.tolibrary');
            console.log(btnlibrary);
            btnlibrary?.addEventListener("click", this.handleLibraryButton);

            const btnadd = this.shadowRoot?.querySelector('.toadd');
            console.log(btnadd);
            btnadd?.addEventListener("click", this.handleAddButton);
        }
    }
}

customElements.define("my-likes", Likes);