                                        Exercício

1. Crie um Dockerfile utilizando a imagem chuanwen/cowsay.

2. Agora defina um ENTRYPOINT para a execução do comando.

        Lembre-se que com ele, diferente do CMD o comando não poderá ser sobrescrito com o docker run , porém, conseguiremos passar parâmetros ao binário, exploraremos esse recurso para poder passar a mensagem.

3. Utilize o CMD para definir uma mensagem padrão.

4. Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.

5. Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM TRYBE" , para exibir um dragão junto com a vaquinha.