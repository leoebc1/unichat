"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Post_1 = require("./Post");
var Conta = /** @class */ (function () {
    function Conta(nomeUsuario, senha, informacaoAdicional) {
        this.id = Conta.idsUtilizados.length + 1; // gera um novo ID com base no tamanho do array de IDs utilizados
        Conta.idsUtilizados.push(this.id); // adiciona o ID ao array de IDs utilizados
        this.nomeUsuario = nomeUsuario; // define o nome de usuário
        this.senha = senha; // define a senha do usuário
        this.informacaoAdicional = informacaoAdicional; // define informações adicionais
        this.seguidores = []; // inicia o array de seguidores vazio
        this.seguindo = []; // inicia o array de contas seguidas vazio
        this.posts = []; // inicia o array de posts vazio
        this.mensagensDiretas = []; // inicia o array de mensagens diretas vazio
        this.notificacoes = []; // inicia o array de notificações vazio
    }
    Conta.prototype.getId = function () {
        return this.id;
    };
    Conta.prototype.getSeguindo = function () {
        return this.seguindo;
    };
    Conta.prototype.getPosts = function () {
        return this.posts;
    };
    Conta.prototype.getNomeUsuario = function () {
        return this.nomeUsuario;
    };
    Conta.prototype.seguir = function (conta) {
        if (!this.seguindo.includes(conta.id)) { // verifica se o usuário já está seguindo a conta
            this.seguindo.push(conta.id); // adiciona o ID da conta ao array de contas seguidas
            conta.seguidores.push(this.id); // adiciona o ID do usuário ao array de seguidores da conta seguida
            conta.notificacoes.push(["Novo seguidor", this.id]); // envia uma notificação à conta seguida
        }
    };
    Conta.prototype.enviarMensagem = function (conta, conteudo) {
        conta.mensagensDiretas.push([conteudo, this.id]); // envia uma mensagem direta para a conta
    };
    Conta.prototype.criarPost = function (conteudo) {
        var novoPost = new Post_1.Post(this.id, conteudo); // cria um novo post com o ID do autor e o conteúdo
        this.posts.push(novoPost); // adiciona o post à lista de posts do usuário
    };
    Conta.idsUtilizados = []; // array estático para armazenar os IDs utilizados
    return Conta;
}());
exports.Conta = Conta;
