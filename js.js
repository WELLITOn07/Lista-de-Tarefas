// LISTA DE TAREFAS //
// -- GLOBAL -- //
    let nomeDoItem = document.querySelector('#nomeDoitem');
    let tbody = document.querySelector('.tbody');
    let dataAtual;
    let tr;
    let td_nome;
    let td_data;
    let btn_apagar;
    let td_btn_apagar;
//-------------//
//[F1 PEGANDO EVENTO CLICK MOUSE E APLICANDO LISTA E CRIANDO EVENTO BOTAO APAGAR]  //---
addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-adicionar')) { 
          if (!nomeDoItem.value) return;   
            CriandoListaTabela()
            tbody.appendChild(tr)
            tr.appendChild(td_nome); 
            tr.appendChild(td_data); 
            tr.appendChild(td_btn_apagar);
          //---------------------------//
                limpandoInput();
        }
        //------------------------//
        if (e.target.classList.contains('apagar')) {
            e.target.parentElement.parentElement.remove();
          }

});
//[F4 PEGANDO EVENTO ENTER E APLICANDO LISTA]  //---
    nomeDoItem.addEventListener('keypress', function (e) {
          if (e.keyCode === 13) {
          if (!nomeDoItem.value) return; 
            CriandoListaTabela()
            tbody.appendChild(tr)
            tr.appendChild(td_nome); 
            tr.appendChild(td_data); 
            tr.appendChild(td_btn_apagar);
          //---------------------------//
               limpandoInput();
        }
    });     
//[F2 PEGANDO DATA ATUAL]  //---
    PegandoData()
   function PegandoData (dat) {
    let data = new Date()
    dataAtual = data.toLocaleString('pt-BR', {
        dateStyle: "short"
    });
   }; 

//[F5 LIMPANDO INPUT]  //---
function limpandoInput() {
    nomeDoItem.value = "";
    nomeDoItem.focus()
};
//[F3 CRIANDO TR E TD NA TABLE]  //---
function CriandoListaTabela() {
    tr = document.createElement('tr');
    tr.setAttribute('class', 'tr_apagar');
    td_nome = document.createElement('td');
    td_nome.setAttribute('colspan', '2')
    td_nome.innerHTML = nomeDoItem.value;
    td_data = document.createElement('td');
    td_data.innerHTML = dataAtual;
    td_btn_apagar = document.createElement('td');
    btn_apagar = document.createElement('button');
    btn_apagar.setAttribute('class', 'apagar')
    btn_apagar.innerHTML = 'APAGAR';
    td_btn_apagar.appendChild(btn_apagar)
}; 





