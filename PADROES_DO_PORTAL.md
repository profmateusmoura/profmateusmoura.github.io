# Padrões do portal e dos cursos

## Sequência didática

As páginas ensinam: situação concreta, explicação progressiva, representação, código curto, saída comentada, cuidados e síntese. A prática completa fica nos ZIPs, com pastas numeradas de exemplos e exercícios. Use o cenário Lojas Blue e identifique dados didáticos; não invente relações a partir de dados que não as registram.

ALP apresenta os fundamentos. PED introduz coleções, arquivos e estruturas. POO começa em estado e responsabilidade antes de classes, passa por composição antes de herança e termina integrando contratos, JSON e testes.

## Componentes compartilhados

ALP, PED e POO carregam `materiais/shared/style.css`, `pygments.css`, `site.js` e `navigation.*`. Alterações gerais devem ocorrer nesses arquivos, com verificação dos três cursos. Os assets locais ficam reservados às interações específicas e aos índices de busca de cada disciplina.

Use os mesmos componentes para menu, retorno a materiais, tema, busca, código copiável, sumário, progresso e próxima/anterior. O portal mantém seu catálogo próprio, mas usa a mesma preferência `pi-theme`. A antiga preferência `portal-theme` é lida como compatibilidade quando a nova ainda não existir.

Progresso permanece separado: `pi-alp-read`, `pi-read` para PED e `pi-poo-read`. O total é obtido do menu do curso. Não misture identificadores de cadernos entre disciplinas.

## Arquivos de prática

Cada exemplo deve informar objetivo, domínio das entradas e comportamento esperado; deve executar isoladamente. Cada exercício deve conter seu enunciado no `.py`, sem solução pronta, e casos ou critérios de conferência. Identifique programas que gravam arquivos e use uma pasta de saída explícita.

## Conferência antes de publicar

Verifique links e ZIPs, saída dos exemplos, tema persistente entre portal e cursos, cópia real de código, busca, menu móvel, teclado e progresso independente. Não anuncie um curso como disponível antes de seus arquivos estarem incluídos. Não marque como concluídos módulos ainda planejados.
