import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        text-decoration: none;
    }
    body {
        background-color: #f1f1f1;
    }
    img {
        border-radius: 50%;
        background-color: #444;
        box-shadow: -2px 2px 8px rgba(50, 50, 50, 0.5);
    }

    // TABELA

    .container-table {
        background-color: #444;

    }

    .table-responsive {
    background-color: #ffdc2c;
    } 
    
    table {
    border-collapse: collapse;
    width: 100%;
    overflow-x: auto;
    }

    thead{
    font-weight: 600;
    }

    th, td {
    padding: 10px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    margin: 15px 0 15px 0;
    }

    tr {
    background-color: transparent;
    transition: .2s;
    }

    tr:hover {
    background-color: #f1f1f1;
    }
    .table-responsivo {
    overflow-x: auto;
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
    width: 50vw;
    display: flex;
    padding: 1em;
    flex-direction: column;
    gap: 20px;
    margin: 15vh auto;
    padding-bottom: 20px;
    background-color: #11001c;
    box-shadow: 1px 1px 10px black;
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
    text-align: center;
    user-select: none;
    cursor: pointer;
  }
  
  .modal-close:hover {
    background-color: #ff4949;
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
    width: calc(50% - 10px);
    height: 40px;
    outline-style: none;
    border-style: none;
    box-shadow: 0 0 2px black;
    padding: 0 10px;
    font-size: 1rem;
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
    padding: 6px 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: box-shadow .6s ease;
}

button.yellow{
    background-color:#FFD700;
}

button.green{
    background-color: #13CE66;
}

button.red{
    background-color: #FF4949;
}

button.blue{
    background-color: blue;
}

.button:hover{
    box-shadow: inset 200px 0 0 #00000055;
}

#delete-all{
    position: absolute;
    bottom: 70px;
    right: 120px;
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

`;
