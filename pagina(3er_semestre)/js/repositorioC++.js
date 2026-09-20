// 1. Descripciones técnicas para cada algoritmo de C++
const codeDescriptions = [
  "Secuencia de Récaman: Genera una serie matemática donde cada término se obtiene restando el índice actual, y si ya existe o es negativo, se suma. Excelente práctica para arreglos.",
  "Serie de Padovan: Sucesión trirrecurrente relacionada con los números de Perrin. Cada término es la suma de los dos anteriores a partir de los tres valores iniciales en 1.",
  "Conversor a Binario: Algoritmo iterativo basado en divisiones sucesivas entre 2 para transformar cualquier número entero positivo en su representación de bits.",
  "Fibonacci y Tribonacci: Sistema dual interactivo que calcula términos avanzados utilizando optimización de memoria y representación binaria de bits mediante operadores de desplazamiento."
];

// 2. Base de datos de fragmentos de clases C++ (4 códigos)
const codeSnippets = [
  // Snippet 0: Secuencia de Récaman
  [
    '<span class="token-keyword">#include</span> <span class="token-string">&lt;stdio.h&gt;</span>',
    '',
    '<span class="token-keyword">int</span> <span class="token-function">main</span>() {',
    '    <span class="token-keyword">int</span> n = <span class="token-string">100</span>;',
    '    <span class="token-keyword">int</span> recaman[<span class="token-string">100</span>];',
    '    recaman[<span class="token-string">0</span>] = <span class="token-string">0</span>; <span class="token-keyword">// El primer elemento siempre es 0</span>',
    '    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-string">1</span>; i &lt; n; i++) {',
    '        <span class="token-keyword">int</span> candidato = recaman[i - <span class="token-string">1</span>] - i;',
    '        <span class="token-keyword">int</span> existe = <span class="token-string">0</span>;',
    '        <span class="token-keyword">for</span> (<span class="token-keyword">int</span> j = <span class="token-string">0</span>; j &lt; i; j++) {',
    '            <span class="token-keyword">if</span> (recaman[j] == candidato) {',
    '                existe = <span class="token-string">1</span>;',
    '                <span class="token-keyword">break</span>;',
    '            }',
    '        }',
    '        <span class="token-keyword">if</span> (candidato &gt; <span class="token-string">0</span> && !existe) {',
    '            recaman[i] = candidato;',
    '        } <span class="token-keyword">else</span> {',
    '            recaman[i] = recaman[i - <span class="token-string">1</span>] + i;',
    '        }',
    '    }',
    '    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-string">0</span>; i &lt; n; i++) {',
    '        <span class="token-function">printf</span>(<span class="token-string">"%d "</span>, recaman[i]);',
    '    }',
    '    <span class="token-keyword">return</span> <span class="token-string">0</span>;',
    '}'
  ],
  // Snippet 1: Serie de Padovan
  [
    '<span class="token-keyword">#include</span> <span class="token-string">&lt;stdio.h&gt;</span>',
    '',
    '<span class="token-keyword">int</span> <span class="token-function">main</span>() {',
    '    <span class="token-keyword">int</span> n = <span class="token-string">100</span>;',
    '    <span class="token-keyword">int</span> padovan[<span class="token-string">100</span>];',
    '    padovan[<span class="token-string">0</span>] = <span class="token-string">1</span>; padovan[<span class="token-string">1</span>] = <span class="token-string">1</span>; padovan[<span class="token-string">2</span>] = <span class="token-string">1</span>;',
    '    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-string">3</span>; i &lt; n; i++) {',
    '        padovan[i] = padovan[i - <span class="token-string">2</span>] + padovan[i - <span class="token-string">3</span>];',
    '    }',
    '    <span class="token-function">printf</span>(<span class="token-string">"Serie de Padovan: \\n"</span>);',
    '    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-string">0</span>; i &lt; n; i++) {',
    '        <span class="token-function">printf</span>(<span class="token-string">"%d "</span>, padovan[i]);',
    '    }',
    '    <span class="token-function">printf</span>(<span class="token-string">"\\n"</span>);',
    '    <span class="token-keyword">return</span> <span class="token-string">0</span>;',
    '}'
  ],
  // Snippet 2: Conversor a Binario
  [
    '<span class="token-keyword">#include</span> <span class="token-string">&lt;stdio.h&gt;</span>',
    '',
    '<span class="token-keyword">int</span> <span class="token-function">main</span>() {',
    '    <span class="token-keyword">int</span> numero, binario[<span class="token-string">32</span>], i = <span class="token-string">0</span>;',
    '    <span class="token-function">printf</span>(<span class="token-string">"Ingrese un numero entero positivo: "</span>);',
    '    <span class="token-function">scanf</span>(<span class="token-string">"%d"</span>, &numero);',
    '    <span class="token-keyword">if</span> (numero &lt; <span class="token-string">0</span>) <span class="token-keyword">return</span> <span class="token-string">0</span>;',
    '    <span class="token-keyword">if</span> (numero == <span class="token-string">0</span>) { <span class="token-function">printf</span>(<span class="token-string">"Binario: 0\\n"</span>); <span class="token-keyword">return</span> <span class="token-string">0</span>; }',
    '    <span class="token-keyword">while</span> (numero &gt; <span class="token-string">0</span>) {',
    '        binario[i] = numero % <span class="token-string">2</span>;',
    '        numero = numero / <span class="token-string">2</span>; i++;',
    '    }',
    '    <span class="token-function">printf</span>(<span class="token-string">"Binario: "</span>);',
    '    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> j = i - <span class="token-string">1</span>; j &gt;= <span class="token-string">0</span>; j--) <span class="token-function">printf</span>(<span class="token-string">"%d"</span>, binario[j]);',
    '    <span class="token-function">printf</span>(<span class="token-string">"\\n"</span>);',
    '    <span class="token-keyword">return</span> <span class="token-string">0</span>;',
    '}'
  ],
  // Snippet 3: Fibonacci, Tribonacci y Decimal/Binario
  [
    '<span class="token-keyword">#include</span> <span class="token-string">&lt;stdio.h&gt;</span>',
    '',
    '<span class="token-keyword">void</span> <span class="token-function">binario</span>(<span class="token-keyword">int</span> num) {',
    '    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-string">15</span>; i &gt;= <span class="token-string">0</span>; i--) <span class="token-function">printf</span>(<span class="token-string">"%d"</span>, (num &gt;&gt; i) & <span class="token-string">1</span>);',
    '}',
    '<span class="token-keyword">int</span> <span class="token-function">main</span>() {',
    '    <span class="token-keyword">int</span> op, n;',
    '    <span class="token-keyword">unsigned long long</span> a = <span class="token-string">0</span>, b = <span class="token-string">1</span>, c = <span class="token-string">1</span>, sig;',
    '    <span class="token-function">printf</span>(<span class="token-string">"1.Fibonacci  2.Tribonacci\\nOpcion: "</span>);',
    '    <span class="token-function">scanf</span>(<span class="token-string">"%d"</span>, &op);',
    '    <span class="token-function">printf</span>(<span class="token-string">"Cantidad de terminos: "</span>);',
    '    <span class="token-function">scanf</span>(<span class="token-string">"%d"</span>, &n);',
    '    <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-string">1</span>; i &lt;= n; i++) {',
    '        <span class="token-function">printf</span>(<span class="token-string">"%d\\t%llu\\t"</span>, i, a);',
    '        <span class="token-function">binario</span>((<span class="token-keyword">int</span>)a); <span class="token-function">printf</span>(<span class="token-string">"\\n"</span>);',
    '        sig = (op == <span class="token-string">1</span>) ? (a + b) : (a + b + c);',
    '        <span class="token-keyword">if</span>(op == <span class="token-string">1</span>) { a = b; b = sig; }',
    '        <span class="token-keyword">else</span> { a = b; b = c; c = sig; }',
    '    }',
    '    <span class="token-keyword">return</span> <span class="token-string">0</span>;',
    '}'
  ]
];

// 3. Resultados de ejecución simulados para cada ejercicio de C++
const executionOutputs = [
  "> g++ recaman.cpp -o recaman && ./recaman\n0 1 3 6 2 7 13 20 12 21 11 22 10 23 9 24 8 25 43 62 ...",
  "> g++ padovan.cpp -o padovan && ./padovan\nSerie de Padovan:\n1 1 1 2 2 3 4 5 7 9 12 16 21 28 37 49 65 86 114 ...",
  "> g++ binario.cpp -o binario && ./binario\nIngrese un numero entero positivo: 45\nBinario: 101101",
  "> g++ fib_trib.cpp -o fib_trib && ./fib_trib\n1.Fibonacci  2.Tribonacci\nOpcion: 1\nCantidad de terminos: 5\n1\t0\t0000000000000000\n2\t1\t0000000000000001\n3\t1\t0000000000000001\n4\t2\t0000000000000010\n5\t3\t0000000000000011"
];

// 4. Lógica de control para la animación y actualización de textos
let typingInterval = null;

function loadSnippet(index) {
  // Actualizar botones activos en el sidebar
  const buttons = document.querySelectorAll('.snippet-btn');
  buttons.forEach((btn, idx) => {
    if(idx === index) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  // Animar el código fuente arriba
  startTypingAnimation(codeSnippets[index]);

  // Actualizar la descripción técnica en el panel INFO
  const descTarget = document.getElementById('code-description');
  if (descTarget) {
    descTarget.textContent = codeDescriptions[index];
  }

  // Mostrar el resultado correspondiente en la consola de abajo
  const outputTarget = document.getElementById('output-target');
  if (outputTarget) {
    outputTarget.textContent = executionOutputs[index];
  }
}

function startTypingAnimation(lines) {
  const targetEl = document.getElementById('code-target');
  if (!targetEl) return;

  if (typingInterval) clearInterval(typingInterval);

  let lineIdx = 0;
  let accumulatedHTML = '';
  targetEl.innerHTML = '';

  typingInterval = setInterval(() => {
    if (lineIdx < lines.length) {
      if (lineIdx > 0) accumulatedHTML += '\n';
      accumulatedHTML += lines[lineIdx];
      targetEl.innerHTML = accumulatedHTML;
      lineIdx++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100);
}

// Iniciar automáticamente el primer código al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  loadSnippet(0);
});