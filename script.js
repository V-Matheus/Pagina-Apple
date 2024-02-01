const imagemVisualizacao = document.getElementById('imagem-visualizacao')

const verdeCipreste = {
  nome: 'Verde-cipreste',
  pasta: 'imagens-verde-cipreste',
};

const azulInverno = {
  nome: 'Azul-inverno',
  pasta: 'imagens-azul-inverno',
};

const meiaNoite = {
  nome: 'Meia-noite',
  pasta: 'imagens-meia-noite',
};

const estelar = {
  nome: 'Estelar',
  pasta: 'imagens-estelar',
};

const rosaClaro = {
  nome: 'Rosa-claro',
  pasta: 'imagens-rosa-claro',
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

let imagemSelecionada = 1;

function trocarImagem() {
  const IdOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked',
  ).id;
  imagemSelecionada = IdOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}
