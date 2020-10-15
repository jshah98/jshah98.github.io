class ProfileCard extends HTMLElement{
  constructor(){
    super();
    var s = `
    <style>
    img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      max-width: 400px;
    }
    .card-item{
      margin: 12px;

    }
      @media screen and (max-width: 350px){
      }
    </style>
    <div class="card card-item">

    <div class="vert">
    <h3>${this.getAttribute('title')}</h3>`;
    if (this.getAttribute('company') !== null){
      if(this.getAttribute('link') !== null){
        s=s+`<a href="${this.getAttribute('link')}" target="_blank"><h4>${this.getAttribute('company')}</h4></a>`;
      }
      else{
        s = s+ `<h4>${this.getAttribute('company')}</h4>`;
      }
    }
    if (this.getAttribute('date') !== null){
      s = s+ `<p>${this.getAttribute('date')}</p>`;
    }
    s+=`</div> <div>`
    if (this.getAttribute('description') !== null){
      s = s+ `<p>${this.getAttribute('description')}</p>`;
    }
    if (this.getAttribute('code') !== null){
      s = s+ `${this.getAttribute('code')}`;
    }
    s += `
    </div></div>
    `
    this.innerHTML = s;
  }
}




window.customElements.define('profile-card', ProfileCard);
