const form = document.getElementById("form")
const listaAlunos = document.getElementById('lista')
const aluno = document.getElementById('aluno')
const nota = document.getElementById('nota')
let informacoes = ``
const alunos = []

form.addEventListener("submit", function(e){
    e.preventDefault()
    alunoAdd()
    showOnScreen()
    
})
    
function alunoAdd(){
    if(nota.value === "" ) {
        alert('por favor, digite algum número')
        return
    }  else if(isNaN(nota.value)){
        alert('por favor, digite somente números')
    } else {


    let nomeDoAluno = aluno.value
    let notaDoAluno = nota.value
    notaDoAluno = parseInt(notaDoAluno)
    console.log(nomeDoAluno)

    const estudante = {nome: nomeDoAluno}
    

    alunos.push(estudante)

    }
}

function showOnScreen(){
    informacoes = `<h1>Informações de Alunos</h1>`
    for(let i = 0; i < alunos.length; i++) {
    informacoes += `<li>Aluno: ${alunos[i].nome}<br>
    <h2>notas:</h2>
    <ul>`
    for(let x = 0; x < alunos[i].notas.length; x++){
        informacoes += `<li>${alunos[i].notas[x]}</li>`
    }
        informacoes +=`</ul>`
}
    listaAlunos.innerHTML = informacoes
    informacoes = ``
    }

