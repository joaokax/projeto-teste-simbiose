import React from "react";

export default function Cadastro() {
    return (
        <>
            <h2>Cadastro</h2>
            <div class="form-container">
                <form>

                    <label for="perfil">Perfil</label>
                    <input type="text" id="nome" name="Nome" placeholder="nome" />
                    <br />

                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="nome" />
                    <br />

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="email" />
                    <br />

                    <label for="item">Item</label>
                    <input type="text" id="item" name="item" placeholder="item" />
                    <br />

                    <button type="submit" value="Salvar">Salvar</button>
                </form>
            </div>
        </>
    );
}