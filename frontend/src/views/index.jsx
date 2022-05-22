import React, {useEffect, useState} from "react";
import api from "../services/api";

export default function Index() {

    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('api').then(({data}) => {
            setResults(data)
        })
        console.log(results)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <h2>Index</h2>
            <div class="table-responsivo">
                <table>
                    <thead>
                        <tr>
                            <th>Perfil</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Item</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </>
    );
}
