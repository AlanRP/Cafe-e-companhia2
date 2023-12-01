import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

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
const db = getDatabase(app);


// Adiciona um manipulador de evento ao botão de login.
document.querySelector('#btn-encomenda').addEventListener('click', () => {
    // Obtem a encomenda.
    const nome = document.querySelector('#nome').value;
    const contato = document.querySelector('#contato').value;
    const assunto = document.querySelector('#assunto').value;
    const mensagem = document.querySelector('#mensagem').value;

    // Tenta logar o usuário.
    push(ref(db, 'encomendas/'), {
        nome: nome,
        contato: contato,
        assunto: assunto,
        mensagem: mensagem
    })
        .then(() => {
            // Encomenda registra.
            console.log('Registrado com sucesso!');
            window.location.href = 'index.html';
        })
        .catch(() => {
            // Ocorreu um erro ao tentar logar o usuário.
            console.log('Erro ao registrar');
        });
});
