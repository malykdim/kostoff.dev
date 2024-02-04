import { defineStore } from "pinia";
import { ref } from 'vue';

import { login, logout} from '../dataProviders/admin.ts';

export const useAdminStore = defineStore('useAdminStore', () => {
    const admin = ref(null);
    const isAuthenticated = ref(false);
    const hasError = ref(false);
    const token = ref('');

    async function logIn(username: string, password: string) {
        try {
            const user = await login(username, password);
      
            if (user) {
              admin.value = user;
              isAuthenticated.value = true;
              token.value = user.sessionToken;

              console.log(admin);
              console.log(token);
          
              sessionStorage.setItem('admin', JSON.stringify(admin));
            } 
          } catch (error) {
            console.error('Error during login: ', error);
            hasError.value = true;
            isAuthenticated.value = false;
          }
    }

    async function logOut(currentToken: string) {
        console.log('token: ', currentToken);

        try {
            if (currentToken) {
              await logout(currentToken);
            }
            admin.value = null;
            isAuthenticated.value = false;
            token.value = '';
            
            sessionStorage.removeItem('admin');
          } catch (error) {
            hasError.value = true;
            console.error('Error during logout: ', error);
            console.log(isAuthenticated.value);
            console.log(admin.value);
          }
    }

    return { 
        admin,
        isAuthenticated,
        hasError,
        logIn,
        logOut
    }
});