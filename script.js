const btnAdd = document.getElementById('btnAdd')
const btnSelect = document.getElementById('btnSelect')
const btnRemove = document.getElementById('btnRemove')
const btnSave = document.getElementById('btnSave')
const outTask = document.getElementById('outTask')
const inputTask = document.getElementById('inputTask')

btnAdd.addEventListener('click', addTask)
btnSelect.addEventListener('click', selectTask)
btnRemove.addEventListener('click', removeTask)
btnSave.addEventListener('click', saveTask)

function addTask() {

    var inTask = inputTask.value
    inTask = inTask.toUpperCase()

    if (inTask == '') {
        alert('Informe uma tarefa!')
        inputTask.focus()
        return
    }

    var h5 = document.createElement("h5");
    var text = document.createTextNode(inTask)

    h5.appendChild(text)
    outTask.appendChild(h5)

    inputTask.value = ""
    inputTask.focus()

}

function selectTask() {

    var h5 = document.getElementsByTagName("h5")
    var qtdH5 = h5.length

    if (qtdH5 == 0) {
        alert("Não há tarefas para selecionar")
        return
    }

    var aux = -1;

    for (var i = 0; i < qtdH5; i++) {
        if (h5[i].className == 'text-danger') {
            h5[i].className = ''
            aux = i
            break
        }
    }

    // se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == qtdH5 - 1) {
        aux = -1
    }

    h5[aux + 1].className = 'text-danger'
}

function removeTask() {

    var h5 = document.getElementsByTagName("h5")
    var qtdH5 = h5.length

    var aux = -1;

    for (var i = 0; i < qtdH5; i++) {
        if (h5[i].className == 'text-danger') {
            aux = i
            break
        }
    }

    if (aux == -1) {
        alert("Selecione uma tarefa para removê-la...")
        return
    }

    // Solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
    if (confirm("Confirma Exclusão de '" + h5[aux].textContent + "'?")) {
        // Remove filhos do bloco
        outTask.removeChild(h5[aux])
    }

}

function saveTask() {

    var h5 = document.getElementsByTagName("h5")
    var qtdH5 = h5.length

    if (qtdH5 == 0) {
        alert("Não há tarefas para serem salvas")
        return
    }

    var tasks = ''
    // Pega todos os h5 (trefas) e une
    for (var i = 0; i < qtdH5; i++) {
        tasks += h5[i].textContent + ';'
    }

    // Armazenando em um único item local
    localStorage.setItem('tarefasDoDia', tasks.substring(0, tasks.length - 1))

    // Deu certo? OK
    if (localStorage.getItem('tarefasDoDia')) {
        alert('Tarefas SALVAS com sucesso!')
    }

}