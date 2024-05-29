function CriarTabela() {
    // cCriando a eestrutura da tabela
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Nome do jogador

    var nome = prompt("digite seu nome");
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    td_nome.colSpan = 5;
    thead.appendChild(tr_nome);
    tr_nome.appendChild(td_nome);

    // BINGO

    const tr_titulo = document.createElement("tr");
    const letras = ["B", "I", "N", "G", "O"];
    for (const letra of letras) {
        const th = document.createElement("th");
        th.innerHTML = letra;
        tr_titulo.appendChild(th);
    }
    thead.appendChild(tr_titulo);


    //Criando Números

    const numeros_anteriores = {};
    const colunas = [[], [], [], [], []]; 
    for (let i = 0; i < 5; i++) { // loop da linha
        for (let j = 0; j < 5; j++) { // loop da coluna
            let num;
            let duplicada;
            do { // loop para não duplicar números
                num = Math.floor(Math.random() * (15 * (j + 1) - ((15 * j) + 1)) + ((15 * j) + 1));
                duplicada = false;
                for (let k = 0; k < i; k++) { // loop para verificar os números anteriores
                    if (num === numeros_anteriores[`num_tr${k}td${j}`] || num === 0) {
                        duplicada = true;
                        break;
                    }
                }
            } while (duplicada);

            colunas[j].push(num); // põe o número na sua coluna
            numeros_anteriores[`num_tr${i}td${j}`] = num;
        }
    }

    // ordena os números
    for (let j = 0; j < 5; j++) { // loop para coluna
        colunas[j].sort((a, b) => a - b);
    }
    colunas[2][2] = "O";

    // Cria os elementos em HTML após estarem ordenados
    for (let i = 0; i < 5; i++) { // loop do tr - linha
        const tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) { // loop do td - coluna
            const td = document.createElement("td");
            td.innerHTML = colunas[j][i];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //Criando a Tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const div = document.querySelector("div");
    div.appendChild(tabela);
}