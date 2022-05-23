
export default function GlobalConfig() {

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_produto')) ?? []
const setLocalStorage = (dbProduto) => localStorage.setItem("db_produto", JSON.stringify(dbProduto))

const deleteClient = (index) => {
    const dbProduto = readClient()
    dbProduto.splice(index, 1)
    setLocalStorage(dbProduto)
}

const deleteAllItems = () => {
    // eslint-disable-next-line no-restricted-globals
    const response = confirm(`Tem certeza que deseja excluir todos os itens da tabela?`)
    if (response) {
        const dbProduto = readClient();
        dbProduto.splice(0, dbProduto.length);
        setLocalStorage(dbProduto);
        updateTable();
    }
}

const updateClient = (index, client) => {
    const dbProduto = readClient()
    dbProduto[index] = client
    setLocalStorage(dbProduto)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbProduto = getLocalStorage()
    dbProduto.push (client)
    setLocalStorage(dbProduto)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('produto').dataset.index = 'new'
}

const saveClient = () => {

    if (isValidFields()) {
        const client = {
            produto: document.getElementById('produto').value,
        }
        const index = document.getElementById('produto').dataset.index

        // eslint-disable-next-line eqeqeq
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, index) => {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => { 

        let name = data.results[0].name.first;
        let email = data.results[0].email;
        let picture = data.results[0].picture.medium;

        const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.produto}</td>
        <td><img src=${picture}></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)

    })
}


const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient > tbody > tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbProduto = readClient()
    clearTable()
    dbProduto.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('produto').value = client.produto
    document.getElementById('produto').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    // eslint-disable-next-line eqeqeq
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        // eslint-disable-next-line eqeqeq
        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            // eslint-disable-next-line no-restricted-globals
            const response = confirm(`Deseja realmente excluir o item? ${client.produto}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarProduto')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

document.getElementById('delete-all')
    .addEventListener('click', deleteAllItems)

}