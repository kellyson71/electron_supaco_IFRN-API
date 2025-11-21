<div align="center">

# 🎓 Supaco Dashboard

**Um dashboard moderno e elegante para estudantes do IFRN**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![Electron](https://img.shields.io/badge/electron-39.2.3-blue.svg)](https://www.electronjs.org/)
[![React](https://img.shields.io/badge/react-19.2.0-61dafb.svg)](https://reactjs.org/)

![Supaco Dashboard](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

</div>

---

## 📋 Sobre o Projeto

**Supaco Dashboard** é uma aplicação desktop moderna desenvolvida com React e Electron que oferece uma interface intuitiva para estudantes do IFRN acessarem informações acadêmicas do SUAP (Sistema Unificado de Administração Pública).

### ✨ Principais Funcionalidades

- 📊 **Dashboard Personalizado** - Visualize suas informações acadêmicas de forma organizada
- 📚 **Boletim de Notas** - Acompanhe suas notas e médias por disciplina
- 📅 **Horários e Calendário** - Veja sua grade horária e eventos importantes
- 🎯 **Análise de Frequência** - Monitore suas faltas e limite de ausências
- 🤖 **Assistente IA** - Chat integrado com Gemini AI para tirar dúvidas
- 🎨 **Temas Personalizáveis** - Interface com suporte a modo claro/escuro e wallpapers
- 📈 **Gráficos e Estatísticas** - Visualize seu desempenho acadêmico

---

## 🚀 Tecnologias

- **Frontend**: React 19, TypeScript, Vite
- **Desktop**: Electron 39
- **UI**: Tailwind CSS, Framer Motion, Lucide Icons
- **Charts**: Recharts
- **AI**: Google Gemini API

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ e npm
- Conta no SUAP do IFRN
- Chave da API do Google Gemini (opcional, para o assistente IA)

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/supaco-react.git
cd supaco-react

# Instale as dependências
npm install

# Configure a chave da API (opcional)
echo "GEMINI_API_KEY=sua-chave-aqui" > .env.local
```

---

## 🎮 Como Usar

### Modo Desenvolvimento (Web)

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

### Modo Desenvolvimento (Electron)

```bash
npm run electron:dev
```

### Build de Produção

```bash
# Build do React
npm run build

# Executar Electron
npm run electron:start
```

---

## 📱 Gerar Executáveis

### Linux (AppImage)

```bash
npm run dist:appimage
```

O arquivo será gerado em `release/Supaco-*.AppImage`

### Windows (EXE)

```bash
npm run dist:win
```

O instalador será gerado em `release/`

### Todos os Formatos

```bash
npm run dist:all
```

---

## 🏗️ Estrutura do Projeto

```
supaco-react/
├── components/          # Componentes React
│   ├── DashboardLayout.tsx
│   ├── ContentViews.tsx
│   ├── AIChatWidget.tsx
│   └── InvertedCorner.tsx
├── electron/           # Código do Electron
│   ├── main.js
│   └── preload.js
├── dist/               # Build de produção
├── release/            # Executáveis gerados
├── App.tsx             # Componente principal
├── types.ts            # Definições TypeScript
├── vite.config.ts      # Configuração do Vite
└── package.json        # Dependências e scripts
```

---

## 🔧 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run electron:dev` | Executa Electron em modo desenvolvimento |
| `npm run electron:build` | Build e executa Electron |
| `npm run dist:appimage` | Gera AppImage para Linux |
| `npm run dist:win` | Gera executável para Windows |
| `npm run dist:all` | Gera todos os formatos |

---

## 🎨 Recursos Visuais

- **Temas Dinâmicos**: Múltiplos temas baseados em wallpapers
- **Animações Suaves**: Transições com Framer Motion
- **Design Moderno**: Interface limpa e intuitiva
- **Responsivo**: Adaptável a diferentes tamanhos de tela

---

## 🔐 Segurança

- Context Isolation habilitado
- Node Integration desabilitado
- Comunicação segura com APIs
- Tokens armazenados localmente

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📧 Contato

Para dúvidas ou sugestões, abra uma [issue](https://github.com/seu-usuario/supaco-react/issues).

---

<div align="center">

**Desenvolvido com ❤️ para estudantes do IFRN**

[⬆ Voltar ao topo](#-supaco-dashboard)

</div>
