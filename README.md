# Export Inventory Control · Hub de BIs

Site estático (HTML, CSS e JavaScript puro) com todos os BIs do time.
Não tem build, não tem servidor: o GitHub Pages publica direto.

## Como adicionar, editar ou remover um BI

Edite **só** o arquivo `assets/js/bis.js`.

1. Ache a frente certa (`Estoque Portos`, `Export Tax`, `Redirecionamentos` ou `Geral Equipe`).
2. Copie um bloco de BI inteiro, de `{` até `}`, e cole logo abaixo.
3. Troque `nome`, `descricao` e `link`.
4. Confira as vírgulas: entre um bloco e outro tem vírgula; depois do último, não.
5. Salve (no GitHub: botão **Commit changes**). Em 1 a 2 minutos o site atualiza.

```js
{
  nome: "Nome do BI",
  descricao: "Uma frase curta sobre o BI.",
  link: "https://app.powerbi.com/...",
  preview: "assets/img/bis/nome-do-bi.webp"
},
```

A linha `preview` é opcional. Sem ela, o BI aparece normalmente, só sem miniatura.
Para incluir uma, suba a imagem em `assets/img/bis/`. **Desfoque números e nomes antes**:
o repositório é público.

A ordem dos blocos no arquivo é a ordem em que aparecem no site.
Para criar uma frente nova, copie um bloco de frente inteiro (com `id`, `nome`, `cor`, `foto` e `bis`).

## Publicar no GitHub Pages

1. Crie um repositório (ex.: `export-inventory-control`) e suba todos os arquivos desta pasta.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O endereço será `https://SEU-USUARIO.github.io/export-inventory-control/`.

## Observações

- Os links do Power BI só abrem para quem tem login ADM.
- Fontes: Sitka Text (títulos) e Calibri (texto), já instaladas no Windows. Em outros sistemas entram Georgia e Carlito.
