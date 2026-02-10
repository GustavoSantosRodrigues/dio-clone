# DIO Clone – React + Vite

Projeto desenvolvido com **React + Vite**, recriando as telas de **Cadastro e Login** inspiradas no layout da DIO, utilizando boas práticas de componentização, responsividade e consumo de API.

---

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca principal para construção da interface
- **Vite** – Bundler rápido para desenvolvimento
- **Tailwind CSS** – Estilização utilitária e responsiva
- **Axios** – Consumo de API
- **React Hook Form** – Gerenciamento de formulários
- **Yup** – Validação de formulários
- **React Router DOM** – Controle de rotas
- **JSON Server** – API fake para simular autenticação

---

## 📐 Layout e Estrutura

- Layout responsivo baseado em **grid de 12 colunas**
- Container customizado seguindo cálculo de layout (pixel perfect)
- Header reutilizável com container global
- Separação clara entre:
  - `components`
  - `assets`
  - `services`
  - `pages` (login / cadastro)

---

## 🧱 Estrutura de Pastas

```bash
src/
├── assets/
│   └── images/
│       ├── logo-dio.png
│       ├── email.png
│       ├── password.png
│       └── index.js
│
├── components/
│   └── header/
│       └── Header.jsx
│
├── pages/
│   ├── Login.jsx
│   └── Register.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
