// CONTROLE DO TEMA
const themeBtn = document.getElementById('theme-button');
themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    html.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeBtn.textContent = isLight ? "Modo Claro" : "Modo Escuro";
});

// CONTEÚDO DAS PRÁTICAS
const aulas = {
    1: { t: "Variáveis", c: "let mestre = 'Bernardo';\nconsole.log('Professor: ' + mestre);" },
    2: { t: "Funções", c: "function acao(){ return 'Codando...'; }\nconsole.log(acao());" },
    3: { t: "Lógica", c: "let nota = 10;\nif(nota >= 7) console.log('Aprovado!');" }
};

function verAula(id) {
    const local = document.getElementById('tutorial-texto');
    const item = aulas[id];
    local.innerHTML = `
        <div class="card">
            <h3>Desafio: ${item.t}</h3>
            <textarea id="codigo-editor">${item.c}</textarea>
            <button onclick="rodar()" class="btn-primary" style="margin-top:10px;">Executar Código</button>
            <div id="console-output">> Aguardando...</div>
        </div>`;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function rodar() {
    const cod = document.getElementById('codigo-editor').value;
    const out = document.getElementById('console-output');
    out.innerHTML = "";
    try {
        const originalLog = console.log;
        console.log = (m) => { out.innerHTML += "> " + m + "<br>"; };
        eval(cod);
        console.log = originalLog;
    } catch(e) { out.innerHTML = "Erro: " + e.message; }
}
