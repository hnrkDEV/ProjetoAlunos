const botaoNome = document.getElementById("buttonName")
const botaoNota = document.getElementById("buttonNota")
const form = document.getElementById("form")
const listaAlunos = document.getElementById('lista')
const aluno = document.getElementById('aluno')
const nota = document.getElementById('nota')
let informacoes = ``
let x= 0
let y = 0

const alunos = []


let nomeDoAluno = aluno.value

const estudante = {nome: nomeDoAluno, nota: []}

botaoNome.addEventListener("click", function(e){
    x++
    e.preventDefault()
    alunoAdd()
})

botaoNota.addEventListener("click", function(e){
    e.preventDefault()
    notaAdd()
})
function alunoAdd(){
    if(aluno.value === "" ){
        alert("por favor, digite um nome")
        return
    }
    estudante.nome = aluno.value
    alunos.push(estudante)
    }

function notaAdd(){

    let notaDoAluno = parseInt(nota.value)
    if(nota.value === "" || isNaN(notaDoAluno)){
        alert("por favor, digite um número válido")
        return
    }

    if(x != 0){
        estudante.nota[y] = nota.value
        alunos.push(estudante)
        y++
    }   else if(x = 0){

    }

}

