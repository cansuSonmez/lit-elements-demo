import { LitElement,html,css } from 'lit'
class RenderStyles extends LitElement{
   static get styles(){
      return css `
        div{
            padding:10px;
            display:block;
            border:1px dashed red;
            border-radius:20px;
            background-color:silver;
        }
        .warning{
            color:darkred;
            font-family:'Impact';
            font-size:25px;
        }
        .success{
            color:blue;
            font-family:'Trebuchet MS';
            font-size:25px;
        }
      `
   }

   static get properties(){
       return {
           isSuccess: {type : Boolean} 
       }
   }

   constructor() {
       super();
       this.isSuccess=true; 
   }

   render(){
      
       console.log(this.isSuccess);
       return html `
         <button @click=${this.changeClass} >class değiştir</button>
         <div class=${this.isSuccess ? 'success':'warning'}> Bu bir uyarı mesajıdır. </div>
       `
   }

   changeClass(){
       this.isSuccess = !this.isSuccess;
   }
}

customElements.define('render-style',RenderStyles)