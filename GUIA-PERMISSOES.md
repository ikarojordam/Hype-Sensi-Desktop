# Permissões e transparência

**Sem administrador:** abrir o site não exige elevação de privilégios.

**Armazenamento local:** navegador usa localStorage para perfis e preferências, sujeito a limpeza de dados. Em Configurações, o botão opcional chama `navigator.storage.persist()` para reduzir remoção automática quando suportado; não garante permanência.

**Instalação PWA:** o navegador decide se apresenta a janela `beforeinstallprompt`. O usuário escolhe instalar ou não; também pode usar o menu do Edge/Chrome.

**Informações do computador:** contagem de processadores lógicos, resolução de tela e memória aproximada (quando suportada), exibidas apenas sob clique. Não acessa sensores do Windows, uso de CPU/RAM, GPU, temperatura, FPS, pastas ou processos.

**Sem pedidos desnecessários:** não solicita câmera, microfone, localização, notificações ou área de transferência sem finalidade.

O `manifest.webmanifest` habilita o modo aplicativo, mas não concede permissões.
