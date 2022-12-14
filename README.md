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
- Decreases the amount of units of a product instead of just deleting it. The product is only removed when we have zero units of it in the cart

---

**[PT-BR]**
# Petshop usando o Angular

Este reposit??rio cont??m o projeto desenvolvido no curso 7187 da empresa [balta.io](https://balta.io/): **Criando Apps Web com Angular e UiKit**.

Esta aplica????o web tem a inten????o n??o de primeiros contatos, mas se sim de aprender mais sobre o Angular, desenvolvendo um projeto um pouco mais complexo, com uma arquitetura de diret??rios um pouco mais complexa.

Basicamente o projeto ?? um site de uma Agropecuaria/PetShop, onde os clientes podem comprar produtos para os seus animais de estima????o. Alguns destaques de _features_ desse projeto s??o:
- Sistema de carrinho virtual
- Sistema de autentica????o utilizando Token e Refresh Token
- Estiliza????o de componentes usando o [UiKit](https://getuikit.com/)
- Consumo de uma REST API usando Angular com TypeScript
- Utiliza????o de _keys_ no Local Storage para armazenar informa????es
- Sistema de barra de navega????o

Este projeto consome uma API que pode ser "mocada" no aplicativo [Mockoon](https://mockoon.com/). O arquivo com as configura????es de API para o aplicativo citado foram originalmente constru??do por [Andre Baltieri](https://github.com/andrebaltieri), o professor do curso que construiu essa aplica????o.

Entretanto, foi necess??rio alterar alguns campos e efetuar certas mudan??as por conta da conpatibilidade de vers??es do Mockoon, portanto, o arquivo para "mocar" essa API est?? disponibilizado na pasta **Mockoon** deste reposit??rio.

## Melhorias

Por mais que o curso seja bem completo no quesito conte??do para o Angular, ele ?? finalizado sem a implementa????o de algumas features que eu julguei interessante desenvolver para melhorar a UX (User eXperience, em portugu??s, experi??ncia de usu??rio) da aplica????o Web.

Segue abaixo a lista com as melhorias e novas _features_ que eu implementei individualmente:

- Contador de itens presentes no carrinho de compras para a barra de navega????o
- O carrinho de compras agrupa os itens corretamente. Aparece somente um item listado para cada produto, por??m, aumenta a quantidade do mesmo.
- Uma p??gina de pagamento mocada para dar funcionalidade ao bot??o "Finalizar Compra"
- Decresce a quantidade de unidades de um produto ao inv??s de apenas excluir o mesmo. O produto s?? ?? removido quando temos zero unidades dele no carrinho