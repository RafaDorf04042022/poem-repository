export class connection{
    constructor(){
        this.usuario;
        this.senha;
        this.email;
        this.poema;
        this.title;
    }
    cadastrar_usuario(usuario, senha, email){
        return new Promise((resolve, reject) => {
            fetch("http://localhost:8080/usuarios",{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }, 
                method: "POST",
                body: JSON.stringify({
                    nome: usuario, 
                    senha: senha,
                    email: email
                })
            })
            .then(response => response.json())
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
        });
        
    }
    retornar_usuario(usuario, senha){
        fetch("http://localhost:8080/usuarios/"+usuario+"/"+senha,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {return data})        
    }
    atualizar_usuario(usuario,senha,email){
        fetch("http://localhost:8080/usuarios/"+usuario+"/"+senha,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            method: "PUT",
            body: JSON.stringify({
                nome: usuario, 
                senha: senha,
                email: email
            })
        })
        .then(response => response.json())
        .then(data => {return data})
    }
    delete_usuario(){
        fetch("http://localhost:8080/usuarios/"+usuario+"/"+senha,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "DELETE"
        })
    }
    publicar_poem(poema, title, usuario){
        fetch("http://localhost:8080/poems",{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            method: "POST",
            body: JSON.stringify({
                poem: poema, 
                title: title,
                author: usuario
            })
        })
        .then(response => response.json())
        .then(data => {return data})
    }
    retornar_poema(usuario, title){
        fetch("http://localhost:8080/poems/"+usuario+"/"+title,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {return data})        
    }
    retornar_AllPoemas(){
        return new Promise((resolve, reject) => {
                fetch("http://localhost:8080/poems", {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => {
                    resolve(data); 
                })
                .catch(error => {
                    reject(error);
                });
            });
        
    }
    atualizar_poema(poema, usuario, title){
        fetch("http://localhost:8080/poems/"+usuario+"/"+title,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            method: "POST",
            body: JSON.stringify({
                poem: poema, 
                title: title,
                author: usuario
            })
        })
        .then(response => response.json())
        .then(data => {return data})
    }
    delete_poema(){
        fetch("http://localhost:8080/poems/"+usuario+"/"+title,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET"
        })
    }
}
