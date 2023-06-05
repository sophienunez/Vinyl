import "../export";
import { addObserver, dispatch } from "../../Strore/index";
import { navigate } from "../../Strore/actions";
import { Screens } from "../../Types/types";

export enum ProfileAttributes {
    "profile_img" = "profile_img",
    "profile_name" = "profile_name"
}

export default class Myprofile extends HTMLElement {

    profile_img?: string;
    profile_name?: string;

    static get observedAttributes(){
        const attrs: Record <ProfileAttributes, null> = {

            profile_img: null,
            profile_name: null

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: ProfileAttributes,
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
        addObserver(this)
    }

    connectedCallback(){
        this.render();         
    }

    handlehomeButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.HOME}));
          console.log('Click handle button to back to home') 
    }

    handleLibraryButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.LIBRARY}));
          console.log('Click handle button to library') 
    }


    handleLikesButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.LIKES}));
          console.log('Click handle button to likkes') 
    }


    handleSignOutButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.SIGNOUT}));
          console.log('Click Sign Out') 
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/Profile/profile.css">
        <div id="sidebar">
        <nav class="nav">
        <h2>Vinyl</h2>
        <h3>Hello!</h3>
         <ul>
         <input type="search" class="search" placeholder="Search">
         <div class="buttons">
         <button class="tohome">Home</button>
         <button class="tolibrary">Library</button>
         <button class="tolikes"><3</button>
         <button class="toprofile">Profile</button>
         </div>
         </ul>
        </nav>
        </div>

        <div class="Profile">
        <div class="user_info">
        <img src="${this.profile_img}" class="like-img"></img>
        <h3>Profile</h3>
        <h1>${this.profile_name}</h1>
        </div>
        <div class="change_info">
        <h2>Change Password</h2>
        <h3>Old Password</h3>
        <h3>New Password</h3>
        <button class="Change_btn">Change</button>
        </div>
        <div class="options">
        <button class="settings">Settings</button>
        <button class="premium">Get Premium</button>
        <button class="help">Help</button>
        <button class="sign_out">Sign Out</button>
        </div>
        </div>
        `;

        const btnhome = this.shadowRoot?.querySelector('.tohome');
        console.log(btnhome);
        btnhome?.addEventListener("click", this.handlehomeButton);

        const btnlibrary = this.shadowRoot?.querySelector('.tolibrary');
        console.log(btnlibrary);
        btnlibrary?.addEventListener("click", this.handleLibraryButton);

        const btnlikes = this.shadowRoot?.querySelector('.tolikes');
        console.log(btnlikes);
        btnlikes?.addEventListener("click", this.handleLikesButton);

        const btnsignout = this.shadowRoot?.querySelector('.sign_out');
        console.log(btnsignout);
        btnsignout?.addEventListener("click", this.handleSignOutButton);
    }
}

customElements.define("my-componentprofile", Myprofile);