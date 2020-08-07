class FooterBar extends HTMLElement{
  constructor(){
    super();
    this.innerHTML = `
    <style>
      .icons{
        position: fixed;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, -10%);
        background: white;
      }
      .icons a{
        padding: 12px;
        padding-top: 10px;
        padding-bottom: 4px;
      }
      @media screen and (max-width: 500px){
        .icons{
          display: flex;
          justify-content: center;
        }
      }
    </style>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class= "container"></div>
    <div class="icons card">
      <a href="https://www.linkedin.com/in/jinanshshah/" target="_blank" class="fa fa-linkedin"></a>
      <a href="http://github.com/jshah98/" target="_blank" class="fa fa-github"></a>
      <a href="https://medium.com/@jshah98" target="_blank" class="fa fa-medium"></a>
      <a href="https://www.instagram.com/jshah98/" target="_blank" class="fa fa-instagram"></a>
    </div>
    `;
  }
}
window.customElements.define('footer-bar', FooterBar);
