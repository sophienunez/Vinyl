import "../components/export"
import { dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { Screens } from "../Types/types";


export default class Login extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
        
    }

        handleLoginButton(event: any) {
            event?.preventDefault();
              dispatch(navigate(Screens.HOME));
              console.log('Click handle button') 
            }

             handletoRegisterButton(event:any){
                event?.preventDefault();
                dispatch(navigate(Screens.REGISTER));
                console.log('Click button to Register');
                
             }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/login.css">
        <section>
        
                <div class="form-box">
                    <div class="form-value">
                        <form action="">
                            <h2>Log In</h2>
                            
                            <div class="inputbox">
                               <input type="email" required>
                               <label for="">Email</label>
                            </div>
        
                            <div class="inputbox">
                               <input type="password" required>
                               <label for="">Password</label>
                            </div>
        

                            <div class="forget">
                               <label for="">
                               <a href="#">Did You Forget Your Password</a>
                            </div>
                            <div class="registered">
                               <label for="">
                               <a class="registro">¿No tienes una cuenta? Registrate</a>
                            </div>
                            <button class="home">Continue</button>
                        </form>
                    </div>
                </div>
        </section>
        
        `;
        const button = this.shadowRoot?.querySelector('.home');
        console.log(button);
        button?.addEventListener("click", this.handleLoginButton);

        const buttontoregister = this.shadowRoot?.querySelector('.registro');
        console.log(button);
        buttontoregister?.addEventListener("click", this.handletoRegisterButton);
    }
}

customElements.define("my-login", Login);