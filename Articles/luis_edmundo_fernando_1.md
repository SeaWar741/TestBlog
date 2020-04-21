---
name: Diagnóstico de recursos físicos y humanos para atender la contingencia COVID-19
description: Diagnóstico de recursos físicos y humanos para atender la contingencia COVID-19
author: @Luis Serra, @Edmundo Molina y @Fernando Gómez
category: Economía
---
# **Impacto económico en México por COVID19: un enfoque sectorial y de empleo en condiciones de incertidumbre**

Por Luis Serra, Edmundo Molina y Fernando Gómez

Los datos desestacionalizados del Instituto Nacional de Geografía y
Estadística (INEGI) confirmaron que la economía mexicana se contrajo
0.1% en 2019, su primer registro negativo desde 2009. En aquél entonces,
la contracción del 6.5% fue resultado de una recesión global y los
efectos de la influenza A, ocasionada por el virus AH1N1. En México
persistía un debate infructífero sobre si experimentábamos o no una
recesión, el cual fue atajado por el subgobernador del Banco de México,
Jonathan Heath, cuando hizo notar que una recesión tenía tres
características: duración, difusión y profundidad; elementos para los
que, a cierre de 2019, no había evidencia.

En enero de 2020, cuando el SARS-Cov-2 era una incipiente epidemia
concentrada en Wuhan, China, no pocas casas de análisis comenzaron a
encender las alarmas sobre una contracción para México más profunda a la
experimentada el año anterior. Las perspectivas negativas para el
crecimiento económico global y de México se acentuaron conforme el virus
se extendía a todos los rincones del planeta. Para abril de este año,
varias instituciones reconocieron una contracción del producto interno
bruto para nuestro país. La Secretaría de Hacienda y Crédito Público
(SHCP) estimó un rango de crecimiento del 0.1% al -3.9%[^1]; el Banco
Mundial anunció un crecimiento negativo del 3%; y, el Fondo Monetario
Internacional recientemente anunció una contracción del 6.6%[^2]. El
debate entonces, como lo reconoció el mismo subgobernador Heath, había
terminado; ahora era cuestión de identificar "de qué tamaño sería la
crisis" (profundidad), "cuánto tiempo duraría" (duración) y "qué
sectores de la economía se verían afectados" (difusión).

El análisis descrito en esta nota ahonda sobre estos cuestionamientos
con un enfoque de empleo. Para ello, hemos desarrollado un modelo de
difusión del COVID19[^3] que constituye una versión modificada del
modelo SIR[^4], considerando parámetros sobre la infectividad y
mortalidad del COVID19, el impacto del distanciamiento social y, de
manera muy importante, el rezago en la información entre el número real
de infectados y el número de casos confirmados. En este ejercicio de
modelación se integran además los datos de población ocupada total y
producción bruta total de los censos económicos 2014 (último disponible
con el nivel de desagregación requerido para el análisis), así como de
la población estatal de la encuesta intercensal 2015 y el tamaño de
empresas del Directorio Estadístico Nacional de Unidades Económicas
(DENUE) de 2019. Con estos elementos, realizamos un amplio número de
experimentos computacionales que nos permiten construir un análisis
exploratorio sobre cómo varios escenarios de infectividad y de rezagos
en la información entre el número de casos reales y casos confirmados,
impactan la duración, difusión y profundidad (medida en empleos) del
COVID19 en México.

El primer mensaje a señalar es que **el impacto del COVID19 será
prolongado** incluso si la infectividad fuera sumamente baja. Si se
parte de un supuesto base de infectividad similar a la que experimentó
Italia y se toma como día de referencia el 7 de abril, se tiene que en
el mejor de los casos todas las entidades federativas del país habrán
contenido la propagación del virus en un plazo de 52 días. Dicho de otro
modo, en un escenario optimista, la contención no sucedará de forma
generalizada en el país sino hasta el cierre de mayo. Sin embargo, en el
peor de los casos esto podría ocurrir en un plazo de 122 días, lo cual
conduce a una contención generalizada hasta los primeros días de agosto.

La semana anterior, la titular de la Secretaría del Trabajo y Previsión
Social, Luisa María Alcalde, informó que, a partir del primer caso
detectado de manera oficial en el país, se habían perdido 346 mil 878
empleos, principalmente en Quintana Roo (63 mil 847), Ciudad de México
(55 mil 591), Nuevo León (23 mil 465), Jalisco (21 mil 535), Estado de
México (16 mil 036) y Tamaulipas (12 mil 652).

¿En qué sectores y qué estados de la República se perderán más empleos?
Es inmediato identificar que las entidades federativas con cifras más
grandes en empleo, así como con sectores cuyas actividades son más
afectadas por la pandemia serán los que presenten cifras más altas en
despidos. Por ejemplo, el sector servicios ha sido uno de los más
afectados por la pandemia, no solo en México sino a nivel mundial. Las
tasas de ocupación hotelera en destinos turísticos como Cancún, Riviera
Maya, Acapulco, entre otros, se encuentran en sus niveles históricos más
bajos. De igual forma, cines, teatro y restaurantes han visto sus
puertas cerradas por la política de distanciamiento social.

En ese sentido, nuestro análisis establece que, **sin importar la
duración o estructura económica de cada estado de la República, hay
sectores que inevitablemente sufrirán el embate de la pandemia**. Tal es
el caso de "comercio al por menor[^5]", el cual se encuentra en todas
las entidades federativas del país como uno de los dos sectores con
mayor pérdida de empleos[^6]. No obstante, es claro también que la
estructura económica diferenciada de los estados del país obliga a
producir un plan de reactivación económica con atención a nivel regional
y sectorial.

De igual forma, Luisa María Alcalde mencionó que las empresas de mayor
tamaño son las que han despedido a más trabajadores. En total, hasta el
8 de abril y con información de la desafiliación de empleados en el
Instituto Mexicano del Seguro Social (IMSS), las empresas de 50 o más
trabajadores han perdido 294 mil 329 empleos, mientras que las de 6 a 50
trabajadores 52 mil 061, y las de 1 a 5 trabajadores 488 empleos. Por su
parte, el Consejo Coordinador Empresarial ha hecho notar la necesidad de
apoyar a la micro, pequeña y medianas empresas (MiPyME), ya que son
ellas quienes poseen menos capital y son más vulnerables para hacer
frente a situaciones como la ocasionada por la pandemia.

Nuestro análisis utiliza la clasificación de las empresas del INEGI con
base en su tamaño por número de empleados: micro, de 0 a 10 empleados;
pequeña, de 11 a 50; mediana, de 51 a 100; y grande, de 101 y más. Con
esos datos, el modelo sostiene que con una infectividad y rezago en la
información entre el número real de infectados y el número de casos
confirmados base, **un mayor número de** **MiPyME serán impactadas
durante la pandemia**, particularmente en los sectores de manufactura
(31-33[^7]), comercio al por menor (46), transportes, correos y
almacenamiento (48 y 49) y servicios de esparcimiento culturales y
deportivos, y otros servicios recreativos (71), entre otros. Pero aquí
cabe destacar algo relacionado al primer hallazgo del modelo, **mientras
más tiempo transcurra para llegar a la contención del virus, mayores
serán las pérdidas de empleo en el país.**

El modelo utilizado para el análisis todavía está en desarrollo y
requiere refinamientos en relación a los efectos de externalidades
geográficas, elasticidades de sustitución e impactos de la política de
confinamiento. Sin embargo, por un lado ofrece una perspectiva
exploratoria sobre la profundidad y difusión (medidas en empleo), así
como la duración del impacto a la economía mexicana. Y, por el otro,
sugiere un estudio más profundo de dos temas esenciales. El primero de
ellos está relacionado a la prevalente disyuntiva (*trade-off*) que
existe entre conducir una política más estricta de distanciamiento
social (mayor confinamiento) y acortar el periodo (mas no el impacto) de
impacto negativo en la economía. El ejercicio de calibración hecho para
los casos de Italia y Corea del Sur señala que una política de
confinamiento más estricta es efectiva para aplanar la curva de
infectados a costa de tener un impacto más prolongado en la economía.
Por el contrario, una política de confinamiento más laxa resulta en un
número elevado de contagios en un periodo muy corto con fuerte presión
para el sector salud, y mayor letalidad, así como con impactos más
profundos en la economía vía pérdida de empleos, pero con una menor
duración en el tiempo.

El segundo tema a discutir en el futuro es que si bien la pandemia
tendrá impactos fuertes en distintas dimensiones, la vida sin duda
seguirá. Y, para continuarla, es necesario contar con **un plan de
reactivación económica** robusto que anticipe la produnda incertidumbre
en la que nos encontramos. Los experimentos que hemos realizado sugieren
que dicho plan **no puede estar sustentado en políticas económicas
uniformes para todos los estados de la República**, sino que debe
considerar su estructura económica, el tiempo de contención del virus en
cada una de ellos, así como qué sector, qué tipo de empresas según su
tamaño y en qué magnitud se verán afectadas. En las próximas semanas
será clave entender de forma detallada bajo qué condiciones diferentes
regiones del país pueden reactivar su actividad económica de manera
segura.

\*Luis Serra es doctor en economía por la Universidad de Warwick
([\@luisserra23](https://twitter.com/luisserra23)), Edmundo Molina es
doctor en análisis de sistemas y política pública por la Pardee RAND
Graduate School
[(\@EdmundoMolinaMx),](https://twitter.com/EdmundoMolinaMx) y Fernando
Gómez es doctor en políticas públicas por la Escuela de Gobierno y
Transformación Pública del Tecnológico de Monterrey
([\@fgmzz](https://twitter.com/fgmzz)). Los tres son
profesores-investigadores en la Escuela de Gobierno y Transformación
Pública del Tecnológico de Monterrey.

## **Código**

\<div class=\'tableauPlaceholder\' id=\'viz1586919613795\'
style=\'position: relative\'\>\<noscript\>\<a href=\'\#\'\>\<img alt=\'
\'
src=\'https:&\#47;&\#47;public.tableau.com&\#47;static&\#47;images&\#47;me&\#47;mexicovid19\_modelacin&\#47;MXCOVIDANALYSIS&\#47;1\_rss.png\'
style=\'border: none\' /\>\</a\>\</noscript\>\<object
class=\'tableauViz\' style=\'display:none;\'\>\<param name=\'host\_url\'
value=\'https%3A%2F%2Fpublic.tableau.com%2F\' /\> \<param
name=\'embed\_code\_version\' value=\'3\' /\> \<param
name=\'site\_root\' value=\'\' /\>\<param name=\'name\'
value=\'mexicovid19\_modelacin&\#47;MXCOVIDANALYSIS\' /\>\<param
name=\'tabs\' value=\'no\' /\>\<param name=\'toolbar\' value=\'yes\'
/\>\<param name=\'static\_image\'
value=\'https:&\#47;&\#47;public.tableau.com&\#47;static&\#47;images&\#47;me&\#47;mexicovid19\_modelacin&\#47;MXCOVIDANALYSIS&\#47;1.png\'
/\> \<param name=\'animate\_transition\' value=\'yes\' /\>\<param
name=\'display\_static\_image\' value=\'yes\' /\>\<param
name=\'display\_spinner\' value=\'yes\' /\>\<param
name=\'display\_overlay\' value=\'yes\' /\>\<param
name=\'display\_count\' value=\'yes\' /\>\<param name=\'filter\'
value=\'publish=yes\' /\>\</object\>\</div\> \<script
type=\'text/javascript\'\> var divElement =
document.getElementById(\'viz1586919613795\'); var vizElement =
divElement.getElementsByTagName(\'object\')\[0\];
vizElement.style.width=\'1516px\';vizElement.style.height=\'991px\'; var
scriptElement = document.createElement(\'script\'); scriptElement.src =
\'https://public.tableau.com/javascripts/api/viz\_v1.js\';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
\</script\>

[^1]: [[https://www.animalpolitico.com/2020/04/hacienda-caida-pib-economia-mexico-2020/]{.underline}](https://www.animalpolitico.com/2020/04/hacienda-caida-pib-economia-mexico-2020/)

[^2]: [[https://expansion.mx/economia/2020/04/14/mexico-uno-paises-mas-golpeados-por-covid19-alerta-fmi?utm\_source=push\_notification]{.underline}](https://expansion.mx/economia/2020/04/14/mexico-uno-paises-mas-golpeados-por-covid19-alerta-fmi?utm_source=push_notification)

[^3]: Ver modelo de Edmundo Molina en
    [[https://www.edmundomolinamx.org/single-post/2020/03/16/Responding-to-COVID-19-under-uncertainty-a-simulation-based-discussion]{.underline}](https://www.edmundomolinamx.org/single-post/2020/03/16/Responding-to-COVID-19-under-uncertainty-a-simulation-based-discussion)

[^4]: El modelo SIR es un modelo epidemiológico simple que considera la
    población susceptible (S), la población infectada (I) y la población
    recuperada (R).

[^5]: El Sistema de Clasificación de Industrias de América del Norte
    (SCIAN) define a este sector como aquellas unidades económicas
    dedicadas a la compraventa, sin transformación, de bienes para el
    uso personal o comercialización a negocios. En este sector se
    encuentra, por ejemplo, el comercio puerta por puerta, comercio por
    catálogo, comercio multinivel, comercio de lentes, instrumentos
    musicales, comercio en farmacias, entre otros.

[^6]: El único estado donde no ocurre esto es Nuevo León, donde
    "comercio al por menor" es el tercer sector con más pérdida de
    empleos.

[^7]: Código del sector con base en el SCIAN, 2013.
