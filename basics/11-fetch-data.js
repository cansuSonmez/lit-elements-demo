import {
    LitElement,
    html,
    css
} from 'lit'
class FetchData extends LitElement {
    static get properties() {
        return {
            data: {
                type: Object
            },
            response: {
                type: Array
            },
            url: {
                type: String
            },
            totalPages: {
                type: Number
            },
            pages: {
                type: Number
            }

        }
    }

    constructor() {
        super();
        this.response = [];
        this.url = 'https://swapi.dev/api/people';
        this.totalPages = 0;
        this.pages = [];

    }
/** Bileşen ilk oluştuğunda (initial) firstUpdated çalışır: */
    async firstUpdated() {        
        await this.fetchStarWars(this.url);
        this.totalPages = Math.ceil(this.data.count / this.data.results.length);       
        this.generateArray(this.totalPages);
        }


/** Her event çağrıldığında connectedCallback çalışmalı  */
    connectedCallback() {
        super.connectedCallback();
        console.log('connected Callback');
        this.fetchStarWars(this.url);
    }

    async fetchStarWars(url) {

        await fetch(url)
            .then(x => x.json())
            .then(p => {
                this.data = p;
                //console.log(p);
                //this.totalPages = this.data.count / this.data.results.length;
                //console.log(this.totalPages);
                this.response = p.results;


            });
    }

    generateArray(number) {
        for (let index = 1; index <= number; index++) {
            this.pages.push(index);

        }
    }

    render() {
        return html `
       <button @click=${this.prev} ?disabled=${this.data?.previous ? false:true}>Önceki</button> 
      
             ${this.pages.map(x=>html `<button @click=${this.getPage}>${x}</button>|`)}
        
        <button @click=${this.next} ?disabled=${this.data?.next ? false:true}>Sonraki</button>
         <ul>
             ${this.response.map(p =>this.show(p))}
         </ul>
       `
    }

    getPage(event) {
        // console.log(event);
        let number = event.path[0].innerText;
        this.url = 'https://swapi.dev/api/people/?page=' + number;
        this.connectedCallback();
        // event.preventDefault();
    }
    show(person) {
        return html `
       <li>
         <div class='character'>
            <h3 class='title'>
               ${person.name}       
            </h3>
            <hr>
            <div class="details">
                <p>
                    Cinsiyet: ${person.gender}
                </p>
            </div>
         </div>
         </li>
       `
    }

    next() {
        //console.log(this.data.next);    

        this.url = this.data.next;
        this.connectedCallback();

    }

    prev() {
        this.url = this.data.previous;
        this.connectedCallback();
    }

    static get styles() {
        return css `
         li{
             float:left;
             margin:10px;
         }
         ul{
             list-style:none;
         }
         .character{
             background-color:darkorange;
            /**  color:white;*/
            padding:10px;
            border-radius:10px;
            box-shadow: 5px 5px 10px gray;

         }
      `;

    }




}

customElements.define('fetch-data', FetchData)