# História em perspectiva

Base de um site de História em português, feito com HTML, CSS e Vite. Não exige banco de dados, credenciais ou serviços externos.

## Desenvolvimento

Use Node.js 24.19.0 (versão indicada em `.nvmrc`) e npm 11.9.0.

Na pasta do projeto:

```sh
npm ci
npm run dev
```

O servidor usa a porta 5173. Em caso de conflito, encerre apenas um processo que você tenha iniciado ou escolha outra porta com `npm run dev -- --port 5174`.

## Build de produção

```sh
npm run build
npm run preview
```

O build é gerado em `dist/`. O servidor de conferência usa a porta 4173.

## Estrutura

- `index.html`: conteúdo, navegação e estrutura da página.
- `src/style.css`: estilos responsivos.
- `package-lock.json`: versões exatas das dependências.

Após uma alteração, confira o build e a página em tamanhos de tela diferentes, incluindo a navegação por teclado. Ainda não há uma suíte automatizada de testes no projeto.

## Ambiente na nuvem

Use o checkout existente em `/workspace/site-hist-ria`; cada tarefa já possui um ambiente isolado e não precisa de um novo worktree. Para reinstalar as dependências sem alterar o lockfile, use:

```sh
npm ci --cache /workspace/.cache/site-historia-npm --no-fund
```

Os processos precisam ser iniciados novamente em uma nova sessão. As instruções de instalação e inicialização também são salvas na configuração do ambiente. A publicação do ambiente é feita pela interface da plataforma.
