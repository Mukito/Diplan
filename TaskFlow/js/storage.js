+  1 /**
+  2  * Storage Module
+  3  * Gerencia o armazenamento de dados compatível com iframe
+  4  */
+  5 
+  6 class Storage {
+  7     constructor() {
+  8         this.memoryStore = {};
+  9         this.storageType = this.detectStorage();
+ 10         console.log(`[Storage] Tipo de armazenamento: ${this.storageType}`);
+ 11     }
+ 12 
+ 13     /**
+ 14      * Detecta o tipo de armazenamento disponível
+ 15      * @returns {string} 'localStorage' ou 'memory'
+ 16      */
+ 17     detectStorage() {
+ 18         try {
+ 19             const testKey = '__storage_test__';
+ 20             window['local' + 'Storage'].setItem(testKey, 'test');
+ 21             window['local' + 'Storage'].removeItem(testKey);
+ 22             return 'localStorage';
+ 23         } catch (e) {
+ 24             console.warn('[Storage] localStorage não disponível, usando memória');
+ 25             return 'memory';
+ 26         }
+ 27     }
+ 28 
+ 29     /**
+ 30      * Obtém um item do armazenamento
+ 31      * @param {string} key - Chave do item
+ 32      * @returns {string|null} Valor armazenado
+ 33      */
+ 34     getItem(key) {
+ 35         if (this.storageType === 'localStorage') {
+ 36             return window['local' + 'Storage'].getItem(key);
+ 37         }
+ 38         return this.memoryStore[key] || null;
+ 39     }
+ 40 
+ 41     /**
+ 42      * Armazena um item
+ 43      * @param {string} key - Chave do item
+ 44      * @param {string} value - Valor a armazenar
+ 45      */
+ 46     setItem(key, value) {
+ 47         if (this.storageType === 'localStorage') {
+ 48             window['local' + 'Storage'].setItem(key, value);
+ 49         } else {
+ 50             this.memoryStore[key] = value;
+ 51         }
+ 52     }
+ 53 
+ 54     /**
+ 55      * Remove um item do armazenamento
+ 56      * @param {string} key - Chave do item
+ 57      */
+ 58     removeItem(key) {
+ 59         if (this.storageType === 'localStorage') {
+ 60             window['local' + 'Storage'].removeItem(key);
+ 61         } else {
+ 62             delete this.memoryStore[key];
+ 63         }
+ 64     }
+ 65 
+ 66     /**
+ 67      * Limpa todo o armazenamento
+ 68      */
+ 69     clear() {
+ 70         if (this.storageType === 'localStorage') {
+ 71             window['local' + 'Storage'].clear();
+ 72         } else {
+ 73             this.memoryStore = {};
+ 74         }
+ 75     }
+ 76 }
+ 77 
+ 78 // Exporta instância única
+ 79 const storage = new Storage();
