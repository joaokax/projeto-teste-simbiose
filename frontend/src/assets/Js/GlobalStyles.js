import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        text-decoration: none;
        color: #061a0c;
    }
    body {
        background-color: #f1f1f1;
        background-image: url('wallpaper.jpg');
        background-repeat: repeat;
    }
    img {
        border-radius: 12px;
        background-color: #444;
        box-shadow: -10px 10px 0px #2BF38B;
    }

    // TABELA
    .container-list {
      background-color: #E5FFF6;
      border-radius: 12px;
      margin:20px auto;
      left: 0;
      right: 0;
      max-width: 700px;
      overflow-x: auto;
      padding: 20px;
      box-shadow: -20px 20px 0px #7FFFD4;
    }

    table {
    border-collapse: collapse;
    width: 100%;
    overflow-x: auto;
    padding: 10px;
    margin: 10px 0 10px 0;
    }

    thead{
    font-weight: 600;
    }

    th, td {
    padding: 10px 15px;
    text-align: left;
    border-bottom: 1px solid #CCFFEE;
    margin: 15px 0 15px 0;
    max-width: 100px;
    overflow-wrap: break-word;
    }

    tr {
    background-color: transparent;
    transition: .2s;
    }

    tr:hover {
    background-color: #CCFFEE;
    }

    // MODAL

    .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000000e0;
    opacity: 0;
    z-index: -1;
  }
  
  .modal.active {
    opacity: 1;
    z-index: 1;
  }
  
  .modal-content {
    width: 100%;
    max-width: 500px;
    display: flex;
    padding: 1em;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
    margin: 15vh auto;
    padding-bottom: 1em;
    background-color: #E5FFF6;
    box-shadow: -20px 20px 0px #7FFFD4;
  }
  
  .modal-header {
    display: flex;
    position: relative;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    font-size: 1rem;
  }
  
  .modal-close {
    position: absolute;
    right: 0;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    user-select: none;
    cursor: pointer;
  }
  
  .modal-close:hover {
    background-color: #2BF38B;
    color: white;
  }
  
  .modal-form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 20px;
  }
  
  .modal-field {
    width: 100%;
    height: 40px;
    outline-style: none;
    border-style: none;
    box-shadow: 0 0 2px black;
    padding: 0 10px;
    font-size: 1rem;
    border-radius: 12px;
  }
  
  .modal-field:focus {
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 3px var(--primary-color);
  }
  
  .modal-footer {
    background-color: inherit;
    text-align: right;
    padding: 0 20px;
  }
  
  @media (max-width: 480px) {
    .modal {
      top: 100%;
      transition: all 1s ease;
    }
    .modal.active {
      top: 0;
    }
    .modal-content {
      margin: 0;
      width: 100%;
      position: fixed;
    }
    .modal-field {
      width: 100%;
    }
  }
  
  // BUTÕES

  .button{
    border-style: none;
    border-radius: 9px;
    height: 40px;
    width: 100%;
    padding: 6px 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    background-color: #2BF38B;
    transition: box-shadow .6s ease;
}

button.green{
    background-color: #2BF38B;
}

button.red {
    background-color: transparent;
}

.button:hover{
    opacity: 0.9;
}

@media(max-width:480px){
    .button.mobile{
        color:transparent;
        font-size:0;
        width:50px;
        height:50px;
        border-radius: 50%;
        position:fixed;
        top: 90vh;
        left: 80vw;
    }
    .button.mobile::before{
        content: "+";
        color:black;
        font-size:2rem;
        width:100%;
        height:100%;
    }
  }
`;
