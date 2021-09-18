import { LitElement, html } from 'lit-element' 
class MultipleRender extends LitElement{
   //! Bir butonumuz var, Üzerindeki yazı ve işlevi her tıklamada değişecek.  

   static get properties(){
       return {
           message : {type : String},
           showMessage:{type: Boolean},
           disabled: {type : Boolean}
       }
   }
  

   render(){
       if (this.disabled) {
           return html ` element disabled` 
       }
       return html `
         <div>
             <button @click=${() => this.showMessage = !this.showMessage}>
                 ${this.showMessage ? 'Gizle' : 'Göster'}
            </button>
            <div>
                ${this.showMessage ? html`Mesaj: ${this.message}` 
                                   : '' }
            </div>
            
         </div>     
         
         <button type="button" @click=${this.work}>Tıkla</button>
         <button type="button" id="yakala">Tıkla</button>
        
       `



   }

   work(){
      this.shadowRoot.querySelector('#yakala').addEventListener('click',function () {
          alert('merhaba');          
      })
   }
}

customElements.define('multiple-render',MultipleRender);
