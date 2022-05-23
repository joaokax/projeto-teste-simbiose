import React, {useEffect, useState} from "react";
import api from "../services/api";

export default function Index() {

    const [results, setResults] = useState([])

    useEffect(() => {
        api.get('api').then(({data}) => {
            setResults(data.results)
        })
        console.log(results)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>

        <div className="container-table">

            <h2>Index</h2>
            {results.map((result) => (
                <div key={result.email ? result.email : Math.random()}>
                    <h4>
                        {`Esse é seu email: ${result.email}
                    e seu nome: ${result.name.first}
                    `}
                    </h4>
                </div>
                
            ))}


            <div class="table-responsive">
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
                    {results.map((result) => (
                        <tr key={result.email ? result.email : Math.random()}>
                            <td><img src={result.picture.medium} alt="foto perfil" /></td>
                            <td>{`${result.name.first} ${result.name.last}`}</td>
                            <td>{result.email}</td>
                            <td>0000</td>
                            <td>
                                <button type="submit" value="Editar">Editar</button>
                                <button type="submit" value="Deletar">Deletar</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            </div>
        </>
    );
}
