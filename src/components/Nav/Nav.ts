import "../../components/export"
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

    handleHomeButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.HOME));
          console.log('Click back to home') 
        }

    handleLibraryButton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.LIBRARY));
          console.log('Click handle to library button') 
        }
    
    handleAddButton(event: any) {
        event?.preventDefault();
            dispatch(navigate(Screens.ADD));
            console.log('Click handle to add button') 
        }
    handleLikesButton(event: any) {
        event?.preventDefault();
            dispatch(navigate(Screens.LIKES));
            console.log('Click handle to likes button') 
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
         <button class="tohome">Home</button>
         <button class="tolibrary">Library</button>
         <button class="toadd">+</button>
         <button class="tolikes"><3</button>
         </ul>
        </nav>
        </div>
        `;

        const btnhome = this.shadowRoot?.querySelector('.tohome');
        console.log(btnhome);
        btnhome?.addEventListener("click", this.handleHomeButton);  

        const button = this.shadowRoot?.querySelector('.tolibrary');
        console.log(button);
        button?.addEventListener("click", this.handleLibraryButton);

        const btn = this.shadowRoot?.querySelector('.toadd');
        console.log(btn);
        btn?.addEventListener("click", this.handleAddButton);

        const btnlikes = this.shadowRoot?.querySelector('.tolikes');
        console.log(btnlikes);
        btnlikes?.addEventListener("click", this.handleLikesButton);

    }
}

customElements.define("my-nav", Nav);