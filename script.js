let cursos = document.querySelector("#inputNome");
let saida = document.querySelector("#saida");
const receberEvento = document.querySelector("#inputEvento");
listasCursos = [];

const enviar = (event) => {
    event.preventDefault();

    const dados = cursos.value;
    if (dados === '') {
        alert("insira valor válido.");
        return
    }

    listasCursos.push(dados);

    popular()
    cursos.value = null;

}


const popular = (e) => {
    limpar(saida)
    listasCursos.forEach(element => {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.classList.add("formatUl")
        ul.appendChild(li);

        li.innerHTML = element
        saida.appendChild(ul);

    });
}

const limpar = (e)=>{
    while (e.firstChild){
        e.removeChild(e.firstChild)
    }

}
receberEvento.addEventListener('click', enviar);