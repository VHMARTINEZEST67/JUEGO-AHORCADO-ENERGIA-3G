//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡FELICIDADES, LO LOGRASTE!, solo si terminaste entre los tres primeros tienes puntos extras. "; messageTime=""; messageError="¡Inténtalo de nuevo!"; messageErrorG="¡Inténtalo de nuevo!"; messageAttempts="¡PERDISTE! suerte para la próxima"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SlVFR09fQUhPUkNBRE9fRU5FUkdJQV8zRVJfR1JBRE8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Rk9UT1ZPTFRBSUNB","Rk9UT05FUw==","UkVHVUxBRE9S","UFJPRlVORElEQUQ=","TEFTIE1BUkVBUw==","RU5FUkfDjUEgVU5ESU1PVFJJWg==","TUlOSVBMQU5UQVMgR0VORVJBRE9SQVM=","QklPTUFTQQ==","R0VPVMOJUk1JQ0FT","R0FTRVMgREUgRUZFQ1RPIElOVkVSTkFERVJP"];imaW=["0_pista_preg_1.png","0_pista_2.jpg","0_pista_3.jpg","0_pista_4.jpg","0_pista_5.jpg","0_pista_6.jpg","0_pista_7.jpg","0_pista_8.jpg","0_pista_9.jpg","0_pista_10.jpg"];queW=["Esta energía se genera cuando la luz solar incide sobre ciertos materiales semiconductores  principalmente el Silicio","Paquetes de energía electromagnética que se comportan como onda y como materia a la vez","Protege la batería de la sobrecarga eléctrica rectifica controla y filtra la energía producida por el aerogenerador a los paneles solares","Los parques eólicos marinos se han desarrollado en aguas de hasta 60 m de","son los cambios en el nivel del mar que ocurren debido a la atracción tributaria del sol y principalmente de la Luna","Obtenida a partir del movimiento de las olas del mar","En México 87% del agua fluye a través de 51 ríos lo que significa que hay potencial para instalar","La bioenergía se obtiene a partir de un conjunto de residuos de materia orgánica de origen animal o vegetal denominada","En México actualmente hay 5 centrales","Las centrales geotérmicas son una opción destacada en la producción de energía y no emiten"];var wordsL=[12,7,9,11,10,18,23,7,11,27];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="JUEGO_AHORCADO_ENERGIA_3ER_GRADO_resources/media/"; textBNext="SIGUIENTE";
