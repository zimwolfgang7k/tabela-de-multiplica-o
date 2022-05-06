const tabela = (n) => {
const tabelaArray = [];

  for(let linhas = 0;linhas <= n; linhas++) {
    tabelaArray[linhas] = [];
    for(let colunas = 0;colunas <= n;colunas++){
      tabelaArray[linhas][colunas] = linhas * colunas
    }
  }
  
  return console.table(tabelaArray)
}