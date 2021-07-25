class Cliente {
    constructor() {
        this.id = 1;
        this.arrayClientes = [];
    }

    salvaCliente() {
        let cliente = this.lerDados();

        if(this.validaCampo(cliente) == true) {
            this.adicionar(cliente);
        }

        this.listaTabela();
        this.limpaCampo();
    }

    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(let i = 0; i < this.arrayClientes.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_telefone = tr.insertCell();
            let td_remover = tr.insertCell();

            td_id.innerText = this.arrayClientes[i].id;
            td_nome.innerText = this.arrayClientes[i].nome;
            td_email.innerText = this.arrayClientes[i].email;
            td_telefone.innerText = this.arrayClientes[i].telefone;
         

            td_id.classList.add("center");

            let imgDelete = document.createElement("img");
            imgDelete.src = "img/delete.png"
            imgDelete.setAttribute("onclick", "cliente.deletaCliente("+ this.arrayClientes[i].id +")");
            imgDelete.classList.add("hover");

            td_remover.appendChild(imgDelete);
            td_remover.classList.add("center");
        }
    }

    adicionar(cliente) {
        this.arrayClientes.push(cliente);
        this.id++;
    }

    lerDados() {
        let cliente = {}
        
        cliente.id = this.id;
        cliente.nome = document.getElementById("nome").value;
        cliente.email = document.getElementById("email").value;
        cliente.telefone = document.getElementById("telefone").value;
      
        
        return cliente;
    }

    validaCampo(cliente) {
        let msg = "";

        if(cliente.nome == "") {
            msg += "- Informe o nome do cliente\n";
        }
        
        
        if(cliente.email == "") {
            msg += "- Informe o email do cliente\n";
        }
        
        if(cliente.telefone == "") {
            msg += "- Informe o telefone do cliente\n";
        }


        if(msg != "") {
            alert(msg);
            return false;
        }

        return true;
    }

    limpaCampo() {
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("telefone").value = ""
        
    }

    deletaCliente(id) {

        let tbody = document.getElementById("tbody");

        for(let i = 0; i < this.arrayClientes.length; i++) {
            if(this.arrayClientes[i].id == id) {
                this.arrayClientes.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

        alert("Cliente excluído")
    }
}

var cliente = new Cliente()