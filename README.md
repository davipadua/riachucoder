🛒 Riachucoder

Este projeto foi desenvolvido como parte do desafio técnico para Desenvolvedor Frontend Júnior da empresa Scoder. A aplicação simula um catálogo de produtos fictícios, permitindo que o usuário adicione/remova itens no carrinho e finalize a compra (simulação).
O nome "Riachucoder" é uma brincadeira com os nomes Scoder e Riachuelo.

-----------------------

🚀 Tecnologias Utilizadas

Front-end:
- React.js com Vite
- React Router
- Zod
- Tailwind CSS

-----------------------

🧰 Instalação

1. Instalar dependências:
npm install

2. Instalar bibliotecas adicionais:
npm install tailwindcss @tailwindcss/vite zod react-router-dom

-----------------------

🧪 Como Acessar e Testar o Projeto

Login:
http://localhost:5173/

- É necessário estar logado para visualizar os produtos.
- Você pode:
  - Usar credenciais da API da FakeStore: https://fakestoreapi.com/users
  - Ou usar o usuário pré-definido:
    - Email: morrison@gmail.com
    - Senha: 83r5^_

Páginas:

- Produtos:
http://localhost:5173/:userId/products

  ⚠️ Pode passar o userId diretamente na URL para facilitar os testes (não recomendado em produção).

- Produto individual:
http://localhost:5173/:userId/products/:productId

- Carrinho (finalização da compra):
http://localhost:5173/:userId/cart

Após finalizar a compra, um novo carrinho é criado via método POST. A resposta é visível no console, mas a FakeStore API não salva de forma permanente (recarregar a página apaga os dados).

-----------------------

🎥 Link de demonstração em vídeo:
*Em breve...*

-----------------------

💬 Considerações Finais

Gostei muito de desenvolver esse projeto! Ele representa bem minha evolução e dedicação.
Apesar do prazo limitado, consegui aplicar boas práticas e tecnologias modernas.
Planejo continuar trabalhando neste projeto, adicionando:

- Página de histórico de pedidos.
- Dashboard para usuários admin.
- Melhorias de segurança e performance.

Agradeço pela oportunidade! 😊