+   1 # 📋 TaskFlow - Sistema de Gestão de Projetos
+   2 
+   3 ![TaskFlow](https://img.shields.io/badge/version-1.0.0-blue)
+   4 ![License](https://img.shields.io/badge/license-MIT-green)
+   5 
+   6 Sistema completo de gestão de projetos estilo Trello com autenticação, múltiplos quadros, drag and drop, e cores personalizadas.
+   7 
+   8 ## 🚀 Funcionalidades
+   9 
+  10 - ✅ **Sistema de Autenticação** - Login e cadastro de usuários
+  11 - 📊 **Múltiplos Quadros** - Organize projetos diferentes em quadros separados
+  12 - 📝 **Listas Personalizadas** - Crie listas com cores customizadas
+  13 - 🎨 **Cartões Coloridos** - Escolha cores para destacar tarefas importantes
+  14 - 🔄 **Drag & Drop Avançado** - Arraste tarefas para reorganizar ou mover entre listas
+  15 - 🌓 **Modo Escuro** - Suporte automático a tema claro/escuro
+  16 - 💾 **Persistência de Dados** - Todos os dados salvos automaticamente
+  17 - 📱 **Design Responsivo** - Funciona perfeitamente em mobile e desktop
+  18 
+  19 ## 📁 Estrutura do Projeto
+  20 
+  21 ```
+  22 taskflow/
+  23 ├── index.html              # Página principal
+  24 ├── css/
+  25 │   └── styles.css         # Estilos da aplicação
+  26 ├── js/
+  27 │   ├── storage.js         # Gerenciamento de armazenamento
+  28 │   ├── database.js        # Banco de dados local
+  29 │   ├── auth.js            # Autenticação de usuários
+  30 │   ├── boards.js          # Gerenciamento de quadros
+  31 │   ├── lists.js           # Gerenciamento de listas
+  32 │   ├── tasks.js           # Gerenciamento de tarefas
+  33 │   ├── dragdrop.js        # Sistema de drag and drop
+  34 │   ├── ui.js              # Funções de interface
+  35 │   └── main.js            # Inicialização da aplicação
+  36 └── README.md              # Este arquivo
+  37 ```
+  38 
+  39 ## 🛠️ Como Rodar no VSCode
+  40 
+  41 ### Pré-requisitos
+  42 
+  43 - Visual Studio Code instalado
+  44 - Navegador web moderno (Chrome, Firefox, Edge, etc.)
+  45 
+  46 ### Passo a Passo
+  47 
+  48 1. **Abra o VSCode**
+  49 
+  50 2. **Abra a pasta do projeto**
+  51    - Arquivo → Abrir Pasta
+  52    - Selecione a pasta `taskflow`
+  53 
+  54 3. **Instale a extensão Live Server (Recomendado)**
+  55    - Clique no ícone de extensões (Ctrl+Shift+X)
+  56    - Procure por "Live Server"
+  57    - Instale a extensão do Ritwick Dey
+  58 
+  59 4. **Execute o projeto**
+  60    
+  61    **Opção 1 - Com Live Server (Recomendado):**
+  62    - Clique com botão direito no arquivo `index.html`
+  63    - Selecione "Open with Live Server"
+  64    - O navegador abrirá automaticamente em `http://localhost:5500`
+  65 
+  66    **Opção 2 - Sem Live Server:**
+  67    - Simplesmente abra o arquivo `index.html` no seu navegador
+  68    - Arraste o arquivo para a janela do navegador
+  69    - Ou use Ctrl+O no navegador e selecione o arquivo
+  70 
+  71 ## 📖 Como Usar
+  72 
+  73 ### Primeiro Acesso
+  74 
+  75 1. **Criar uma Conta**
+  76    - Clique em "Criar conta"
+  77    - Preencha: Nome completo, Usuário e Senha
+  78    - Clique em "Criar Conta"
+  79 
+  80 2. **Fazer Login**
+  81    - Use o usuário e senha criados
+  82    - Clique em "Entrar"
+  83 
+  84 ### Gerenciando Quadros
+  85 
+  86 1. **Criar Quadro**
+  87    - Clique em "+ Novo Quadro"
+  88    - Digite o nome (ex: "Projeto Web", "Marketing")
+  89    - Clique em "Salvar"
+  90 
+  91 2. **Editar/Excluir Quadro**
+  92    - Clique em "✏️ Editar Quadro"
+  93    - Modifique o nome ou clique em "Excluir"
+  94 
+  95 ### Gerenciando Listas
+  96 
+  97 1. **Criar Lista**
+  98    - Clique em "+ Nova Lista"
+  99    - Digite o nome (ex: "A Fazer", "Em Progresso")
+ 100    - **Escolha uma cor** para destacar a lista
+ 101    - Clique em "Salvar"
+ 102 
+ 103 2. **Editar/Excluir Lista**
+ 104    - Clique no ícone de lápis ✏️ na lista
+ 105    - Ou clique no ícone de lixeira 🗑️ para excluir
+ 106 
+ 107 ### Gerenciando Tarefas
+ 108 
+ 109 1. **Criar Tarefa**
+ 110    - Clique em "+ Adicionar Tarefa" em qualquer lista
+ 111    - Preencha título e descrição
+ 112    - **Escolha uma cor** para o cartão (opcional)
+ 113    - Clique em "Salvar"
+ 114 
+ 115 2. **Mover Tarefas**
+ 116    
+ 117    **Arrastar e Soltar:**
+ 118    - Clique e segure uma tarefa
+ 119    - Arraste para cima/baixo para reordenar
+ 120    - Arraste para outra lista para mover
+ 121    - Solte onde desejar
+ 122 
+ 123    **Mover para Outro Quadro:**
+ 124    - Clique na tarefa para ver detalhes
+ 125    - Use o menu "Mover para outro quadro"
+ 126    - Selecione o quadro e lista de destino
+ 127 
+ 128 3. **Editar/Excluir Tarefa**
+ 129    - Clique na tarefa para ver detalhes
+ 130    - Clique em "Editar" ou "Excluir"
+ 131 
+ 132 ## 🎨 Personalização de Cores
+ 133 
+ 134 ### Cores para Listas
+ 135 
+ 136 Escolha entre 9 cores vibrantes para suas listas:
+ 137 - 🔴 Vermelho - Urgente/Alta prioridade
+ 138 - 🟠 Laranja - Importante
+ 139 - 🟡 Amarelo - Atenção
+ 140 - 🟢 Verde - Concluído/Aprovado
+ 141 - 🔵 Azul - Em progresso
+ 142 - 🟣 Roxo - Design/Criativo
+ 143 - 🟤 Marrom - Pesquisa
+ 144 - ⚫ Cinza - Backlog
+ 145 - ⚪ Branco - Padrão
+ 146 
+ 147 ### Cores para Cartões
+ 148 
+ 149 Destaque tarefas importantes com cores:
+ 150 - Use cores para categorizar por tipo
+ 151 - Ou para indicar prioridade
+ 152 - Ou para diferenciar responsáveis
+ 153 
+ 154 ## 💡 Dicas de Uso
+ 155 
+ 156 1. **Organize por Status**
+ 157    ```
+ 158    📋 A Fazer → ⚙️ Em Progresso → ✅ Concluído
+ 159    ```
+ 160 
+ 161 2. **Organize por Prioridade**
+ 162    ```
+ 163    🔴 Urgente → 🟡 Normal → 🟢 Baixa
+ 164    ```
+ 165 
+ 166 3. **Use Múltiplos Quadros**
+ 167    - Um quadro para cada projeto
+ 168    - Um quadro pessoal e outro profissional
+ 169    - Quadros por equipe ou departamento
+ 170 
+ 171 4. **Cores Consistentes**
+ 172    - Defina um padrão de cores para sua equipe
+ 173    - Exemplo: Vermelho = Urgente, Verde = Concluído
+ 174 
+ 175 ## 🔒 Segurança e Privacidade
+ 176 
+ 177 - Todos os dados são armazenados **localmente** no seu navegador
+ 178 - Nenhum dado é enviado para servidores externos
+ 179 - Cada usuário tem seu próprio espaço isolado
+ 180 - Os dados persistem mesmo após fechar o navegador
+ 181 
+ 182 ## 🐛 Solução de Problemas
+ 183 
+ 184 ### Os dados não estão sendo salvos
+ 185 
+ 186 - Verifique se o localStorage está habilitado no navegador
+ 187 - Não use modo anônimo/privado
+ 188 - Limpe o cache se necessário
+ 189 
+ 190 ### O drag and drop não funciona
+ 191 
+ 192 - Certifique-se de estar usando um navegador moderno
+ 193 - Tente recarregar a página (F5)
+ 194 
+ 195 ### Esqueci minha senha
+ 196 
+ 197 - Os dados estão armazenados localmente
+ 198 - Se esquecer a senha, será necessário criar uma nova conta
+ 199 - **Dica:** Use senhas fáceis de lembrar em ambiente local
+ 200 
+ 201 ## 🚀 Próximas Funcionalidades (Roadmap)
+ 202 
+ 203 - [ ] Exportar/Importar quadros
+ 204 - [ ] Compartilhamento de quadros
+ 205 - [ ] Anexos em tarefas
+ 206 - [ ] Comentários em tarefas
+ 207 - [ ] Datas de vencimento
+ 208 - [ ] Notificações
+ 209 - [ ] Pesquisa global
+ 210 - [ ] Tags/Etiquetas
+ 211 
+ 212 ## 📝 Tecnologias Utilizadas
+ 213 
+ 214 - **HTML5** - Estrutura da aplicação
+ 215 - **CSS3** - Estilização e animações
+ 216 - **JavaScript (ES6+)** - Lógica da aplicação
+ 217 - **TailwindCSS** - Framework CSS
+ 218 - **LocalStorage API** - Persistência de dados
+ 219 - **Drag and Drop API** - Arrastar e soltar
+ 220 
+ 221 ## 📄 Licença
+ 222 
+ 223 Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.
+ 224 
+ 225 ## 👨‍💻 Autor
+ 226 
+ 227 Desenvolvido com ❤️ para facilitar a gestão de projetos
+ 228 
+ 229 ---
+ 230 
+ 231 **Versão:** 1.0.0  
+ 232 **Última atualização:** 2024
