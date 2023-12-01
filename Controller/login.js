// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAb4cFebnoqummtb_OjeThxSKiMoeFIhU",
    authDomain: "cafe-e-companhia.firebaseapp.com",
    databaseURL: "https://cafe-e-companhia-default-rtdb.firebaseio.com",
    projectId: "cafe-e-companhia",
    storageBucket: "cafe-e-companhia.appspot.com",
    messagingSenderId: "867442669159",
    appId: "1:867442669159:web:5c71730ec1e8ebaeabc6c2",
    measurementId: "G-X6G2V0RRZE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


// Adiciona um manipulador de evento ao botão de login.
document.querySelector('#botao').addEventListener('click', () => {
    // Obtem o e-mail e a senha do usuário.
    const email = document.querySelector('#Usuario').value;
    const password = document.querySelector('#Senha').value;

    // Tenta logar o usuário.
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
                     
            window.location.href = '../View/pedidos.html';
        })
        .catch((error) => {
            // Ocorreu um erro ao tentar logar o usuário.
            alert('Erro ao digitar senha ou usuário')
            
        });
});