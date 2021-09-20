import {
    LitElement,
    html,
    css
} from 'lit-element'

class EventHandle extends LitElement {
    static get styles(){
        return css `
      .container{
          background-color : pink;
          font-family: 'Trebuchet MS';
        margin: auto;
        width: 60%;
        border: 3px solid #black;
        padding: 10px;
      }
      .buton{
        width:70px;
        height: 25px;
       
      }
      .div1{
          background-color:grey;
          margin: auto;
          width: 60%;
          border: 3px solid #black;
          padding: 10px;
      }

        `;
    }
    static get properties() {
        return {
            deger: {type: Number },
            sayac:{type:Number}
        }
    }

    constructor() {
        super();
        this.deger = 0;
        this.sayac=0;

        setInterval(()=>{
            this.sayac = this.sayac < this.deger ? this.sayac + 1 : 0; 
         }, 2000);
    }

  
    render() {

        return html `
        <div class="container">

        <div class="div1"> 
        <button @click=${() => this.deger +=1  } class="buton">Arttır</button>
       <span>Sayaç değeri : ${this.deger}</span>
         <button @click = ${this.decrementOp} class="buton">Azalt</button>
            </div>
          
        
         <div class="div1">
           <p> Sayac :[${this.sayac}]</p>
         </div>
        
        </div>
         
         `;
    }

    decrementOp(){
        this.deger==0 ? this.deger=0:this.deger-=1;
    }

    

}

customElements.define('sayac-handler', EventHandle);