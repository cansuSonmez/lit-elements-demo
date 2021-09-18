import { LitElement, html } from 'lit-element'

class PropertiesVSAttributes extends LitElement{
    static get properties(){
        return {
            href:{type: String},
            checked: {type: Boolean},
            label: {type: String},
            message: {type: String},
            prefix: {type: String}
        }
    }

    constructor() {
        super();
        this.label = 'Türkay Ürkmez';
        this.checked = true;
        this.href = 'https://www.turkayurkmez.com',
        this.message = 'Bu bir mesajdır';
        this.ek = 'Sayın '
    }
    
    render(){
        //! Eğer, boolean bir attribute set ediyorsanız, başına ? koymak gerekiyor.
        //* Bir lit bileşeni, template içinde başka bir bileşen kullanılabilir.
        console.log(this.checked);
        return html `
           <a .href=${this.href}>${this.label}</a>         
           <input type="checkbox" ?checked=${this.checked}     />

           <msg-creator prefix='UYARI: ' .message=${this.message}  >
           </msg-creator>
        `
    }

}

customElements.define('prop-attribute',PropertiesVSAttributes)

class MessaggeCreator extends LitElement{
  static get properties(){
       return {
           message: {type :String},
           prefix : {type: String}
       }
  }
  render(){
      return html ` 
         <div>${this.prefix} ${this.message}</div>
      `
  }
}  

customElements.define('msg-creator',MessaggeCreator);