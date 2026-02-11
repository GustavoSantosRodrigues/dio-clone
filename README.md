# DIO Clone – React + Vite + TypeScript

Projeto desenvolvido com **React + Vite + TypeScript**, recriando as telas de **Cadastro, Login e Feed**, aplicando boas práticas de componentização, tipagem, responsividade e consumo de API.

---

## 🚀 Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Axios**
- **React Hook Form**
- **Yup**
- **React Router DOM**
- **JSON Server**
- **Lucide React**

---

## 📐 Layout e Estrutura Visual

- Layout responsivo baseado em **grid de 12 colunas**
- Componentes reutilizáveis e tipados
- Separação de layouts por contexto de página
- Estilização 100% com **Tailwind CSS**
- Código totalmente tipado com **TypeScript**

---

## 🔐 Autenticação (Simulada)

- Integração com **JSON Server**
- Requisições via **Axios**
- Formulários controlados com **React Hook Form**
- Validação com **Yup**
- Tipagem completa de dados de usuário e respostas da API

---

## 🖼️ Imagens Tipadas

As imagens foram centralizadas e exportadas de forma tipada:

```
src/assets/images/index.ts
```

Exportação centralizada para facilitar importação:

```ts
import { logo } from "@/assets/images"
```

Garantindo melhor organização e controle com TypeScript.

---

## 🧱 Estrutura de Pastas (Atualizada)

```bash
src/
├── assets/
│   └── images/
│       └── index.ts
│
├── components/
│   ├── HeaderAuth.tsx
│   ├── HeaderSearch.tsx
│   └── Button.tsx
│
├── layouts/
│   ├── AppLayout.tsx
│   └── SearchLayout.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   └── Feed.tsx
│
├── services/
│   └── api.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## ▶️ Executando o Projeto

```bash
npm install
npm run dev
npm run api
```
