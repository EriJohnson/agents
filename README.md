# _Teste Desenvolvimento Pontua Web_

> Esse é o teste para desenvolvedores na Pontua Web.<br>
> Sinta-se livre para editar a partir do título "Documentação da Aplicação".<br>
> Essa aplicação deve ser criada com base e utilização na api fornecida pela Marvel

## [https://developer.marvel.com/](https://developer.marvel.com/)<br>

> Qualquer dúvida poderá ser enviada por e-mail em tecnologia@pontua.com.br;<br>
> O prazo para finalização do teste deverá ser fornecido pelo RH;<br> >**_Não deixe de entregar sua aplicação_** mesmo que não esteja pronta ou perfeita;<br>
> A entrega do código deverá ser feita no GitHub e após o término, notificar o time atráves do e-mail tecnologia@pontua.com.br e gente@pontua.com.br.

---

> Link para layout no Figma: [layout]('https://www.figma.com/file/QFEzv3O4PWCzmvicy7e7sm/Teste-de-Desenvolvimento?node-id=0-1&t=D2fOR8TxhmRi52td-0')

---

## Página de Login

**_Eu como usuário:_**<br>

> Irei inserir o meu e-mail e senha de acesso para navegar para a tela de Agentes.

**_Quando eu:_**<br>

> Clicar no botão entrar, se sucesso deverá navegar para a próxima tela, caso ocorra erro, ver uma notificação;<br>
> informando que o email ou senha está inválido.

### _Opcional_

> Quando eu clicar deverá redirecionar para a tela de esqueci minha senha.

### _Critérios de aceite_

> - Validação de e-mail e senha;
> - Navegar para próxima página;
> - Exibir mensagem de erro;
> - Ser o mais fiel possível ao layout do Figma.

---

## Página de seleção de Agente

**_Eu como usuário:_**<br>

> Irei selecionar o agente de minha escolha para acessar a página de perfil do agente.

**_Quando eu:_**<br>

> Clicar no campo de escolha deverá ser exibido uma lista com os nomes e foto do perfil de cada agente,
> e ao clicar no botão entrar ser redirecionado para a tela de perfil do agente;

### _Critérios de aceite_

> - Se não houver agente selecionado mostrar o placeholder "Selecione um agente" conforme Figma;
> - Se já exitir um agente selecionado e eu clicar no campo de escolha, exibir a lista de agentes com uma flag no agente;
> - já selecionado;
> - Ao clicar no botão entrar deverá navegar para a página de perfil do agente selecionado;
> - Ser o mais fiel possível ao layout do Figma.

---

## Página de Perfil de Agente

**_Eu como usuário:_**<br>

> Ao acessar a tela preciso ver a aba de visão geral com o descritivo sobre o agente,
> bem como seu nome e imagem;<br>
> Quero poder navegar nas abas de características, conforme layout do Figma;<br>
> Preciso visualizar o menu com as opções de acessar a Home, Perfil e sair do sistema.

**_Quando eu:_**<br>

> Clicar em uma das abas disponíveis daquele agente, preciso ver uma lista com as informações daquela aba.

### _Critérios de aceite_

> - Exibir as informações dos agentes;
> - As abas do perfil devem ser dinâmicas de acordo com cada agente;
> - Ao clicar nas abas mostrar as listagens com as informações relativas;
> - Exibir o menu lateral com link para Home, Perfil e Logout;
> - Ser o mais fiel possível ao layout do Figma;

---

## Página Home

**_Eu como usuário:_**<br>

> Desejo visualizar uma lista de cards com fotos de perfil e um resumo de personagens;<br>
> Quero poder navegar na lista pela paginação no final da página;<br>
> Quando eu clicar no campo de pesquisa e digitar o nome do agente, me mostre somente os personagens que contém aquele termo buscado.

**_Quando eu:_**<br>

> Clicar no card do personagem, deverei ser redirecionado para a página de perfil do personagem escolhido;<br>
> Fizer uma busca, o sistema deverá exibir na lista somente os personagens que contém aquele nome.<br>
> Clicar no botão "Próxima" deverá exibir os próximos cards da lista (próxima página);<br>
> Clicar no botão "Anterior" deverá exibir os cards anteriores da lista (página anterior);<br>
> Quando eu clicar no botão com número de páginação, exibir os cards relativos aquela página selecionada.<br>

### _Critérios de aceite_

> - Exibir resumo e foto de perfil;
> - Listagem mínima de 11 personagens
> - Exibição de no mínimo na primeira página
> - Exibição de no máximo 10 personagens por página;
> - Ao clicar em um card ser redirecionado à página de perfil do mesmo;
> - Ser o mais fiel possível ao layout do Figma;

---

> # _Opcional_ \*

## Página Recuperação de Senha

**_Eu como usuário:_**<br>

> Irei inserir o email que realizei o cadastro na plataforma no campo disponivel e, clicarei no botão enviar link.

**_Quando eu:_**<br>

> Clicar no botão de enviar link, deverá aparecer a mensagem de envio com sucesso.

### _Critérios de aceite_

> - Ser o mais fiel possível ao layout do Figma;

---

# Documentação da Aplicação

O projete foi desenvolvido usando:\_

- Vite;
- Chakra UI;
- TypeScript;

### Acesso

Não deu tempo de implementar a autenticação JWT. Para acessar, bastar usar as seguintes
credenciais:

> email: teste@pontua.com.br

> senha: 123456

### Configurando

#### Crie uma conta na Marvel Develope Portal

- Acesse https://developer.marvel.com e crie sua conta.
- **Ative sua conta** atráves do link enviado por email

#### Configurando variáveis de ambiente

- Faça uma cópia do arquivo .env.example **na raiz do projeto**,dê o nome de .env.development e informe suas API Keys (https://developer.marvel.com/account)

> .env.development deve ficar dessa maneira

```
VITE_MARVEL_API_PUBLIC_KEY=sua_chave_pública
VITE_MARVEL_API_PRIVATE_KEY=sua_chave_privada
VITE_MARVEL_API_BASE_URL=https://gateway.marvel.com/v1/public
```

### Iniciando

#### Instale as dependências

> npm install

#### Inicie o servidor local

> npm run dev
