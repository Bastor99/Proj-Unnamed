// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document
            .getElementById("nome")
            .value
            .trim();

        const email = document
            .getElementById("email")
            .value
            .trim();

        const senha = document
            .getElementById("senha")
            .value;

        // Verificação básica
        if (!nome || !email || !senha) {

            alert("Preencha todos os campos.");

            return;
        }


        // Salva o usuário no navegador
        localStorage.setItem("usuarioNome", nome);

        localStorage.setItem("usuarioEmail", email);


        // Redireciona para o index
        window.location.href = "./index.html";

    });

}


// ==========================================
// VERIFICAR USUÁRIO NO INDEX
// ==========================================

const welcomeMessage =
    document.getElementById("welcomeMessage");

const userNavbar =
    document.getElementById("userNavbar");

const loginButton =
    document.getElementById("loginButton");

const logoutButton =
    document.getElementById("logoutButton");


const usuarioNome =
    localStorage.getItem("usuarioNome");


if (usuarioNome) {

    // Alterar mensagem principal
    if (welcomeMessage) {

        welcomeMessage.textContent =
            `Bem-vindo, ${usuarioNome}!`;

    }


    // Mostrar nome na navbar
    if (userNavbar) {

        userNavbar.innerHTML = `
            <i class="bi bi-person-circle"></i>
            ${usuarioNome}
        `;

    }


    // Esconder botão Entrar
    if (loginButton) {

        loginButton.classList.add("d-none");

    }


    // Mostrar botão Sair
    if (logoutButton) {

        logoutButton.classList.remove("d-none");

    }

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem("usuarioNome");

    localStorage.removeItem("usuarioEmail");

    window.location.href = "./index.html";

}