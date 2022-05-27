
#  Módulo 1 - HTML



## 1 - História da internet 🌐

Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 1](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/01%20-%20História%20da%20Internet.pdf).

## 2 - Como a internet funciona? 🕵️

Conteúdo de apoio presente no [PDF do capítulo 2](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/02%20-%20Como%20funciona%20a%20Internet.pdf).

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
 
Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 3](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/03%20-%20Como%20funciona%20HTML%20e%20CSS.pdf).

## 4 - Primeiros passos HTML. 🖥️

Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 4](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/04%20-%20Primeiros%20passos%20HTML.pdf).



## 5 - Caracteres, parágrafos e quebras de linha. 📝

Conteúdo de apoio presente no [PDF do capítulo 5](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/05%20-%20Caracteres%2C%20parágrafos%20e%20quebras%20de%20linha.pdf).


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

Conteúdo de apoio presente no [PDF do capítulo 6](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/06%20-%20Imagens%20e%20Favicon.pdf).

### 6.1 - Resumo

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

### 6.6 - Favicon.  

Favicon é um ícone que aparece nas abas do navegador logo do lado do nome do site.

Sites que facilitam a criação de favicons
 
 https://favicon.io



## 7 - Hierarquia de Títulos. 📑

Anotações desnecessárias devido a conhecimento prévio - todo conteúdo presente no [PDF do capítulo 7](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/07%20-%20Hierarquia%20de%20títulos.pdf).



## 8 - Formatação de textos. 📖

Conteúdo de apoio presente no [PDF do capítulo 8](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/08%20-%20Formatação%20de%20Textos.pdf).

### 8.1 - TAGs de formatação.

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

![Screenshot](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/abbr.PNG)

- __*&lt;bdo&gt;*__ - inverte o texto.

<bdo dir="rtl">.lmth me sasioc rairc a odnednerpa uotsE</bdo>

## 9 - Listas. 📜

Conteúdo de apoio presente no [PDF do capítulo 9](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/09%20-%20Listas%20HTML.pdf).

### 9.1 - Listas ordenadas ou Ordered list.

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

### 9.3 - Listas de Definição ou Definition lists.

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

### 9.4 - Junção de listas.

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

Conteúdo de apoio presente no [PDF do capítulo 10](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/10%20-%20Ligações%20em%20toda%20parte.pdf).

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

Conteúdo de apoio presente no [PDF do capítulo 11](https://github.com/luisredskill/Curso-em-video/blob/main/HTML%26CSS/PDFs/11%20-%20Imagens%20dinâmicas%2C%20áudios%20e%20vídeos.pdf).

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

### 11.2 - Áudios.

Os áudios são adicionados por meio da tag &lt;audio&gt;, porém ele não é renderizado, apenas carregado na página.

```
<audio src="meu_audio.mp3" ></audio>
```

#### 11.2.1 - Como adicionar controles nos áudios?

Ao mesmo tempo, para que nosso áudio seja renderizado com os controles de áudio devemos utilizar o seguinte 

código:

```
<audio src="meu_audio.mp3" controls></audio>
```

Resultado:

![Screenshot](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/audio_controller1.PNG)

#### 11.2.2 - Otimização de Áudios nos sites.

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

#### 11.2.3 - Áudio em loop.

Podemos deixar o áudio tocando em loop adicionando o parâmetro __*loop*__ dentro da tag &lt;audio&gt;.

#### 11.3.3 - __*IMPORTANTE*__ Adicionando backups.

Para garantir a compatibilidade em todos os navegadores, devemos ter alternativas de carregamento para nossas mídias! Podemos fazer isso utilizando a tag &lt;audio&gt;, porém em vez de indicar o caminho dentro da própria tag pelo parâmetro __*src=""*__, fazemos isso indicando entre as tag. Exemplo:

Código com apenas um arquivo de vídeo em apenas um formato:

```
<audio src="meu_audio.mp3"></audio>
```
Código com arquivos de backup em vários formatos garantindo a compatibilidade:

```
    <audio>
        <source src="meu_audio.mp3" type="audio/mpeg">
        <source src="meu_audio.wav" type="audio/wav">
        <source src="meu_audio.ogv" type="audio/ogg">
    </audio>
```

    Note que ele vai tentar carregar as midias de cima para baixo, ou seja, é interessante que o menor arquivo seja colocado primeiro.

### 11.3 - Vídeos

Os videos são adicionados por meio da tag &lt;video&gt;, porém diferente dos audios ele é sim renderizado.

```
<video src="meu_video.mp4" ></video>
```

Resultado:

![video_nocontrols](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/video_nocontrols_700.PNG)

    Note que o vídeo apenas é mostrado na tela, o usuário não consegue interagir com ele.

Para baixar vídeos gratuitos __*sem direitos autorais*__, podemos utilizar a plataforma da [Pexels](https://www.pexels.com/pt-br/).

Para conversão dos vídeos em formatos mais leves ou para mais formatos, [HandBrake](https://handbrake.fr).

#### 11.3.1 - Adicionando controles aos Vídeos

Para adicionar controles aos vídeos utilizados o parâmetro __*controls*__.

Código:

```
<video src="meu_video.mp4" controls></video>
```

Resultado:

![video_controls](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/video_controls_700.PNG)

#### 11.3.2 - Mudando o tamanho dos vídeos.

As vezes, a largura de um vídeo pode ser muito grande para a página em que ele será inserido. Podemos alterar a largura de um vídeo com o parâmetro __*width=""*__:

Código:

```
<video src="meu_video.mp4" controls width = "500"></video>
```

Resultado:

![video_controls_width_700](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/video_controls_width_700.PNG)

#### 11.3.3 Adicionando Thumbnails

Podemos adicionar uma thumbnail ao vídeo pelo parâmetro __*poster=""*__.

```
 <video src="meu_video.mp4" controls poster="minha_thumb.jpg"></video>
```

Resultado:

![poster_700](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/poster_700.PNG)

#### 11.3.4 __*IMPORTANTE!*__ Adicionando backups

Para garantir a compatibilidade em todos os navegadores, devemos ter alternativas de carregamento para nossas mídias! Podemos fazer isso utilizando a tag &lt;video&gt;, porém em vez de indicar o caminho dentro da própria tag pelo parâmetro __*src=""*__, fazemos isso indicando entre as tags. Exemplo:

Código com apenas um arquivo de vídeo em apenas um formato:

```
<video src="meu_video.mp4"></video>
```
Código com arquivos de backup em vários formatos garantindo a compatibilidade:

```
    <video controls>
        <source src="meu_video.mp4" type="video/mp4">
        <source src="meu_video.webm" type="video/webm">
        <source src="meu_video.ogv" type="video/ogv">
    </video>
```

    Note que ele vai tentar carregar as midias de cima para baixo, ou seja, é interessante que o menor arquivo seja colocado primeiro.

#### 11.3.5 - Incorporando vídeos externos.

As vatagens do __*Youtube*__ são melhores codecs de vídeo, deixando o vídeo mais leve permitindo o usuário reproduzir em velocidades mais baixas de internet.

__*Youtube*__ passo-a-passo:

![barra_yt](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/barra_yt.PNG)

![selecao_yt](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/selecao_yt.PNG)

![incorporado_yt](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/incorporado_yt.PNG)

As vantagens do __*Vimeo*__ são a qualidade do vídeo, porém tem vídeos maiores, se o usuário tiver uma internet pior o vídeo pode travar. Ele também permite uma maior privacidade, sendo a melhor opção quando queremos uma plataforma com vídeos próprios que não podem ser públicos.

__*Vimeo*__ passo-a-passo:

![barra_vimeo](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/barra_vimeo.PNG)

![selecao_vimeo](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/selecao_vimeo.PNG)

![incorporado_vimeo](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/incorporado_vimeo.PNG)




------------------------------------------------------------------------------

# Módulo 2 - CSS

## Comandos CSS

__*background-color*__ - muda a cor de fundo do elemento. Exemplo:

```
<p style="background-color: green;">Esta linha tem o fundo verde utilizando a propriedade background-color</p>
```

Resultado:

![background-color](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/background_color.PNG)

__*color*__ - muda a cor da fonte do texto do elemento selecionado

```
<p style="background-color: green;">Esta linha tem a letra verde utilizando a propriedade color</p>
```

Resultado:

![background-color](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/font_color.PNG)

__*font-size*__ - muda o tamanho do texto do elemento selecionado

```
<p style="background-color: green;">Esta linha tem a letra verde utilizando a propriedade color</p>
```

Resultado:

![background-color](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/font_size.PNG)

__* * *__ - O seletor * é uma configuração global, ou seja, afeta o documento inteiro.



## 12 - Estilização CSS

Conteúdo de apoio presente no [PDF do capítulo 12](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/12%20-%20Trabalhando%20com%20estilos.pdf).

### 12.1 - Como adicionar CSS na linha? 

Dentro de uma tag podemos editar o estilo da seguinte forma:

```
<p style="background-color: green;"></p>
```

Utilizamos a tag style.

### 12.2 - Como adicionar CSS dentro do HEAD?

```
    <head>
        <style>
            mark {
                background-color: green;
            }
        </style>
    </head>
```

### 12.3 - Como adicionar CSS por arquivo externo?

```
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

Note que esta tag altera não apenas um elemento, mas todos os elementos da página atual!

Já abordado em aulas anteriores



## 13 - Cores.

Conteúdo de apoio presente no [PDF do capítulo 13](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/13%20-%20Cores.pdf).


### 13.1 - Como utilizar cores dentro do CSS?

#### 13.1.1 - Representação por nome.

A representação por nome é feita chamando um nome predefinido de cor no CSS, exemplo:
```
    <h2 style="background-color: blue; color: white;">Exemplo de cores</h2>
```

#### 13.1.2 - Representação por código hexadecimal.

##### 13.1.2.1 - Código hexadecimal. 

O código hexadecimal é representada por 6 dígitos cada um deles podento ter uma variedade de 16 carcteres que variam do 0 ao F e normalmente sendo acompanhado pelo símbolo de #. Sendo eles:

0 1 2 3 4 5 6 7 8 9 A B C D E F

Exemplo : #B156AD

     O código hexadecimal é dividido em três partes, cada uma delas representando uma cor primária.

![hexadecimal](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/hexadecimal.PNG)

 O vermelho é representado pelos dois primeiros digitos. 

 Vermelho puro: #FF0000  
 ![hexadecimal_red](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/hexadecimal_red.PNG)

 O verde pelos dois dígitos centrais. 

 Verde puro: #00FF00  
  ![hexadecimal_green](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/hexadecimal_green.PNG)

 E o azul pelos dois últimos digitos. 

 Azul puro: #0000FF  
  ![hexadecimal_blue](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/hexadecimal_blue.PNG)

##### 13.1.2.2 - Como funciona o código hexadecimal?

Cada campo do código de cor hexadecimal define a intensidade da sua cor respectivamente, sendo a mais fraca ou ausência de cor 00, e a mais forte FF.

Como o código é feito na base 16, cada campo representativo de cor possui 16x16 combinações possíveis, na base decimal seria convertido do 0 ao 255. Exemplo:

#FFFF00 representa respectivamente, 255 de vermelho, 255 de verde e 0 de azul resultando na cor amarela:  

![cor](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/cor.PNG)

#### 13.1.3 - Representação por RGB.

representa em código RGB, respectivamente vermelho, verde e Azul. A representação é dada do 0 ao 255. Exemplo:

255,255,255 - representa a cor branca.
255,0,0 - representa o vermelho puro.
0,255,0 - representa o verde puro.
0,0,255 - representa o azul puro.

#### - 13.1.4 - Transparência no CSS.

Tanto os modos RGB e Hexadecimal, possuem transparência acessível pelo editor VScode. Para acessar as configurações basta passar o mouse por cima da cor que deseja adicionar a transparência e, na janela agora aberta, mover o cursor ao lado da barra de cores.

![opcoes_cor](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/opcoes_cor.PNG)

### 13.2 Harmonia de cores e sua importância.

#### 13.2.1 - O que representa cada cor?

Cada cor pode ser associada a um tipo de sentimento ou estado, deve-se levar em consideração o que cada cor representa antes de usá-la em um projeto.

![associacoes](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/associacoes.png)

#### 13.2.2 - O que é círculo cromático?

O circulo cromático é uma representação das cores em formato de círculo.

![circulo_cromatico](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/circulo_cromatico.PNG)

##### 13.2.2.1 - Cores primárias.

Dentre essas classificações temos as cores primárias: Azul,Vermelho e Amarelo.

![primarias](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/primarias.PNG)

Essas cores são conhecidas por serem um pouco difíceis de se trabalhar por serem cores primárias e muito "duras".

##### 13.2.2.2 - Cores secundárias.

Dentre essas classificações temos as cores secundárias: Verde,Violeta e Laranja.

![secundarias](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/secundarias.PNG)

Essas cores também são conhecidas por serem um pouco difíceis de se trabalhar por serem cores muito "duras". 

##### 13.2.2.3 - Cores terciárias.

São o resultado de todas as cores vindas da mistura de uma cor primária e secundária

Essas cores geralmente são largamente utilizadas em projetos. Toda cor terciária fica entre uma cor primária e uma secundária, sendo nomeada com o nome da cor primária e, logo depois, a cor secundária. Exemplos:

Amarelo-esverdeado
Azul-esverdeado
Azul-arroxeado
Vermelho-arroxeado
Vermelho-alaranjado
Amarelo-alaranjado

![terciarias2](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/terciarias2.webp)

##### 13.2.2.4 - Temperatura de cor.

As cores podem lembrar temperaturas específicas e passar a sensação de algo frio ou quente baseado apenas na tonalidade das cores.

![hotcold](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/hotcold.png)


##### 13.2.2.5 - Complementares.

As cores complementares são as cores que possuem mais contraste entre si, geralmente elas trabalham bem juntas, mas deve-se tomar cuidado para que os tons não parecem muito fortes deixando a visualização desagradável. Também é um dos modelos de escolhas de cor mais comuns e geralmente utilizados.

![complementar](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/complementar1.png)

##### 13.2.2.6 - Análogas.

As cores análogas são o oposto das cores complementares, mas também trabalham bem juntas. Elas são as cores que possuem um contraste muito baixo entre si e tem uma harmonia natural.

![analogas](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/analogas.png)

##### 13.2.2.7 - Cores análogas e uma complementar.

Esta é uma tecnica muito utilizado no design, consiste em pegar 3 cores análogas e uma complementar gerando assim uma paleta de cores harmônica.

![analogascomplementar](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/analogascomplementar.jpeg)


##### 13.2.2.8 - Cores triádicas.

Técnica bastante utilizada e que garante uma grande riqueza de cores, onde escolhemos três pontos equidistantes no círculo cromático.
Esse esquema gera sempre um triângulo equilátero e cria uma opção que sempre possui um ótimo contraste entre as cores.:

![analogasrelacionada](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/triadicas.PNG)

##### 13.2.2.9 - Monocromia

Neste método, trabalhamos apenas com um tipo de cor em tônalidades diferentes, alterando apenas a saturação e o brilho. Exemplo:

![monocromia](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/monocromia.PNG)



### 13.3 - O que é uma paleta de cores?

#### 13.3.1 - Criando uma paleta de cores!

A paleta de cores de um projeto deve possuir de 3 a 5 cores no máximo e, geralmente, é escolhida através de um dos métodos relacionados ao círculo cromático.

Para criação de uma paleta podemos utilizar o serviço da [adobe Color](https://color.adobe.com/pt/create/color-wheel).

Este site permite a visualização das cores análogas, complementares, etc.

Exemplo de cores análogas:

![adobe color](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/adobecolor.PNG)

Exemplo de cores complementares:

![adobe color2](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/adobecolor2.PNG)

#### 13.3.2 - Tem uma logo? Aqui está como ter acesso a sua paleta!

Usando a mesma ferramenta podemos utilizar a ferramenta __*Extrair tema*__, ela gera uma paleta de cores baseado na imagem inserida.

![extrairtema](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/extrairtema.PNG)

Ainda podemos formar um gradiente com a ferramenta __*Extrair Gradiente*__ baseado na imagem inserida:

![extrairgradiente](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/extrairgradiente.PNG)

#### 13.3.3 - Paletas prontas para serem usadas!

Na aba explorar do [adobe Color](https://color.adobe.com/pt/create/color-wheel), podemos achar uma paleta pronta de cores para ser utilizada.

![explorar](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/explorar.PNG)

Ainda dentro do explorar, podemos observar uma opção para mostrar as paletas mais usadas:

![menuexplorar](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/menuexplorar.PNG)

Resultado:

![paletasmaisusadas](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/paletasmaisusadas.PNG)

### 13.4 - Salvando cores no navegador.

Para evitar trabalho desnecessário utilizamos uma extensão chamada [CollorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=pt-BR) no chrome.

### 13.5 - Como criar um degradê no CSS? 

#### 13.5.1 - Degradê linear.

Para criar um degradê no css utilizamos o __*background-image*__. Este que receberá um função de nome __*linear-gradient*__.

Esta função recebe 3 argumentos, o primeiro é a direção do degradê podendo ser representado por direções ou graus, os outros dois são as cores.

Código:

```
body{
        background-image: linear-gradient(to right, white, blue)
           
    }
div{
        background-image: linear-gradient(90deg,#0000ff,#ffffff)
}
```
Resultado:

![gradiente](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/gradiente.PNG)

Podemos adicionar mais cores a essa função:

![gradiente2](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/gradiente2.PNG)

Podemos indicar qual a porcentagem de tela que cada cor terá:

```
background-image: linear-gradient(90deg, #710CE8 33%, #0113DB 50%, #0C92E8);
````

Resultado:

![gradiente4](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/gradiente4.PNG)

Note que diferente do senso comum, a porcentagem nesse caso não indica a quantidade de tela a ser tomada pela cor, mas sim o espaço restante que ainda não foi tomado por cores anteriores. Isso quer dizer que se a primeira cor tomar 70% do espaço, mesmo que a próxima ocupe 50%, o valor real ocupado do espaço horizontal será de apenas 15%.

Código:

```
background-image: linear-gradient(90deg, #710CE8 70%, #0113DB , #0C92E8 );
```

Resultado:

![gradiente5](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/gradiente5.PNG)





Note que é necessário usar o __*background-attachment: fixed;*__ nos casos em que o degradê não é para a direita ou para a esquerda e também a configuração global para deixar o body com 100% da altura da tela.

Respectivamente:

````
*{
    height: 100%;
    background-attachment:fixed;
}
````

#### 13.5.2 - Degradê radial.

Para criar um degradê radial no css utilizamos Para criar um degradê no css utilizamos o __*background-image*__. Este que receberá um função de nome __*radial-gradient*__.

Código:

```
background-image: radial-gradient(circle, #710CE8, #370CF2, #0113DB, #0C5CF2, #0C92E8);
```
Resultado:

![gradiente3](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/gradiente3.PNG)




## 14 - Fontes

### 14.1 - História da tipografia.

História da tipografia, explicação sobre os estudos da tipografia presentes no conteúdo do pdf.

Conteúdo de apoio presente no [PDF do capítulo 14](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/14%20-%20Fontes.pdf).

### 14.2 - Como alterar uma fonte no CSS?

A fonte padrão dos navegadores é a __*Times New Roman*__.

Para alterar a fonte de um texto devemos selecionar o elemento no qual ele está inserido e utilizar o seguinte código:

```
seletor{
    font-family: 'fontName';
}
```

Respectivamente, fonte com alteração e sem.

![couriernew](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/couriernew.PNG)

![timesnewroman](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/timesnewroman.PNG)

- __*IMPORTANTE*__ - Esse comando utiliza a fonte já presente no dispositivo, isso quer dizer que se o dispositivo atual não tiver essa fonte, ele vai voltar à padrão. Para evitar essa situação podemos indicar fontes secundárias caso a primeira opção não esteja disponível:

Exemplo:

```
body{
  font-family: Arial, Verdana, sans-serif;
}
```

Respectivamente, resultado esperado, resultado secundário caso a primeira fonte não esteja disponivel no dispositivo atual e última opção.

![helvetica](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/helvetica.PNG)
![verdana](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/Verdana.PNG)
![franklin](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/franklin.PNG)

#### 14.3 - Como garantir que a minha fonte poderá ser usada?

Visto o problema exposto no tópico anterior, podemos evitar esse problema usando combinações de fontes que existem na maioria dos dispositivos por padrão. Para acha-las podemos utilizar o site W3School no tópico [CSS Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp).

Ainda temos a opção de importar as fonts do google fonts.

### 14.4 - Como alterar o tamanho da minha fonte?

Para alterar o tamanho das fonts, selecionamos o elemento a ser alterado e utiliza-mos o comando __*font-size*__:

```
seletor{
    font-size: ;
}
```

- __*IMPORTANTE*__ - Este comando pode receber medidas absolutas ou relativas.  


|       Absolutas    |  Equivalente | Relativas| Equivalentes |
| --- | ----------- | --- | -----------|
|  cm |  centímetro | em  | em|
|  mm |  milímetro  | ex  | ex |
|  in |  polegada   | rem | rem |
|  px |  pixel      | vw  | viewWidth |
|  pt |  ponto      | vh  | viewHeight |


No geral as medidas __*absolutas*__ não são recomendáveis, principalmente pt pois não se adapta bem ao desenvolvimento web.

- __*em*__ - medida relativa ao tamanho da fonte, utiliza a altura da letra M maiúcula como base.

- __*ex*__ - medida relativa ao tamanho da fonte, utiliza a altura da letra x minúscula como base.

- __*rem*__ - medida relativa ao tamanho da fonte, utiliza a o tamanho da fonte do arquivo HTML como base.

- __*vw*__ - medida relativa à largura da tela, utiliza a tela visível, ou seja todos os pixels visíveis atualmente na janela aberta.

- __*vh*__ - medida relativa à altura da tela, utiliza a tela visível, ou seja todos os pixels visíveis atualmente na janela aberta.

### 14.5 - Como adicionar negrito, itálico e sublinhado?

#### 14.4.1 - Negrito.

Para alterar o peso de uma fonte utilizamos o comando:

```
seletor{
    font-weight: ;
}
```

Este comando pode receber uma variedade de argumentos, assim podemos ter:

| Numérico |  Semântico| 
| --- | ----------- | 
| 100 |   lighter   |
| 200 |             | 
| 300 |             |
| 400 |   normal    | 
| 500 |             | 
| 600 |             |
| 700 |   bold      | 
| 800 |             |
| 900 |   bolder    | 

__*IMPORTANTE*__ - note que nem todas as fontes possuem esse espectro de peso! Algumas não possuem nem mesmo o negrito, apenas a fonte NORMAL ou 400.

#### 14.4.2 - Itálico.

Para adicionarmos itálico a um texto utilizamos o comando:

```
seletor{
    font-style: italic;
}
```
__*IMPORTANTE*__ - note que nem todas as fontes possuem o itálico!

#### 14.4.3 - Sublinhado.

Para adicionarmos sublinhado a um texto utilizamos o comando:

```
seletor{
   text-decoration: underline;
}
```
__*IMPORTANTE*__ - note que nem todas as fontes possuem o sublinhado!

### 14.5 - Fonte, tamanho, peso e estilo em uma única linha.

O CSS possibilita que declaremos todos esses aspectos em uma única linha. Isso é feito da seguinte forma:

font-style &rarr; font-weight &rarr; font-size &rarr; font-family

O que antes seria um bloco de código:

```
seletor{
  font-family: 'Work Sans';
  font-weight: bolder;
  font-style: italic;
  font-size: 16px;
}
```
É condensado em apenas uma linha:
```
seletor{
  font: italic bolder 3em 'Work Sans';
}

```

O resultado é o mesmo.

### 14.6 - Como importar uma fonte?

#### 14.6.1 - Como importar uma fonte externa online?


Para importar uma fonte externa devemos importá-la usando a declaração __*@import*__ dentro do CSS antes de qualquer outra declaração. Exemplo:
````
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
````

Podemos utilizar o [Google Fonts](https://fonts.google.com) para achar fontes para nossos projetos.

Podemos importar uma fonte do google fonts diretamente para o CSS. Depois de selecionar a fonte desejada, clicamos no __*Select this style*__.

![select](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/select.PNG)

Depois clicamos neste ícone:

![select2](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/select2.PNG)

Finalmente, selecionando a opção import.

![select3](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/select3.PNG)


### 14.6.2 - Como importar uma fonte baixada? Servidor.

Primeiramente temos que baixar o arquivo de fonte, normalmente os formatos de fonte são __*.ttf*__ ou __*.otf*__, as diferenças entre eles são majoritariamente de compatibilidade com certos navegadores.

Para __*baixar*__ arquivos é recomendado o uso do [Google Fonts](https://fonts.google.com) para fontes gratuitas ou, para mais opções de fontes, é recomendado o [dafont](https://www.dafont.com/pt/).

Depois de baixados e extraidos:

Para importar uma fonte local utilizamos a declaração __*@font-face*__ no começo do arquivo CSS. Ela trabalha de forma a criar uma fonte nova a partir de um arquivo de fonte: 

````
@font-face{

}
````

Dentro do @font-face, declaramos o nome do arquivo que será importado:  
__*IMPORTANTE*__ - o nome declarado deve conter o nome exato, com espaços e símbolos.

````
@font-face{
src: url('fonts/love story.ttf')
}
````

Na mesma linha, declaramos o formato que é um parâmetro de compatibilidade não-obrigatório, porém recomendado:

````
@font-face{
src: url('love story.ttf') format ('truetype')
}
````
Note que o formato não é um padrão, mas __*NORMALMENTE*__ a melhor seleção de compatibilidade é:

| tipo              | formato     | 
| ---               | ----------- | 
| ttf               |   truetype  |
| otf               |   opentype  | 
| embedded-opentype |             |
| truetype-att      |             | 
| svg               |             | 

Finalmente, criamos o nome da fonte que não necessáriamente precisa ser o mesmo nome. Exemplo:

````
@font-face{
font-family: 'Anger';
src: url('fonts/love story.ttf') format ('truetype')
}
````
Assim, chamaremos essa fonte dentro de nosso código CSS de __*Anger*__, não de __*love story*__.

````
body{
font-family: 'Anger';
}
````

Resultado:

![Anger](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/Anger.PNG)

### 14.7 - Como identificar uma fonte de qualquer site?

#### 14.7.1 - Indentificando fontes textuais

As fontes de um site estão presentes no seu CSS e podem ser recuperadas por programas terceiros.

Para isso podemos utilizar extensões de navegadores especializadas e que podem recuperar essas informações.
  
No google chrome, [Fonts Ninja](https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh).

![fontsninja](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/fontsninja.PNG)

#### 14.7.2 - Indentificando fontes de imagens.

[Whatfontis](https://www.whatfontis.com)   
[Font Squirrel](https://www.fontsquirrel.com/matcherator)   
[MyFonts](https://www.myfonts.com/WhatTheFont/)  



## 15 - Comandos CSS

Conteúdo de apoio presente no [PDF do capítulo 15](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/15%20-Seletores%20personalizados.pdf).


### 15.1 - Alinhamento de texto

O padrão de alinhamento de texto é alinhamento à __*esquerda*__.

A declaração utilizada para mudar o alinhamento de texto é o __*text-align*__.

Código:

````
seletor{
    text-align: ;
}
````

Existem 4 argumentos principais para a declaração:

- left, alinhamento à __*esquerda*__ padrão para todos os textos.


````
seletor{
    text-align: left ;
}
````

![left](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/left.PNG)


- right, alinhamento à __*direita*__.


````
seletor{
    text-align: right ;
}
````

![right](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/right.PNG)


- center, alinhamento __*centralizado*__.


````
seletor{
    text-align: center ;
}
````

![center](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/center.PNG)


- justify, alinhamento __*justificado*__.


````
seletor{
    text-align: justify ;
}
````

![justify](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/Screenshots/justify.PNG)





## 16 - Estilização CSS

Já abordado em aulas anteriores

Conteúdo de apoio presente no [PDF do capítulo 16](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/16%20-%20Modelo%20de%20Caixas.pdf).

## 17 - Estilização CSS

Já abordado em aulas anteriores

Conteúdo de apoio presente no [PDF do capítulo 17](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/17%20-%20Primeiro%20mini-projeto.pdf).

## 18 - Estilização CSS

Já abordado em aulas anteriores

Conteúdo de apoio presente no [PDF do capítulo 18](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/18%20-%20Aprendendo%20Git%20e%20GitHub.pdf).

## 19 - Estilização CSS

Já abordado em aulas anteriores

Conteúdo de apoio presente no [PDF do capítulo 19](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/19%20-%20Imagens%20de%20Fundo.pdf).

## 20 - Estilização CSS

Já abordado em aulas anteriores

Conteúdo de apoio presente no [PDF do capítulo 20](https://github.com/luisredskill/HTML-CSS-Javascript/blob/main/HTML%26CSS/PDFs/20%20-%20Mini-projeto%20Cordel.pdf).

------------------------------------------------------------------------------
