import {
    LitElement,
    html
} from 'lit-element'

class EventHandle extends LitElement {
    static get properties() {
        return {
            sayac: {
                type: Number
            }
        }
    }

    constructor() {
        super();
        this.sayac = 0;
    }

    render() {

        return html `
           <button @click=${() => this.sayac +=1 } >Arttır</button>
        <span>Sayaç değeri : ${this.sayac}</span>
          <button @click = ${this.decrementOp}>Azalt</button>
         `
    }

    decrementOp(){
        this.sayac -=1;
    }

}

customElements.define('event-handler', EventHandle);