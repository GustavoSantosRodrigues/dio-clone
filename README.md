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
- **React Router DOM** – Controle de rotas# DIO Clone – React + Vite

Projeto desenvolvido com **React + Vite**, recriando as principais telas da plataforma **DIO**, incluindo **Home, Cadastro, Login e Feed**, com foco em **estrutura real de aplicação**, **boas práticas**, **layout por rotas**, **responsividade** e **consumo de API**.

---

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca principal para construção da interface  
- **Vite** – Bundler rápido para desenvolvimento  
- **Tailwind CSS** – Estilização utilitária e responsiva  
- **Axios** – Consumo de API  
- **React Hook Form** – Gerenciamento de formulários  
- **Yup** – Validação de formulários  
- **React Router DOM** – Controle de rotas  
- **JSON Server** – API fake para simular autenticação e cadastro  
- **Lucide React** – Biblioteca de ícones  

---

## 📐 Layout e Estrutura Visual

- Layout responsivo baseado em **grid de 12 colunas**
- Container customizado seguindo cálculo de layout (**pixel perfect**)
- Header reutilizável e padronizado
- Componentes reutilizáveis para manter consistência visual
- Estilização 100% feita com **Tailwind CSS**

---

## 🧭 Layout de Rotas e Navegação

- Navegação controlada com **React Router DOM**
- Estrutura de layout separada por contexto da página
- Páginas públicas (**Home, Login e Cadastro**) utilizam um **header padrão**
- Página de **Feed** utiliza um **header específico com busca**
- Separação de layouts evita conflitos visuais e melhora organização
- Estrutura preparada para crescimento do projeto

---

## 🔐 Autenticação (Simulada)

- Login e cadastro integrados com **API fake**
- Validação de formulários com **Yup**
- Gerenciamento de estado e erros com **React Hook Form**
- Requisições HTTP feitas com **Axios**
- Dados simulados utilizando **JSON Server**

---

## 🧱 Estrutura de Pastas

```bash
src/
├── assets/
│   └── images/index.jsx
│
├── components/
│   ├── headerAuth/
│   ├── headerSearch/
│   └── button/
│   └── feedCard/
│   └── ranking/
│
├── layouts/
│   ├── /AppLayout.jsx
│   └── /SearchLayout.jsx
│
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   └── Feed/
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ▶️ Executando o Projeto

```bash
npm install
npm run dev
npm run api
```

---

## 📌 Observações

Projeto desenvolvido com foco em **simular um cenário real de front-end**, aplicando organização por rotas, separação de layouts, componentização e boas práticas utilizadas no mercado.

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
