import { LikesAttributes } from "../components/Likes/Likes";
import { SuggestionAttributes } from "../components/Suggestions/Suggestions";
import "../components/export";
import "../screens/export"
import { dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { Screens } from "../Types/types";
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

    handlehomeButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.HOME));
          console.log('Click handle button to back to home') 
    }

    handleAddButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.LIBRARY));
          console.log('Click handle button to library') 
    }

    handleLikesButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.LIKES));
          console.log('Click handle button to likes') 
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="../src/screens/add.css">
        
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
        
        <div class= "addcontent">
        <h2>Sube Tus Favoritos</h2>  
        <div class="inputs">      
        <input type="text" placeholder="Producto">
        <input type="text" placeholder="Precio">
        <button class="toupload">Subir</button>
        </div>
        </div>
        `;

        const btnhome = this.shadowRoot?.querySelector('.tohome');
            console.log(btnhome);
            btnhome?.addEventListener("click", this.handlehomeButton);

            const btnlibrary = this.shadowRoot?.querySelector('.tolibrary');
            console.log(btnlibrary);
            btnlibrary?.addEventListener("click", this.handleAddButton);

            const btnlikes = this.shadowRoot?.querySelector('.tolikes');
            console.log(btnlikes);
            btnlikes?.addEventListener("click", this.handleLikesButton);        

    }
}

customElements.define("my-add", Add);