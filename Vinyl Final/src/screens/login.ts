import "../components/export"

export default class Login extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const register = this.shadowRoot?.querySelector('.registro');
        register?.addEventListener('click', ()=>{
            const newUser = new CustomEvent('new-user', {
                composed: true
            })
            this.dispatchEvent(newUser);
            console.log('click');
        })

        const home = this.shadowRoot?.querySelector('.home');
        home?.addEventListener('click', ()=>{
            const logUser = new CustomEvent('user-login', {
                composed: true
            })
            this.dispatchEvent(logUser);
            console.log('click');
        })
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
                            <button class="home"> Continue</button>
                        </form>
                    </div>
                </div>
        </section>
        
        `;
    }
}

customElements.define("my-login", Login);