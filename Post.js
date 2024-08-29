"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(idAutor, conteudo) {
        this.idPost = Post.idPostGlobal++; // gera um ID único para o post
        this.conteudo = conteudo;
        this.idAutor = idAutor; // define o autor do post
        var dataAtual = new Date(); // obtém a data atual
        this.dataHora = [dataAtual.getDate(), dataAtual.getMonth() + 1, dataAtual.getFullYear()]; // armazena a data no formato [dia, mês, ano]
        this.curtidas = []; // inicia o array de curtidas vazio
        this.comentarios = []; // inicia o array de comentários vazio
    }
    Post.prototype.curtir = function (conta) {
        if (!this.curtidas.includes(conta.getId())) { // verifica se a conta já curtiu o post
            this.curtidas.push(conta.getId()); // adiciona o ID da conta ao array de curtidas
        }
    };
    Post.prototype.comentar = function (conta, comentario) {
        this.comentarios.push([comentario, conta.getNomeUsuario()]); // adiciona um comentário ao post 
        //com o conteúdo e o nome do usuário
    };
    Post.prototype.getConteudo = function () {
        return this.conteudo;
    };
    Post.prototype.getCurtidas = function () {
        return this.curtidas;
    };
    Post.idPostGlobal = 0; // contador estático para gerar IDs únicos para os posts
    return Post;
}());
exports.Post = Post;
