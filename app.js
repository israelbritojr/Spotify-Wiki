function pesquisar() {
    // Obtém o elemento da seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Obtém o elemento do campo pesquisa onde o campo da pesquisa sera exibido
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Tratamento para caso o Campo de pesquisar não conter nada
    if(campoPesquisa == ""){
        section.innerHTML = "<h3>Nada foi encontrado!<h3>"
        return; // Nada que estiver abaixo do código vai ser executado;
    }

    // Tratamento para encontrar independente de letra lower ou upper
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma variável para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let nomeMusica = "";

    // Itera sobre o array 'dados', onde cada 'dado' contém as informações de uma música
    for (let dado of dados) {
        // Tratamento para pesquisa
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        nomeMusica = dado.nomeMusica.toLowerCase();     
        // Se no dado titulo, descricao ou nomeMusica includes existir no campo de pesquisa então executa 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || nomeMusica.includes(campoPesquisa)){
        // Concatena um bloco de HTML para cada item de resultado
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo} - ${dado.nomeMusica}</h2> <!-- Exibe o título e nome da música -->
            <p class="descricao-meta">${dado.descricao}</p> <!-- Exibe a descrição da música -->
            <div id="musicaeletra"> <!-- Container para o áudio e o link da letra -->
                <audio controls preload="none"> <!-- Adiciona o player de áudio -->
                    <source src="${dado.srcMusica}" type="audio/mpeg"> <!-- Define a fonte do arquivo de áudio -->
                    Your browser does not support the audio element. <!-- Mensagem caso o navegador não suporte o player de áudio -->
                </audio>
                <a href="${dado.linkLetra}" target="_blank">Letra da música ${dado.nomeMusica}</a> <!-- Link para a letra da música, abre em nova aba -->
            </div>
        </div>
        `;
        }
    }

    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;

    if (!resultados){
        section.innerHTML = "<h3>Nada foi encontrado!</h3> <p>Você precisa digitar uma música ou um gênero dos anos 2000!</p>"
    }
}



