
1. Permite inserir o conteúdo e estabelecer a estrutura básica de
um website. O HTML serve para criar a estrutura e o conteúdo de páginas
da web, definindo elementos e organização. Sem isso, o navegador não
saberia exibir textos como elementos ou carregar imagens e outros conteúdos.

2. Elementos básicos são o que constituem a base de todo documento HTML.
Um elemento é qualquer objeto identificável dentro de um documento, por 
exemplo, um caractere, palavra, imagem ou um parágrafo.

3. Os elementos em HTML são geralmente estruturados em pares de tags, 
consistindo em uma tag de abertura e uma tag de fechamento, com conteúdo 
entre elas.

<!DOCTYPE html>

<html>
<head>
    <title>Título</title>
</head>
<body>
    <h1>Exemplo</h1>
    <p>Este é um parágrafo de exemplo.</p>
  <a href="https://www.exemplo.com">Link Exemplo</a>
</body>
</html>

4. Atributos em HTML são informações adicionais que podem ser fornecidas 
para um elemento HTML. 

EX: <a href="https://www.exemplo.com" title="Exemplo">Clique aqui</a>

5. São elementos que não possuem conteúdo entre uma tag de abertura e 
uma tag de fechamento. 

EX: <img src="imagem.jpg" alt="Descrição da imagem">

6. Um elemento em nível de bloco ocupa todo o espaço de seu elemento pai 
(container), criando assim um “bloco".

EX: div/h1, h2, h3/table/p

Elementos inline são usados para marcar partes do texto ou conteúdo 
dentro de elementos de bloco. Eles ocupam apenas a largura necessária 
para exibir seu conteúdo.

EX: span/img/a/strong

7. A tag div é conhecida como tag de divisão. A tag div é usada em HTML 
para fazer divisões de conteúdo na página da web como 
(texto, imagens, cabeçalho, rodapé, barra de navegação, etc).

O elemento HTML span é um contêiner embutido genérico para elementos e 
conteúdo embutido. É usado para agrupar elementos para fins de estilo 
(usando os atributos class ou id).

8. É o atributo "target". Você pode definir o valor desse atributo como
"_blank" para que o link seja aberto em uma nova janela ou guia.

EX: <a href="https://www.exemplo.com" target="_blank">Nova Guia</a>

9. 
Tag de Descrição: Fornecer uma breve descrição do conteúdo da página.

EX: <meta name="description" content="Uma descrição breve da página.">


Tag de Redirecionamento: Redireciona automaticamente para outra página 
após um período de tempo especificado.

EX: <meta http-equiv="refresh" content="5;url=https://www.exemplo.com">


Tag Nenhum Índice: Instruir os mecanismos de busca a não indexar a página,
impedindo que ela seja exibida nos resultados de pesquisa.

EX: meta name="robots" content="noindex"

10. Tag u: Usada para aplicar sublinhado ao texto.

EX: <p>Texto<u>sublinhado</u></p

Tag s: Usada para aplicar um efeito de texto riscado ao texto.

EX: <p>Texto <s>riscado</s>.</p>


