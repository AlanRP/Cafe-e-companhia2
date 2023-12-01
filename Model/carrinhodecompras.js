
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

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

 // Menu carrinho.
document.querySelector('#btn-proximo').addEventListener('click', () => {
    const total = document.getElementById("total");
    const texto = total.innerText

    const items = document.querySelectorAll('ul[id="lista-carrinho"]');

    const carrinho = []
    for (const item of items) {
        carrinho.push(item.innerText);

    }
  
    push(ref(db, 'carrinho/'), {
        pedido: carrinho,
        total: texto

    })
        .then(() => {
            // Encomenda registra.
            window.location.href = '../View/testeformcorp.html';
        })
        .catch(() => {
            // Ocorreu um erro ao tentar registra.
            alert('Erro ao registrar');
        });
});


