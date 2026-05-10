const aulas = {
    1: { t: "Variáveis", c: "let nome = 'Bernardo';\nconsole.log('Olá, ' + nome);" },
    2: { t: "Funções", c: "function soma(a,b){ return a+b; }\nconsole.log(soma(10,5));" },
    3: { t: "Condicionais", c: "let nota = 8;\nif(nota >= 7) console.log('Aprovado!');" },
    4: { t: "Matemática", c: "let conta = (10 + 5) * 2;\nconsole.log('Resultado: ' + conta);" },
    5: { t: "Listas", c: "let itens = ['HTML', 'CSS', 'JS'];\nconsole.log(itens[2]);" },
    6: { t: "Loops", c: "for(let i=1; i<=3; i++){\n console.log('Repetição: ' + i);\n}" },
    7: { t: "Objetos", c: "let user = {nome: 'Bernardo', xp: 100};\nconsole.log(user.xp);" },
    8: { t: "Eventos", c: "console.log('Simulando clique no botão...');" },
    9: { t: "Arrow Functions", c: "const msg = () => 'JS é top';\nconsole.log(msg());" },
    10: { t: "Strings", c: "let txt = 'bernardo';\nconsole.log(txt.toUpperCase());" }
};

function verAula(id) {
    const area = document.getElementById('tutorial-texto');
    const aula = aulas[id];
    area.innerHTML = `
        <div class="card">
            <h2>Aula: ${aula.t}</h2>
            <textarea id="codigo-editor">${aula.c}</textarea>
            <button onclick="executar()" class="btn-lesson" style="margin-top:10px; background:var(--accent); color:var(--text-dark);">RODAR CÓDIGO</button>
            <div id="console-output">> Aguardando execução...</div>
        </div>`;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function executar() {
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
