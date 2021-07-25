class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvaProduto() {
        let produto = this.lerDados();

        if(this.validaCampo(produto) == true) {
            this.adicionar(produto);
        }

        this.listaTabela();
        this.limpaCampo();
    }

    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_remover = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade;
          

            td_id.classList.add("center");

            let imgDelete = document.createElement("img");
            imgDelete.src = "img/delete.png"
            imgDelete.setAttribute("onclick", "produto.deletaProduto("+ this.arrayProdutos[i].id +")");
            imgDelete.classList.add("hover");

            td_remover.appendChild(imgDelete);
            td_remover.classList.add("center");
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}
        
        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.quantidade = document.getElementById("quantidade").value;
      
        
        return produto;
    }

    validaCampo(produto) {
        let msg = "";

        if(produto.nomeProduto == "") {
            msg += "- Informe o nome do produto\n";
        }

        if(produto.quantidade == "") {
            msg += "- Informe a quantidade do produto\n";
        }
     

        if(msg != "") {
            alert(msg);
            return false;
        }

        return true;
    }

    limpaCampo() {
        document.getElementById("produto").value = ""
        document.getElementById("quantidade").value = ""
       
    }

    deletaProduto(id) {

        let tbody = document.getElementById("tbody");

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

        alert("Produto excluído")
    }
}

var produto = new Produto()