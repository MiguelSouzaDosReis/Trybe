                                  Prática

Agora vamos tentar fazer as requisições a API usando fetch . Essa função recebe dois parâmetros:

1.O endereço para o qual a requisição será feita, ou seja, a url do serviço.

2.Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers

3.Agora, um passo para trás: vamos fazer, passo a passo, uma Promise

                        Primeiramente, instancie uma Promise
    Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
    Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
    Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

4.Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

5.Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

6.Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

