const botaoNome = document.getElementById("buttonName")
const botaoNota = document.getElementById("buttonNota")
const form = document.getElementById("form")
const listaAlunos = document.getElementById('lista')
const aluno = document.getElementById('aluno')
const nota = document.getElementById('nota')

let estudante = { nome: '', nota: [] }

botaoNome.addEventListener("click", function(e) {
    e.preventDefault()
    alunoAdd()
})

botaoNota.addEventListener("click", function(e) {
    e.preventDefault()
    notaAdd()
})

function alunoAdd() {
    if (aluno.value === "") {
        alert("Por favor, digite um nome")
        return
    }
    estudante.nome = aluno.value
    estudante.nota = [] // Resetando as notas ao adicionar um novo aluno
    console.log(`Nome do aluno adicionado: ${estudante.nome}`)
}

function notaAdd() {
    let notaDoAluno = parseInt(nota.value)
    if (nota.value === "" || isNaN(notaDoAluno)) {
        alert("Por favor, digite um número válido")
        return
    }

    estudante.nota.push(notaDoAluno) // Adicionando a nota ao array de notas do estudante
    alert(`Nota adicionada: ${notaDoAluno}`)
    console.log(`Notas do aluno ${estudante.nome}: ${estudante.nota}`)
}

// Para finalizar o cadastro e adicionar o estudante ao array de alunos
form.addEventListener("submit", function(e) {
    e.preventDefault()
    alunos.push(estudante)
    estudante = { nome: '', nota: [] } // Reseta o objeto estudante para o próximo cadastro
    console.log('Alunos:', alunos)
})
