class MenuBar extends HTMLElement{
  constructor(){
    super();
    this.innerHTML = `
    <style>
      .header{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 24px;
      }
      .menuItems{
        display: flex;
        justify-content: space-evenly;
        border-top: 2px solid #bbb;
        border-bottom: 2px solid #bbb;
      }
      .mobileMenuItems{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .dropbtn {
        border: none;
        cursor: pointer;
        width: 24px;
      }

      /* The container <div> - needed to position the dropdown content */
      .dropdown {
        position: relative;
        display: none;
      }

      /* Dropdown Content (Hidden by Default) */
      .dropdown-content {
        display: none;
        position: absolute;
        z-index: 1;
      }

      /* Links inside the dropdown */
      .dropdown-content a {
        text-decoration: none;
        text-align: right;
        margin-left: -72px;
        display: block;
        width: 80px;
        background: white;
        padding: 16px;
        border-left: 0px solid #bbb;
        border-bottom: 1px solid #bbb;
      }

      /* Change color of dropdown links on hover */
      .dropdown-content a:hover {
      }

      /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
      .show {display:block;}

      .menuButton{
        padding-top: 12px;
        padding-bottom: 12px;
      }

      @media screen and (max-width: 500px) {
        .dropdown{
          display: inline-block;
          justify-content: left;
        }
        .menuItems{
          display: none;
        }
        .mobileMenuItems{
          justify-content: space-between;
        }
        .menuButton{
          padding-top: 8px;
          padding-bottom: 8px;

        }
        .header{
          border-bottom: 2px solid #bbb;
        }
      }
    </style>

    <div class="header">
      <div class="mobileMenuItems">
        <div>
          <h1>Jinansh Shah</h1>
        </div>
        <div class="dropdown">
          <img onclick="myFunction()" class="dropbtn" src="images/menu.png"></img>
          <div id="myDropdown" class="dropdown-content">
          <a class="menuButton" href="/">About me</a>
          <a class="menuButton" href="experience.html">Experience</a>
          <!-- <a class="menuButton" href="portfolio.html">Portfolio</a>
          <a class="menuButton" href="blog.html">Blog</a> -->
          </div>
        </div>
      </div>
      <div class="menuItems">
        <a class="menuButton" href="/">About me</a>
        <a class="menuButton" href="experience.html">Experience</a>
        <!-- <a class="menuButton" href="portfolio.html">Portfolio</a>
        <a class="menuButton" href="blog.html">Blog</a> -->
      </div>
    </div>
    `;
  }
}
window.customElements.define('menu-bar', MenuBar);
