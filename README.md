# Exchange Journey

Site em **React** que conta a experiência de um intercâmbio na **Inglaterra** (Programa **Ganhando o Mundo**, 2024). É uma landing page em uma única rota (`/`), com seções sobre o programa, o processo de seleção, vivência, galeria de fotos, agradecimentos e contato.

## Para que serve

- **Portfólio narrativo** da jornada de intercâmbio (hero, sobre o programa, passos do processo, experiência).
- **Galeria** organizada por categorias (família hospedeira, escola, turismo etc.), com dados em `src/data/exchangeData.ts`.
- Interface construída com **Vite**, **TypeScript**, **Tailwind CSS** e componentes no estilo **shadcn/ui** (Radix, animações com Framer Motion).

Não há backend nem variáveis de ambiente obrigatórias: o conteúdo é estático no front-end.

## Pré-requisitos

- [Node.js](https://nodejs.org/) **18** ou superior (recomendado LTS).
- npm (vem com o Node) ou outro gerenciador compatível com `package-lock.json`.

## Como rodar

No diretório do projeto:

```bash
npm install
npm run dev
```

O servidor de desenvolvimento sobe em **`http://localhost:8080`** (configurado no Vite).

### Outros comandos úteis

| Comando        | Descrição                          |
|----------------|------------------------------------|
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve o build localmente para testar |
| `npm run lint`    | Executa o ESLint                     |
| `npm test`        | Roda os testes (Vitest) em modo CI   |
| `npm run test:watch` | Testes em modo watch             |

## Estrutura resumida

- `src/pages/Index.tsx` — página principal e ordem das seções.
- `src/components/` — blocos da página (hero, programa, processo, galeria, etc.).
- `src/data/exchangeData.ts` — textos e metadados da galeria / processo.

---

Projeto pessoal para documentar e compartilhar a experiência de intercâmbio de forma visual e organizada.
