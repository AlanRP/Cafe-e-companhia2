import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

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

const dbRef = ref(db, 'encomendas');

const lista = document.querySelector('.lista_pedidos')


onValue(dbRef, (snapshot) => {
    lista.innerHTML = ''

    let codigo = 156
    snapshot.forEach((pedidos) => {
        codigo++
        const dados = pedidos.val();
        console.log(codigo)
        console.log(dados.nome)
        console.log(dados.mensagem)


        const card = `  <td>#00${codigo}</td>
                        <td>${dados.mensagem}</td>
                        <td>${dados.nome}</td>
                        <td>
                        <div class="row">
                        <div class="col-md-5"><label><input id="Check1" name="Check1" type="checkbox" value="Check1">Pronto</input></label></div>
                        <div class="col-md-5"><label><input id="Check2" name="Check2" type="checkbox" value="Check2">Enviado</input></label></div>
                        </div>
                        </td>`


        const tr = document.createElement('tr')
        tr.innerHTML = card
        lista.appendChild(tr)

    });
}, {

});