export default class Nav extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/Nav/Nav.css">
        <div id="sidebar">
        <nav class="nav">
        <h2>Vinyl</h2>
        <h3>Hello Isa!</h3>
         <ul>
         <input type="search" class="search" placeholder="Search">
         <li>Home</li>
         <li>Library</li>
         <li>+</li>
         <li><3</li>
         <li>PLaylist</li>
         </ul>
        </nav>
        </div>
        `;
    }
}

customElements.define("my-nav", Nav);