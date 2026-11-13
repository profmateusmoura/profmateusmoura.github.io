# Interface compartilhada dos cursos

ALP, PED e POO carregam os mesmos style.css, pygments.css, site.js e navigation.*.
Use data-course no body (alp, ped ou poo) e data-root com o caminho da raiz do curso.
O total de cadernos é calculado pelos identificadores data-visited da navegação.

Tema: pi-theme é compartilhado com o portal. Progresso: pi-alp-read, pi-read (PED, preservado) e pi-poo-read são independentes. Não migre os dados de leitura para uma chave única.

Mantenha os mesmos componentes: portal-return, topbar, theme-toggle, search-open, code-shell/copy-code, page-toc, complete-btn e pager. Os laboratórios específicos ficam nos assets de cada curso.

Ao criar um novo curso, use busca relativa à raiz dele, caminhos relativos ao portal e nomes únicos nos cadernos. Teste celular, teclado, troca de tema, cópia e persistência de progresso.
