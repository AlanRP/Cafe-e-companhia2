import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, push, ref } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { getStorage, ref as refstor, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";

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
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getDatabase(app)
const storage = getStorage(app);

document.querySelector('#upload-button').addEventListener('click', () => {
    const i = document.querySelector("#file-input").files[0].name
    const n = document.querySelector('#nome').value
    const v = document.querySelector('#valor').value
    const d = document.querySelector('#descricao').value

    const file = document.querySelector("#file-input").files[0]
    const storageRef = refstor(storage, `imagens/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {

        console.log('Imagem enviada com sucesso!')

        getDownloadURL(storageRef).then((url) => {

            // Registra um novo produto.
            push(ref(db, 'catalogo/'), {
                produto: n,
                valor: v,
                imagem: i,
                descricao: d,
                url_img: url
            })
                .then(() => {

                    console.log('Registrado com sucesso!');
                    window.location.href = '../View/novoproduto.html';
                })
                .catch(() => {
                    // Ocorreu um erro.
                    console.log('Erro ao registrar');
                })
        })
    })

})


