// Lógica do Tema Claro/Escuro
const themeButton = document.getElementById('theme-button');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

themeButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Lógica das Práticas (Exemplo simplificado para funcionar em praticas.html)
const aulasConteudo = {
    1: { titulo: "Variáveis", codigo: "let nome = 'Bernardo';\nconsole.log('Olá, ' + nome);" },
    2: { titulo: "Funções", codigo: "function soma(a,b){ return a+b; }\nconsole.log(soma(10,5));" },
    3: { titulo: "Lógica", codigo: "let pontos = 100;\nif(pontos > 50) console.log('Aprovado!');" }
};

function verAula(id) {
    const area = document.getElementById('tutorial-texto');
    const aula = aulasConteudo[id];
    if(!area) return;
    area.innerHTML = `
        <div class="card">
            <h2>${aula.titulo}</h2>
            <textarea id="codigo-editor">${aula.codigo}</textarea>
            <button onclick="executar()" class="btn-primary">Executar</button>
            <div id="console-output">> Aguardando...</div>
        </div>`;
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
    } catch (e) { out.innerHTML = "Erro: " + e.message; }
}
