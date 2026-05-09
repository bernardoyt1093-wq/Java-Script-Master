const aulasConteudo = {
    1: {
        titulo: "Praticando Variáveis",
        codigo: "let curso = 'JS Master';\nconsole.log('Bem-vindo ao ' + curso);"
    },
    2: {
        titulo: "Praticando Funções",
        codigo: "function saudacao(nome) {\n  return 'Olá ' + nome;\n}\nconsole.log(saudacao('Bernardo'));"
    },
    3: {
        titulo: "Praticando Lógica",
        codigo: "let pontos = 80;\nif(pontos >= 50) {\n  console.log('Aprovado!');\n} else {\n  console.log('Reprovado');\n}"
    }
};

function verAula(id) {
    const area = document.getElementById('tutorial-texto');
    const aula = aulasConteudo[id];

    area.innerHTML = `
        <div style="background: #1e293b; padding: 20px; border-radius: 12px; border: 2px solid #f7df1e; margin-bottom: 30px;">
            <h2 style="color: #f7df1e; font-family: 'Playwrite IE Sj', cursive;">${aula.titulo}</h2>
            <textarea id="codigo-editor" style="width:100%; height:100px; background:#000; color:#4ade80; font-family:monospace; padding:10px; margin:10px 0;">${aula.codigo}</textarea>
            <button onclick="executarCodigo()" class="btn-primary">▶ Executar</button>
            <div id="console-output" style="background:#000; color:#fff; padding:10px; margin-top:10px; border-radius:5px; font-family:monospace;">> Aguardando...</div>
        </div>
    `;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function executarCodigo() {
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