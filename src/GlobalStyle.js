import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --white-color: #fff;
    --yellow-color: #FEE23E;
    --red-color: #E43932;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
    border:0;
    font-family: 'Poppins', sans-serif;
  }
  

  html, body, #root {
    height: 100vh;
    width: 100vw;
    overflow:hidden;
  }


  li {
    list-style:none;
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after {
    background: var(--yellow-color);
  }
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-right:after {
    background: var(--yellow-color);
  }

`;
