import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemService from "../services/ItemService"

export default function Index() {
    const [itens, setItens] = useState([]);

    const getAllItens = () => {
        ItemService.getAllItems().then((response) => {
            setItens(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getAllItens();
    }, [])

    const deleteItem = (itemId) => {
        ItemService.deleteItem(itemId).then((response) => {
            getAllItens()
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <h2>Index</h2>
            <div class="table-responsivo">
                <table>
                <tr>
                    <th>Perfil</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>Img</td>
                    <td>Griffin Greald</td>
                    <td>teste@email.com</td>
                    <td>SkateX</td>
                    <td>
                        <button type="submit" value="Editar">Editar</button>
                        <button type="submit" value="Deletar">Deletar</button>
                    </td>
                </tr>
                </table>
            </div>
        </>
    );
}