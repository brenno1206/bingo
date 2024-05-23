function CriarTabela(){
    // criando elementos principal

    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //Criando cabeçalho
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = "nome";
    td_nome.colSpan = 5;
    thead.appendChild(tr_nome);
    tr_nome.appendChild(td_nome);

    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_I.innerHTML = "I";
    const th_N = document.createElement("th");
    th_N.innerHTML = "N";
    const th_G = document.createElement("th");
    th_G.innerHTML = "G";
    const th_O = document.createElement("th");
    th_O.innerHTML = "O";

    thead.appendChild(th_B);
    thead.appendChild(th_I);
    thead.appendChild(th_N);
    thead.appendChild(th_G);
    thead.appendChild(th_O);

    //Criando Elementos

    for(let i = 0; i < 5;i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < 5; j++){
            const td = document.createElement("td");
            td.innerHTML = Math.floor(Math.random()*(10*(j + 1) - (10*j)) + (10*j));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    //Criando a Tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);
}
