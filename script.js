// CONTROLE DE TEMA
const themeButton = document.getElementById('theme-button');
const storedTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', storedTheme);

themeButton.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// SISTEMA DE PRÁTICAS
const aulasConteudo = {
    1: { titulo: "Variáveis", codigo: "let aluno = 'Bernardo';\nconsole.log('Bem-vindo, ' + aluno);" },
    2: { titulo: "Funções", codigo: "function tchau(){ return 'Até logo!'; }\nconsole.log(tchau());" }
};

function verAula(id) {
    const area = document.getElementById('tutorial-texto');
    const aula = aulasConteudo[id];
    if(!area) return;

    area.innerHTML = `
        <div class="card" style="background: var(--bg-color); color: var(--text-color);">
            <h2 style="color: var(--accent)">Editando: ${aula.titulo}</h2>
            <textarea id="codigo-editor">${aula.codigo}</textarea>
            <button onclick="executar()" class="btn-primary">RODAR CÓDIGO</button>
            <div id="console-output">> Resultado aparecerá aqui...</div>
        </div>`;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function executar() {
    const cod = document.getElementById('codigo-editor').value;
    const out = document.getElementById('console-output');
    out.innerHTML = "";
    try {
        const log = console.log;
        console.log = (m) => { out.innerHTML += "> " + m + "<br>"; };
        eval(cod);
        console.log = log;
    } catch (e) {
        out.innerHTML = "<span style='color:red;'>Erro: " + e.message + "</span>";
    }
}
