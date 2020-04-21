---
name: Acercamiento A Las Probabilidades De Hospitalización Por Grupo De Edad A Nivel Nacional
description: Acercamiento A Las Probabilidades De Hospitalización Por Grupo De Edad A Nivel Nacional
author: @Alejandro Díaz Domínguez
category: Estadística
---
# **Acercamiento A Las Probabilidades De Hospitalización Por Grupo De Edad A Nivel Nacional**

Por Alejandro Díaz Domínguez\*

**E**n términos del modelo para difusión estimado por doctora Natalie E.
Dean, especialista en epidemiología de enfermedades infecciosas
emergentes y profesora en la Universidad de Florida
([\@nataliexdean](https://twitter.com/nataliexdean)) para el caso de
Nueva York (1), el número de hospitalizaciones por grupo de edad por
coronavirus depende de contar con al menos la siguiente información:

-   El tamaño del grupo de edad (¿cuántas personas tienen esa edad?).

-   Probabilidad de infección en ese grupo de edad (¿con qué frecuencia
    se está expuesto?).

-   Probabilidad de hospitalización una vez infectado, ello para el
    grupo de edad correspondiente.

El cálculo es relativamente sencillo. Se divide el porcentaje de
personas hospitalizadas entre el porcentaje de población que pertenece a
cada grupo de edad. Esto nos da una razón. Posteriormente se opta por un
grupo como referencia para estandarizar las razones y estar en aptitud
de realizar comparaciones apropiadas. Se procede a convertir en valor
"uno" al grupo de edad de referencia, mientras que los valores restantes
serán las X veces más probable que cada grupo tiene de ser hospitalizado
en relación con el grupo referencia.

Para ello se requeriría información realmente desagregada, tal como:

-   Género

-   Edad

-   Fecha de prueba positiva

-   Fecha de hospitalización

-   Entidad federativa

Si bien esta información no se presenta desglosada en la base de datos
de casos positivos, en el reporte del 4 de abril de 2020, ya se ofreció
información agregada por edad y condición, esto es, ambulatoria y
hospitalización. De esa gráfica, mediante un software para extraer datos
de gráficas (graph digitizer) se obtuvo el número absoluto de personas
hospitalizadas por grupo de edad (2). Asimismo, se obtuvo la pirámide
poblacional nacional por grupos de edad al 2020 (3). Posteriormente se
procedió a calcular los porcentajes tanto de población de cada grupo de
edad, como de personas hospitalizadas. Para este último dato se dividió
el número absoluto de personas hospitalizadas entre el total de casos
hospitalizados reportado ese día.

Posteriormente se obtuvo una razón de población entre hospitalización
por grupo de edad. Se definió a un grupo como referencia, en este caso,
el grupo de 25 a 29 años. Esto permite estandarizar para convertir en
"uno" al grupo referencia y obtener las veces que es más probable que
las personas integrantes de cada grupo sean hospitalizadas.

En la tabla que sirve de ejemplo para este ejercicio, se observa que por
cada persona entre 25 y 29 años que tiene que ser hospitalizada, es 6
veces más probable que una persona de 65 años o mayor también tenga que
serlo o 5 veces más probable quienes tengan entre 55 y 59 años, según se
observa en la columna E.

##### Tabla 1. Hospitalización por grupo de edad ("veces que es más probable"), México 2020

|            |A            |B            |C            |D            |E                 |F            |
|------------|-------------|-------------|-------------|-------------|------------------|-------------|
|Grupo       |Pob %        |Hosp %       |Razón        |Referencia   |Veces más probable|Hosp abs     |
|            |             |             |F/Total      |B/A          |C/D               |             |
|0-4 años    |8.5%         |0.9%         |0.110        |0.502        |0.2               |4            |
|5-9 años    |8.7%	       |0.0%	|0.000|	0.502|	0.0|	 	0|
|10-14 años  |8.6%	       |0.0%	|0.000|	0.502|	0.0|	 	0|
|15-19 años	 |8.7%	       |1.2%	|0.134|	0.502|	0.3|	 	5|
|20-24 años	 |8.5%	       |1.2%	|0.138|	0.502|	0.3|	 	5|
|25-29 años	 |8.4%	       |4.2%	|0.502|	0.502|	1.0|	 	18|
|30-34 años	 |7.6%	       |8.2%	|1.077|	0.502|	2.1|	 	35|
|35-39 años	 |7.1%	       |7.9%	|1.127|	0.502|	2.2|	 	34|
|40-44 años	 |6.6%	       |9.6%	|1.448|	0.502|	2.9|	 	41|
|45-49 años	 |6.2%	       |11.7%	|1.879|	0.502|	3.7|	 	50|
|50-54 años	 |5.4%	       |11.7%	|2.175|	0.502|	4.3|	 	50|
|55-59 años	 |4.5%	       |11.7%	|2.582|	0.502|	5.1|	 	50|
|60-64 años	 |3.6%	       |8.6%	|2.387|	0.502|	4.8|	 	37|
|65 años +	 |7.6%	       |23.1%	|3.036|	0.502|	6.0|	 	99|
Fuentes: A= pirámide poblacional CONAPO 2020; B y F= distribución de casos por grupo de edad, reporte 4 abril 2020, Secretaría de Salud. Gran total= 1,890 positivos, 78% ambulatorios y 22% hospitalizados; B= corresponde al 22% de hospitalizados, cuyo total es 428. Cifras a nivel nacional.

Este ejercicio es una estimación muy general que simplemente permite
asomarse a una somera idea sobre qué grupos de edad resultarían más
susceptibles y en qué medida. Si bien se sabe que las personas mayores
son las más susceptibles al contar en algunas situaciones con un estado
de salud precario, este tipo de ejercicios permite conocer en qué medida
esto ocurre (6 veces más para personas de 65 o más años, en comparación
con el grupo de 25 a 29 años, como se aprecia en la columna E).

Si bien la estimación resulta muy elemental, al menos permite contar con
un panorama de veces en las cuales es más probable observar
hospitalización por grupos de edad a nivel nacional. Si se contara con
estos mismos datos a nivel entidad federativa podría replicarse este
ejercicio para conocer un poco más sobre cada estado.

Una crítica a este tipo de cálculos es que esta información puede no ser
tan adecuada. Es decir, se requerirían datos serológicos para conocer
anticuerpos (que derivan de muestras sanguíneas) para saber con qué
frecuencia se infectan los diferentes grupos de edad. Dado que lo único
con lo que contamos es con los datos públicos agregados que incluyen
hospitalización, por grupo de edad, éstos en realidad sirven como una
aproximación a la frecuencia con la cual cada grupo de edad se encuentra
expuesto.

Adicionalmente, debe recordarse que el dato de la columna F (número
absoluto de personas hospitalizadas por grupo de edad) se obtuvo a
partir de una gráfica que no incluye esos números, sino que se empleó un
software especializado, lo cual puede no ser exacto por uno o dos casos,
pero al menos la información obtenida sí parece servir para aproximarse
al dato de frecuencia de exposición y con ello poder calcular las veces
en las cuales es más probable observar hospitalización según un grupo de
edad determinado.

\(1\) "An EPI 101 tutorial...":
https://twitter.com/nataliexdean/status/1241507113429610503?s=20\
(2) Casos positivos por grupos de edad a nivel nacional:
https://coronavirus.gob.mx/\
(3) CONAPO y SINAIS:
http://www.dgis.salud.gob.mx/contenidos/basesdedatos/bdc\_poblacion\_gobmx.html

\* Alejandro Díaz Domínguez es doctor en Ciencia Política por la
Universidad de Vanderbilt y profesor de la Escuela de Gobierno del
Tecnológico de Monterrey ([@alejdiazd](https://twitter.com/alejdiazd))
