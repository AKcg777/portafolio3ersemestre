// // 1. Descripciones técnicas para cada uno de los 10 módulos de Java
const codeDescriptions = [
  "Hola Mundo Básico: Programa inicial de bienvenida para verificar la correcta configuración del entorno de ejecución de Java en la consola.",
  "Área de Círculo: Utiliza la clase Scanner para capturar datos de entrada y la librería Math para calcular la superficie geométrica mediante potenciación.",
  "Ecuación Cuadrática: Resuelve ecuaciones de segundo grado aplicando la fórmula general (chicharronera) y evaluando el discriminante para raíces reales o complejas.",
  "Conversor de Temperatura: Transforma valores ingresados en grados Fahrenheit a sus equivalentes exactos en escalas Celsius y Kelvin.",
  "Análisis de Triángulos: Calcula distancias euclidianas entre coordenadas cartesianas, evalúa si los puntos están colineales y determina el perímetro si forman un triángulo.",
  "Invertir Número: Algoritmo aritmético mediante ciclos while que invierte el orden de las cifras de un número entero positivo.",
  "Nota Numérica a Texto: Emplea un arreglo estático de cadenas para traducir calificaciones numéricas enteras (0-10) a su representación en palabra escrita.",
  "Contador hasta Negativo: Bucle condicional que contabiliza la cantidad de entradas válidas proporcionadas por el usuario hasta que se introduce un número negativo.",
  "Contador Especial de 5 Dígitos: Generador secuencial con formato numérico estricto de cinco cifras que sustituye de forma dinámica el carácter '3' por una 'E'.",
  "Adivina el Número: Juego interactivo de lógica y control de flujo que genera un número aleatorio entre 1 y 100 utilizando Math.random() y evalúa pistas dinámicas."
];

// 2. Base de datos de fragmentos de clases Java (10 módulos en total, del 0 al 9)
const codeSnippets = [
  // Snippet 0: Hola Mundo Básico
  [
    '<span class="token-keyword">public class</span> <span class="token-class">HolaMundo</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        <span class="token-keyword">// Programa inicial básico de bienvenida</span>',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"¡Hola Mundo! Bienvenidos al portafolio de Java."</span>);',
    '    }',
    '}'
  ],
  // Snippet 1: Cálculo del Área de un Círculo
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">AreaCirculo</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        Scanner scanner = <span class="token-keyword">new</span> Scanner(System.in);',
    '        System.out.<span class="token-function">print</span>(<span class="token-string">"Ingrese el radio del circulo: "</span>);',
    '        <span class="token-keyword">double</span> radio = scanner.<span class="token-function">nextDouble</span>();',
    '        <span class="token-keyword">double</span> area = Math.PI * Math.<span class="token-function">pow</span>(radio, <span class="token-string">2</span>);',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"El area calculada es: "</span> + area);',
    '    }',
    '}'
  ],
  // Snippet 2: Ecuación Cuadrática (Fórmula General / "Chicharronera")
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">EcuacionCuadratica</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        Scanner sc = <span class="token-keyword">new</span> Scanner(System.in);',
    '        System.out.<span class="token-function">print</span>(<span class="token-string">"Ingrese coeficientes A, B y C: "</span>);',
    '        <span class="token-keyword">double</span> a = sc.<span class="token-function">nextDouble</span>(), b = sc.<span class="token-function">nextDouble</span>(), c = sc.<span class="token-function">nextDouble</span>();',
    '        <span class="token-keyword">double</span> discriminante = Math.<span class="token-function">pow</span>(b, <span class="token-string">2</span>) - (<span class="token-string">4</span> * a * c);',
    '        <span class="token-keyword">if</span> (discriminante &gt;= <span class="token-string">0</span>) {',
    '            <span class="token-keyword">double</span> x1 = (-b + Math.<span class="token-function">sqrt</span>(discriminante)) / (<span class="token-string">2</span> * a);',
    '            <span class="token-keyword">double</span> x2 = (-b - Math.<span class="token-function">sqrt</span>(discriminante)) / (<span class="token-string">2</span> * a);',
    '            System.out.<span class="token-function">println</span>(<span class="token-string">"Raices reales: x1 = "</span> + x1 + <span class="token-string">", x2 = "</span> + x2);',
    '        } <span class="token-keyword">else</span> {',
    '            System.out.<span class="token-function">println</span>(<span class="token-string">"La ecuacion tiene raices complejas."</span>);',
    '        }',
    '    }',
    '}'
  ],
  // Snippet 3: Conversión de Temperaturas (Fahrenheit a Celsius y Kelvin)
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">ConversorTemperatura</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        Scanner sc = <span class="token-keyword">new</span> Scanner(System.in);',
    '        System.out.<span class="token-function">print</span>(<span class="token-string">"Ingrese temperatura en grados Fahrenheit: "</span>);',
    '        <span class="token-keyword">double</span> f = sc.<span class="token-function">nextDouble</span>();',
    '        <span class="token-keyword">double</span> c = (<span class="token-string">5.0</span> / <span class="token-string">9.0</span>) * (f - <span class="token-string">32</span>);',
    '        <span class="token-keyword">double</span> k = c + <span class="token-string">273.15</span>;',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"Celsius: "</span> + c + <span class="token-string">" °C"</span>);',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"Kelvin: "</span> + k + <span class="token-string">" K"</span>);',
    '    }',
    '}'
  ],
  // Snippet 4: Análisis de Puntos en el Plano Cartesiano (Perímetro y Distancias)
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">AnalisisPuntosTriangulo</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        <span class="token-keyword">try</span> (Scanner scanner = <span class="token-keyword">new</span> Scanner(System.in)) {',
    '            System.out.<span class="token-function">println</span>(<span class="token-string">"Ingrese coordenadas del punto A (x1 y1):"</span>);',
    '            <span class="token-keyword">double</span> x1 = scanner.<span class="token-function">nextDouble</span>(), y1 = scanner.<span class="token-function">nextDouble</span>();',
    '            System.out.<span class="token-function">println</span>(<span class="token-string">"Ingrese coordenadas del punto B (x2 y2):"</span>);',
    '            <span class="token-keyword">double</span> x2 = scanner.<span class="token-function">nextDouble</span>(), y2 = scanner.<span class="token-function">nextDouble</span>();',
    '            System.out.<span class="token-function">println</span>(<span class="token-string">"Ingrese coordenadas del punto C (x3 y3):"</span>);',
    '            <span class="token-keyword">double</span> x3 = scanner.<span class="token-function">nextDouble</span>(), y3 = scanner.<span class="token-function">nextDouble</span>();',
    '',
    '            <span class="token-keyword">// Cálculo de distancias euclidianas</span>',
    '            <span class="token-keyword">double</span> ab = Math.<span class="token-function">sqrt</span>(Math.<span class="token-function">pow</span>(x2 - x1, <span class="token-string">2</span>) + Math.<span class="token-function">pow</span>(y2 - y1, <span class="token-string">2</span>));',
    '            <span class="token-keyword">double</span> bc = Math.<span class="token-function">sqrt</span>(Math.<span class="token-function">pow</span>(x3 - x2, <span class="token-string">2</span>) + Math.<span class="token-function">pow</span>(y3 - y2, <span class="token-string">2</span>));',
    '            <span class="token-keyword">double</span> ac = Math.<span class="token-function">sqrt</span>(Math.<span class="token-function">pow</span>(x3 - x1, <span class="token-string">2</span>) + Math.<span class="token-function">pow</span>(y3 - y1, <span class="token-string">2</span>));',
    '',
    '            <span class="token-keyword">double</span> area = <span class="token-string">0.5</span> * Math.<span class="token-function">abs</span>(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));',
    '            <span class="token-keyword">if</span> (area &lt; <span class="token-string">1e-9</span>) {',
    '                System.out.<span class="token-function">println</span>(<span class="token-string">"Los puntos ESTÁN ALINEADOS."</span>);',
    '            } <span class="token-keyword">else</span> {',
    '                <span class="token-keyword">double</span> perimetro = ab + bc + ac;',
    '                System.out.<span class="token-function">println</span>(<span class="token-string">"Perímetro del triángulo: "</span> + perimetro);',
    '            }',
    '        }',
    '    }',
    '}'
  ],
  // Snippet 5: Invertir un número
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">InvertirNumero</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        Scanner scanner = <span class="token-keyword">new</span> Scanner(System.in);',
    '        System.out.<span class="token-function">print</span>(<span class="token-string">"Ingresa un número (0-9999): "</span>);',
    '        <span class="token-keyword">int</span> num = scanner.<span class="token-function">nextInt</span>();',
    '        <span class="token-keyword">int</span> invertido = <span class="token-string">0</span>;',
    '        <span class="token-keyword">while</span> (num &gt; <span class="token-string">0</span>) {',
    '            invertido = invertido * <span class="token-string">10</span> + num % <span class="token-string">10</span>;',
    '            num /= <span class="token-string">10</span>;',
    '        }',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"Número al revés: "</span> + invertido);',
    '    }',
    '}'
  ],
  // Snippet 6: Nota numérica a texto
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">NotaTexto</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        Scanner sc = <span class="token-keyword">new</span> Scanner(System.in);',
    '        System.out.<span class="token-function">print</span>(<span class="token-string">"Ingresa nota (0-10): "</span>);',
    '        <span class="token-keyword">int</span> nota = sc.<span class="token-function">nextInt</span>();',
    '        String[] textos = {<span class="token-string">"cero"</span>, <span class="token-string">"uno"</span>, <span class="token-string">"dos"</span>, <span class="token-string">"tres"</span>, <span class="token-string">"cuatro"</span>, <span class="token-string">"cinco"</span>, <span class="token-string">"seis"</span>, <span class="token-string">"siete"</span>, <span class="token-string">"ocho"</span>, <span class="token-string">"nueve"</span>, <span class="token-string">"diez"</span>};',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"Nota en texto: "</span> + textos[nota]);',
    '    }',
    '}'
  ],
  // Snippet 7: Contador hasta número negativo
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">ContadorNegativo</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        Scanner sc = <span class="token-keyword">new</span> Scanner(System.in);',
    '        <span class="token-keyword">int</span> contador = <span class="token-string">0</span>, num = <span class="token-string">0</span>;',
    '        <span class="token-keyword">while</span> (num &gt;= <span class="token-string">0</span>) {',
    '            System.out.<span class="token-function">print</span>(<span class="token-string">"Ingresa número (- para salir): "</span>);',
    '            num = sc.<span class="token-function">nextInt</span>();',
    '            <span class="token-keyword">if</span> (num &gt;= <span class="token-string">0</span>) contador++;',
    '        }',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"Total introducidos: "</span> + contador);',
    '    }',
    '}'
  ],
  // Snippet 8: Contador con 5 dígitos y sustitución de '3' por 'E'
  [
    '<span class="token-keyword">public class</span> <span class="token-class">ContadorEspecial</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        <span class="token-keyword">for</span> (<span class="token-keyword">int</span> i = <span class="token-string">0</span>; i &lt;= <span class="token-string">99999</span>; i++) {',
    '            String s = String.<span class="token-function">format</span>(<span class="token-string">"%05d"</span>, i);',
    '            String res = s.<span class="token-function">replace</span>(<span class="token-string">\'3\'</span>, <span class="token-string">\'E\'</span>);',
    '            System.out.<span class="token-function">println</span>(res);',
    '        }',
    '    }',
    '}'
  ],
  // Snippet 9: Juego de adivinar número con random
  [
    '<span class="token-keyword">import</span> java.util.Scanner;',
    '',
    '<span class="token-keyword">public class</span> <span class="token-class">AdivinarNumero</span> {',
    '    <span class="token-keyword">public static void</span> <span class="token-function">main</span>(String[] args) {',
    '        Scanner sc = <span class="token-keyword">new</span> Scanner(System.in);',
    '        <span class="token-keyword">int</span> secreto = (<span class="token-keyword">int</span>)(Math.<span class="token-function">random</span>() * <span class="token-string">100</span>) + <span class="token-string">1</span>;',
    '        <span class="token-keyword">int</span> intento;',
    '        <span class="token-keyword">do</span> {',
    '            System.out.<span class="token-function">print</span>(<span class="token-string">"Adivina el número (1-100): "</span>);',
    '            intento = sc.<span class="token-function">nextInt</span>();',
    '            <span class="token-keyword">if</span> (intento &gt; secreto) System.out.<span class="token-function">println</span>(<span class="token-string">"Menor..."</span>);',
    '            <span class="token-keyword">else if</span> (intento &lt; secreto) System.out.<span class="token-function">println</span>(<span class="token-string">"Mayor..."</span>);',
    '        } <span class="token-keyword">while</span> (intento != secreto);',
    '        System.out.<span class="token-function">println</span>(<span class="token-string">"¡Felicidades, ganaste!"</span>);',
    '    }',
    '}'
  ]
];

// 3. Resultados de ejecución simulados para cada uno de los 10 módulos de Java
const executionOutputs = [
  "> javac HolaMundo.java && java HolaMundo\n¡Hola Mundo! Bienvenidos al portafolio de Java.",
  "> javac AreaCirculo.java && java AreaCirculo\nIngrese el radio del circulo: 5\nEl area calculada es: 78.53981633974483",
  "> javac EcuacionCuadratica.java && java EcuacionCuadratica\nIngrese coeficientes A, B y C: 1 -5 6\nRaices reales: x1 = 3.0, x2 = 2.0",
  "> javac ConversorTemperatura.java && java ConversorTemperatura\nIngrese temperatura en grados Fahrenheit: 98.6\nCelsius: 37.0 °C\nKelvin: 310.15 K",
  "> javac AnalisisPuntosTriangulo.java && java AnalisisPuntosTriangulo\nIngrese coordenadas del punto A (x1 y1):\n0 0\nIngrese coordenadas del punto B (x2 y2):\n4 0\nIngrese coordenadas del punto C (x3 y3):\n0 3\nPerímetro del triángulo: 12.0",
  "> javac InvertirNumero.java && java InvertirNumero\nIngresa un número (0-9999): 1234\nNúmero al revés: 4321",
  "> javac NotaTexto.java && java NotaTexto\nIngresa nota (0-10): 9\nNota en texto: nueve",
  "> javac ContadorNegativo.java && java ContadorNegativo\nIngresa número (- para salir): 15\nIngresa número (- para salir): 8\nIngresa número (- para salir): -1\nTotal introducidos: 2",
  "> javac ContadorEspecial.java && java ContadorEspecial\n00000\n00001\n00002\n0000E\n00004 ...",
  "> javac AdivinarNumero.java && java AdivinarNumero\nAdivina el número (1-100): 50\nMenor...\nAdivina el número (1-100): 25\nMayor...\nAdivina el número (1-100): 37\n¡Felicidades, ganaste!"
];

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
  }, 80);
}

// Iniciar automáticamente el primer código al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  loadSnippet(0);
});