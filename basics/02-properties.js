import { LitElement, html } from 'lit-element';

class UsingProperties extends LitElement{
 
     static get properties(){
         return {
             textMessage: {type: String},
             showCount : {type: Number}
         }
     }

     constructor() {
         super();
         this.showCount =5;
         this.textMessage = 'deneme';
     }

     render(){
         return html`
           <div>
               <p>
                   Bu elementin mesajı, ${this.textMessage} ve mesajın gösterilme sayısı
                   ${this.showCount}
               </p>
               <p>
                   Bu mesajın tersten yazılışı: ${this.reverseMessage(this.textMessage)}
               </p>
           </div>
         `;
     }

     reverseMessage(word){
         return word.split('').reverse().join('');
     }
}

customElements.define('using-property', UsingProperties);