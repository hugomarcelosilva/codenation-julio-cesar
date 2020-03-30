<h1 align="center">
    <img alt="codenation" title="#codenation" src=".github/codenation.png" width="250px" />
</h1>

<h4 align="center">
  🚀 Criptografia de Júlio César
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hugo-marcelo/codenation-julio-cesar">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/hugo-marcelo/codenation-julio-cesar">
  
  <a href="https://github.com/hugo-marcelo/codenation-julio-cesar/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hugo-marcelo/codenation-julio-cesar">
  </a>

  <a href="https://github.com/hugo-marcelo/codenation-julio-cesar/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/hugo-marcelo/codenation-julio-cesar">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#zap-rodando-projeto">Rodando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#memo-licença">Licença</a>
</p>

Segundo o Wikipedia, criptografia ou criptologia (em grego: kryptós, “escondido”, e gráphein, “escrita”) é o estudo e prática de princípios e técnicas para comunicação segura na presença de terceiros, chamados “adversários”. Mas geralmente, a criptografia refere-se à construção e análise de protocolos que impedem terceiros, ou o público, de lerem mensagens privadas. Muitos aspectos em segurança da informação, como confidencialidade, integridade de dados, autenticação e não-repúdio são centrais à criptografia moderna. Aplicações de criptografia incluem comércio eletrônico, cartões de pagamento baseados em chip, moedas digitais, senhas de computadores e comunicações militares. Das Criptografias mais curiosas na história da humanidade podemos citar a criptografia utilizada pelo grande líder militar romano Júlio César para comunicar com os seus generais. Essa criptografia se baseia na substituição da letra do alfabeto avançado um determinado número de casas. Por exemplo, considerando o número de casas = **3**:

**Normal:** a ligeira raposa marrom saltou sobre o cachorro cansado

**Cifrado:** d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr

<h2>Regras</h2>

- As mensagens serão convertidas para minúsculas tanto para a criptografia quanto para descriptografia.
- No nosso caso os números e pontos serão mantidos, ou seja:

**Normal:** 1a.a

**Cifrado:** 1d.d

## 💻 Projeto

Escrever programa, em qualquer linguagem de programação, que faça uma requisição HTTP para a url abaixo:

```
https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN
```

O resultado da requisição vai ser um JSON conforme o exemplo:

```
{
	"numero_casas": 10,
	"token":"token_do_usuario",
	"cifrado": "texto criptografado",
	"decifrado": "aqui vai o texto decifrado",
	"resumo_criptografico": "aqui vai o resumo"
}
```

Seu programa deve submeter o arquivo atualizado para correção via POST para a API:

```
https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN
```

## :rocket: Tecnologias

Esse projeto foi desenvolvido com a seguinte tecnologia:

- [Node.js](https://nodejs.org/en/)

## :zap: Rodando o projeto

Entrar na raiz do projeto e rodar o comando:

```
$ yarn start
```

Feito isso, acessar o endereço http://localhost:3333

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
