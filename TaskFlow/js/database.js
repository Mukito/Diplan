+   1 /**
+   2  * Database Module
+   3  * Gerencia o banco de dados local e operações de usuário
+   4  */
+   5 
+   6 class Database {
+   7     constructor() {
+   8         this.currentUser = null;
+   9     }
+  10 
+  11     /**
+  12      * Obtém lista de todos os usuários
+  13      * @returns {Array} Lista de usuários
+  14      */
+  15     getUsers() {
+  16         return JSON.parse(storage.getItem('taskflow_users') || '[]');
+  17     }
+  18 
+  19     /**
+  20      * Salva lista de usuários
+  21      * @param {Array} users - Lista de usuários
+  22      */
+  23     saveUsers(users) {
+  24         storage.setItem('taskflow_users', JSON.stringify(users));
+  25     }
+  26 
+  27     /**
+  28      * Obtém dados de um usuário específico
+  29      * @param {string} username - Nome do usuário
+  30      * @returns {Object} Dados do usuário
+  31      */
+  32     getUserData(username) {
+  33         return JSON.parse(
+  34             storage.getItem(`taskflow_data_${username}`) || 
+  35             '{"boards": [], "currentBoardId": null}'
+  36         );
+  37     }
+  38 
+  39     /**
+  40      * Salva dados de um usuário
+  41      * @param {string} username - Nome do usuário
+  42      * @param {Object} data - Dados a salvar
+  43      */
+  44     saveUserData(username, data) {
+  45         storage.setItem(`taskflow_data_${username}`, JSON.stringify(data));
+  46     }
+  47 
+  48     /**
+  49      * Cria um novo usuário
+  50      * @param {string} name - Nome completo
+  51      * @param {string} username - Nome de usuário
+  52      * @param {string} password - Senha
+  53      * @returns {Object} Resultado da operação
+  54      */
+  55     createUser(name, username, password) {
+  56         const users = this.getUsers();
+  57         
+  58         if (users.find(u => u.username === username)) {
+  59             return { success: false, message: 'Usuário já existe' };
+  60         }
+  61 
+  62         users.push({ 
+  63             name, 
+  64             username, 
+  65             password, 
+  66             createdAt: new Date().toISOString() 
+  67         });
+  68         
+  69         this.saveUsers(users);
+  70 
+  71         // Inicializa dados do usuário
+  72         this.saveUserData(username, {
+  73             boards: [],
+  74             currentBoardId: null
+  75         });
+  76 
+  77         console.log(`[Database] Usuário criado: ${username}`);
+  78         return { success: true };
+  79     }
+  80 
+  81     /**
+  82      * Autentica um usuário
+  83      * @param {string} username - Nome de usuário
+  84      * @param {string} password - Senha
+  85      * @returns {Object} Resultado da autenticação
+  86      */
+  87     authenticateUser(username, password) {
+  88         const users = this.getUsers();
+  89         const user = users.find(u => u.username === username && u.password === password);
+  90 
+  91         if (user) {
+  92             this.currentUser = user;
+  93             console.log(`[Database] Usuário autenticado: ${username}`);
+  94             return { success: true, user };
+  95         }
+  96 
+  97         return { success: false, message: 'Usuário ou senha incorretos' };
+  98     }
+  99 
+ 100     /**
+ 101      * Obtém dados do usuário atual
+ 102      * @returns {Object|null} Dados do usuário ou null
+ 103      */
+ 104     getCurrentUserData() {
+ 105         if (!this.currentUser) return null;
+ 106         return this.getUserData(this.currentUser.username);
+ 107     }
+ 108 
+ 109     /**
+ 110      * Salva dados do usuário atual
+ 111      * @param {Object} data - Dados a salvar
+ 112      */
+ 113     saveCurrentUserData(data) {
+ 114         if (!this.currentUser) return;
+ 115         this.saveUserData(this.currentUser.username, data);
+ 116     }
+ 117 
+ 118     /**
+ 119      * Desloga o usuário atual
+ 120      */
+ 121     logout() {
+ 122         console.log(`[Database] Usuário deslogado: ${this.currentUser?.username}`);
+ 123         this.currentUser = null;
+ 124     }
+ 125 }
+ 126 
+ 127 // Exporta instância única
+ 128 const db = new Database();
