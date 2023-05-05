import "./components/export"
import "./screens/home"


enum Screens{
    Register,
    Login,
    Home
}

class AppContainer extends HTMLElement {

    screen: Screens = Screens.Register;



    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();

        const register = this.shadowRoot?.querySelector("my-login");
        register?.addEventListener("new-user", ()=> {
            this.screen = Screens.Login;
            this.render(); 
        })

        const home = this.shadowRoot?.querySelector("my-login");
        home?.addEventListener("user-login", ()=> {
            this.screen = Screens.Home;
            this.render(); 
        })
    }

    render() {
        if (!this.shadowRoot) return;
        switch (this.screen) {

            case Screens.Register:
                this.shadowRoot.innerHTML =`<my-login></my-login>`;
            break;

            case Screens.Login:
                this.shadowRoot.innerHTML = `<my-register></my-register>`;
            break;

            case Screens.Home:
                this.shadowRoot.innerHTML = `<my-home></my-home>`;
            break;
    } 
 }
}

customElements.define('app-container', AppContainer)