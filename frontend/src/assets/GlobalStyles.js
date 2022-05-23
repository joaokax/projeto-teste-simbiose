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

`;
