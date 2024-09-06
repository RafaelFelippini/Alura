function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //se campoPesquisa for uma sting vazia
  if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado</p>"
return
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {

    // Verifica se o termo de pesquisa está presente no título ou descrição

    if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) ||
        dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase()) || 
        dado.tags.toLocaleLowerCase().includes(campoPesquisa.toLowerCase())){

      // Cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descrição-meta">${dado.descricao}</p>
        </div>
      `;
    }
  }

if (!resultados) {
resultados = "<p>Nada foi encontrado</p>"
}

  // Atribui o HTML construído à seção de resultados
  section.innerHTML = resultados;
}