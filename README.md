# Hype Sensi — Windows Edition (WebApp)

Projeto React + TypeScript + Vite separado da versão mobile. Acesso pelo navegador no Windows 10/11; instalável como PWA nos navegadores compatíveis.

## Rodar localmente

```bash
npm install
npm run build
npm run dev
```

## Publicar no Render

- Serviço: **Static Site**
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Rotas SPA: configure rewrite `/*` → `/index.html` (veja `render.yaml`).
- Use HTTPS para instalação PWA.

## Permissões

O site **não** pede permissões de administrador, acesso a processos, sensores, câmera, microfone ou localização. Em **Configurações**, o usuário pode solicitar **armazenamento persistente** através da API do navegador, de forma opcional, depois de clicar. Em **Downloads**, a instalação PWA ocorre somente após ação do usuário e conforme suporte do Edge/Chrome.

A página **Informações do PC** mostra apenas dados não sensíveis disponibilizados pelo navegador e não inventa CPU %, temperatura, FPS ou RAM em uso. Para métricas nativas, é necessário aplicativo complementar, instalado e autorizado separadamente.

## Instalador opcional

Para publicar um instalador real Windows, coloque `downloads/windows/HypeSensi-Windows.exe` no repositório antes do build, ou defina `VITE_WINDOWS_DOWNLOAD_URL` com uma URL HTTPS válida. O build inclui o executável apenas se ele existir. **Nenhum executável está embutido neste código-fonte**.

## Estrutura

- `assets/`: CSS, logos, ícones e JS; somente uma cópia.
- `src/pages/`: Landing, Dashboard, Sensi IA PC, HUD Studio, perfis, informações do PC, Downloads, etc.
- `src/data/quiz/questions.json`: perguntas exclusivas de Windows/emulador.
- `src/components/onboarding/TutorialModal.tsx`: tutorial que aparece uma vez no dashboard.

## Limitações

O site não modifica configurações do Free Fire automaticamente. A biblioteca de famosos utiliza somente dados e fontes cadastrados. Perfis são locais ao navegador.

Ao entrar no Dashboard aparece uma tela de carregamento de 5 segundos, seguida do tutorial na primeira visita.
