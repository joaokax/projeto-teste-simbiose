import React from "react";

export default function Index() {

    return (
        <>
            <main className="container-list">
                <button type="button" className="button" id="cadastrarProduto">Cadastrar Produto</button>
                <table id="tableClient" className="records">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Perfil</th>
                            <th>Cliente</th>
                            <th>E-mail</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <div className="modal" id="modal">
                    <div className="modal-content">
                        <header className="modal-header">
                            <h2>Digite seu item</h2>
                            <span className="modal-close" id="modalClose">&#10006;</span>
                        </header>
                        <form id="form" className="modal-form">
                            <input type="text" id="produto" data-index="new" className="modal-field" placeholder="Item"
                                required />
                        </form>
                        <footer className="modal-footer">
                            <button id="salvar" className="button green">Salvar</button>
                            <button id="cancelar" className="button red">Cancelar</button>
                        </footer>
                    </div>
                </div>
                <button type="button" className="button red mobile" id="delete-all">Excluir Lista</button>
            </main>
        <div id="output"></div>

        </>
    );
}
