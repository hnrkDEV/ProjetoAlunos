const form = document.getElementById("form")
const listaAlunos = document.getElementById('lista')
let informacoes = ``

form.addEventListener("submit", function(e){
    e.preventDefault()
    const aluno = document.getElementById('aluno')
    const nota = document.getElementById('nota')
    if(nota.value === "" ) {
        alert('por favor, digite algum número')
        return
    }  else if(isNaN(nota.value)){
        alert('por favor, digite somente números')
    } else {
    const nomeDoAluno = aluno.value
    let notaDoAluno = nota.value
    notaDoAluno = parseInt(notaDoAluno)

    alunos[0].notas.push(nota.value)
    
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
})
    


const alunos = [
    {nome: "Daniel", notas: [1,3,3,8]},
    {nome: "Maria", notas: [10,7,8,9]},
    {nome: "João", notas: [10,6,3,0]}
]






