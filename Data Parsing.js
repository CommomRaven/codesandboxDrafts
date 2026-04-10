let frase = "Nesse momento, o Bitcoin está em R$ 603.015,03, Loucura, né?";

let preco = frase.match(/\d{1,3}(\.\d{3})*,\d{2}/)[0];

preco = preco.replace(/\./g, "").replace(",", ".");

let resultado = (parseFloat(preco) / 3).toFixed(2);

console.log(resultado);

/*Ele localiza um valor monetário dentro de um texto, transforma-o em um número decimal válido para o computador e realiza um cálculo matemático.
O que o código faz?
Ele extrai o preço do Bitcoin de uma string, remove a formatação brasileira (pontos de milhar e vírgula decimal), converte para um número real e divide o valor por 3.

Principais Funções e Elementos
.match(/\d{1,3}(\.\d{3})*,\d{2}/): Usa uma Expressão Regular (Regex) para encontrar o padrão de número monetário brasileiro 
(ex: 603.015,03). O [0] seleciona a primeira ocorrência encontrada.

.replace(/\./g, ""): Remove todos os pontos de milhar. Isso é necessário porque o JavaScript não reconhece pontos como separadores de milhar em cálculos.

.replace(",", "."): Substitui a vírgula decimal pelo ponto, que é o padrão numérico internacional (float) usado na programação.

parseFloat(): Converte a string limpa em um número decimal real.

.toFixed(2): Arredonda o resultado final para duas casas decimais e o transforma em string novamente para exibição.

Aplicações Práticas
Web Scraping: Extrair preços de sites de notícias ou e-commerce.

Tratamento de Dados: Converter formatos de moeda local para formatos de banco de dados (SQL).

Automação Financeira: Ler extratos bancários ou notas fiscais em texto e realizar cálculos automáticos.

🇺🇸English: Code Explanation

It extracts the Bitcoin price from a string, removes the Brazilian currency formatting (thousands separators and decimal comma)
converts it into a computer-readable float, and divides the value by 3.

Key Functions and Elements
.match(/\d{1,3}(\.\d{3})*,\d{2}/): Uses a Regular Expression (Regex) to find the Brazilian currency pattern (e.g., 603.015,03). The [0] picks the first match found.

.replace(/\./g, ""): Removes all thousands separators (dots). This is crucial because JavaScript does not recognize dots as thousand separators in math operations.

.replace(",", "."): Replaces the decimal comma with a dot, which is the international standard for floating-point numbers in programming.

parseFloat(): Converts the "cleaned" string into an actual decimal number.

.toFixed(2): Rounds the final result to two decimal places and converts it back to a string for display.

Practical Applications
Web Scraping: Extracting prices from news or e-commerce websites.

Data Sanitization: Converting local currency formats into database-ready formats (SQL).

Financial Automation: Reading bank statements or digital invoices to perform automatic calculations.

Resultado Final / Final Result:
201005.01
