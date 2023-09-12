# Agents

# Documentação da Aplicação

O projete foi desenvolvido usando:\_

- Vite;
- Chakra UI;
- TypeScript;

### Acesso

Não deu tempo de implementar a autenticação JWT. Para acessar, bastar usar as seguintes
credenciais:

> email: teste@agents.com

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

### A Fazer

- [ ] Implementar: layout mobile;
