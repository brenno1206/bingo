function gerarTabela(nome){
    // criando elementos perincipal
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    //Criando cabeçalho
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    td_nome.colspan = 5;

    const th_b = document.createElement("th");
    th_b.innerHTML = "B";
    const th_i = document.createElement("th");
    th_i.innerHTML = "I";
    const th_n = document.createElement("th");
    th_n.innerHTML = "N";
    const th_g = document.createElement("th");
    th_g.innerHTML = "G";
    const th_o = document.createElement("th");
    th_o.innerHTML = "O";

    for(let i = 0; i < 5;i++){
        
    }

}

function pedirnome(){
    const nome = prompt("Digite o seu nome");
}