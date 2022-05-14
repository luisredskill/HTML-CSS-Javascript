
#  Módulo 1 - HTML



## 1 - História da internet 🌐

Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 1](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/01%20-%20História%20da%20Internet.pdf).

## 2 - Como a internet funciona? 🕵️

Conteúdo de apoio presente no [PDF do capítulo 2](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/02%20-%20Como%20funciona%20a%20Internet.pdf).

### 2.1 - Resumo

 - Bit
 - Tabela dos múltiplos do Bit
 - DNS - Domain name system
 - URL - Uniform resource locator
 - Protocolos de transferência
 - Domínio
 - Subdomínio
 - TLDs - Top level domain

### 2.2 - Bits e Bytes 

<dl>
    <dt>Bit</dt>
    <dd>Digito binário, representado por 0 ou 1.</dd>
    <dt>Byte</dt>
    <dd>conjunto de 8 bits, é a porção mínima para representar um dado.</dd>
    <dt>UTF-8</dt>
    <dd>UTF-8 (8-bit Unicode Transformation Format) é um tipo de codificação binária (Unicode), incluindo caracteres espciais como os acentos gráficos brasileiros.</dd>
    <dt>MB</dt>
    <dd>Representa Megabytes, geralmente representado para quantidades de *armazenamento*.</dd>
    <dt>Mb</dt>
    <dd>Representa Megabits, geralmente representado para quantidades de *transmissão*.</dd>
    <dt>Múltiplos</dt>
    <dd>Os múltiplos do byte e bit são representados pela multiplicação por 1024, não por 1000. Pois a representação é feita na base 2, ou seja. 2 elevado a 10 = 1024.  </dd>

</dl>

|       Dados     |   Múltiplo  | Equivalente em bytes | 
| --------------- | ----------- | -------------------- |
|  1024 bytes     |  1 Kilobyte | 1.024 |
|  1024 Kilobytes |  1 Megabyte | 1.048.576 |
|  1024 Megabytes |  1 Gigabyte | 1.073.741.824 |
|  1024 Gigabytes |  1 Terabyte | 1.099.511.627.776 |
|  1024 Terabytes |  1 Petabyte | 1.125.899.906.842.624 |
|  1024 Petabytes |  1 Exabyte  | 1.152.921.504.606.846.976 |



### 2.3 - O que é domínio e hospedagem?  

<dl>
    <dt>DNS</dt>
    <dd>Domain name system é o sistema que guarda os endereços de IP dos servidores, ou seja, quando você acessa um link nominal como www.facebook.com, você acessa um servidor DNS e pergunta a esse servidor qual o IP do domínio www.facebook.com, recebendo o IP atual do site, por exemplo, 66.220.144.0. O que nós acessamos é o IP do site, não o nome.</dd>
    <dt>URL</dt>
    <dd>Uniform resource locator ou localizador de recurso uniforme é um endereço único que te aponta para um ponto específico na internet, ele pode ser formado por um ou mais dos seguintes componentes:</dd>
<pre>Protocolo de transferência
Subdomínio 
Domínio</pre>
    <dt>Protocolo de transferência</dt>
    <dd>É um sistema de comunicação de informação, indica quais regras serão utilizadas para a transferências de dados.</dd>
<pre>Http - Hypertext Transfer Protocol 
Https - Hyper Text Transfer Protocol Secure </pre>
    <p>
        Note que Https:// é um protocolo para troca de informações, sendo a letra S a representatividade de um nível de segurança.
    </p>
    <dt>Subdomnínio</dt>
    <dd>tem a função de separar áreas de um site cuja identificação será feita pelo subdomínio. Exemplo:</dd>
    <pre>loja.meusite.com    
blog.meusite.com    
eventos.meusite.com</pre>
    <p>
        É notório dizer que o subdomínio, além do que já foi falado, não tem uma função específica. Um site com WWW. ou sem terá a mesma fucionalidade.
        Resumidamente **a função principal é ter dois sites em um mesmo domínio que fazem funções diferentes como é visto nos seguintes casos**:
    </p>   
  <pre>google.com  
mail.google.com - indica que será acessado o Gmail dentro do domínio do google.  
maps.google.com - indica que será acessado o maps dentro do domínio do google.</pre>
    <dt>Domínio</dt>
    <dd>É um nome único que representa um servidor na internet. Exemplo: </dd>
    <pre>youtube.com  
facebook.com  
instagram.com  
google.com  </pre>
    <dt>TLDs</dt>
    <dd>Top level domains ou tlds normalmente tem a função de facilitar o acesso aos dados, eles fazem isso de forma a agrupar os dados em servidores DNS responsáveis por seus tlds, ou seja, quando dizemos que nosso site tem o tld **google.com.br**, estamos dizendo que podemos achar o endereço de IP do site em um dos servidores DNS **.com** ou **.br**.</dd>
<p>Este processo se da da seguinte forma: </p>   
<p><em><strong>Computador</strong></em> &rarr; <em><strong>provedor</strong></em> &rarr; <em><strong>servidor .br</strong></em> &rarr; <em><strong>servidor google</strong></em></p>
    <dt>GTlds</dt>
    <dd>Generic top level domain são representados por nomes genéricos que, normalmente, tem algum significado atrelado:</dd>
    <pre>.com - comercial
.edu - educacional
.gov - governamental
.org - ONGs</pre>
    <dt>ccTlds</dt>
    <dd>Country code top level domain são representados pela sigla de países:</dd>
    <pre>.br - Brasil  
.us - Estados Unidos  
.uk - Reino Unido  
.jp - Japão  </pre>
    <p>
        Note que um endereço sem tld não pode ser achado facilmente pois não está listado em nenhum servidor DNS podendo ser acessado ainda por IP, mas por uma forma muito mais dificil e não-prática.
    </p>
</dl> 

## 3 - Como funciona HTML e CSS? 🧑🏽‍💻
 
Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 3](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/03%20-%20Como%20funciona%20HTML%20e%20CSS.pdf).

## 4 - Primeiros passos HTML. 🖥️

Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 4](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/04%20-%20Primeiros%20passos%20HTML.pdf).



## 5 - Caracteres, parágrafos e quebras de linha. 📝

Conteúdo de apoio presente no [PDF do capítulo 5](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/05%20-%20Caracteres%2C%20parágrafos%20e%20quebras%20de%20linha.pdf).


### 5.1 - Resumo
<ul>
    <li>Comandos básicos HTML</li>
    <li>Símbolos Especiais</li>
    <li>Emojis</li>
</ul>

### 5.2 - Comandos TAGs

- __*&lt;H1&gt;*__ - indica título

- __*&lt;p&gt;*__ - indica parágrafo

- __*&lt;hr&gt;*__ - adiciona uma linha horizontal

- __*&lt;br&gt;*__ - quebra de linha


### 5.3 - Símbolos Especiais (precisam ter o ; no final para funcionar)

- __*&lt*__ substitui o símbolo &lt;.

- __*&gt*__ substitui o símbolo &gt;.

- __*&reg*__ - marca registrada &reg;.

- __*&copy*__ - copyright &copy;.

- __*&trade*__ - trademark symbol &trade;.

- __*&euro*__ - Euro &euro;

- __*&pound*__ - Libra esterlina &pound;.

- __*&yen*__ - Ienes &yen;.

- __*&cent*__ - Centavos americanos &cent;.

- __*&empty*__ - Vazio &empty;.

- __*&sum*__ - Soma &sum;.

- __*&Delta*__ - Delta &Delta;.

- __*&larr*__ - Seta esquerda &larr;.

- __*&uarr*__ - Seta para cima &uarr;.

- __*&rarr*__ - Seta direita &rarr;.

- __*&darr*__ - Seta para baixo &darr;.

Ainda existem uma grande variedade de símbolos que podem ser encontradas pesquisando por misc symbols ou acessando: https://www.w3schools.com/charsets/ref_utf_symbols.asp

### 5.4 - Emojis

😀
😃
😙
😝
😪

Os emojis podem ser encontrados pesquisando por emojipedia ou acessando: https://emojipedia.org/

    Note que copiar e colar não funciona para todos os navegadores, o processo correto é acessar a página, descer até a aba CODEPOINTS e copiar o código depois do U+. Exemplo:  

U+1F600 copiaremos apenas o 1F600.

Feito isso, dentro do arquivo HTML, colocaremos da seguinte forma:

&#x1F600

Note que para funcionar deve-se acrescentar o ; no final do código.



## 6 - Imagens 📷

Conteúdo de apoio presente no [PDF do capítulo 6](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/06%20-%20Imagens%20e%20Favicon.pdf).

### 6.1 Resumo

- Imagens gratuitas para usar no seu site.
- Informações sobre formatos de imagens na web.
- Criação de favicon.

### 6.2 - Achando imagens na Web e editando.  

Busque nesses sites gratuitos:

- UnSplash
- Pexels
- FreePik
- Rawpixels
- Pixabay
- Libreshot

Software gratuito para edição de imagens

Gimp

### 6.3 - Formatos de imagens na Web.  

<dl>
    <dt>JPGE</dt>
    <dd>Compacta as imagens, pegando os pixels que tem a mesma cor e salvando a cor deles em um único lugar. Ao dar zoom, a imagem tende a se distorcer mais. Menor qualidade e tamanho compactado.</dd>
    <dt>PNG</dt>
    <dd>Imagens com transparência, maior tamanho e menor qualidade.</dd>
    <dt>GIF</dt>
    <dd>Transparência e animação.</dd>
</dl>

### 6.4 - Qual tamanho de imagem devo usar?

Normalmente as imagens da WEB tem que ser sempre leves para possibilitar que sejam carregadas em todas as conexões, ou seja, máximo de 1MB.

### 6.5 - Redimensionando imagem com o Gimp.

Imagem depois a opção redimencionar imagem

Ferramenta de corte, dimensionar corte, apertar ENTER.

### 6.6 Favicon  

Favicon é um ícone que aparece nas abas do navegador logo do lado do nome do site.

Sites que facilitam a criação de favicons
 
 https://favicon.io



## 7 - Hierarquia de Títulos. 📑

Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 7](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/07%20-%20Hierarquia%20de%20títulos.pdf).



## 8 - Formatação de textos. 📖

Conteúdo de apoio presente no [PDF do capítulo 8](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/08%20-%20Formatação%20de%20Textos.pdf).

### 8.1 - Comandos de Fromatação de texto TAGs

- __*&lt;strong&gt;*__ - <strong>negrito</strong>, destaque

- __*&lt;em&gt;*__ - <em>italico</em>, enfase

- __*&lt;mark&gt;*__ - <mark>marca texto amarelo</mark>

- __*&lt;small&gt;*__ - <small>deixa o texto menor</small>

- __*&lt;del&gt;*__ - <del>texto deletado, riscado</del>

- __*&lt;ins&gt;*__ - <ins>texto inserido, sublinhado</ins>

- __*&lt;sup&gt;*__ - texto sobreescrito X<sup>20</sup>-3

- __*&lt;sub&gt;*__ - texto subescrito H<sub>2</sub>O

- __*&lt;code&gt;*__ - fonte modo espaçada, geralmente usada para códigos <code>document.getElementById('teste')</code>

- __*&lt;pre&gt;*__ - mantém a identação do código, significa pré-formatado.

 <pre>
        <code>
            num = int(input('Digite um número'))
            if num % 2 == 0
                print(f'0 número {num} é PAR)
            else:
                print(f'0 número {num} é ÍMPAR)
            print('Fim do programa')
        </code>
    </pre>

- __*&lt;q&gt;*__ - <q>deixa o texto como citação</q>

- __*&lt;blockquote&gt;*__ - cita um bloco de texto.

Note que ainda existe o parâmetro cite="link" para citar a fonte do texto.

<blockquote>
        A diferença entre elementos inline e um bloco de texto é importante. Os elementos HTML neste capítulo descrevem os blocos de texto.
</blockquote>

- __*&lt;abbr&gt;*__ - abreviações, ao passar o mouse em cima mostra o nome completo.

![Screenshot](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Módulo%201/Screenshots/abbr.PNG)

- __*&lt;bdo&gt;*__ - inverte o texto.

<bdo dir="rtl">.lmth me sasioc rairc a odnednerpa uotsE</bdo>

## 9 - Listas. 📜

Conteúdo de apoio presente no [PDF do capítulo 9](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/09%20-%20Listas%20HTML.pdf).

### 9.1 - Listas ordenadas ou Ordered list

- A lista ordenada é por padrão uma lista númérica, ela ainda pode receber os argumentos __*type*__  e __*start*__.

    type indica o tipo de lista, podendo ser "1", representando úma lista numérica:

Código:

```
    <ol type ="1">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>

    <ol type ="A">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>

```

Resultado:


<ol type ="1">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>

<ol type ="A">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>


---

    start indica o índice de começo da lista:

Código:

```
    <ol start = "5">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>

    <ol type = "A" start = "5">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>


```

Resultado:

  <ol start = "5">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>

<ol type = "A" start = "5">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ol>

---

 ### 9.2 - Listas não-ordenadas ou Unordered lists.

- A lista ordenada é por padrão tem um símbolo circular, ela recebe apenas o argumento __*type*__.

type indica o tipo de lista, podendo ser circular, circular vazada ou quadrada.

Código:

```
     <ul type ="disc">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ul>

    <ul type ="square">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ul>

    <ul type ="circle">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ul>

```

Resultado:

<ul type ="disc">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ul>

<ul type ="square">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>
    </ul>

<ul type ="circle">
        <li>Acordar</li>
        <li>Tomar café</li>
        <li>Escovar os dentes</li>

---

### 9.3 - Listas de Definição ou Definition lists

- São utilizadas para definir um termo, muito usadas quando queremos definir vários termos em sequência. Valorizada pelo algorítimo do google quando pesquisado por definições.Exemplo: 

Código

```
      <dl>
        <dt>Termo</dt>
        <dd>Linguagem de marcação para a criação do conteúdo de um site.</dd>
        <dt>CSS</dt>
        <dd>Linguagem de marcação para criação do design de um site.</dd>
        <dt>Javascript</dt>
        <dd>Linguagem de programação para a criação da interatividade de um site.</dd>
    </dl>

```
Resultado:

<dl>
        <dt>HTML</dt>
        <dd>Linguagem de marcação para a criação do conteúdo de um site.</dd>
        <dt>CSS</dt>
        <dd>Linguagem de marcação para criação do design de um site.</dd>
        <dt>Javascript</dt>
        <dd>Linguagem de programação para a criação da interatividade de um site.</dd>
    </dl>


---

### 9.4 - Junção de listas

- As listas podem ser aninhadas.


```
    <ol type ="1">
        <li>To-do list</li>
            <ol type="A">
                <li>Acordar</li>
                <li>Tomar café</li>
                <li>Escovar os dentes</li>
            </ol>
        <li>To-do list 2</li>
         <ol type="A">
                <li>Acordar</li>
                <li>Tomar café</li>
             <li>Escovar os dentes</li>
         </ol>
    </ol>
```

Resultado:

<ol type ="1">
    <li>To-do list</li>
        <ol type="A">
             <li>Acordar</li>
            <li>Tomar café</li>
            <li>Escovar os dentes</li>
        </ol>
    <li>To-do list 2</li>
        <ol type="A">
            <li>Acordar</li>
            <li>Tomar café</li>
            <li>Escovar os dentes</li>
        </ol>
</ol>

## 10 - Links e Âncoras. 🔗

Conteúdo de apoio presente no [PDF do capítulo 10](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/10%20-%20Ligações%20em%20toda%20parte.pdf).

### 10.1 - Como fazer um link no HTML?

Para fazer um link em HTML utilizados a tag &lt;a&gt;. Exemplo:

Código:

```
<a href="https://github.com/luisredskill/">repositório público no github</a>
```

Resultado:

[repositório público no github](https://github.com/luisredskill/)

### 10.2 - Como abrir um link em outra janela?

Para abrir um link em uma nova janela utilizamos o parâmetro __*target = "_blank"*__.
Código:

```
<a href="https://github.com/luisredskill/" target = "_blank">repositório público no github</a>
```

### 10.3 - Como indicar que um link é externo ao seu site?

Para indicar a relação que aquele link tem com o seu site utilizamos o parâmetro __*_rel*__.

```
<a href="https://github.com/luisredskill/" rel = "_external">repositório público no github</a>
```
Alguns exemplos de tipos de relação possíveis são:  

- __*external*__ - Indica que o link é para a próxima parte do documento atual.

- __*next*__ - Indica que o link é para a parte anterior do documento atual.

- __*prev*__ - Indica que é um link para o site do autor do artigo atual. 

- __*author*__ - Indica que é um link para outro site que não faz parte do site.

- __*nofollow*__ - Indica que é um link para um site não endossado, como um link pago.

### 10.4 - Como linkar um download?

Para fazer um link de download utilizamos o parâmetro __*download*__ e __*type*__, indicando que o arquivo será um baixável e o tipo do arquivo que será baixado.

```
<a href="arquivos/arquivoParaBaixar" download ="arquivo.pdf" type ="application/pdf">download</a>
```
Alguns outros tipos possíveis de arquivos são:

- application/zip
- text/javascript
- video/mp4
- audio/mpeg
- font/ttf
- image/jpeg

Lista de [MEDIA TYPES](https://www.iana.org/assignments/media-types/media-types.xhtml) possíveis para HTML.

## 11 - Vídeos, áudios e imagens dinâmicas.

Conteúdo de apoio presente no [PDF do capítulo 11](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/Módulo%201/PDFs/11%20-%20Imagens%20dinâmicas%2C%20áudios%20e%20vídeos.pdf).

### 11.1 - Como trocar a imagem sozinha baseada no tamanho de tela?

Para adicionar imagens de forma dinâmica no nosso site, devemos utilizar a tag &lt;picture&gt;, dentro dela, para carregar dinâmicamente um conteúdo devemos selecionar a tag __*source:media:type*__. Exemplo:

Menor para o maior:

```
  <picture>
        <source media="(max-width: 750px)" srcset="imagens/foto-300.png" type="image/png">

        <source media="(max-width: 1020px)" srcset="Imagens/foto-700.png" type="image/png">

        <img src="Imagens/foto-1000.png" alt="imagem flexível">
    </picture>
```

Note que para ter o funcionamento correto desse recurso, devemos sempre utilizar uma ordem de imagens do __*maior*__ para o __*menor*__ ou vice-versa. Exemplo reverso:

Maior para o menor:

```
  <picture>
       <picture>
        <source media="(min-width: 1000px)" srcset="imagens/foto-1000.png" type="image/png">

        <source media="(min-width: 750px)" srcset="Imagens/foto-700.png" type="image/png">

        <img src="Imagens/foto-300.png" alt="imagem flexível">
    </picture>
    </picture>
```

### 11.2 - Áudios

Os áudios são adicionados por meio da tag &lt;audio&gt;, porém ele não é renderizado, apenas carregado na página.

```
<audio src="meu_audio.mp3" ></audio>
```

### 11.2.1 - Como adicionar controles nos áudios?

Ao mesmo tempo, para que nosso áudio seja renderizado com os controles de áudio devemos utilizar o seguinte 

código:

```
<audio src="meu_audio.mp3" controls></audio>
```

Resultado:

![Screenshot](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Módulo%201/Screenshots/audio_controller1.PNG)

### 11.2.2- Otimização de Áudios nos sites.

Os áudios exigem ainda mais otimização na hora de adiconá-los em um site, uma música por exemplo, tem por volta de 5 MB de informação, o que já é muito mais pesado que qualquer imagem.

Em casos extremos, como um podcast, este arquivo pode ser de até 50 MB.

Existe um parâmetro dentro da tag &lt;audio&gt; que indica quando o áudio será carrega e se será carregado.

Dentro da tag audio, utilizados o parâmetro __*preload*__.

```
    <audio preload="">
        <source src="midias/as.mp3" type="audio/mpeg">
    </audio>
```

Dentro do parâmetro preload, podemos receber 3 valores:

|      auto    |   metadata  | none | 
| --------------- | ----------- | -------------------- |
|  Carrega todo o áudio e só considera o carregamento da página completa após o carregamento.    |  Carrega apenas as informações essenciais como nome, tipo de arquivo e tamanho. | Não carrega nada, apenas por comandos do usuário ou JS. |

### 11.2.3 - Áudio em loop

Podemos deixar o áudio tocando em loop adicionando o parâmetro __*loop*__ dentro da tag &lt;audio&gt;.

### 11.3 - Vídeos

Os áudios são adicionados por meio da tag &lt;audio&gt;, porém ele não é renderizado, apenas carregado na página.

```
<video src="meu_video.mp4" ></video>
```

Resultado:

![Screenshot](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Módulo%201/Screenshots/video_nocontrols.PNG)

Para baixar vídeos gratuitos __*sem direitos autorais*__, podemos utilizar a plataforma da [Pexels](https://www.pexels.com/pt-br/).

Para conversão dos vídeos em formatos mais leves ou para mais formatos, [HandBrake](https://handbrake.fr).

### 11.3.1 - Parâmetros dos vídeos







------------------------------------------------------------------------------

# Módulo 1 - CSS



## 1 - Aula exclusiva de HTML


## 2 - Aula exclusiva de HTML


## 3 - Aula exclusiva de HTML


## 4 - Aula exclusiva de HTML


## 5 - Aula exclusiva de HTML


## 6 - Aula exclusiva de HTML


## 7 - Aula exclusiva de HTML


## 8 - Tipos de edição de Estilo no CSS ✨

### 8.1 - Edição inline 

Dentro de uma tag podemos editar o estilo da seguinte forma:

```
<MARK style="background-color: green;">
```

Utilizamos a tag style.

### 8.2 Tag style no HEAD

```
    <style>
        mark {
            background-color: green;
        }
    </style>
```

Note que esta tag altera não apenas um elemento, mas todos os elementos da página atual!

------------------------------------------------------------------------------