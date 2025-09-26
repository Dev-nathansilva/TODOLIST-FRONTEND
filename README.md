# 🎨 ToDo List Frontend

![React](https://img.shields.io/badge/React-18.3.1-blue)  
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4)  
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Interface web do **ToDo List** construída com **React (Vite + TypeScript)**, estilizada com **TailwindCSS + Radix UI + shadcn/ui**, e integrada à API de gerenciamento de tarefas (backend em **FastAPI + PostgreSQL**).

---

## 🛠 Tecnologias

- **Framework:** React 18 (com Vite + TypeScript)
- **UI:** TailwindCSS, Radix UI, shadcn/ui, Lucide Icons
- **Gerenciamento de dados:** TanStack React Query, Axios
- **Formulários:** React Hook Form
- **Roteamento:** React Router DOM
- **Notificações:** Sonner (toast)
- **Controle de temas:** Next Themes

---

## 🚀 Rodando localmente

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente (`.env`):

```
VITE_API_URL=http://127.0.0.1:8000
```

4. Rode a aplicação:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

---

## 📌 Funcionalidades

- ✅ Listagem de tarefas em tabela componentizada
- 📝 Criação, edição e exclusão de tarefas (integração com API)
- 🎯 Filtros e ordenação de tarefas
- 📅 Controle de prazos com **date-fns**
- 🌗 Tema claro/escuro com persistência
- ⚡ Feedback visual com toasts

---

## 🏗 Arquitetura da Aplicação

```
src/
 ├── components/      # Componentes reutilizáveis (Header, Tabelas, Modais)
 ├── pages/           # Páginas principais (Index, TodoApp, NotFound)
 ├── services/        # Integração com API (Axios + React Query)
 ├── hooks/           # Hooks customizados
 ├── lib/             # Utilitários e helpers
 ├── types/           # Tipagens TypeScript
 ├── App.tsx          # Roteamento e providers
 └── main.tsx         # Ponto de entrada
```

---

## 📡 Integração com a API

Este frontend se conecta à API descrita em [ToDo List API](../backend/README.md).  
---

## 📄 Licença

MIT License
