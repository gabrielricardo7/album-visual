# album-visual

Album Visual é uma Aplicação de Galeria de Fotos, onde os usuários podem visualizar, pesquisar e ampliar imagens em uma interface agradável e responsiva.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração estática.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **React-Icons**: Biblioteca de ícones usada na barra de busca.

## Requisitos

- Node.js (versão 22 ou superior)
- npm ou yarn

## Instalação

1. **Clone o Repositório**

```bash
git clone https://github.com/gabrielricardo7/album-visual.git
cd album-visual
```

2. **Instale as Dependências do Node.js**

```bash
npm install
```

ou, se estiver usando yarn:

```bash
yarn install
```

## Executando a Aplicação

1. **Inicie o Servidor de Desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

2. **Acesse a Aplicação**

Abra o navegador e vá para [http://localhost:3000](http://localhost:3000) para ver a aplicação em execução.

## Estrutura do Projeto

- **/app**: Contém as páginas do Next.js.
- **/components**: Contém os componentes React utilizados na aplicação.
- **/public**: Contém arquivos públicos, como imagens e ícones.

## Funções Principais

- **Visualização de Imagens**: Exibe imagens em uma grade responsiva.
- **Barra de Pesquisa**: Permite pesquisar imagens por palavras-chave, ignorando acentos.
- **Ampliação de Imagens**: Permite clicar em uma imagem para visualizá-la em tamanho maior.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
