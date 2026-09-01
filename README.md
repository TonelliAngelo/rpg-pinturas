# RPG Pinturas & Gesso — versão SEO Local

Site estático responsivo para GitHub Pages, domínio oficial `https://rpgpinturas.com.br/`.

## Principais melhorias desta versão
- SEO local para Jandira, Barueri, Carapicuíba, Osasco e Cotia.
- Página individual e indexável para cada cidade.
- Metatags `title`, `description`, canonical e Open Graph.
- Dados estruturados Schema.org para empresa de serviços e páginas locais.
- `robots.txt` e `sitemap.xml` prontos para Google Search Console.
- Nova seção "Área de atendimento" na página principal.
- Cidade em formato de seleção no formulário de orçamento.
- Favicon derivado do logo da RPG.

## Publicação
Substitua os arquivos do repositório `rpg-pinturas` pelo conteúdo desta pasta, mantendo a mesma estrutura. O GitHub Pages publicará automaticamente a branch `main`.

## Próximo passo recomendado
Após publicar, cadastrar `https://rpgpinturas.com.br/sitemap.xml` no Google Search Console e criar/otimizar o Perfil da Empresa no Google com as áreas realmente atendidas.


## Melhorias para uso no celular
- Formulário responsivo com campos grandes para toque.
- Teclado numérico em valores.
- Lista rápida de serviços pré-cadastrados.
- Barra inferior no celular com "Ver orçamento" e "Salvar PDF".
- Prévia do orçamento adaptada à largura do celular.
- Botão "Compartilhar resumo" usando o compartilhamento nativo do aparelho quando disponível.
- Ao tocar em "Salvar PDF", use a opção "Salvar como PDF" / impressão do navegador e depois encaminhe o arquivo pelo WhatsApp.


## Inicialização do gerador
A página `/orcamento/` agora sempre abre com um orçamento novo e em branco.
Nenhum orçamento anterior é carregado automaticamente e nenhum dado de orçamento é armazenado no navegador.
O botão "Carregar exemplo" permanece apenas como referência opcional.
