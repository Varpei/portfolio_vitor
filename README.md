# Portfólio — Vítor Pereira Dias

Site estático (Vite + React + TypeScript). Todo o conteúdo vive em **um único arquivo**.

## Como editar o conteúdo

Abra `src/data/content.ts`. É o único arquivo que você precisa tocar para mudar textos, experiência, skills e projetos. O layout se atualiza sozinho.

### Adicionar um projeto novo

Dentro de `projetos`, copie um bloco existente, cole no fim da lista e troque os campos:

```ts
{
  nome: "Nome do projeto",
  resumo: "Uma frase do que é.",
  papel: "Full-stack · pessoal",
  stack: ["Java", "Spring Boot"],
  destaques: ["Coisa legal 1", "Coisa legal 2"],
  repos: [{ label: "Repositório", url: "https://github.com/Varpei/..." }],
  // demo: "https://..."   // opcional
},
```

Salvou, o cartão novo aparece. Sem mexer em componente nenhum.

## Rodar localmente

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:5173
```

## Publicar de graça no GitHub Pages

1. Crie um repositório no GitHub (ex.: `portfolio_vitor`) e suba este projeto:
   ```bash
   git init && git add . && git commit -m "portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/Varpei/portfolio_vitor.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Pronto. A cada `git push` na branch `main`, o workflow em
   `.github/workflows/deploy.yml` builda e publica automaticamente.
   A URL fica tipo `https://varpei.github.io/portfolio/`.

Depois é só colar essa URL no campo "Portfólio" do seu currículo.
