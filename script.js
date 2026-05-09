// TEMA CLARO/ESCURO
const btn = document.getElementById('theme-button');
btn.addEventListener('click', () => {
    const doc = document.documentElement;
    const isLight = doc.getAttribute('data-theme') === 'light';
    doc.setAttribute('data-theme', isLight ? 'dark' : 'light');
});

// SISTEMA DE PRÁTICAS
const conteudo = {
    1: { t: "Variáveis", c: "let nome = 'Bernardo';\nconsole.log('Olá, ' + nome);" },
    2: { t: "Funções", c: "function soma(a,b){ return a+b; }\nconsole.log(soma(5,10));" }
};

function verAula(id) {
    const area = document.getElementById('tutorial-texto');
    const aula = conteudo[id];
    area.innerHTML = `
        <div class="card" style="margin-bottom:20px;">
            <h3>Praticando: ${aula.t}</h3>
            <textarea id="codigo-editor">${aula.c}</textarea>
            <button onclick="rodar()" class="btn-primary" style="margin-top:10px;">Executar</button>
            <div id="console-output">> Resultado...</div>
        </div>`;
}

function rodar() {
    const code = document.getElementById('codigo-editor').value;
    const out = document.getElementById('console-output');
    out.innerHTML = "";
    try {
        const originalLog = console.log;
        console.log = (m) => { out.innerHTML += "> " + m + "<br>"; };
        eval(code);
        console.log = originalLog;
    } catch(e) { out.innerHTML = "Erro: " + e.message; }
}
