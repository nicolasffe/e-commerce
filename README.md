# 🎟️ Ticket Landing - Experiências ao vivo

Este é o repositório da *landing page* **Ticket Landing**, um projeto de e-commerce focado na venda de ingressos para eventos ao vivo.

---

## 💡 Sobre o Projeto

O projeto oferece uma interface moderna e intuitiva para a busca e compra de ingressos, destacando as principais categorias: shows, esportes e festivais. Foi desenvolvido com um foco em desempenho e tipagem segura utilizando o ecossistema React/Vite/TypeScript.

### Funcionalidades em Destaque

* **Design Responsivo e Moderno:** Utiliza o Tailwind CSS e a fonte `Space Grotesk` para um visual atraente e funcional.
* **Seção de Destaque (Hero):** Apresenta o evento principal (Ex: "Snoop Dogg") com informações detalhadas, opções de *passes* (VIP + Lounge) e *e-Ticket* imediato.
* **Carrosséis de Eventos:** As seções de Shows, Esportes e Festivais utilizam lógica de carrossel para exibir diferentes eventos dinamicamente.
    * **Autoplay e Pausa:** O carrossel avança automaticamente (com diferentes intervalos: 4.5s, 5.2s, 5.6s) e pausa a rotação quando o usuário passa o mouse sobre a seção (`onMouseEnter`/`onMouseLeave`).
    * **Navegação Manual:** Controles visuais (`‹` e `›`) e indicadores na parte inferior permitem a navegação manual.
* **Desenvolvimento com TypeScript:** O código é fortemente tipado, utilizando a interface `Card` para a estrutura dos dados dos eventos.

---

## 🛠️ Tecnologias Utilizadas

O projeto é um template moderno de React com Vite e TypeScript.

* **Frontend Framework:** `react` (v19.2.0)
* **Build Tool:** `vite` (v7.2.4) com `@vitejs/plugin-react`
* **Linguagem:** `typescript` (v~5.9.3)
* **Estilização:** `tailwindcss` (v4.1.17) (via PostCSS)
* **Linting:** `eslint` (v9.39.1) com suporte a TypeScript e React Hooks.

---

## 🚀 Primeiros Passos

Siga as instruções abaixo para configurar e rodar o projeto localmente.

### ⚙️ Instalação de Dependências

```bash
# Navegue até o diretório do projeto
# cd nicolasffe/e-commerce/e-commerce-c3f13d84f8fd8db6b70d59bb615c2a9d9b2203bd

# Instale as dependências usando npm
npm install
# ou yarn install
# ou pnpm install