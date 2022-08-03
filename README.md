**[EN-US]**
# Petshop using Angular

This repository contains the project developed in course 7187 at [balta.io](https://balta.io/): **Criando Apps Web com Angular e UiKit**.

This web application has the intention not as a first contact, but to learn more about Angular, developing a more complex project, with a more complex file architecture.

Basically the project is a website of an PetShop, where customers can buy products for their pets. Some highlights of the features in this project are:
- Virtual Cart System
- Authentication system using Token and Refresh Token
- Component styling using [UiKit](https://getuikit.com/)
- Consuming a REST API using Angular with TypeScript
- Using _keys_ in the Local Storage to store information
- Navigation Bar System

This project consumes an API that can be "mocked" into the [Mockoon](https://mockoon.com/) application. The API settings file for this application was originally built by [Andre Baltieri](https://github.com/andrebaltieri), the course professor who built this application.

However, it was necessary to alter some fields and make certain changes due to Mockoon version compatibility, so the file to correctly "mock" the API is available in the **Mockoon** folder of this repository.

## Improvements

As much as the course is very complete in terms of content for Angular, it ends without the implementation of some features that I thought interesting to develop to improve the UX (User eXperience) of the Web application.

Below is the list with the improvements and new _features_ that I implemented myself:

- Counter of items present in the shopping cart for the navigation bar
- The shopping cart groups the items correctly. Only one item is listed for each product, but it increases the quantity of that item.
- A mocked payment page to give functionality to the "Finalizar Compra" (in english, Checkout) button

---

**[PT-BR]**
# Petshop usando o Angular

Este repositório contém o projeto desenvolvido no curso 7187 da empresa [balta.io](https://balta.io/): **Criando Apps Web com Angular e UiKit**.

Esta aplicação web tem a intenção não de primeiros contatos, mas se sim de aprender mais sobre o Angular, desenvolvendo um projeto um pouco mais complexo, com uma arquitetura de diretórios um pouco mais complexa.

Basicamente o projeto é um site de uma Agropecuaria/PetShop, onde os clientes podem comprar produtos para os seus animais de estimação. Alguns destaques de _features_ desse projeto são:
- Sistema de carrinho virtual
- Sistema de autenticação utilizando Token e Refresh Token
- Estilização de componentes usando o [UiKit](https://getuikit.com/)
- Consumo de uma REST API usando Angular com TypeScript
- Utilização de _keys_ no Local Storage para armazenar informações
- Sistema de barra de navegação

Este projeto consome uma API que pode ser "mocada" no aplicativo [Mockoon](https://mockoon.com/). O arquivo com as configurações de API para o aplicativo citado foram originalmente construído por [Andre Baltieri](https://github.com/andrebaltieri), o professor do curso que construiu essa aplicação.

Entretanto, foi necessário alterar alguns campos e efetuar certas mudanças por conta da conpatibilidade de versões do Mockoon, portanto, o arquivo para "mocar" essa API está disponibilizado na pasta **Mockoon** deste repositório.

## Melhorias

Por mais que o curso seja bem completo no quesito conteúdo para o Angular, ele é finalizado sem a implementação de algumas features que eu julguei interessante desenvolver para melhorar a UX (User eXperience, em português, experiência de usuário) da aplicação Web.

Segue abaixo a lista com as melhorias e novas _features_ que eu implementei individualmente:

- Contador de itens presentes no carrinho de compras para a barra de navegação
- O carrinho de compras agrupa os itens corretamente. Aparece somente um item listado para cada produto, porém, aumenta a quantidade do mesmo.
- Uma página de pagamento mocada para dar funcionalidade ao botão "Finalizar Compra"