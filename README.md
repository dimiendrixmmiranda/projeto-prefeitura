# 🏛️ Site da Prefeitura

Projeto desenvolvido com **Next.js 15** para o portal oficial da prefeitura municipal. O objetivo do site é oferecer informações públicas, notícias, serviços municipais, eventos e dados climáticos de forma moderna, acessível e responsiva.

---

## 🚀 Tecnologias Utilizadas

### **Frameworks e Bibliotecas Principais**

* **Next.js 15** — Framework React com renderização híbrida (SSR/SSG) e suporte ao Turbopack.
* **React 19** — Biblioteca para criação de interfaces dinâmicas.
* **TailwindCSS** — Estilização rápida e responsiva com utilitários.
* **PrimeReact** — Componentes ricos para UI (cards, sliders, paginadores, etc.).
* **Framer Motion** — Animações fluidas e modernas.
* **Swiper.js** — Carrosséis interativos (notícias, avisos, obras, etc.).

### **Integrações e Funcionalidades**

* **Firebase** — Banco de dados em tempo real para gestão de dados (ex: notícias, aniversários, obras).
* **Leaflet + React-Leaflet** — Mapas interativos para exibir pontos de interesse e obras públicas.
* **FullCalendar** — Exibição de eventos e feriados municipais em calendário.
* **React Confetti** — Efeitos visuais comemorativos (como aniversários de servidores).
* **Lucide Icons / React Icons** — Ícones vetoriais modernos.
* **JS-Cookie** — Gerenciamento de cookies e preferências de usuário.
* **React-Use** — Hooks utilitários para controle de estado e efeitos.

### **Estilização e UI**

* **tailwind-merge / tailwindcss-animate** — Padronização e animações consistentes.
* **class-variance-authority (CVA)** — Gerenciamento de variantes de componentes.
* **aceternity-ui** — Componentes de UI prontos para integração.

---

## ⚙️ Scripts

| Comando         | Descrição                                          |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Inicia o ambiente de desenvolvimento com Turbopack |
| `npm run build` | Gera a build de produção                           |
| `npm start`     | Inicia o servidor de produção                      |
| `npm run lint`  | Executa o linter para verificação de código        |

---

## 🧩 Configurações de Desenvolvimento

### **Pré-requisitos**

* Node.js 18+
* npm ou yarn

### **Instalação**

```bash
git clone <repositório>
cd links-portifolio
npm install
npm run dev
```

O projeto será iniciado em `http://localhost:3000`.

---

## 🧱 Estrutura do Projeto

```
/components
  ├── base/
  ├── festa/
  ├── noticias/
  ├── obras/
  ├── clima/
  └── cabecalho/

/lib
  ├── firebase/
  ├── hooks/
  └── utils/

/pages (Next.js)
  ├── api/
  └── ...
```

* **components/**: componentes reutilizáveis de UI.
* **lib/**: integração com Firebase, hooks personalizados e utilitários.
* **pages/**: rotas do Next.js e APIs internas.

---

## 🔥 Recursos Implementados

* 🎉 **Área de aniversariantes** com animação de confetes
* 📰 **Listagem e paginação de notícias**
* 🏗️ **Exibição de obras públicas em destaque**
* 🌦️ **Previsão do tempo em tempo real (WeatherAPI)**
* 🗺️ **Mapa interativo com Leaflet**
* 📅 **Calendário de eventos com FullCalendar**
* 🧭 **Menus e seções sobre secretarias e serviços municipais**

---

## 📦 Dependências Principais

| Categoria   | Pacote                                                       |
| ----------- | ------------------------------------------------------------ |
| Framework   | `next`, `react`, `react-dom`                                 |
| Estilo/UI   | `tailwindcss`, `primereact`, `framer-motion`, `swiper`       |
| Backend     | `firebase`                                                   |
| Mapa        | `leaflet`, `react-leaflet`                                   |
| Calendário  | `@fullcalendar/*`                                            |
| Ícones      | `lucide-react`, `react-icons`                                |
| Utilitários | `clsx`, `class-variance-authority`, `react-use`, `js-cookie` |

---

## ☁️ Deploy na Vercel

O projeto pode ser facilmente publicado na **Vercel**, aproveitando a integração nativa com **Next.js**.

### **Passos para Deploy**

1. Crie uma conta na [Vercel](https://vercel.com/) e conecte seu repositório Git.
2. Configure a **branch principal** (ex: `main` ou `master`) para deploy automático.
3. Configure as variáveis de ambiente, especialmente do Firebase:

```
NEXT_PUBLIC_FIREBASE_API_KEY=<sua_api_key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<seu_auth_domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<seu_project_id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<seu_storage_bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<seu_messaging_sender_id>
NEXT_PUBLIC_FIREBASE_APP_ID=<seu_app_id>
```

4. Clique em **Deploy**. A Vercel fará o build automático e disponibilizará a URL pública.

**Dicas:**

* Sempre use prefixo `NEXT_PUBLIC_` para variáveis acessíveis no frontend.
* Para atualizações futuras, basta **push para a branch configurada** e o deploy será automático.

---

## 📜 Licença

Este projeto é de uso institucional da **Prefeitura Municipal** e destina-se à divulgação de informações públicas.

---

## 💬 Contato

Entre em contato com a equipe de desenvolvimento ou administrador do site para reportar problemas ou sugerir melhorias.
