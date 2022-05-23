import React from "react";

export default function Index() {

    return (
        <>
            <header>
                <h1 className="header-title">Cadastrar Itens</h1>
            </header>
            <main>
                <button type="button" className="button" id="cadastrarProduto">Cadastrar Produto</button>
                <table id="tableClient" className="records">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Cliente</th>
                            <th>E-mail</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <div className="modal" id="modal">
                    <div className="modal-content">
                        <header className="modal-header">
                            <h2>Escolha seu produto</h2>
                            <span className="modal-close" id="modalClose">&#10006;</span>
                        </header>
                        <form id="form" className="modal-form">
                            <input type="text" id="produto" data-index="new" className="modal-field" placeholder="Produto"
                                required />
                        </form>
                        <footer className="modal-footer">
                            <button id="salvar" className="button green">Salvar</button>
                            <button id="cancelar" className="button blue">Cancelar</button>
                        </footer>
                    </div>
                </div>
                <button type="button" className="button red mobile" id="delete-all">Excluir Lista</button>
            </main>
        <div id="output"></div>

        </>
    );
}
