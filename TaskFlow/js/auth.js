+  1 /**
+  2  * Authentication Module
+  3  * Gerencia login, registro e logout de usuários
+  4  */
+  5 
+  6 /**
+  7  * Exibe o formulário de login
+  8  */
+  9 function showLogin() {
+ 10     document.getElementById('loginForm').classList.remove('hidden');
+ 11     document.getElementById('registerForm').classList.add('hidden');
+ 12 }
+ 13 
+ 14 /**
+ 15  * Exibe o formulário de registro
+ 16  */
+ 17 function showRegister() {
+ 18     document.getElementById('loginForm').classList.add('hidden');
+ 19     document.getElementById('registerForm').classList.remove('hidden');
+ 20 }
+ 21 
+ 22 /**
+ 23  * Realiza o login do usuário
+ 24  */
+ 25 function login() {
+ 26     const username = document.getElementById('loginUsername').value.trim();
+ 27     const password = document.getElementById('loginPassword').value;
+ 28 
+ 29     if (!username || !password) {
+ 30         showAlert('Atenção', 'Por favor, preencha todos os campos');
+ 31         return;
+ 32     }
+ 33 
+ 34     const result = db.authenticateUser(username, password);
+ 35 
+ 36     if (result.success) {
+ 37         document.getElementById('authScreen').classList.add('hidden');
+ 38         document.getElementById('mainApp').classList.remove('hidden');
+ 39         document.getElementById('userName').textContent = result.user.name;
+ 40         initializeApp();
+ 41     } else {
+ 42         showAlert('Erro', result.message);
+ 43     }
+ 44 }
+ 45 
+ 46 /**
+ 47  * Registra um novo usuário
+ 48  */
+ 49 function register() {
+ 50     const name = document.getElementById('registerName').value.trim();
+ 51     const username = document.getElementById('registerUsername').value.trim();
+ 52     const password = document.getElementById('registerPassword').value;
+ 53 
+ 54     if (!name || !username || !password) {
+ 55         showAlert('Atenção', 'Por favor, preencha todos os campos');
+ 56         return;
+ 57     }
+ 58 
+ 59     if (username.length < 3) {
+ 60         showAlert('Atenção', 'O usuário deve ter pelo menos 3 caracteres');
+ 61         return;
+ 62     }
+ 63 
+ 64     if (password.length < 4) {
+ 65         showAlert('Atenção', 'A senha deve ter pelo menos 4 caracteres');
+ 66         return;
+ 67     }
+ 68 
+ 69     const result = db.createUser(name, username, password);
+ 70 
+ 71     if (result.success) {
+ 72         showAlert('Sucesso', 'Conta criada com sucesso! Faça login para continuar');
+ 73         showLogin();
+ 74         document.getElementById('registerName').value = '';
+ 75         document.getElementById('registerUsername').value = '';
+ 76         document.getElementById('registerPassword').value = '';
+ 77     } else {
+ 78         showAlert('Erro', result.message);
+ 79     }
+ 80 }
+ 81 
+ 82 /**
+ 83  * Desloga o usuário atual
+ 84  */
+ 85 function logout() {
+ 86     showConfirmDialog('Sair', 'Tem certeza que deseja sair?', (confirmed) => {
+ 87         if (confirmed) {
+ 88             db.logout();
+ 89             document.getElementById('authScreen').classList.remove('hidden');
+ 90             document.getElementById('mainApp').classList.add('hidden');
+ 91             document.getElementById('loginUsername').value = '';
+ 92             document.getElementById('loginPassword').value = '';
+ 93         }
+ 94     });
+ 95 }
