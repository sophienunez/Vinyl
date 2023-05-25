import "../export"
import { dispatch } from "../../Strore/index";
import { navigate } from "../../Strore/actions";
import { Screens } from "../../Types/types";

export default class Nav extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();         
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

    handleLikesButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.LIKES));
          console.log('Click handle button to likkes') 
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/Nav/Nav.css">
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
        `;

        const btnlibrary = this.shadowRoot?.querySelector('.tolibrary');
        console.log(btnlibrary);
        btnlibrary?.addEventListener("click", this.handleLibraryButton);

        const btnadd = this.shadowRoot?.querySelector('.toadd');
        console.log(btnadd);
        btnadd?.addEventListener("click", this.handleAddButton);

        const btnlikes = this.shadowRoot?.querySelector('.tolikes');
        console.log(btnlikes);
        btnlikes?.addEventListener("click", this.handleLikesButton);
    }
}

customElements.define("my-nav", Nav);