const botaoNome = document.getElementById("buttonName")
const botaoNota = document.getElementById("buttonNota")
const form = document.getElementById("form")
const listaAlunos = document.getElementById('lista')
const aluno = document.getElementById('aluno')
const nota = document.getElementById('nota')

const divNome = document.getElementById("divNome")
const divNota = document.getElementById("divNota")

let x = 0
let estudante = { nome: '', nota: [] }

botaoNome.addEventListener("click", function(e) {
    e.preventDefault()
    alunoAdd()
    divNome.style = "display: none"
    divNota.style = "display: flex;"
})

botaoNota.addEventListener("click", function(e) {
    e.preventDefault()
    notaAdd()
    showOnScreen()
})

function alunoAdd() {
    if (aluno.value === "") {
        alert("Por favor, digite um nome")
        return
    }
    estudante.nome = aluno.value
    estudante.nota = [] 
}



function notaAdd() {
    let notaDoAluno = parseInt(nota.value)
    if (nota.value === "" || isNaN(notaDoAluno) || nota.value <0 || nota.value >10) {
        alert("Por favor, digite um número válido e que seja entre 0 e 10")
        return
    }

    estudante.nota.push(notaDoAluno)
}


form.addEventListener("submit", function(e) {
    e.preventDefault()
    alunos.push(estudante)
    estudante = { nome: '', nota: [] }
    console.log('Alunos:', alunos)
})

function showOnScreen(){
    if(estudante.nota.length < 1){
        return
    } 
    listaAlunos.innerHTML = `<h3>Aluno: ${estudante.nome}</h3>`
    for(let i=0 ; i<estudante.nota.length; i++){
        listaAlunos.innerHTML += `<li>${estudante.nota[i]}`
    }
}