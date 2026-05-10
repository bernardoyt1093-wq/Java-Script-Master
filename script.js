// SISTEMA DE 10 NÍVEIS (3 Anteriores + 7 Novos)
const aulasConteudo = {
    1: { t: "Variáveis (let/const)", c: "let mestre = 'Bernardo';\nconst curso = 'JS Master';\nconsole.log(mestre + ' ensina no ' + curso);" },
    2: { t: "Funções Básicas", c: "function saudacao(nome) {\n  return 'Olá, ' + nome + '!';\n}\nconsole.log(saudacao('Aluno'));" },
    3: { t: "Condicionais (If/Else)", c: "let hora = 14;\nif(hora < 12) {\n  console.log('Bom dia!');\n} else {\n  console.log('Boa tarde!');\n}" },
    4: { t: "Operadores Matemáticos", c: "let preco = 50;\nlet desconto = 0.2; // 20%\nlet final = preco - (preco * desconto);\nconsole.log('Preço com desconto: R$' + final);" },
    5: { t: "Arrays (Listas)", c: "let frutas = ['Maçã', 'Banana', 'Uva'];\nfrutas.push('Laranja');\nconsole.log('Minha lista: ' + frutas);\nconsole.log('Total: ' + frutas.length);" },
    6: { t: "Loops (For)", c: "for(let i = 1; i <= 5; i++) {\n  console.log('Contagem: ' + i);\n}" },
    7: { t: "Objetos", c: "let carro = {\n  marca: 'Toyota',\n  modelo: 'Corolla',\n  ano: 2024\n};\nconsole.log('Eu tenho um ' + carro.modelo);" },
    8: { t: "Eventos e DOM", c: "// Imagine que clicamos em um botão\nconsole.log('Botão clicado! Alterando cor...');" },
    9: { t: "Arrow Functions", c: "const dobrar = (n) => n * 2;\nconsole.log('O dobro de 15 é: ' + dobrar(15));" },
    10: { t: "Manipulação de Strings", c: "let texto = 'javascript é incrível';\nconsole.log(texto.toUpperCase());\nconsole.log('Tem a palavra JS? ' + texto.includes('js'));" }
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
