// ------------------------------
// ANIMACIONES DE HOVER (zoom + rebote + sombra)
// ------------------------------
document.querySelectorAll('.gallery-grid img, .cta-button, .hero-content').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    el.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    el.style.transform = 'scale(1.05)';
    el.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
    el.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
  });

  el.addEventListener('mousedown', () => {
    el.style.transform = 'scale(0.95)';
  });

  el.addEventListener('mouseup', () => {
    el.style.transform = 'scale(1.05)';
  });
});

// Efecto de scroll suave (anclas internas)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =====================
// ANIMACIÓN HERO AL CARGAR + AL SCROLL
// =====================
const hero = document.querySelector('.hero');

if (hero) {
  const heroImage = hero.querySelector('img');

  // Al cargar
  gsap.from(heroImage, {
    opacity: 0,
    scale: 1.05,
    duration: 1.2,
    ease: 'power2.out'
  });

  // Al hacer scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 400, 0.2);
    heroImage.style.opacity = opacity;
  });
}


// =====================
// ANIMACIONES DE ENTRADA CON SCROLL (Texto y tarjetas)
// =====================
gsap.utils.toArray('.fade-up').forEach(elem => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out'
  });
});

// ------------------------------
// EFECTO DE SCROLL SUAVE
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ANIMACIÓN DEL FONDO (mousemove con gradiente etéreo)
const bg = document.body;
const spotlight = document.createElement('div');

spotlight.style.position = 'fixed';
spotlight.style.top = '0';
spotlight.style.left = '0';
spotlight.style.width = '100%';
spotlight.style.height = '100%';
spotlight.style.pointerEvents = 'none';
spotlight.style.zIndex = '-1';
spotlight.style.transition = 'background 0.3s ease';
spotlight.style.background = 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3), transparent 40%)';

document.body.appendChild(spotlight);

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;

  spotlight.style.background = 'radial-gradient(circle at center, rgba(255, 204, 229, 0.4), transparent 40%)';

spotlight.style.background = `
  radial-gradient(circle at ${x}% ${y}%,
    rgba(255, 220, 240, 0.6),  /* rosa suave */
    rgba(255, 240, 200, 0.5),  /* dorado piel */
    rgba(135, 206, 250, 0.4),  /* azul claro saturado */
    rgba(255, 255, 255, 0.2),
    transparent 60%
  )
`;
});

const viewer = document.getElementById("articleViewer");

const articles = {
  "Editorial": {
    title: "Editorial",
    text: 
    `<p><strong>Estimados lectores,</strong></p>
     <p>En un mundo definido por la acelerada
evolución tecnológica y los cambios sociales,
reflexionar sobre las tendencias de las
artes adquiere una relevancia profunda. La
transformación tecnológica, que redefine los
panoramas académico y cultural, plantea
nuevas oportunidades para las disciplinas
artísticas. La FUBA busca responder a los
retos que se imponen en la actualidad,
con un enfoque integrador, combinando
rigor académico, científico y reflexivo en la
formación de artistas en áreas como artes
plásticas, música, diseño y comunicación. Este
compromiso se extiende más allá de los planes
curriculares, promoviendo la investigación-
creación, la transferencia del conocimiento
y su apropiación social, lo que fortalece el
impacto de las artes en la construcción de una
sociedad más inclusiva y equitativa.</p>

<p>La Revista Progresivo, en su edición digital
accesible desde el sitio web de la FUBA, se
consolida como un espacio dinámico para la
divulgación de estas prácticas creativas. Al
conectar a estudiantes, docentes, egresados
y la comunidad académica, se fomenta un
diálogo riguroso que amplifica el alcance de
la investigación y la creación artística. En un
entorno globalizado, las artes emergen como
un lenguaje universal que trasciende fronteras
y construye puentes culturales, reafirmando el
compromiso de la FUBA con la innovación y
el cambio social.</p>

<p>La edición n.º 36 de la Revista Progresivo
presenta contenidos que exploran las
intersecciones entre arte y contemporaneidad.
Destacan análisis sobre el carácter interactivo
de la inteligencia artificial y su impacto en
la creación artística, así como proyectos
colaborativos entre semilleros de fotografía
y música que abordan paisajes sonoros
urbanos. Un estudio perfila Medellín como un
escenario de resistencia cultural, donde las
expresiones visuales desafían las dinámicas de
la globalización. Al tiempo que otro artículo,
indaga en la vida del célebre artista Paul
Cézanne (1839-1906) y examina su búsqueda
incansable por capturar la esencia de la
naturaleza.</p>

<p>Esta edición presenta, igualmente, resultados
de prácticas estudiantiles que exploran la
naturaleza como sujeto de creación visual
y los bares de Medellín como espacios
de construcción cultural. Asimismo, se
reseña un evento expositivo que integró el
proyecto La Serpiente en la sexta edición del
Circuito Fotográfico de Medellín, utilizando
la fotografía para explorar en la estética,
la identidad y la configuración del espacio
público en el corredor urbano de la Avenida
La Playa, ubicado en el centro de Medellín.</p>

<p>En el ámbito internacional, se reseña la
participación de tres profesores y tres
estudiantes de los programas de Artes
y Fotografía de la FUBA en la “Escuela
Internacional de Verano de Artes Visuales:
Estampado Tradicional y Numérico”,
organizada por la Universidad de Quebec
en Trois-Rivières, Canadá, del 4 al 12 de
septiembre de 2024. Esta experiencia,
enmarcada en las estrategias de
internacionalización de la FUBA, fortalece
el intercambio cultural y académico,
promoviendo procesos de creación colectiva y
la apertura del conocimiento en el campo de
las artes.</p>

<p>Agradecemos a todos los colaboradores que
hacen posible esta publicación y alentamos
a nuestros lectores a explorar los contenidos
de esta edición, que reflejan el compromiso
de la FUBA con la excelencia académica, la
creatividad y el impacto social. Que estas
páginas inspiren nuevas perspectivas y
fortalezcan los lazos de nuestra comunidad
artística.</p>

<p><strong>Paula Andrea Botero Bermúdez</strong></p>

<p>Rectora</p>`,
  },

  "Medellín y el arte criollo:": {
    title: "Medellín y el arte criollo: Identidad que brota de lo cotidiano",
    text: `<p><strong>María Paula Ramírez Rúa</strong></p>
    <p><i>Estudiante del pregrado en Artes Visuales del Instituto Tecnológico Metropolitano (ITM)</i></p>
    <p><strong>Resumen</strong></p>
    <p>Medellín se revela como una ciudad que
resiste las lógicas homogeneizantes de la
globalización a través de sus expresiones
visuales populares. Más allá de los
cánones tradicionales del arte, su paisaje
urbano se convierte en un lienzo vivo
donde la espontaneidad, la necesidad y la
imperfección se transforman en lenguaje
estético y político. Este texto reflexivo
explora el concepto de arte criollo: una
práctica visual nacida de lo cotidiano, lo
improvisado y lo desordenado, que no busca
agradar, sino decir, narrar y resistir.</p>

<p>Lejos de replicar modelos globales, Medellín
reinventa su identidad en los muros de
talleres, mercados y barrios populares,
donde la gráfica urbana no es decoración,
sino testimonio. En este contexto, lo criollo
nombra una estética híbrida y combativa
que convierte lo descartado en herramienta
expresiva y lo disonante en símbolo de una
creatividad hecha desde la urgencia.</p>

<p>Este proyecto propone una lectura del arte
urbano de Medellín como una forma de
resistencia cultural. A través de carteles
hechos a mano, murales espontáneos y
letreros improvisados, la ciudad genera
un lenguaje visual propio que desafía las
convenciones estéticas tradicionales. Así,
Medellín se afirma como un espacio en
permanente construcción, donde lo local
dialoga con lo global sin perder su raíz, y
donde la belleza surge, precisamente, de lo
que se hace con lo que hay.</p>

<p><strong>Palabras clave:</strong> Arte comunitario -
Globalización cultural – Identidad cultural</p>

<p><strong>Arte comunitario:</strong> Actividad grupal
que hace posible la producción artística,
envolviendo la participación de grupos
en un proceso creativo, desarrollado en
la comunidad (entendida en términos
de una ubicación geográfica particular
—localidad— y de una situación común —
grupo relacional—). Puede incluir diversos
lenguajes artísticos (artes plásticas, teatro,
música, danza, fotografía, video, así como
también multimedia, circo y creación
literaria). Puede tratarse de experiencias
creadas o promovidas ya sea por programas
de arte comunitario, por grupos de artistas
profesionales o no profesionales, o por
asociaciones culturales.</p>

<p><strong>Globalización cultural:</strong> Proceso de
intercambio e integración de valores, ideas
y costumbres a escala mundial producto de
la globalización. Se trata de un fenómeno
actual, en el que las culturas y tradiciones
se influyen mutuamente como consecuencia
del comercio, la migración y las nuevas
tecnologías de la comunicación.</p>

<p><strong>Identidad cultural:</strong> Proceso
comunicacional entre culturas, a través
de la cual se manifiestan rasgos propios,
específicos, que caracterizan a un grupo,
región, comunidad, pueblo, nación, a
partir de los elementos identificadores
y diferenciadores y en la que tiene
lugar diferentes niveles de realización.
Es un hecho social inevitable, puesto
que constituye una necesidad para los
individuos y para que un grupo se afirme
frente al otro.</p>

<p><strong>Abstract</strong></p>

<p>Medellín reveals itself as a city that resists
the homogenizing forces of globalization
through its popular visual expressions.
Beyond traditional art canons, its urban
landscape becomes a living canvas where
spontaneity, necessity, and imperfection
transform into an aesthetic and political
language. This reflective text explores the
concept of arte criollo: a visual practice born
from the everyday, the improvised, and the
disorderly, which does not seek to please
but to speak, narrate, and resist.</p>

<p>Far from replicating global models,
Medellín reinvents its identity on the walls
of workshops, markets, and working-class
neighborhoods, where urban graphics are
not mere decoration but testimony. In
this context, criollo names a hybrid and
combative aesthetic that turns the discarded
into expressive tools and the dissonant into
symbols of creativity born from urgency.</p>

<p>This project proposes a reading of
Medellín’s urban art as a form of cultural
resistance. Through handmade posters,
spontaneous murals, and improvised signs,
the city generates its own visual language
that challenges traditional aesthetic conventions.
In this way, Medellín asserts
itself as a space in constant construction,
where the local dialogues with the global
without losing its roots, and where beauty
arises precisely from making the most of
what is available.</p>

<p><strong>Keywords:</strong> Community Art – Cultural
Globalization – Cultural Identity</p>

<p><strong>Community Art:</strong> Group activity that
enables artistic production, involving
the participation of groups in a creative
process developed within a community
(understood in terms of a particular
geographical location—neighborhood—and
a common situation—relational group).
It can include various artistic languages
(visual arts, theater, music, dance,
photography, video, as well as multimedia,
circus, and literary creation). It may involve
experiences created or promoted by either
community art programs, professional or
non-professional artist groups, or cultural
associations.</p>

<p><strong>Cultural Globalization:</strong> Process of
exchange and integration of values, ideas,
and customs on a global scale as a result of
globalization. It is a current phenomenon
in which cultures and traditions influence
each other due to trade, migration, and new
communication technologies.</p>

<p><strong>Cultural Identity:</strong> Communicative
process between cultures through which
specific traits that characterize a group,
region, community, people, or nation
are manifested, based on identifying and
differentiating elements, and in which
different levels of realization take place. It
is an inevitable social fact, as it constitutes a
necessity for individuals and for a group to
assert themselves in relation to others.</p>

<img src="./assets/a1.png" alt="No me orine, tengo cáncer">
      <figcaption>
        Autor desconocido. (2024, octubre). 
        <em>No me orine, tengo cáncer</em>. [Fotografía]. María Paula Ramírez.
      </figcaption>
    </figure>
    
<p>Medellín es una ciudad de rebeldías
silenciosas y fugas de sentido que se escapan
por las grietas del asfalto. Basta con caminar
por el centro o perderse en los barrios
populares para descubrir cómo sus calles
se han convertido en un museo accidental:
un espacio donde la gráfica urbana resiste
sin pedir permiso ni ofrecer explicaciones.
No se trata de mera estética popular, sino
de una forma emergente de arte criollo: una
categoría no institucionalizada que nombra
una práctica viva, irreverente y en constante
mutación.</p>

<p>Carteles, murales, rotulaciones y letreros
improvisados hablan un idioma propio
y urgente que no pretende gustar, sino
decir. En ese lenguaje visual, la comunidad
se narra a sí misma transformando cada
rincón en un espejo de lo que es, de lo que
falta y de lo que aún resiste.</p>

<p>Nombrar estas expresiones como “criollas”
no es un gesto inocente. En este contexto,
lo criollo remite a lo híbrido, a lo local, a
lo que surge de la mezcla, la apropiación
y la reinvención cotidiana. Es una palabra
marcada por la historia de la colonia, pero
también, por la resistencia cultural que
transforma la herencia impuesta en lenguaje
propio. A diferencia del “arte urbano”,
muchas veces vinculado a intervenciones
planeadas y estéticamente codificadas, o
de la “gráfica popular” que es a menudo es
reducida a lo decorativo, lo criollo nombra
un arte hecho desde la necesidad, el ingenio
y la improvisación.</p>

<p>Este fenómeno, más ligado a necesidades
puntuales que a intereses estéticos,
constituye una propuesta conceptual nacida
de la observación directa del paisaje urbano
y sus dinámicas. No se trata solo de una
estética, sino de una forma de habitar el
espacio y narrarse a través de él. Lo criollo
es una práctica visual que emerge de la
escasez y se sostiene en la apropiación
cotidiana de su entorno, donde toma lo que
hay y lo transforma en expresión.</p>

<p>Nutrido por la memoria y lo cotidiano,
el arte criollo convierte lo disonante en
símbolo, y lo descartado en herramienta.
Retazos de madera, latas pintadas, carteles
reutilizados o incluso tipografías hechas
a pulso, sirven para articular un lenguaje
visual potente que se impone en medio
del caos urbano. Su estética, hecha de
brochazos gruesos, anuncios envejecidos y
letras disparejas, no responde al descuido,
sino a una decisión estética y política y son
declaraciones visuales que privilegian el
mensaje sobre la forma, lo funcional sobre
lo decorativo y lo vivido sobre lo pulcro.</p>

<p>Estas construcciones, adheridas a tiendas,
talleres y mercados, conforman una gráfica
donde lo inacabado no es defecto sino parte
esencial del discurso, mientras que, a su vez,
narran y resignifican lo cotidiano, creando
vínculos con quienes las habitan y las leen.</p>

<p>Vivimos rodeados de contrastes. Mientras
una parte de Medellín adopta la estética
pulida de El Poblado, barrios como
Manrique o Aranjuez se convierten en
escenarios donde la gráfica popular, los
murales improvisados y los letreros hechos
a mano resisten la homogeneización
impuesta. En estos espacios, lo espontáneo
desafía lo planificado, incluso sin
proponérselo, dando lugar a un acto de
rebelión que se transforma en símbolo de
una creatividad nacida de la improvisación
y de una apropiación rebelde del espacio
urbano.</p>

<img src="./assets/a2.png" alt="Salidas e intentos con la foto de calle">
      <figcaption>
        Granada, J. (2023, julio). 
        Salidas e intentos con la foto de calle
        [Fotografía]. @veknarg en redes sociales 
      </figcaption>
    </figure>

<p><strong>Imperfectos, pero nuestros</strong></p>

<p>Como sugiere Barnicoat (1995), estudioso
del afiche y el arte urbano moderno,
la evolución del cartel ha llegado a un
punto donde lo funcional y lo estético se
combinan, transformando lo que antes era
solo una herramienta de comunicación en
una forma de arte que conserva la memoria
popular; en Medellín, esta fusión celebra la
imperfección como espacio de resistencia
frente a la uniformidad global.</p>

<p>La ciudad sigue hablando un idioma
propio: desbordante, sincero y lleno de
vida. En cada rincón (desde avisos pintados
a mano en talleres hasta estampitas de
santos pegadas en los buses) palpita una
historia que se resiste a desaparecer sin ser
azarosa y da lugar a productos hechos por
manos expertas que, por ingenio, gusto o
necesidad, crean una estética que renuncia a
la pulcritud para preservar su esencia.</p>

<p>El centro de Medellín condensa esta
energía: los carteles y murales no solo
retratan una ciudad profundamente
popular, sino una que insiste en conservar
su identidad frente al avance de lo
homogéneo y lo globalizado.</p>

<img src="./assets/a3.png" alt="Los pelaos jugando fútbol">
      <figcaption>
        Granada, J. (2023, abril). Los pelaos jugando fútbol y chupando
        el último rato de sol del día [Fotografía]. @veknarg en redes
        sociales 
      </figcaption>
    </figure>

<p>¿Identidades en conflicto o en construcción?
Medellín no es un lienzo impoluto; es
una ciudad rugosa, llena de grietas que
la convierten en poesía visual y gracias a
esta materia viva, reciclada y resignificada,
resiste al brillo superficial del mercado y
la monotonía del diseño global. Todo lo
descartado o improvisado se convierte en
soporte: en herramienta expresiva y en
testimonio de las urgencias de la comunidad
que la reapropia como un grito visual de
un arte testarudo y orgulloso que le planta
cara al olvido y celebra una cultura tan
persistente como creativa.</p>

<p>Este espíritu conecta con el barroco
latinoamericano, que no buscó la perfección
clásica, sino que abrazó el exceso y el
desborde. El arte criollo no le teme al
ruido ni a la contradicción: los convierte
en fuerza expresiva. Superpone materiales,
referencias y sentidos con la energía de lo
popular, lo cotidiano y lo urgente y aunque
esta resistencia no siempre sea consciente,
muchas veces es la necesidad la que moldea
estas estéticas.</p>

<p>La geometría impersonal de los edificios
de Ciudad del Río, las fachadas despejadas
de la Milla de Oro y la uniformidad de
las torres residenciales en El Poblado
contrastan con la riqueza visual que florece
en lo rústico y espontáneo de barrios como
Moravia, Belencito o Santo Domingo, donde
los muros aún cuentan historias hechas a
mano. Este choque entre una Medellín que
crea desde la necesidad y otra que se adapta
a los modelos del mercado internacional es,
precisamente, lo que la hace única.</p>

<p>Nuestra ciudad no es un monolito: es un
collage dinámico, una urbe que vibra en la
tensión entre lo antiguo y lo moderno, entre
lo rústico y lo pulido, entre lo rebelde y lo
disciplinado y no puede reducirse a una
estética ni a una narrativa única porque
se fragmenta, se superpone y se reinventa
constantemente.</p>

<Aunque estas expresiones visuales, como
tantas otras, estén destinadas a desaparecer,
también nos invitan a detenernos y
preguntarnos por qué Medellín debe
entenderse como un proceso vivo: una
ciudad que se narra en sus muros y se
improvisa en cada gesto cotidiano; no es
solo un lugar, sino un acto continuo de
creación.</p>

<Valorar lo propio, incluso en su
imperfección, es reconocer que la belleza
también habita en lo que se hace con lo que
hay y el arte criollo no replica lo global: lo
desarma, lo rehace desde el barrio, lo vuelve
híbrido, íntimo y combativo y luego lo
expone.</p>

<p>Resistir no es negarse al cambio, sino
dialogar con él desde la raíz, asegurando que
lo propio no se pierda en la transformación.
El arte criollo en Medellín no pide permiso:
se impone desde lo urgente, lo disonante y
lo imperfecto. Y es ahí, en esa grieta entre
la necesidad y la imaginación, donde se
teje una estética de la resistencia, que nos
recuerda que lo popular no solo sobrevive:
también inventa, transforma y deja huella
en la piel de una ciudad que incluso en sus
fracturas, se reconoce viva.</p>

<p>Apostar por su potencia es afirmar que lo
marginal no es un error del sistema, sino
una fuente genuina de belleza, memoria y
posibilidad.</p>

<p><strong>Bibliografía</strong></p>

<p>Barnicoat, J. (1995). Los carteles, su historia y su lenguaje. Editorial Gustavo Cili S.A.</p>

<p>Kiss, Teresa (24 de octubre de 2024). Globalización cultural. Enciclopedia Concepto. de
https://concepto.de/globalizacion-cultural/.</p>

<p>Nardonze, M. (2010). ¿Qué es el arte comunitario? Definiciones de la literatura
especializada iberoamericana y local. VI Jornadas de Sociología de la UNLP, La Plata,
Argentina. Memoria Académica. http://www.memoria.fahce.unlp.edu.ar/trab_eventos/
ev.5728/ev.5728.pdf</p>

<p>Peña, I. F., & Peña, I. F. (2012). Aproximación Teórica a la identidad cultural. Ciencias
Holguín, 18(4), 1-13. https://www.redalyc.org/pdf/1815/181524363004.pdf</p>`
},

  "Cezanne": {
    title: "De Cézanne y sus dudas: una fascinación llevada hasta el “suicidio creativo”",
    text: `<p><strong>Mariana Arbeláez-Cataño</strong></p>
    
    <p><strong>Resumen</strong></p>

    <p>La fascinación de Paul Cézanne (1839-1906)
por capturar la verdad de la naturaleza a
través de su pincel traza un camino entre
la genialidad y la duda, un recorrido que lo
llevó a un “suicidio creativo” caracterizado
por la insatisfacción y el cuestionamiento
constantes. Al intentar expresar la esencia
de los objetos desde una percepción
intuitiva y sin recurrir a convenciones,
Cézanne dio forma a una estética única
y revolucionaria, desafiando las normas
pictóricas de su tiempo. Inspirado en el
personaje Frenhofer de Balzac, Cézanne
vivió nublado por la angustia de buscar una
representación pura y no poder alcanzarla,
una lucha que Merleau-Ponty interpretó
como un acto fenomenológico de conexión
con la realidad. De este modo, la obra
de Cézanne encarna la paradoja entre la
creación y la autocrítica, reflejando una
relación inquebrantable entre arte y filosofía
que aún hoy influye en la comprensión de la
percepción artística.</p>

<p><strong>Palabras clave:</strong> Cézanne, fenomenología,
suicidio creativo, percepción, Merleau-
Ponty.</p>

<p><strong>Abstract</strong></p>

<p>Paul Cézanne’s (1839-1906) fascination
with capturing the truth of nature with
his brush traced a path between genius
and doubt, a journey that led him to a
“creative suicide” characterised by constant
dissatisfaction and questioning. Seeking
to express the essence of objects through
intuitive perception and without recourse
to convention, Cézanne developed a unique
and revolutionary aesthetic that challenged
the pictorial norms of his time. Inspired
by Balzac’s character Frenhofer, Cézanne
lived with the anguish of seeking pure
representation and not being able to achieve
it, a struggle that Merleau-Ponty interpreted
as a phenomenological act of connection
with reality. In this sense, Cézanne’s
work embodies the paradox between
creation and self-criticism, reflecting an
inextricable relationship between art and
philosophy that continues to influence our
understanding of artistic perception.</p>

<p><strong>Keywords:</strong> Cézanne, phenomenology,
creative suicide, perception, Merleau-Ponty.</p>

<p><em>Esto es lo que Bernard llama el
suicidio de Cézanne: tiene por objeto
la realidad y rechaza los medios de
alcanzarla
(Merleau-Ponty, 1997, p. 248).</em></p>

<p><em>Ya no está entre nosotros y nos
deja una obra que, para él, no
representaba todo su pensamiento
y que para otros está inconclusa.
(…) Pero ¿cuántos somos? ¿Cuántos
hemos decidido estudiar su obra
y ver otras cosas que no sean las
anomalías? (Bernard, 2012, p. 20).</em></p>

<p>Para la historia del arte, “Paul Cézanne”
(figura 1) es un nombre que resuena al
hablar de pintura moderna. De hecho, en
palabras de Lawrence (2014), él es el único
personaje verdaderamente importante
de la época (Richardson & Ades, 1970).
Desde Francia, sus creaciones sentaron
las bases de la revolución artística que
distinguió al siglo XIX del XX, y que le
otorgó un nuevo enfoque al arte y, más
ampliamente, al pensamiento moderno.
Cézanne, desde luego, no sólo pintaba, sino
que problematizaba la percepción misma
desde una dimensión filosófica, y es eso lo
que pretendo defender en estas reflexiones.
Lo anterior se basa en el hecho de que, si
hubo una característica sobresaliente en
Cézanne, esta fue, sin duda, el carácter
a la vez obsesivo y revolucionario,
entremezclado con la timidez, la soledad
y la convencionalidad enajenada de la que
hablan quienes le conocieron (Lawrence,
2014).</p>

<img src="./assets/b1.png" alt="Cézanne, Paul ">
      <figcaption>
        Figura 1. Cézanne, Paul (1875). Autorretrato con sombrero
        arrugado. Óleo sobre lienzo
      </figcaption>
    </figure>

<p>La obsesión revolucionaria de Cézanne fue
el querer representarlo todo con su pincel,
pues pretendía capturar la esencia de lo
representado. Bien supo reconocer Merleau-
Ponty (1977) que el camino que trazó en
sus lienzos demarcaba un paisaje repleto
de dudas que reflejaban una existencia a
la vez utópica y paradójica. Cézanne quiso
alcanzar la realidad —o, la réalisation, en los
términos de Rilke (1986)—, pero huyendo
de lo que lo llevaba hasta ella (Merleau-
Ponty, 1977). En consecuencia, vivió en
eterno desacuerdo con cada una de sus
obras, y no es extraño que haya sido esto lo
que lo transportara a un mundo en el que él
mismo declaraba ser el Frenhofer del relato
de Balzac (2000).</p>

<p>Desde el postimpresionismo francés de
Cézanne, el también pintor Émile Bernard
—quien fue su discípulo y le admiró a pesar
de sus obstinaciones— escribió en varias
ocasiones sobre él. De hecho, el vínculo
entre Bernard y Cézanne quedó eternizado
en el libro “Una conversación con Cézanne”,
y fue a esta fuente a la cual acudió el
propio Merleau-Ponty (1977) para pensar
en la rehabilitación del mundo percibido
que encarnó Cézanne en la pintura. Para
Bernard (2012), la vida de Cézanne fue más
trágica que alegre; el éxito le llegó quizás
demasiado tarde y su consagración al arte,
la naturaleza y el color lo hicieron un ser
humano con un profundo desprecio ante
los otros e insatisfecho con su producción
artística.</p>

<p>Como Merleau-Ponty (1977) lo señaló al
recordar el papel de Bernard en su vida —
aun cuando Cézanne lo rechazaba incluso
a él (Rutherglen, 2004)—, su “suicidio
creativo” radicó, precisamente, en la
paradoja en la que estuvo envuelto: “buscar
la realidad sin abandonar la sensación
…; tiene por objeto la realidad y rechaza
los medios de alcanzarla” (Merleau-
Ponty, 1977, p. 248). Así las cosas, las
conversaciones entre Bernard y Cézanne
revelan que esa fascinación llevada hasta
el “suicidio creativo” tuvo mucho que ver
con la imposibilidad de expresar la verdad
de la naturaleza, puesto que el interés
por representar la totalidad implicaba
reconocerse incapaz de rescatar al objeto en
su materialidad. A esto se refiere también el
hecho apuntado por Merleau-Ponty (1977)
de que Cézanne vio todas sus pinturas como
simples ensayos o tanteos —y no como
“obras de arte”.</p>

<p>En este punto vale la pena aclarar que
Cézanne le es útil a la filosofía merleau-pontiana
en tanto representa a la perfección
una conexión entre la percepción y la
naturaleza, lo cual le permite al filósofo
soportar sus reflexiones fenomenológicas
en la materialidad pictórica que tanto le
fascinó (Fagioli, 2025). Al pintar, Cézanne
trasladaba vivencias sensoriales más que
copias fieles del mundo, y cada pincelada
respondía a este principio: las superficies
quebradas de sus bodegones, los contornos
vibrantes de sus paisajes, los volúmenes
inestables de sus retratos son ejemplos
concretos de cómo la sensación —más que
la forma cerrada y terminada— organiza
el cuadro. No se trata de reproducir la
naturaleza, sino de meditar en torno a ella,
haciendo visible el movimiento interno de la
percepción en su experiencia más basta.</p>

<p>Esta aproximación pictórica, casi ingenua
y que rompe con las convenciones del
acabado académico y de la perspectiva
tradicional, fue leída por Merleau-Ponty
(1977) como un acontecimiento filosófico
en sí mismo. La pintura de Cézanne,
más que ilustrar un concepto, encarna
la experiencia originaria del mundo
sensible, sirviendo de modelo para los
desarrollos fenomenológicos tardíos sobre
la experiencia sensorial (Fagioli, 2025). Es
esto lo que le llama la atención a Merleau-
Ponty, la manera en la que Cézanne
interpela la naturaleza de los objetos sin
acentuar los detalles, ni trazar un dibujo
previo, ni ocultar la materialidad de la
pintura. En síntesis, Merleau-Ponty quiso
rehabilitar el mundo de la percepción —o
“dar forma a una rehabilitación ontológica
de lo sensible” (Fagioli, 2025, p. 108)— y fue
justamente esto lo que lo acercó a Cézanne,
el pintor de las sensaciones percibidas.</p>

<p><strong>De la fascinación como trabajo
fenomenológico</strong></p>

<p><i>Esta fue la revolución que
comenzó Cézanne pero que nadie,
aparentemente, ha sido capaz de
continuar.</i></p>

<p><i>Cézanne quería tocar nuevamente el
mundo de la sustancia con la mano de
la intuición, ser consciente de él con
la conciencia intuitiva y expresarlo en
términos intuitivos
(Lawrence, 2014, p. 217).</i></p>

<p>Bien se sabe que a Merleau-Ponty lo
movilizó la fenomenología, una corriente
que interpeló muchas convencionalidades
de su época. Desde la revisión de diversos
conceptos clásicos y la desestimación
de la objetividad de la ciencia hasta sus
recusaciones a la operacionalización
del lenguaje, lo que le inquietó
permanentemente fue la percepción.
Por su parte, Cézanne le demostró la
importancia de dicha percepción en la
experiencia estética y la expresión artística.
Merleau-Ponty, de cierto modo, halló en
Cézanne un fondo de naturaleza inhumana
bastante elocuente —aunque siniestro.
El problema central del pintor radicó en
que, aunque tocó la manzaneidad, nunca
alcanzó siquiera a rozar nada más que esta
(Lawrence, 2014).</p>

<p>Lo fenomenológico no constituye una
doctrina, sino un movimiento en busca de
lo esencial. En este dinamismo, Cézanne se
fundió con los objetos a medida que exploró
sus contornos y volúmenes, estableciendo
con ellos una relación íntima y viva. Se
hizo uno con la manzana en su tentativa
de captar su manzaneidad (figura 2), pero
también se hizo uno con la montaña Sainte-
Victoire, a la que representó en más de
medio centenar de ocasiones (figura 3).
Puede decirse, entonces, que Cézanne no
pintaba objetos, sino la sensación misma
—la de la manzana, la de la montaña, e
incluso la de su esposa—, asumiendo todas
las consecuencias que ello implicaba para él,
hasta el punto de que esto se le convirtió en
una experiencia verdaderamente infernal.</p>

<img src="./assets/b2.png" alt="Manzanas">
      <figcaption>
        Figura 2. Cézanne, Paul (1878-79). Manzanas. Óleo
        sobre lienzo
      </figcaption>
    </figure>

<img src="./assets/b3.png" alt="Montaña">
      <figcaption>
        Figura 3. Cézanne, Paul (1904) Montaña Sainte-
        Victoire. Museo de Arte de Filadelfia, Pensilvania
      </figcaption>
    </figure>

<p>Puesto en una mirada muy general, la teoría
de Merleau-Ponty (2003) alude a que todo
está intrínsecamente ligado a la percepción.
En consecuencia, el fenomenólogo se
basa en la experiencia tangible del cuerpo
humano y su conexión con ese mundo
circundante en el cual los hechos cobran
sentido (Foschi, 2013). Por eso Cézanne es
un auténtico fenomenólogo para Merleau-
Ponty. Además, en tanto esta labor se
entiende como una tarea infinita, propone
tanto expresar lo existente como hacer del
cuerpo la encarnación de una conciencia
perceptual —e intuitiva. De cierta manera,
se establece así un lazo de familiaridad
entre el individuo y su entorno, abarcando
el aspecto físico y, a su vez, aquello que le
atañe a la naturaleza de la existencia.</p>

<p>Actualizando estas cuestiones que le atañen,
también, a la fenomenología en su sentido
clásico, la fascinación de Cézanne puede
ser claramente concebida como un trabajo
fenomenológico justo porque entre la
locura de su genialidad —o, si se quiere, la
genialidad de su locura— el pintor queda
absorto entre el motivo y el lienzo. Esta
especie de delirio asociado a las largas
meditaciones que precedían sus pinceladas
es la muestra más clara del sufrimiento
que le causan sus dudas. Sin embargo, es
igualmente la evidencia de una laboriosa
voluntad por captar el sentido del mundo
en su fase primigenia. Por eso, vale la
pena recordar que lo que importa es la
experiencia directa y fenoménica.</p>

<p>Debido a que la realidad de la percepción es
la base de la fenomenología, la experiencia a
la que remite no puede ser otra que esa en la
cual se entrecruza lo subjetivo y lo objetivo,
lo pasado y lo presente. La perspectiva
fenomenológica, que se distingue de los
juegos de perspectiva clásicos, puramente
geométricos o fotográficos, es estrictamente
sensible (Merleau-Ponty, 2003). Por este
motivo, la noción de conciencia intuitiva
que Lawrence (2014) alude al escribir
sobre Cézanne, tiene sentido al reflexionar
sobre la fascinación como un trabajo
fenomenológico. Así, pues, puede llegar a
entenderse por qué Merleau-Ponty (1977;
2003) vincula la fenomenología con el arte
—en especial, con la pintura, al utilizar a
Cézanne de referencia (Foschi, 2013).</p>

<p>De acuerdo con lo que se sabe de la
apreciación de Cézanne sobre sus propias
pinturas, estas no fueron para él sino
meros acercamientos a la sustancia de las
formas de la naturaleza. En este contexto, la
imperiosa necesidad del pintor por capturar
la esencia del mundo en su estado original
o naciente es lo que permite ponerlo entre
la genialidad y la locura, pero también es lo
que exige hablar de su obra en los términos
de una rehabilitación del mundo percibido,
es decir, a la manera fenomenológica. Si
Merleau-Ponty concibe la fenomenología
en tanto ensayos por comprender el mundo
natural, Cézanne apunta en esta misma
dirección al ver en sus obras un producto
eternamente inacabado, una serie de
tanteos.</p>

<p>La fenomenología, por su parte, luchó por
darle un estatuto filosófico al mundo ya
creado, de modo que la idea de concebir el
trabajo de Cézanne como fenomenológico
yace en el hecho de que la percepción y
la experiencia sensorial caracterizaron
su creación artística, destacándola por
encima de cualquier otra (Lawrence, 2014).
Merleau-Ponty (1977; 2003), además,
fue explícito en mostrar por qué la obra
de Cézanne se presentó ante él como un
reflejo de su pensamiento filosófico, pues
atendía a la percepción y los sentidos
desde un compromiso activo y encarnado.
Siguiendo sus interpretaciones, los cuadros
de Cézanne podrían tomarse en tanto
expresiones puras de una percepción
corporal, ya que no sólo captaron la
apariencia externa de los objetos, sino
también su experiencia subjetiva y la
impresión directa.</p>

<p>Entonces, si bajo estas consideraciones el
arte resulta ser un camino para acceder a la
existencia y sus misterios jamás revelados,
Cézanne no pudo haber fallado con sus
dudas. Según la visión merleau-pontiana,
fue este pintor quien logró que el paisaje
del lienzo se hiciera visible a través de su
propio cuerpo, sincronizando así estos dos
aspectos mediante la interacción entre
la observación meditativa y la acción del
pintar (Foschi, 2013). Asimismo, es posible
afirmar que Cézanne llevó a cabo un trabajo
fenomenológico que le hizo enloquecer
justo mientras descubría cómo describir
la perspectiva vivida con pinceladas. Por
eso la obra de Cézanne refleja la continua
transición entre la percepción primordial
de la esencia naturalmente inhumana
del artista, y la percepción del mundo
reinterpretada al meditar sobre ella.</p>

<p>Entre sus argumentos, Merleau-Ponty
(1977) resolvió decir que Cézanne,
ensayando e intentando, puso a prueba su
ingenuidad sin siquiera saberlo. Lo que
para el mundo contemporáneo son obras
de arte, para él fueron meros resultados de
sus tentativas (Merleau-Ponty, 1977). Allí
se hizo manifiesta su experiencia directa,
y con ello logró reconfigurar los modos de
relacionarse con los objetos, las formas, el
espacio y el tiempo. Aparte de las historias
que circulan sobre su vida, eso es todo lo
que nos queda en el presente: sus pinturas,
la noción de lo inconcluso (Rutherglen,
2004). Cézanne tiene un estilo que no es
el de Bernard ni el de nadie más que se le
hubiese aproximado, y por eso es por lo que
da insumos para reflexionar sobre la esencia
de la existencia.</p>

<p><strong>Del “suicidio creativo”</strong></p>

<p><i>Su naturaleza era más libre que su
pensamiento y las investigaciones le
controlaban poderosamente. No tenía
idea de la belleza, solo de la verdad.
(…) Poseía una voluntad mental
muy extrema que fue dominando
gradualmente su espontaneidad,
hasta el punto de que pensaba que
era incapaz de crear. Pero eso no era
cierto (Bernard, 2012, p. 7).</i></p>

<p>Cézanne murió a los 67 años, en Francia,
el 22 de octubre de 1906. Sin embargo, la
causa no fue suicidio. En realidad, fue una
neumonía lo que acabó con su vida, y esta
mirada hacia sus dudas como un “suicidio
creativo”, es meramente una figura retórica
que carga con profundos significados. De
todos modos, pareciese ser que Cézanne
se había convertido en todo un huraño
desde mucho tiempo antes de morir. Según
Miranda (2008), la completa enajenación
en la cual eligió vivir lo llevó a un punto
en donde la única relación que sostuvo
—aunque mala— fue con sus pinturas. Se
dice incluso que entregó la vida por sus
obras/ensayos, pues la enfermedad que
agotó sus últimos alientos la contrajo tras
una tormenta que le sorprendió mientras
pintaba en campo abierto (Miranda, 2008).</p>

<p>La tarea imposible de Cézanne y su “suicidio
creativo” al pretender lo primordial, no
puede sino conllevar a pensar nuevamente
en el viejo Frenhofer de Balzac (2000).</p>

<p>La obra maestra desconocida, publicada
originalmente en 1831, personifica en una
imagen ficticia este mismo “suicido creativo”
de Cézanne. No es por azar que Merleau-
Ponty (1977) considerara relevante decir
que a Cézanne lo acechó Frenhofer desde
el primer momento en que se cruzó con
este libro y, desde entonces, afirmó que era
él mismo la inspiración para su escritura.
El esfuerzo de Balzac y de Cézanne son
uno, porque el trabajo del primero permite
comprender el del otro (Merleau-Ponty,
1977). No obstante, es probable que esto se
deba a que Cézanne se construyó a sí mismo
como el reflejo fantasmagórico de este genio
que fue Frenhofer en la primera parte de
su historia, y no al revés, como Cézanne lo
habría creído en algún momento.</p>

<p>Ciertamente, el mito de Cézanne incluye
a su vez su autoidentificación como
personalidad mítica (Rutherglen, 2004),
y los modos de hacer sobre los cuales
hablaron Merleau-Ponty (1977; 2003),
Bernard (2012), Lawrence (2014), Rilke
(1986) y Wenders (2016), lo muestran tan
esclavo de sí mismo y de su arte como se
le ve al Frenhofer de Balzac (2000). De
cualquier modo, no hay Cézanne sin Balzac
porque sus dudas comunican con las de
Frenhofer. Así que, si el de Balzac (2000)
resulta ser un paradigma del arte moderno
en sí mismo, la meditación a la cual conlleva
su obra se relaciona, a su vez, con las largas
meditaciones sin las cuales Cézanne no daba
pincelada alguna (Merleau-Ponty, 1977).</p>

<p>Es un hecho que, en estos casos, la
genialidad y la locura se diluyen entre sí,
pues en eso coinciden tanto el personaje
ficticio de Frenhofer como el aislado pero
real Cézanne. Hay un peligro inminente de
fascinarse hasta la duda, y tanto Frenhofer
como Cézanne son víctimas de ello. Dudan
de sus posibilidades y dudan de la obra que
pintan, por lo que son una encarnación
paradójica desde donde sea que se les
mire. Gracias a Balzac, Cézanne abraza con
fervor la noción de que la contemplación
debe ser llevada a cabo con el pincel en la
mano y, de esta manera, se ve seducido
de forma singular por la habilidad de
aquel escritor que plasmaba con palabras
la esencia de la pintura. Al respecto, fue
Bernard (2012) quien recordó la severidad
con la cual Cézanne se juzgaba a sí mismo,
condenándose por no alcanzar la perfección
deseada.</p>

<p>Las pinturas de Cézanne se erigen hoy
como manifestaciones de un modo especial
de aprehender una realidad enajenada,
aunque en su momento fueron objeto de
un sinnúmero de críticas que rechazaban
su revolución estética. Adicional a esto,
Cézanne denunciaba que la sociedad
artística de su época había perdido la
conexión sensorial con la naturaleza; asunto
que, en su opinión, el clasicismo sí había
sabido preservar. Por ello, sus pinturas
encarnaban interpretaciones subjetivas
de la realidad, invitando a reflexionar
sobre la naturaleza misma de la existencia
(Bernard, 2012). Sin embargo, las dudas
que lo asediaban no estaban reducidas a una
inquietud intelectual: ellas expresaban un
síntoma corporal más profundo. Abordar en
detalle esta dimensión corporal implicaría
adentrarse en otros desarrollos de la
fenomenología de Merleau-Ponty, y esta es
una cuestión que excede los alcances de este
ensayo.</p>

<p>Siguiendo las reflexiones merleau-
pontianas, los trazos, la luz, los colores y el
empeño de Cézanne por ser fiel a la realidad
revelaron ese mundo de la percepción
oculto tras las capas del conocimiento y las
convenciones sociales. En esta búsqueda,
el color de los objetos que pintaba parecía
desbordarse de los contornos mismos que
lo delimitaban, quebrantaba la estructura
tradicional de la perspectiva y hacía visible
una experiencia primigenia del mundo
(Fagioli, 2025). Contemplar una obra de
Cézanne es sentirse invitado a reaprender
cómo ver el mundo y es por ello por lo que
afirmó que encarna la rehabilitación del
mundo percibido (Merleau-Ponty, 2003).
Igualmente, estos procesos son un asunto de
“filosofía de la percepción” que proporciona
lecciones para mirar con agudeza la realidad
(Merleau-Ponty, 2003).</p>

<p>El “suicidio creativo” de Cézanne implicó
que el pintor se consumiera en sus
propias dudas, aun cuando seguía vivo
biológicamente hablando (Bernard,
2012). Su inteligencia era evidente en la
lentitud con la que trabajaba, pero además
su ingenuidad y su apatía le daban otra
dimensión de naturaleza inhumana.
Es probable que Cézanne meditara y se
preguntara constantemente cómo pintar
lo que sentía, pero dado que no hablaba
con nadie, todo lo que se ha dicho de él y
que he sintetizado aquí parecen ser meras
suposiciones. De acuerdo con Rilke (1986),
los últimos treinta años que vivió Cézanne
fueron los de la ansiedad, la timidez, la
desconfianza y el desacuerdo con sus
pinturas. Cézanne captó la esencia intuitiva
en sus naturalezas muertas, pero frente al
paisaje y la figura humana, el cliché terminó
por imponerse, llevándolo a un arte cada
vez más abstracto (Lawrence, 2014). En sus
últimas acuarelas de la montaña Sainte-
Victoire, por ejemplo, los espacios en
blanco y los bordes difusos terminaron por
expresar un vacío constitutivo (figura 4).</p>

<img src="./assets/b4.png" alt="Montaña Sainte">
      <figcaption>
        Figura 4. Cézanne, Paul (1901-1906) Montaña Sainte-Victoire.
        Luc Chessex
      </figcaption>
    </figure>

<p>Como su respuesta final ante la
imposibilidad de vencer al cliché —un
aspecto que conviene analizar con ejemplos
visuales concretos como el de la figura
anterior—, Cézanne se encontró a sí mismo
frente a la imposibilidad de alcanzar la
réalisation. Esto, finalmente, engloba los
reclamos de Bernard, quien, en los últimos
años de vida del pintor, descubrió a un
maestro que estaba condenado, sin remedio,
al “suicidio creativo”.</p>

<p><strong>Consideraciones finales</strong></p>

<p>Tal como lo cuentan numerosas historias,
la presión que Cézanne ponía sobre sí en
su intento por alcanzar la perfección lo
habría conducido a pasar largos periodos
sin pintar o a destruir obras con las que
estaba insatisfecho —llevando a la realidad
la ficcionalidad del relato de Balzac. Este
autoexamen constante y autocrítico a
menudo le hacía imposible crear. Es esto
lo que Bernard luego denominaría su
“suicidio” y que, a su vez, fue el elemento
central para empezar a escribir este
ensayo. No obstante, la disminución de
la producción artística de Cézanne puede
considerarse también desde otro punto de
vista. La intensa búsqueda por la réalisation
fue, en sí misma, un propósito filosófico
que acometió con éxito. Entre otras cosas,
su obsesión por la montaña Sainte-Victoire
de Aix-en-Provence es el ejemplo más claro
de que Cézanne era un investigador de la
mirada, tan emocional y analítico como lo
nombró Wenders (2016).</p>

<p>El hecho de fascinarse hasta las dudas,
de cuestionar cada trazo y meditar
cuidadosa y extensamente sobre cada
obra antes de llevarla a la conclusión, es
propia de un genio al borde de la locura.
No es descabellado proponer que, en sus
entrecruzamientos extraños, tanto su
obra como su vida estuvieron marcadas
por una constante lucha entre la duda y
la fascinación, y eso es precisamente lo
que cautivó a Rilke (1986), quien además
dijo haber interpretado la vida del autor,
sencillamente, a partir de una exposición en
el Salón d’Automne. Sin embargo, fueron
justamente estos conflictos y la paradoja
esencial que le definió las que demarcaron
su carrera artística.</p>

<p>En sus cartas sobre Cézanne, Rilke (1986)
narró que el pintor no creía en nada
más que su propio trabajo y por eso se
fundía entre sus pinturas y los objetos
representados, llegando con ellos a
dimensiones insospechadas, casi delirantes.
Siendo tan huraño y enfermo, hizo esto
hasta que “como en un viejo grabado de
la danza de la muerte, así desde atrás la
muerte le agarró la mano y trazó ella la
última pincelada temblando de alegría”
(Rilke, 1986, p. 57). Siendo un artista en
todo el sentido de la palabra, Cézanne
no pretendió pintar de forma simple o
poco refinada, pero tampoco apegarse
al academicismo de aquel momento
(Lawrence, 2014; Merleau-Ponty, 2003).
Su objetivo era crear un vínculo entre
la inteligencia humana, las ideas, el
conocimiento científico y la percepción del
mundo natural, unificando así los principios
de la ciencia y la razón con los aspectos
reales y observables de la naturaleza como
tal (Merleau-Ponty, 1977).</p>

<p>Cézanne creía que estas herramientas
intelectuales debían ayudarle a comprender
las complejidades de la naturaleza y, en
este sentido, su existencia no dejó de
ser paradójica en ningún momento. En
palabras de Lawrence (2014), su capacidad
de pintar de manera intuitiva se vio
constantemente limitada por sus conceptos
mentales, porque a pesar de rehuirlo
todo, reafirmaba que las investigaciones
de la pintura moderna coincidían con las
pesquisas de la ciencia. Cézanne se negaba
a tantas cosas, pero también creía que el
conocimiento científico estaba arraigado en
las cualidades inherentes de la naturaleza y,
al mismo tiempo, se oponía al abandono de
su imaginación vital (Lawrence, 2014). En
resumen, pretendía entremezclar lo artístico
con la comprensión científica.</p>

<p>En su aparente admiración hacia
Cézanne y la manzaneidad, Lawrence
(2014) también intuyó de cierto modo
el “suicidio creativo” del pintor, aunque
lo expresó de una manera distinta. Para
Lawrence (2014), fueron quizás las
reflexiones sobre el espacio en blanco las
que demostraron las consecuencias de un
posible “suicidio creativo”, es decir, aquello
de donde surgieron las últimas acuarelas
de la montaña que le fascinó. Ante la
imposibilidad de expresar la sensación
percibida, Cézanne decidió dejar que la
imaginación protagonizara buena parte
de su obra final. Las pinceladas reducidas
y abstractas sobre un papel en blanco, si
bien esbozan la montaña, evidencian su
agotamiento. Sin embargo, estos paisajes
tan diferentes a los que caracterizaron el
resto de su obra pudieron haber sido lo
más cercano a la perfección. Entonces, ese
“suicidio creativo” que Lawrence (2014)
interpretó como el vacío del espacio en
blanco, reconoció la exploración última de
su revolución, pero al mismo tiempo mostró
su condena eterna. Dejar que el blanco se
apropiara de buena parte del paisaje quizás
pueda verse como una nueva observación
del mundo y un reconocimiento de que el
espacio lleno tampoco implicaba alcanzar la
esencia misma de los objetos.</p>

<p>Por su parte, Bernard fue, tal vez, uno de
los primeros en reconocer y apreciar la
singularidad de esta visión de Cézanne
—aún en una época donde el pintor era
fuertemente despreciado. Aunque con
términos menos filosóficos y más cercanos
al afecto, es posible afirmar que Bernard, al
igual que Merleau-Ponty (1977; 2003), vio
en las pinturas de Cézanne la muestra fiel
de una exploración sensata de la experiencia
fenoménica del mundo. En todo caso, las
reflexiones de Merleau-Ponty al respecto
han hecho que el universo del arte mire
de nuevo a Cézanne —y que lo mire con
otros ojos—, por lo que sus proposiciones
cumplieron bastante bien con su cometido
(Rutherglen, 2004).</p>

<p>En última instancia, los temas y episodios
de la biografía de Cézanne se inscriben
dentro del patrón clásico del mito del artista
moderno torturado (Rutherglen, 2014). En
esencia, este mito —encarnado en la figura
de Frenhofer de Balzac— ha cimentado la
imagen del artista como un genio excéntrico
e incomprendido, célebre en todo el mundo.
Se trata del retrato del creador solitario,
angustiado y en permanente conflicto
tanto consigo mismo como con la sociedad,
inmerso en un “suicidio creativo” que,
paradójicamente, alimenta su inquietante
producción artística. Es importante destacar
que Cézanne investigaba incansablemente
en busca de representar el mundo tal como
lo veía y sentía, aun a costa de apartarse de
las perspectivas, proporciones y técnicas
convencionales; precisamente esta ruptura
fue la que lo convirtió en una figura tan
fascinante.</p>

<p>Merleau-Ponty vio ante sí un mundo que se
le mostraba en tanto fenómeno, y el arte de
Cézanne fue también una acumulación de
ensayos para retratar este modo de observar
y pensar en función de lo fenoménico. Así,
la fenomenología de Merleau-Ponty les abre
las puertas a las pinturas de Cézanne a la
par que proporciona un marco filosófico
para entender lo encarnado de la percepción
y la experiencia vivida. La desazón de
ambos por la sociedad coincidía —aunque
de modos para nada equivalentes—en que
la esfera fenoménica estaba fuertemente
descuidada. Debido a la inclinación
natural de la percepción a relegarse en
favor de lo que se percibe y se manifiesta,
la fenomenología no fue más que una
respuesta a la urgencia con la cual cargaba
el mundo desde épocas previas.</p>

<p>Finalmente, baste agregar que, si la
fenomenología supone una puesta a
prueba del sujeto, Cézanne se puso a sí
mismo en cuestión y, al creerse fracasado
en la tarea de la descripción directa de
la experiencia mediante pinceladas, se
sentenció a su propia muerte creadora.
La cuestión de comprender sus pinturas
como un trabajo fenomenológico en acto
indica perfectamente cuál fue su modo de
situarse en el mundo, pues vivió como un
delirante investigador, pero en su particular
manera de fascinarse hasta el “suicidio”
y cohibir la expresividad. Ahora bien,
la incoherencia de sus representaciones
en cuanto a la perspectiva, la forma y el
color, indican que efectivamente reveló el
trasfondo de la percepción. Por ende, fue
así como descubrió su perspectiva vivida
con los sentidos deformando toda tradición
pictórica instaurada.</p>

<p><strong>Bibliografía:</strong></p>

<p>Balzac, H. (2000). La obra maestra desconocida. Galaxia Gutenberg.</p>
<p>Bernard, É. (2012). Recuerdos de Cézanne y cartas inéditas. (A. Lastra & R. Miranda,
Trad.). La torre del Virrey, 11(1), 3-21.</p>
<p>Fagioli, N. (2025). La vía de la sensación. Anotaciones sobre la estética de la pintura de
Merleau-Ponty. Revista de Filosofía de la Universidad de Costa Rica, 64(168), 107-118.</p>
<p>Foschi, M. L. (2013). Merleau-Ponty: El cuerpo como apertura al mundo teatral.
Cuadernos de la Facultad de Humanidades y Ciencias Sociales, (43), 11-18.</p>
<p>Lawrence, D. H. (2014). Cézanne. (A. Pertuz, Trad.). Revista Colombiana de Pensamiento
Estético e Historia del Arte, (2), 212-221.</p>
<p>Merleau-Ponty, M. (1977). La duda de Cézanne. En Sentido y sinsentido (pp. 245-254).
Península.</p>
<p>Merleau-Ponty, M. (2003). El mundo de la percepción. Fondo de Cultura Económica.</p>
<p>Miranda, M. (2008). El solitario y huraño padre de la pintura moderna. En Creatividad,
Arte y Medicina: el impacto de la enfermedad en la creatividad de figuras históricas (pp.
21-28). Sánchez y Barceló. https://www.researchgate.net/publication/288493833_
Creatividad_Arte_y_Medicina_el_impacto_de_la_enfermedad_en_la_creatividad_de_
figuras_historicas</p>
<p>Richardson, J. A., & Ades, J. I. (1970). DH Lawrence on Cezanne: a study in the
Psychology of Critical Intuition. Journal of Aesthetics and Art Criticism, 28(4), 441-453.
https://doi.org/10.2307/428484</p>
<p>Rilke, R.M. (1986). Cartas sobre Cézanne. Paidós.</p>
<p>Rutherglen, S. (2004). Merleau-Ponty’s doubt: Cézanne and the problem of artistic
biography. Word & Image, 20(3), 219-227. https://doi.org/10.1080/02666286.2004.1044
4018</p>
<p>Wenders, W. (2016). Los píxels de Cézanne. Caja Negra Editora.</p>`,
  },

  "Morfeo": {
    title: "El espejo de Morfeo: arte, formación y expansión didáctica",
    text: `<p><strong>Pedro Agudelo Rendón</strong></p>
    
    <p><i>Graduado Fundación Universitaria Bellas Artes</i></p>

    <p><strong>Resumen</strong></p>

    <p>Este texto plantea una visión de la
educación artística a partir de la
perspectiva “educación a través de las
artes”. La pregunta es ¿cómo llevar a cabo
procesos formativos y metodológicos que
posibiliten espacios de sensibilización y
vinculación con otros campos del saber
en la formación integral de estudiantes
de áreas de conocimiento distintas a
las artísticas? Este interrogante abre
posibilidades de comprensión no solo
de aspectos de la pedagogía del arte sino
también de los medios y materialidades
contemporáneas para abordar reflexiones
desde el arte. Se presentan, finalmente,
algunos productos artísticos desarrollados
en contextos curriculares diferentes a los
que tradicionalmente se le han asignado a la
educación artística.</p>

<p><strong>Palabras claves:</strong> arte contemporáneo,
educación artística, educación a través de
las artes, expresión artística, fotografía
instalada</p>

<p><strong>Abstract</strong></p>

<p>This text proposes a vision of arts education
from the perspective of “education through
the arts”. The question is how to implement
training and methodological processes
that enable spaces for awareness and
connections with other fields of knowledge
in the comprehensive education of students
from areas of knowledge other than the
arts? This question opens up possibilities
for understanding not only aspects of art
pedagogy but also contemporary media and
materials for addressing reflections from
the arts. Finally, some artistic products
developed in curricular contexts other
than those traditionally assigned to arts
education are presented.</p>

<p><strong>Key words:</strong> contemporary art, art
education, education through the arts,
artistic expression, installation photography</p>

<p><strong>Arte y educación artística</strong></p>

<p>“No existe, realmente, el arte, tan solo hay
artistas”, dice Gombrich (2007, p. 15).
Este aserto de uno de los historiadores
más importantes del siglo XX implica
que la historia del arte no opera sobre la
abstracción que a veces parece insinuar el
concepto mismo de arte, sino que se trata
del resultado de la actividad humana. Pero
la visión del pensador inglés estaba alejada,
en buena medida, del arte contemporáneo.
Aun así, si extendemos su afirmación,
esto implicaría que la historia del arte se
despliega más allá de la vida de los artistas,
si bien tiene que ver con ella. Se amplifica a
las obras que producen, a las imágenes que
activan, a las prácticas que llevan a cabo,
a las conexiones que posibilitan. Llega un
punto, claro, en el que cabría la pregunta
“¿Cuándo hay arte”, pues el ‘borronamiento’
de las cualidades estéticas conduciría a
afirmar que “no hay ninguna evidencia
intrínseca a la obra que permita legitimar
desde ella su estatuto de obra de arte”
(Gyldenfeldt, 2009, p. 21), tal como ocurre
con la Fuente de Duchamp de 1917.</p>

<p>Esto llevaría a pensar, entonces, en el
paso de lo sensible a lo conceptual, con
lo que se subvierte la estética tradicional.
Ahora lo sensorial deviene forma de
pensamiento. Esto no cambia el hecho de
que el arte sea entendido como un medio
de relacionamiento y significación de la
realidad, más allá del goce estético. Lo que
sí resulta importante considerar es que
hoy “las obras a menudo ya no permiten
reconocer dónde está el límite con respecto
a su exterior no-artístico; más bien tienen
su especificidad en la desestabilización de
este límite” (Rebentisch, 2021, p. 18). Aquí
aparece una de las principales crisis del arte
contemporáneo que, sin duda, repercute
también en los procesos de formación en
todos los niveles educativos. Las obras
aparecen desdiferenciadas y no se las puede
ubicar de forma unívoca en una tradición de
la pintura o la escultura, de ahí que algunos
autores como Natividad Medero (2011)
hablen de desdefinición del arte y asuman
que los cambios actuales tengan que ver,
entre otras cosas, con la deshabilitación
de la idea de arte, la imposibilidad de una
definición transhistórica, la apertura de la
cultura de consumo y la resignificación de
las artes visuales (p. 49).</p>

<img src="./assets/c1.png" alt="Asterión 1">
      <figcaption>
        Fig. 1: # 7. De la serie Modelo en Asterión.
        Pedro Agudelo Rendón. Lápiz sobre papel. 21,5
        x 28 cm. 2023
      </figcaption>
    </figure>

<p>Si consideramos estos problemas histórico-
teóricos del arte y tenemos en cuenta
también los cambios que se dan después
de la pandemia, el uso de inteligencias
artificiales y la apropiación de nuevos
medios tecnológicos en las prácticas
artísticas, entonces ¿cómo entender
hoy la educación artística en medio de
los desplazamientos estéticos del arte
contemporáneo? Hay una deslocalización
que no solo se da en el ámbito artístico, sino
que está presente en muchos ámbitos de
la vida y la educación. Esta deslocalización
ya había sido abordada en su momento por
Martín-Barbero (2003) cuando habla, en
primer lugar, del descentramiento de los
saberes que se salen del libro, la escuela
y la universidad; y cuando se refiere, en
segundo lugar, a la des-localización/des-
temporalización de los saberes que “escapan
de los lugares y de los tiempos legitimados
socialmente para la distribución y el
aprendizaje del saber” (p. 19).</p>

<img src="./assets/c2.png" alt="Asterión 2">
      <figcaption>
        Fig. 2: # 14. De la serie Modelo en
        Asterión. Pedro Agudelo Rendón. Lápiz
        sobre papel. 33,8 x 24 cm. 2023
      </figcaption>
    </figure>

<p>Por tanto, esta relación entre artes y
educación supone un conocimiento del
campo educativo que va más allá de las
relaciones que se dan en el aula, así como
la apertura a problemas de investigación
que surgen del ámbito de la experiencia
en los procesos de interacción didáctica.
Esto conduce a dos problemas del orden
pedagógico. De un lado, la consideración
del campo artístico bien como objeto o
como meta de la educación; de otro, asumir
una postura didáctica y estética frente al
primer problema. Touriñán-López (2011,
p. 62) plantea una alternativa que resulta
pertinente cuando señala que “es preciso
estudiar la educación artística desde la
perspectiva de la educación, sin anular
la perspectiva propia de los productos
culturales artísticos”. Este planteamiento
resulta más complejo si se asume el arte
como mediación y no como fin en sí
mismo, pues ocurre con frecuencia que el
arte termina siendo instrumentalizado,
alejándose de sus fines estéticos (si lo
consideramos desde la estética tradicional)
o de su enfoque conceptual (si lo miramos
desde la contemporaneidad). Tal es el caso
de los procesos psicoartísticos, terapias
artísticas, arte terapia o estrategias
didácticas que usan el arte como mero
instrumento recreativo que, en la mayoría
de los casos, banalizan el arte y le dan
atribuciones que no les son propias.</p>

<img src="./assets/c3.png" alt="Asterión 3">
      <figcaption>
        Fig. 3: # 8. De la serie Modelo en
        Asterión. Pedro Agudelo Rendón. Lápiz
        sobre papel. 21,5 x 28 cm. 2023
      </figcaption>
    </figure>

<p>Ahora bien, al asumir el arte como
mediación1, se está apelando a la creatividad
para potenciar experiencias educativas,
humanas y en muchos casos artísticas
en sí mismas, pues “todo ser humano es
artista”, como dijo Joseph Beuys, aunque
–podríamos agregar– no todo lo que hace
un ser humano es arte. Esta perspectiva
del arte como mediación o de la educación
a través de las artes “utiliza los diferentes
procesos creativos para impulsar y mejorar
la experiencia educativa en procedimientos
ajenos en principio al propio hecho artístico
(las matemáticas o un segundo idioma,
por ejemplo), coadyuvando en una mejora
de los resultados (académicos y ajenos)”
(Álvarez, 2022, p. 255). Aquí entran en
juego los componentes de la didáctica y
las estrategias que surgen a partir de las
múltiples relaciones de estas últimas, con
el fin de asumir una actitud que no solo
dinamice procesos enseñanza y aprendizaje
en el aula, sino que además posibiliten el
aprendizaje artístico.</p>

<p><i>La didáctica construye métodos
y concibe el aprendizaje como un
lugar fundamental del desarrollo
humano que no se agota en el acto
de educativo, sino que se renueva en
función de las teorías y paradigmas
que producen los discursos sobre los
campos de conocimiento (Villabona y
Cáceres-Saavedra, 2022, p. 82).</i></p>

<p>En este sentido, no se trata tanto de
establecer pautas de trabajo desde los
objetos y las técnicas artísticas, sino de
caracterizar lo que desde el arte puede
operar en un proceso formativo a través del
trabajo sobre las intenciones y las formas de
pensar que definen tales procesos.</p>

<p>Visto desde esta perspectiva, el arte se
entendería como una forma de expresión
o, en palabras de Barrena (2007, p. 34), un
modo de la expresión de los sentimientos
“que adquieren forma y que resuelven
una inquietud inicial, pues el artista no
busca comprender lo que es verdadero
ni tiene como objeto el descubrimiento,
sino que busca crear lo que es admirable
en sí mismo”. Si se traslapa esta idea
a la educación como mediación, esto
supone que el arte constituye una manera
no solo de expresión, sino que apela al
descubrimiento de significados y sentidos.
Dicho de otra manera, es una manera de
apropiación personal a través de formas
sensibles. Barco (2003, p. 73) señala que
“el arte permite la construcción y desarrollo
de lenguajes simbólicos mediante los
cuales se hace posible la comunicación de
conceptos”, lo que resulta definitivo en la
educación a través del arte. No se trata de la
construcción de conceptos formales sino de
la expresión de percepciones, sentimientos,
ideas y conceptos para expresar relaciones
con el mundo, la cultura y la sociedad.</p>

<p><strong>Problema y necesidad</strong></p>

<p>Una de las principales funciones de
la educación artística es potenciar la
sensibilidad, la expresión creativa y la
apreciación estética. De modo que, si la
comprendemos desde la perspectiva del
arte como mediación, resulta coherente
que el maestro concentre su interés en
estos tres aspectos con el fin de permitir
la autoexpresión. No obstante, en los
distintos niveles de educación se pueden
identificar problemas relacionados con
la instrumentalización –o negación– del
arte en los procesos de formación. Tal es el
caso del modelo pedagógico de la escuela
nueva en la que las estructuras didácticas
supeditan el arte a la actividad mediada por
otros campos de conocimiento (Villabona y
Cáceres-Saavedra, 2022, p. 84).</p>

<p>Pero este no es el único problema, ya que
distintas investigaciones, como la de Wahid
y otros (2018, p. 297), señalan que “teachers
are more focused on the field of production
of psychomotor than those involving art
theories such as history and appreciation
of art because they do not master the field”.
Este es uno de los factores que influye en
la enseñanza del arte sino en los procesos
educativos en los que se trabaja desde la
educación a través del arte.</p>

<p>Algo similar se encuentra en la investigación
de Villabona y Cáceres-Saavedra (2022)
en Boyacá, donde logran identificar que
la falta de un conocimiento en el campo
artístico conduce a los maestros a focalizar
los trabajos artísticos en aspectos manuales.
Esto conduce a plantear la necesidad de
“estudiar estrategias particulares en la
investigación relacionada con las artes”
(Arias y Díaz, 2022, p. 206) que permitan
amplificar y no simplificar los procesos
conceptuales desde lo estético y artístico.
Esto abre preguntas didácticas que
pueden contribuir en la construcción de
conocimientos sobre la educación a través
de las artes. En este sentido, vale la pena
preguntarse, por ejemplo, ¿cómo llevar a
cabo procesos formativos y metodológicos
que posibiliten espacios de sensibilización y
vinculación con otros campos del saber en la
formación integral de estudiantes de áreas
de conocimiento distintas a las artísticas?</p>

<p><strong>Contexto y estrategia didáctica</strong></p>

<p>Este tipo de preguntas resultan importantes
a la hora de reflexionar sobre la “educación
a través de las artes” como una de las
formas de asumir la educación artística más
allá de la referencialidad escolar de una
asignatura en el currículo de la enseñanza
en primaria y secundaria. El proyecto de
investigación Semiótica, educación y arte.
Estudios de interpretación y producción,
Fase II, busca reflexionar desde y sobre
este enfoque. Su objetivo es activar
procesos artísticos y estéticos a partir de la
resignificación de la experiencia en ámbitos
educativos de formación no artística. En
este caso, describiremos una experiencia
didáctica focalizada en el arte como
mediación, llevada a cabo con varios grupos
de estudiantes de áreas de conocimiento
no artístico, como Licenciatura en Lengua
y Literatura, pregrado de Periodismo,
Filología Hispánica y estudiantes de otras
carreras. Estas experiencias se llevaron a
cabo entre el 2022 y el 2024 en la ciudad
de Medellín, a lo largo de periodos lectivos
de 16 semanas. Los resultados finales son
instalaciones fotográficas afincadas en
ideas del arte contemporáneo, con medios
y materiales diversos y el trabajo directo
sobre el espacio.</p>

<p>Vale la pena señalar que el planteamiento
de este proyecto resulta coherente con
el concepto de expansión didáctica
desarrollado por Kap (2022), según el cual
se puede desplegar el ámbito didáctico con
apoyo de las mediaciones tecnológicas para
producir expansiones que rompan “la pared
invisible que separa la enseñanza, el lugar
de la producción de conocimiento y las
tradiciones” (p. 6)</p>

<p>Ahora bien, la didáctica expandida va más
allá del uso de la tecnología para romper
la cuarta pared; puede integrar prácticas
culturales, tradiciones, conocimientos
enciclopédicos, saberes intuitivos o el error
como herramienta de construcción de
conocimiento. En este sentido, la diferencia
entre el concepto de Kap y el que asumimos
en este proyecto, es que mientras la autora
desarrolla su experiencia didáctica durante
la contingencia de la pandemia, nosotros
articulamos el concepto de la expansión con
el quiebre de los bordes mismos de aula,
bien con medios tecnológicos o medios
analógicos. En este sentido, se plantearon 5
momentos de la estrategia:</p>

<p><i>a. Descentrar la experiencia del aula
como foco de conocimiento. Se trata,
en este caso de horadar la experiencia
al permitir la integración de intereses
personales de los estudiantes con las
temáticas desarrolladas en el curso.
Al hacer esto, se quiebra el concepto
tradicional de estética y los estudiantes
–no expertos en arte– se aproximan
a ideas y concepciones del arte
contemporáneo</i></p>

<p><i>b. Descolocar el trabajo individual.
Uno de los retos de la educación
es activar el trabajo colaborativo,
participativo y cooperativo. Esta
estrategia permitió que los estudiantes
aunaran fuerzas para el desarrollo
del trabajo y fortalecieran la
confianza en el otro a través de la
desterritorialización del saber y la
experiencia individual.</i></p>

<p><i>c. Tensar el aula. Uno de los intereses
centrales de la estrategia es dislocar
el aula, quebrarla y fracturarla
permitiendo que los cuerpos se
desplacen, en un sentido cercano a la
acción peripatética: salir del aula para
dar vueltas y ver y hablar de conceptos
e ideas que los estudiantes construyen
a partir de sus intereses particulares.</i></p>

<p><i>d. Deslinguistizar el pensamiento. En
este caso, se trata de desterritorizalizar
el pensamiento, la palabra y el
lenguaje; acercarse al ícono, al símbolo
iconizado y al índice simbolizado, es
decir, a la construcción de conceptos
a través de otras formas de expresión
que van más allá de la palabra y el
lenguaje. De esta manera asumimos el
concepto de arte desde una perspectiva
contemporánea –y volvemos sobre
la pregunta de Gyldenfeldt ¿cuándo
hay arte? –; es decir, asumimos
que deslinguistizar es pensar en la
imagen y más allá de la imagen, es
abrir la experiencia a la palabra y más
allá de la palabra. Así, el arte puede
encarnarse en sujetos que viven el
mundo contemporáneo a través de
diversas formas de expresión.</i></p>

<p><i>e. Expandir la crítica humanista.
Este movimiento tiene que ver con
el paso de la exégesis crítica a la
crítica semioestética. En este caso,
los estudiantes están convocados a
la disposición crítica, constructiva
y humanista en la que expresan y
visibilizan sus apreciaciones sobre el
trabajo de sus compañeros.</i></p>

<p>Los resultados de la apuesta didáctica son
variados y tocan distintos temas, como el
lugar de la mujer en la contemporaneidad,
la ecología y el cambio climático, las
desapariciones forzadas en el país,
entre otras. Se siguen varios momentos:
a) indagación conceptual y visual; b)
proceso de asesorías y acompañamiento
en los componentes conceptuales y
artísticos; c); construcción del concepto
sensible; d) experimentaciones artísticas
y e) producción y materialización de la
propuesta.</p>

<p>Dentro del conjunto de trabajos se
encuentra la instalación efímera Estilo
corrosivo de Mariana Marín Pavas, Gisela
Yajaira Guarín Aguirre y Esperanza
Millán Zuluaga. Se trata de una reflexión
sobre los producción y consumo textil
en la cadena de la moda y que tiene un
impacto medioambiental importante. El
trabajo consiste en una estampación de
una camiseta blanca con una fotografía
producida por las autoras. La prenda se
instala en un espacio arborizado suspendido
de cuerdas con un dispositivo que pende en
la parte superior. A medida que el viento
impacta sobre los elementos, la camiseta
se ondea y el dispositivo (un recipiente con
pintura) se balancea sobre ella derramando
pintura en su superficie. Esto hace que la
camiseta se manche de un color rojizo y el
diseño, en su evocación de la moda, empiece
a tener otro sentido. Como indican las
autoras, el trabajo “nace como una crítica
al consumo masivo en la industria de la
moda, la cual genera grandes impactos con
consecuencias negativas al medio ambiente.
Algunas prácticas como la utilización de
sustancias químicas en la fabricación de
textiles, las cantidades exorbitantes de
agua para su producción, los desechos que
llegan a los vertederos y ríos, son acciones
que perjudican a los diversos ecosistemas y
con ellos a las diferentes especies que viven
allí. Con la obra Estilo corrosivo queremos
provocar en los espectadores reflexiones
sobre las prácticas de producción y consumo
textil, dado que es el comprador quién más
contribuye al mercado de la producción
mediante sus compras. Este mercado tiene
como base la explotación de los recursos
naturales y un sistema capitalista que se
apoya en recursos como la publicidad, tema
que motivó el primer análisis semiótico
sobre la industria de la moda y derivó en las
investigaciones de este trabajo”.</p>

<img src="./assets/c4.png" alt="Asterión 4">
    </figure>

<img src="./assets/c5.png" alt="Asterión 5">
      <figcaption>
        Figuras 4 y 5: Estilo corrosivo de Mariana Marín Pavas, Gisela
        Yajaira Guarín Aguirre y Esperanza Millán Zuluaga
      </figcaption>
    </figure>

<p>El trabajo de Daniela Copete Hurtado, Érika
Vanessa Úsuga Guerrero, Deisy Julieth
Gómez Oquendo y Julián Andrés García
Castrillón, titulado Corporalidades diversas:
Experiencias del cuerpo performativo Drag,
es una apuesta de performance y fotografía
artística que explora las dimensiones del
cuerpo y la subjetividad a través del color, la
expresión corpórea y diferentes elementos
matéricos y simbólicos. De aquí que los
autores manifiesten que la acción “no
representa una preparación sin sentido de
lo que allí se intenta expresar o transmitir,
sino que es la expresión auténtica y diversa
de todo lo que le antecede al performance
Drag con relación a sus experiencias, lo
que ha pasado por su cuerpo y que es
narrado en el escenario”. Este trabajo
consiste en una fotografía en gran formato
que dialoga con el espacio, una serie de
elementos objetuales –dentro de los cuales
resalta la máscara – y el performance.</p>

<img src="./assets/c6.png" alt="Asterión 4">
    </figure>

<img src="./assets/c7.png" alt="Asterión 5">
      <figcaption>
        Figura 6 y 7: Corporalidades diversas: Experiencias del cuerpo
        performativo Drag, Daniela Copete Hurtado, Érika Vanessa
        Úsuga Guerrero, Deisy Julieth Gómez Oquendo y Julián Andrés
        García Castrillón
      </figcaption>
    </figure>

<p>Por su parte, el trabajo titulado -18 °C
de Elisa María Ochoa Estrada y Juan
Pablo Sepúlveda Carmona, aborda, como
señalan sus autores, “la opresión del
edadismo y la sumisión a cánones de
belleza inalcanzables. Las mujeres son
cosificadas, valoradas por su apariencia y
edad, sujetas a estereotipos temporales. El
trabajo busca generar conciencia sobre la
presión de encajar en ideales superficiales,
impulsando una visión inclusiva que
disminuya la carga que implica el querer
encajar en cánones imposibles”. Se trata
de una fotografía instalada, compuesta por
una fotografía en gran formato, una repisa
con objetos intervenidos, un libro bitácora
que compila el proceso de investigación y
otros elementos activadores de la propuesta
gráfica.</p>

<img src="./assets/c8.png" alt="Asterión 5">
      <figcaption>
        Figura 8: -18 °C de Elisa María Ochoa Estrada y Juan
        Pablo Sepúlveda Carmona
      </figcaption>
    </figure>

<p>Estos trabajos constituyen reflexiones
contemporáneas sobre temas y problemas
de interés en la actualidad. Integra
una dimensión lógica a través de la
construcción de un concepto y un proceso
de investigación que determina la ruta de
comprensión y producción; una dimensión
ética, toda vez que aborda problemas
o temas contemporáneos que implican
decisiones o reflexiones humanas y
una dimensión estética, puesto que se
trata de trabajos artísticos, orientados
didácticamente, realizados por estudiantes
de carreras profesionales distintas a las
artísticas. Esto le brinda al trabajo un
carácter especial y permite abrir la reflexión
de la educación artística más allá de los
ámbitos curriculares tradicionales.</p>

<p><strong>A modo de cierre</strong></p>

<p>Según Rudolf Arnheim (1986, p. 307) el arte
es el “medio fundamental de orientación,
nacido de la necesidad que el ser humano
tiene de comprenderse a sí mismo y
al mundo en el que habita”. El arte es
una manifestación cultural, expresión y
producción de las sociedades que se articula
con sus creencias, sus modos de concebir el
mundo y de interpretar el espíritu de una
época: “las artes proporcionan el desarrollo
de habilidades cognitivas tales como la
expresión creativa natural, la autoestima,
y la práctica de valores sociales y morales”
(Lopera y Fernández, 2002. p. 21); es, en
última instancia, uno de los principales
medios de expresión y transformación
de la realidad. Por eso cumple un papel
importante en la formación integral de las
personas. De ahí que pensar la educación
a través de las artes permita, como se ha
planteado aquí, desplegar la creatividad
y desarrollar distintas habilidades de
pensamiento en los estudiantes, sin
importar su área de formación. El proyecto
Semiótica, educación y arte. Estudios de
interpretación y producción ha permitido
descubrir la manera en que puede operar
el arte en distintos ámbitos, la capacidad
que tiene para recrear y desvelar distintas
temáticas contemporáneas, como la
diversidad, la subjetividad, los problemas
medioambientales y el rol de la mujer.</p>

<p>Si el arte es un medio para que el ser
humano se comprenda a sí mismo, entonces
la educación desde el arte, como señala
Anzorena (1998), prepara a ese ser humano
32 Revista Progresivo
para hacerse más sensible al mensaje
de las formas desde el conocimiento y el
contacto con el mensaje visual y artístico.
La educación desde el arte, lo mismo que
una educación que se fundamente en lo
artístico como un dispositivo invaluable
en la formación, precisa de la incursión de
una serie de estrategias de formación desde
el arte en los espacios escolares. Pero para
que esto sea posible, es necesario formar a
los formadores que vivencian y significan
dichos espacios. El maestro tiene a su
disposición un conjunto de herramientas
didáctico-artísticas con las que puede crear
espacios de interacción, comunicación,
sensibilización y aprendizaje significativo:</p>

<p><i>La experiencia estética, entendida
como una actividad de interacción
a través de la cual el hombre se
vincula al mundo de los significados,
por mediación de alusiones
artísticas, naturales o sociales que
estimulan su accionar perceptivo,
constituye la base principal de una
relación comunicativa, en donde el
objeto estético trasciende el plano
instrumental, para ubicarse, en
palabras de Cliffor Geertz, “en el
plano semiótico” (Calle, 2001, p. 60).</i></p>

<p>Calle Guerra considera la obra de arte como
un texto interpretativo de la realidad, “a
partir del cual es posible ampliar y construir
nuevos correlatos sociales y culturales del
hecho estético y sus significados” (Calle,
2001, p. 61). Desde esta perspectiva se
asume la obra de arte como un dispositivo
didáctico; así, puede pensarse, por ejemplo,
la función epistémica de la imagen pictórica
o fotográfica, las constantes funcionales
de la ilustración en la comprensión del
texto escrito y la función apelativa de la
imagen en movimiento y los medios de
comunicación masiva o en las redes sociales.
A través del arte, el ser humano se vincula
a un mundo de significados. Él no solo
crea mundos posibles, sino que posibilita
la vinculación entre mundos “reales” y la
conexión de procesos de conocimiento
de la realidad. La educación desde el
arte es un factor primordial, necesario
en cualquier tipo de educación. Para que
dicho fundamento tenga operatividad
dentro del marco general educativo es
indispensable suscribir procesos de
formación. Silva Rivero (2001) señala que el
verdadero maestro en competencias ayuda
al crecimiento de la individualidad, y esto
solo es posible desde la mirada sensible que
permite el arte.</p>

<p>En los procesos de formación humanística,
como en el juego que hacen los dioses
olímpicos con los humanos, hay algo real
y algo que no lo es, pero que definen, al
fin y al cabo, la vida misma de los sujetos.
Morfeo, el emisario de los sueños, modela
imágenes, como lo hace el artista, para
hacer creer algo que no lo es pero que, en el
fondo, contiene mucho de verdad o realidad.
El dios griego, hijo de Hipnos (el dios del
sueño) y de Pasítea (una de las musas) es un
personaje mitológico, capaz de adoptar la
forma de cualquier humano en los sueños,
con el fin de transmitir distintos mensajes a
los mortales, revelando el futuro por medio
de imágenes simbólicas.</p>

<p>El arte, en cierto sentido, es un sueño que
nos revela –no tanto el futuro– las máscaras
del presente, el tiempo que somos y lo
que devenimos. Morfeo es un espejo que
se presenta como un simulacro ante los
humanos para revelar el mensaje de los
dioses. El arte crea mundos posibles y abre
realidades alternativas (Herrero, 2015).
Por eso tiene una función primordial en
la educación, pues solo a través de una
sensibilidad estructurada que permita
al ser humano el acto de conciencia
frente al mundo que lo rodea y, sobre
todo, a una conciencia de sí mismo como
individuo, expresión de la naturaleza y
de la humanidad, podrán adelantarse
procesos de educación más sensibles, en
una convivencia sana en la que prime la
diversidad, pero en la que todos se dirijan
a un punto común: el respeto por la
diferencia, que es el respeto por el otro.</p>

<p>El maestro es un emisario y el arte es el
espejo en el que nos vemos a nosotros
mismos para desaparecer en la expresión
de nuestra propia imagen como mortales
que sienten, se comportan y piensan. Eso
muestran también los trabajos descritos en
este ensayo: muestran nuestra fragilidad
como especie, nuestra capacidad para
observar y representar, como un sueño, esa
fragilidad.</p>

<p><strong>Bibliografía</strong></p>

<p>Álvarez García, F. (2022). Arte y educación artística. Una reflexión sobre la creatividad y
la interdisciplinariedad de los lenguajes artísticos. ArtsEduca, 31, 251-262.</p>
<p>Anzorena, H. (1998). Ver para comprender: Educación desde el arte. Magisterio del Río
de la Plata.</p>
<p>Arnheim, R. (1986). El pensamiento visual. Paidós.</p>
<p>Barco, J. (2003). Una aproximación al énfasis en educación artística. Uniminuto.</p>
<p>Barrena, S. (2007). La razón creativa. Crecimiento y finalidad del ser humano según C. S.
Peirce. Ediciones RIALP.</p>
<p>Calle Guerra, A. (2001). El arte y su función comunicativa: una propuesta de
interpretación. Revista de ciencias humanas, 8(30), 59-71.</p>
<p>Gombrich, E. (2007). La historia del arte, 16ª ed. China: Phaidon.</p>
<p>Gyldenfeldt, O. (2009). ¿Cuándo hay arte? En: Oliveras, E. (ed.). Cuestiones de arte
contemporáneo. Hacia un nuevo espectador en el siglo XXI, pp 21-46. Buenos Aires:
Emecé Editores.</p>
<p>Herrero, M. (2015). Realidades alternativas y mundos posibles. La tecnología y los
medios como vías de acceso a la imaginación. La Trama de la Comunicación, 19, 251-162.</p>
<p>Kap, M. (2022). Rompiendo la cuarta pared: expansiones didácticas y amplificaciones
críticas en la enseñanza. Didac, 80, 5-12.</p>
<p>Lopera, E.; Fernández, C. y Mejía, J. (2002). Enseñanzas metacognitivas de la
apreciación de obras de arte para el logro de razonamiento crítico y aplicado. Vieco.</p>
<p>Martín-Barbero, J. (2003). Saberes hoy: diseminaciones, competencias y
transversalidades. Revista Iberoamericana de Educación, 32, 17-34.</p>
<p>Nathaly Arias, R. y DíazQuero, V. (2022). Tendencias de la investigación en educación
artística en Colombia en el periodo 2010-2020. PARA, 22(33), 202-225. https://doi.
org/10.26620/uniminuto.praxis.22.33.2022.202-225</p>
<p>Rebentisch, J. (2021). Teorías del arte contemporáneo. Una introducción. Universidad de
Valencia.</p>
<p>Silva, A. (2001). A propósito de las competencias humanísticas o formativas en la
Universidad de La Salle. Revista de la Universidad de La Salle, 22(32), 107-120.</p>
<p>Touriñán-López, J. M. (2011). Claves para aproximarse a la educación artística en el
sistema educativo: educación “por” las artes y educación “para” un arte. Estudios sobre
Educación, 21, 61-81.</p>
<p>Villabona-Juez J. y Cáceres-Saavedra L. (2022). De la didáctica general a la
didáctica de la educación artística Revista Saberes Educativos, 9, 77-94. https://doi.
org/10.5354/2452-5014.2022.67739</p>
<p>Wahid, N., Bahrum, S., Ibrahim, M., y Hashim, H. (2018). Pedagogical Content
Knowledge of Art Teachers in Teaching the Visual Art Appreciation in School.
International Journal of Academic Research in Business and Social Sciences, 7(12), 296–
303. https://doi.org/10.6007/ijarbss/v7-i12/3612</p>`,
  },

  "Bauhaus": {
    title: "Bauhaus Crisol Fotográfico",
    text: `<p><strong>Edgar Osvaldo Archundia Gutiérrez</strong></p>
    
    <p><i>Doctor en Artes y Diseño por la Facultad de Artes y Diseño de la UNAM</i></p>

    <p><strong>Resumen:</strong></p>

    <p>La Bauhaus se presenta ante el mundo
como un modelo a seguir, una suerte de
querer ser, aspiracional y sí, también,
como una idea utópica, idealizando lo
logrado en el poco tiempo de existencia
de esta escuela, que ha marcado la senda
para las instituciones en donde se estudian
disciplinas relacionadas con la arquitectura,
los diseños y las artes. La innovadora y
disruptiva forma de abordar los procesos
de enseñanza-aprendizaje, la forma de
pensamiento libre y original con la que se
presentaron soluciones a problemáticas
de diseño, arte, teatro, objetos de uso
cotidiano, son un parteaguas en la historia
de la humanidad.</p>

<p>La Bauhaus se erige como el crisol
donde confluyeron todas las corrientes y
vanguardias de principios del siglo XX, de
cada una de ellas, los estudiantes y docentes
de la escuela abrevaron para fundir en un
solo espíritu, conceptos, teorías, prácticas
artísticas y de producción. Poco a poco
la escuela incorporó con entusiasmo las
tecnologías, que eran novedosas en esa
década de los años veinte del siglo pasado.
Entre ellas la cámara fotográfica, se alza
como una máquina al servicio de la mano
creativa de quien la empuña para forjar
imágenes impregnadas con el estilo de la
Bauhaus.</p>

<p>Fotografías de registro, suprematista,
constructivista, futurista, fotogramas,
publicitaria, vida cotidiana, grafismos,
reflejos, múltiples exposiciones y fotografía
subjetiva, fueron los más representativos
estilos que dieron forma a lo que conocemos
como fotografía Bauhaus. La fotografía de la
Bauhaus es un referente indispensable para
concebir y comprender la imagen técnica
contemporánea.</p>

<p><strong>Palabras Clave:</strong> Bauhaus, crisol,
fotografía, vanguardias, Moholy-Nagy</p>

<p><strong>Abstract:</strong></p>

<p>The Bauhaus presents itself to the world
as a role model, a kind of aspiration, both
aspirational and utopian, idealizing what
has been achieved in the short time of this
school’s existence. It has paved the way for
institutions that study disciplines related
to architecture, design, and the arts. The
innovative and disruptive approach to
teaching and learning processes, the free
and original way of thinking with which
solutions to problems in design, art, theater,
and everyday objects were presented, are a
turning point in the history of humanity.</p>

<p>The Bauhaus stands as the melting pot
where all the currents and avant-garde
movements of the early 20th century
converged. The students and teachers of
the school drew from each of them to fuse
concepts, theories, artistic and production
practices into a single spirit. Little by little,
the school enthusiastically incorporated
the technologies that were novel in the
1920s. Among them, the camera stands as a
machine at the service of the creative hand
of whoever wields it to forge images imbued
with the Bauhaus style.</p>

<p>Record photography, suprematist,
constructivist, futurist, photograms,
advertising, everyday life, graphic art,
reflections, multiple exposures, and
subjective photography were the most
representative styles that shaped what
we know as Bauhaus photography.
Bauhaus photography is an indispensable
reference for conceiving and understanding
contemporary technical imaging.</p>

<p><strong>Key Words:</strong> Bauhaus, melting pot,
photography, avant-garde, Moholy-Nagy</p>

<p>La Bauhaus como institución educativa, se
ha constituido a lo largo del tiempo como
un ideal, una suerte de aspiración a la que
todas las escuelas de la actualidad fijan su
mirada. Basan sus enseñanzas en el legado
que la Bauhaus dejo, sus preceptos, los
objetos que se diseñaron, la arquitectura
que ahí se gestó, el diseño gráfico e
industrial, las manifestaciones artísticas,
publicitarias, fotográficas y tipográficas, y
toda aquella expresión de su breve estancia
material, son ejemplo, punto de partida y
abrevadero constante en la actualidad para
reconocer en esta institución la semilla que
hoy florece y da frutos en las escuelas que
imparten disciplinas relacionadas con lo
que se impartía en las aulas de la mítica
Bauhaus.</p>

<p>La Bauhaus tuvo tres sedes, en la
República de Weimar, en Dessau y por
último en Berlín. Tuvo por fundador y
primer director a Walter Gropius, quien,
con su pensamiento revolucionario y
adelantado a su tiempo, logró concebir una
institución educativa en donde las artes
y la arquitectura fueran las disciplinas
base para crear conceptos y soluciones
visuales nuevas. La libertad creativa, la
experimentación visual, una educación
integral fueron las directrices para generar
al nuevo estudiante de arquitectura y de
artes (Lupton, 1994).</p>

<p>La Bauhaus conto con un grupo de
libres pensadores como docentes en sus
filas, Itten, Klee, Kandinsky, Gropius,
Schlemmer, etc. Las vanguardias artísticas
no fueron ajenas a la Bauhaus, ya en
Weimar el expresionismo fue la corriente
predilecta en este periodo. El futurismo
llegaría después y con este el interés por
la tecnología del momento, con ello la
producción de imágenes mediante aparatos
técnicos, que se insertan en los medios de
reproducción gráfica, como la serigrafía, el
grabado y la fotografía.</p>

<p>Precisamente este medio de captación
de imágenes aparece en la Bauhaus de
Weimar como un elemento no incluido
en las enseñanzas formales de la escuela.
Era común ver a los estudiantes con una
cámara colgada al hombro, lista para
ser usada como una herramienta para
atrapar momentos, captar un suceso, una
exposición, acontecimientos ocurridos
dentro de las aulas o en las ajetreadas
calles de Weimar, donde poco a poco se
comenzaba a respirar un ambiente político
álgido.</p>

<p>Recordemos que la República de Weimar
surgió después de la Primera Guerra
Mundial, de las cenizas del conflicto bélico,
el pueblo alemán trataba de recuperarse
del Tratado de Versalles. En este tiempo
agitado, la Bauhaus comienza a escribir su
historia; la fotografía como herramienta
tecnológica funciona como un aparato
de registro, de acompañamiento, de
documentación visual. Útil máquina que
registra el turbulento acontecer del ser
humano de la posguerra.</p>

<p>Se reconoce y aprecia en la cámara
fotográfica una tecnología capaz de
registrar lo que acontece, de representar,
de conservar la memoria fugaz del ser
humano, de copiar la realidad, de ser
mímesis, sustituto del objeto real y de ser
testigo mudo del paso de la humanidad por
la tierra. Así entonces, la fotografía entra
a la Bauhaus como un mecanismo lúdico
para hacer imágenes técnicas, una suerte
de instrumento mágico que preserva lo que
nuestros ojos ven, pero que, en la superficie
bidimensional de la fotografía, existe algo
que aconteció, fue vivido por quien empuño
la cámara y atesorado en una imagen
lograda por un aparato, con solo enfocar y
presionar el disparador a fondo.</p>

<img src="./assets/d1.png" alt="Archundia">
      <figcaption>
        Fotografía 1: Archundia, Osvaldo: Antena del ágora,
        constructivismo al atardecer en DCV. (2025)
      </figcaption>
    </figure>

<p>Fundamental para que el estudio y
aprendizaje de la fotografía en la Bauhaus
creciera, fue la llegada a la institución de
un personaje legendario en esta disciplina:
Lászlo Moholy-Nagy. Quién invitado a
dar clases por Gropius “en el semestre de
invierno de 1923” (Droste, 2023), se hace
cargo del taller de metal en Weimar, poco
antes Johannes Itten se había marchado
del plantel, debido a diferencias en cómo
llevar a cabo las funciones sustantivas de la
escuela.</p>

<p>En este sentido Bieger (2013) nos menciona
acerca del arribo de Moholy-Nagy, su papel
y rol en la Bauhaus.</p>

<p><i>En 1923, Moholy-Nagy fue llamado
por Walter Gropius a la Bauhaus
de Weimar. Allí se hizo cargo
primeramente del taller de trabajos
en metal, y más tarde pasó a dirigir el
curso preparatorio, cuando Johannes
Itten decidió abandonar la Bauhaus.
Si bien en aquella época no existía
una clase específica de fotografía.
Moholy-Nagy es considerado como un
precursor en ese campo y se convirtió
en el representante por excelencia de
la fotografía Bauhaus.</i></p>

<p>Con la llegada de Moholy-Nagy, las cosas
en la Bauhaus comienzan a cambiar
lentamente, el expresionismo ya no es la
única vanguardia que se ve en la institución,
el suprematismo y el constructivismo entran
en escena y con estas corrientes, las ideas
del funcionalismo, lo utilitario y, las ideas
de que cualquier manifestación artística
deben estar al servicio del pueblo, llegan de
la mano de estas vanguardias rusas, nacidas
en la Revolución de Octubre.</p>

<img src="./assets/d2.png" alt="Archundia 2">
      <figcaption>
        Fotografía 2: Archundia, Osvaldo: Antena
        constructivista al servicio del ser humano.
        (2025)
      </figcaption>
    </figure>

<img src="./assets/d3.png" alt="Archundia 3">
      <figcaption>
        Fotografía 3: Archundia, Osvaldo: Metal
        Constructivista de comunicaciones. (2025)
      </figcaption>
    </figure>

<p>La metafísica, la espiritualidad del
Mazdaznan que introdujo prolijamente
Itten y que tantos adeptos tuvo entre los
estudiantes, fue dando paso lentamente
a una visión más realista del acontecer
y del entorno en el que se desenvolvía la
Bauhaus como una institución viva, que
veía como sus miembros comenzaban a
tener una identidad propia, se destacaban y
distinguían como estudiantes de una estirpe
diferente, no como el alumno tradicional de
las escuelas alemanas y europeas de arte y
arquitectura.</p>

<p>El estudiante rebelde, de cabello largo,
desprolijo, tuvo su origen en Weimar;
las alumnas portaban pantalones largos,
cabellos cortos y alborotados en señal de
rebeldía social y parental. Con la llegada
de las vanguardias rusas a la Bauhaus
llegaron también las ideas del socialismo y
el comunismo, que fueron también el origen
de muchos de los males que atrajo hacia
si la Bauhaus, sobre todo cuando los nazis
tomaron el poder político y económico de
Weimar.</p>

<p>Moholy-Nagy, húngaro de nacimiento,
pintor y docente, trajo consigo
pensamientos e ideas novedosas, la noción
de crear objetos que tuvieran un fin no solo
artístico, sino utilitario fueron recibidos
con entusiasmo, ya que la escuela estaba
urgida de dar resultados, la Bauhaus se
sostenía en su mayoría del erario público
y era necesario mostrar a la sociedad lo
que se enseñaba y se hacía al interior de la
aulas, por lo que el 15 de agosto de 1923 se
presenta la primera exposición de trabajos
de la Bauhaus, teniendo como sede el actual
Museo Neues.</p>

<p>No se puede negar la importancia de una
figura como es la de Moholy-Nagy en el
ámbito de la Bauhaus, su impecable manejo
del curso preliminar, el taller de metales
y su invaluable e histórica contribución a
la fotografía que gestó desde la Bauhaus,
tanto en la experimentación visual como
en sus planteamientos teóricos vertidos
en sus libros publicados en la editorial de
la escuela, los famosos y emblemáticos
Bauhaus-Bücher (Fiedler, 2006).</p>

<p>Sin embargo, no debemos olvidar que
Moholy-Nagy era pintor, no fotógrafo.
Entonces ¿cómo es que se hizo fotógrafo?
¿cómo paso de ser pintor a ser uno de los
grandes maestros y referencia internacional
en la creación fotográfica? ¿por qué es uno
de los grandes teóricos acerca de la imagen
fotográfica y referente por excelencia en la
actualidad?</p>

<p>Las respuestas a estos interrogantes
las podemos hallar en otro personaje
de indiscutible calidad y trascendencia
histórica, se trata de Lucia Schultz, a quién
Moholy-Nagy conoce en Berlín. Lucía era la
fotógrafa oficial de varios medios impresos
en Berlín, ella es la que le muestra lo que
se puede hacer con la cámara, le enseña la
técnica, el revelado, el positivado. Contrae
matrimonio con László y se instala con él en
Weimar.</p>

<p>Lucía se convierte en la fotógrafa oficial
de la Bauhaus, con su cámara registra,
documenta, lo que atrae su mirada lo capta
a través del visor, las exposiciones, la vida
cotidiana de la escuela, las actividades en el
aula, en los pasillos, en las manifestaciones
musicales, obras de teatro, nada escapa
a su ojo inquieto, a su ver observador y
contemplativo.</p>

<p>Gracias a ella podemos darnos una idea
visual clara del acontecer en la Bauhaus,
su fina presencia fue detonante para que la
fotografía fuera vista y aceptada más allá
de la simple idea de disparar por disparar
la cámara. Cabe señalar que Lucía nunca
fue docente en la Bauhaus; pero sin duda
alguna se le debe a ella en gran medida
que la fotografía escalara peldaños en la
institución e hiciera que la fotografía que se
cultivó en la Bauhaus sea ejemplo vivo de un
crisol lúdico-creativo.</p>

<p>El periodo en que la Bauhaus estuvo en
Weimar fue muy corto en tiempo, de 1919
a 1923, logro como institución destacarse
como una de las más vanguardistas escuelas
de arquitectura y artes. Su fama creció tanto
que estudiantes del centro de Europa y
Reino Unido se incorporaron a sus filas y el
número de mujeres que estudiaban en ella,
crecía exponencialmente.
La libertad de expresión, las escandalosas
fiestas que se hacían en la Bauhaus, las ideas
políticas que permeaban entre profesores y
alumnos, así como el rechazo social que el
sector conservador tenía hacia la escuela,
los alumnos, profesores y especialmente
hacia Itten y Gropius, hicieron que este
último fuera pensando hacia donde iba
a llevar la escuela, hacia qué lugar físico-
material convenia llevar las instalaciones de
la Bauhaus.</p>

<p>El lugar elegido: Dessau, la municipalidad
otorgó fondos públicos, así como se
consiguieron recursos privados para
construir las nuevas instalaciones de
la Bauhaus, que incluían casas para los
docentes. Este plantel es verdaderamente
un espacio para la enseñanza de los talleres,
teatro, danza, música, está considerada
como la obra maestra de la arquitectura
de Gropius, las fotografías del proceso de
construcción, de la inauguración y de la vida
cotidiana estuvieron a cargo, por supuesto,
de Lucia Schultz.</p>

<p>Es aquí, en este periodo en Dessau, cuando
la fotografía de la mano de Moholy-Nagy,
motivado por Schultz, ve sus mayores
resultados creativos. Pero hay que hacer
un alto en el camino. La fotografía en
Dessau todavía no estaba incorporada
como asignatura formal del plan de
estudios de la Bauhaus. Inspirado por
Lucía, László comienza a experimentar con
los fotogramas, tanto por contacto como
lumínicos, llamándolos precisamente así,
fotogramas.</p>

<img src="./assets/d4.png" alt="Archundia 4">
      <figcaption>
        Fotografía 4: Archundia, Osvaldo: Fotograma luminoso 1.
        (2025)
      </figcaption>
    </figure>

<img src="./assets/d5.png" alt="Archundia 5">
      <figcaption>
        Fotografía 5: Archundia, Osvaldo-Ramos José Antonio:
        Fotograma luminoso 2. (2025)
      </figcaption>
    </figure>

<img src="./assets/d6.png" alt="Archundia 2">
      <figcaption>
        Fotografía 6: Archundia, Osvaldo-Ramos José Antonio:
        Fotograma luminoso 3. (2025)
      </figcaption>
    </figure>

<p>Dato curioso, ya que Man Ray en su
periodo dadaísta descubre por un error
afortunado este mismo procedimiento
para hacer fotografías y Christian Schad
también ejecuta imágenes con esta misma
técnica. Man Ray los denomina rayogramas
(Lottman, 2003) y Schad schadogramas.
El nombre que perdura es el que les dio
Moholy-Nagy fotogramas, es interesante
señalar que los cuatro no tuvieron contacto
entre sí para implementar esta técnica de
fotografía por contacto o lumínica, pero
puede suponerse que Schultz o László la
aprendieron del grupo dadaísta berlines.</p>

<p>El fotomontaje es también utilizado con
entusiasmo por Moholy-Nagy, herencia del
cubismo, del dadaísmo y el constructivismo
ruso, en esta manifestación plástica de la
fotografía, los temas de sus obras se van
acercando más y más a la protesta política y
refleja el estado emocional en que se hallaba
László y la tensa situación social en que se
encontraba Alemania. El paulatino y firme
paso del nazismo, hacen que las expresiones
artísticas y fotográficas de Moholy-Nagy
sean cada vez más premonitorias de lo que
habría de suceder meses después.</p>

<p>Cabe señalar que el fotomontaje tiene su
origen en el positivado combinado, técnica
desarrollada durante el pictorialismo por
Peach Robinson y Rejlander, donde se
superponían varias placas, para después
ser positivadas. Está forma de hacer
imágenes se utilizaba para poder mostrar a
diversos personajes bien expuestos a la luz,
recordemos que las emulsiones de mitad
del siglo XIX eran poco sensibles a la luz
(Beaumont, 2002).</p>

<p>Con la influencia de Rodchenko y Lissitzky,
incursiona también en la producción
de anuncios publicitarios para revistas.</p>

<p>Diseña con fotografías publicidad para
artículos del hogar, neumáticos para coche,
novedosas portadas para medios impresos
utilizando fotogramas, superposición de
imágenes mediante múltiples exposiciones,
transparencias y fotomontajes. Creando
verdaderas obras maestras en esta área de lo
que se identifica como diseño fotográfico.</p>

<p>En Dessau, además de la actividad que en
fotografía desarrollaron Lászlo y Lucía,
se destacan estudiantes y profesores
que descubrieron la potencialidad que
como disciplina tiene la fotografía. Erich
Consemüller, Grete Stern, Florence Henri,
Ellen Auberbach, Herbert Bayer, Horacio
Coppola, Hago Rose, Feininger, Umbo,
son piezas fundamentales en la forma
de concebir la creación a través de una
herramienta tecnológica como lo es la
cámara fotográfica.</p>

<p>Además de los fotogramas y fotomontajes,
también se extendió el uso de la doble y
múltiple exposición, tanto en la toma como
en el laboratorio químico, el collage, los
encuadres de izquierda como se les llamaba
a las fotos en picada y contrapicada, las
fotografías en barrido-baja velocidad y la
foto escultura son agregados que se tomaron
de las vanguardias de principios del siglo
XX (Anikst, 1989).</p>

<p>Como estilos fotográficos propios de la
Bauhaus, tenemos: reflejos especulares,
fotografismo, texturas visuales, fotografía
de la vida cotidiana, preponderancia
compositiva de la forma, así como el alto
contraste. Como se observa, es vasto el
trabajo fotográfico que se dio en la Bauhaus,
se va dando forma a un crisol de corrientes,
técnicas, vanguardias, estilos que muestran
el acervo y legado que esta institución le
otorgó al mundo.</p>

<img src="./assets/d7.png" alt="Archundia 7">
      <figcaption>
        Fotografía 7: Archundia, Osvaldo: Fotografismo
        en homenaje a Klee. (2024)
      </figcaption>
    </figure>

<img src="./assets/d8.png" alt="Archundia 8">
      <figcaption>
        Fotografía 8: Archundia, Osvaldo: Encuadre de izquierda y
        reflejo especular en Satélite 1. (2024)
      </figcaption>
    </figure>

<img src="./assets/d9.png" alt="Archundia 9">
      <figcaption>
        Fotografía 9: Archundia, Osvaldo: Encuadre de izquierda y
        reflejo especular en Satélite 2. (2024)
      </figcaption>
    </figure>

<p>La fotografía en Dessau de la mano de
Moholy- Nagy y Schultz gozó de una
experimentación visual sin límites, tanto en
la toma como en el revelado y positivado,
se instaba al estudiante a investigar, a
experimentar las posibilidades de las
películas, reactivos y de la luz como materia
prima.</p>

<p>En 1925 se cierran las instalaciones en
Dessau, debido a la intervención de tropas
nazis, la escuela es desalojada y ya teniendo
como director a Ludwig Mies Van Der Rohe,
la Bauhaus se instala en Berlín. De tener
unos edificios aptos para la educación, el
plantel en Berlín se ubica en una fábrica
abandonada de telefonía. Moholy-Nagy
renuncia a la escuela en 1928, donde nunca
impartió la clase de fotografía. En el plantel
de Berlín ya se encuentra enlistada de
manera oficial la asignatura de fotografía.
El profesor a cargo era Walter Peterhans,
quien es invitado a la Bauhaus por Hannes
Meyer.</p>

<p>En este aspecto Bajac (2015) nos comenta
acerca de la llegada de Peterhans a la
Bauhaus:</p>

<p><i>Walter Peterhans se convierte
en director del departamento
de fotografía que se acababa de
crear en la Bauhaus; al marcharse
Moholy-Nagy y su esposa Lucía, una
fotógrafa muy activa en la escuela. Al
romper con las teorías experimentales
de estos últimos, Peterhans defiende
una fotografía objetiva, directa y no
manipulada, al servicio de los objetos
y texturas (2015, p 70).</i></p>

<p>Peterhans tuvo que competir directamente
con el legado de Lászlo y Lucía, a diferencia
de estos, su trabajo fotográfico fue
disciplinado en demasía, buscaba tener
un control total en los procesos de toma,
revelado y positivado, “Peterhans se
concentraba sobre todo en enseñar a sus
alumnos cómo hacer fotos técnicamente
perfectas” (Droste, 2023). Obsesionado con
el tratamiento de la forma como elemento
principal de la toma, crea imágenes de una
pulcritud sorprendente.</p>

<img src="./assets/d10.png" alt="Archundia 10">
      <figcaption>
        Fotografía 10: Sánchez, Angélica Victoria: La
        otra cara del aro. (2025)
      </figcaption>
    </figure>

<p>El manejo de la luz, así como las sombras
y las texturas son el común denominador
de sus enseñanzas y de su creación
fotográfica personal. “Peterhans componía
cuidadosamente fotos proporcionadas y
captaba con la cámara finísimas diferencias
de materiales y sombras” (Droste, 2023).
Incursiona en las corrientes del fotografismo
y la fotografía subjetiva. Esta última es
abordada de su cercana amistad con el
fotógrafo Otto Steinert, con base a estas dos
corrientes ya señaladas, fundamenta sus
enseñanzas en el aula.</p>

<img src="./assets/d11.png" alt="Archundia 11">
      <figcaption>
        Fotografía 11 Archundia, Osvaldo:
        Esperando el café, sobre texto de la
        Bauhaus. (2025)
      </figcaption>
    </figure>

<p>Al respecto de Peterhans Droste (2023) nos
dice:</p>

<p><i>En la clase de Peterhans, los
estudiantes aprendían técnicas
fotográficas como la iluminación
precisa, el manejo de los tiempos
de exposición y el proceso químico
del revelado. La experimentación
fotográfica libre, que había entrado en
la Bauhaus con László Moholy-Nagy
y gozaba de gran popularidad entre
los estudiantes, también formaba
parte de la clase (2023, p 474).</i></p>

<p>La figura de Peterhans sin duda destaca
en la historia de la escuela por ser el
profesor oficial en impartir la asignatura
de fotografía ya implantada en el plan
de estudios de la Bauhaus Berlinesa, por
llevar la creación fotográfica a un nivel
de perfección técnica, a un conocimiento
total de la cámara fotográfica con el fin
de poder sacar el máximo provecho a las
características que le son intrínsecas al
medio.</p>

<p>Hacer una experimentación visual,
meticulosa, planeada, sin embargo, la
sombra de Moholy-Nagy y de su esposa,
lo habrían de acompañar siempre durante
su estancia en la Bauhaus. Peterhans
también incursionó en la fotografía
publicitaria, cuando la Bauhaus es cerrada
definitivamente, Walter, al igual que
otros miembros de la escuela emigra a
Norteamérica; al término de la guerra
regresa a Alemania y es profesor en ULM
(Droste, 2023).</p>

<p>Es importante señalar que debido a este
acontecimiento y a que los integrantes de
la Bauhaus, estudiantes y docentes, fueron
obligados a dejar la escuela y huir hacia
otras naciones, fue que la Bauhaus tuvo una
presencia e influencia internacional. Si bien
en su mayoría fueron acogidos por escuelas
de Estados Unidos, América Latina también
recibió a muchos de sus integrantes y la
huella que dejaron por todo el continente se
puede apreciar hoy día desde el Rio Bravo
hasta la Patagonia.</p>

<p>La influencia de la Bauhaus es tal que
las enseñanzas en las escuelas siguen
teniendo un profundo espíritu bauhasiano,
los planes de estudio de las instituciones
latinoamericanas siguen estando
impregnadas de los ideales, conceptos y
planteamientos de esta escuela legendaria
para la arquitectura, el diseño gráfico, el
industrial la comunicación visual y las artes.</p>

<p>La Bauhaus la podemos encontrar
en muchísimas manifestaciones
arquitectónicas, las llamadas casas
de interés social dan muestra de ello,
en la cerámica la podemos encontrar
en vajillas, platos y tazas, en el diseño
textil, de electrodomésticos, en la danza
contemporánea, en el teatro, en la música
y sí, también, en la fotografía. La influencia
de la Bauhaus en la creación fotográfica es
fundamental para entender movimientos
fotográficos europeos que llegaron a todos
los rincones de la Tierra.</p>

<p>La fotografía publicitaria comercial, cultural
y artística se ha nutrido de la visión del
suprematismo, constructivismos rusos
y alemán; de la multifacética Bauhaus,
después de 1945, el grafismo, fotografismo,
fotografía subjetiva dieron origen en la
década del siglo pasado a tendencias
conceptuales como el fotodiseño y, ya en el
Siglo XXI, a lo que se conoce como diseño
fotográfico, que es la terminología que
aglutina la combinación de los lenguajes
del diseño, la comunicación visual y la
fotografía.</p>

<p>La Bauhaus como se ha descrito, constituye
un verdadero crisol de vanguardias,
corrientes artísticas, que, desde su creación
como escuela, reunió a mentes libre
pensantes, que quizá, no siendo conscientes
a plenitud de su impacto a nivel global,
cambiaron para siempre la forma de
impartir cualquier disciplina de las artes,
diseños y arquitectura. A esta escuela le
debemos en gran medida la forma en que
vivimos, en como vemos el mundo, los
objetos que usamos a diario; la Bauhaus
siendo un cuenco de reunión del saber, llegó
para quedarse, a pesar de que sus puertas
físicas fueron cerradas por la fuerza.</p>

<img src="./assets/d12.png" alt="Archundia 12">
      <figcaption>
        Fotografía 12 Archundia, Osvaldo: Cotelé-textura visual-fotografismo. (2025)
      </figcaption>
    </figure>

<p><strong>Referencias bibliográficas</strong></p>

<p>Anikst, Mikhail. (1989). Diseño gráfico soviético de los años veinte. Barcelona. GG</p>
<p>Bajac, Quentin. (2015). La fotografía: la época moderna 1880-1960. Blume</p>
<p>Bieger-Thielmann, Marianne, et al. (2013). La fotografía del siglo XX Museum Ludwig
Colonia. Madrid. Taschen</p>
<p>Droste, Magdalena. (2023). Bauhaus. Berlín. Taschen</p>
<p>Fiedler Jeannine, et al. (2006). Bauhaus. Barcelona. H. F. Ullmann.</p>
<p>Lottman Herbert. (2003). El París de Man Ray. Barcelona. Tusquets</p>
<p>Lupton, Ellen. (1994). El abc de la Bauhaus y la teoría del diseño. Barcelona. GG</p>
<p>Newhall, Beaumont. (2002). Historia de la Fotografía. Barcelona. Gustavo</p>`,
  },

  "Paisaje": {
    title: "Habitando la 42 desde el paisaje sonoro",
    text: `<p><i>Autores* y compositores°</i></p>
    
    <p><strong>Juliana Mesa Jaramillo*</strong>
<i>Fagotista -
Doctora en Artes Musicales</i></p>

<p><strong>Sofía García Cárdenas*</strong>
<i>Pianista -
Estudiante de Pregrado Fundación Universitaria Bellas Artes</i></p>

<p><strong>Ricardo Gil*</strong>
<i>Trompetista -
Estudiante de Pregrado Fundación Universitaria Bellas Artes</i></p>

<p><strong>Johan Sebastian Prado*°</strong>
<i>Violinista -
Estudiante de Pregrado Fundación Universitaria Bellas Artes</i></p>

<p><strong>Maria Magenta Neira°</strong>
<i>APianista -
Estudiante de Pregrado Universidad EAFIT</i></p>

<p><strong>Santiago Cárdenas Amelines°</strong>
<i>Bajista -
Estudiante de Pregrado Fundación Universitaria Bellas Artes</i></p>

<p><strong>Resumen</strong></p>

<p>El siguiente artículo presenta los resultados
del proyecto Uniendo sedes a través del
paisaje sonoro, desarrollado por el semillero
de Investigación Creación en Música de la
Fundación Universitaria Bellas Artes, en
colaboración con el semillero de Prácticas
Fotográficas, de la misma institución.
El objetivo principal fue generar mayor
consciencia sobre la experiencia sonora
vivida por los estudiantes al transitar la
carrera 42 (Córdoba), entre las sedes de
la institución.</p>

<p>La metodología se centró
en la grabación, análisis, intervención y
composición de obras, utilizando como
materia prima las sonoridades que habitan
este espacio. Como resultado artístico, el
semillero de música, junto con el semillero
de prácticas fotográficas, realizaron una
instalación interactiva, en el espacio “Casa
Pública” de la Sociedad de Mejoras Públicas,
el 15 de noviembre de 2024, en donde se
invitó a los visitantes a tener una escucha
consciente y reflexiva, y a interactuar
activamente con los sonidos, resignificando
la experiencia de transitar y habitar el
espacio seleccionado.</p>

<p><strong>Palabras clave:</strong> paisaje sonoro, centro
de Medellín, carrera 42, experimentación
sonora, semillero de investigación-creación.</p>

<p><strong>Abstract</strong></p>

<p>The following article presents the results
of the project Uniting Campuses Through
the Soundscape, developed by the research-
creation music group at Fundación
Universitaria Bellas Artes, in collaboration
with the photographic practices research
group. The main objective was to raise
greater awareness of the auditory
experience lived by students as they move
along Carrera 42 (Córdoba), between the
institution’s two campuses.</p>

<p>The methodology focused on the recording,
analysis, intervention, and composition of
sound pieces, using the sonic qualities of
this environment as raw material. As an
artistic outcome, the music research group,
together with the photographic practices
group, carried out an interactive installation
at Casa Pública, part of the Sociedad de
Mejoras Públicas, on November 15, 2024. In
this space, visitors were invited to engage in
conscious and reflective listening, actively
interacting with the sounds and resignifying
the experience of moving through and
inhabiting the selected area.</p>

<p><strong>Keywords:</strong> soundscape, downtown
Medellín, Carrera 42, sound
experimentation, research-creation group.</p>

<p><strong>Todo lo que escuchamos</strong></p>

<p><i>“Reconquistar la riqueza de la escucha
requiere un esfuerzo de concentración
considerable en la actualidad” (Cabrelles
Sagredo, 2006, p. 49).</i></p>

<p>En inglés, la palabra “landscape” (paisaje)
describe todo aquello que vemos. ¿Qué
palabra podría abarcar, de igual manera,
todo lo que escuchamos? La respuesta es
“soundscape” (paisaje sonoro), término
acuñado por el músico, pedagogo y escritor
canadiense R. Murray Schafer (1993) quien,
desde la década de 1960, exploró la relación
entre lo sonoro, el espacio, la psicoacústica
y las posibilidades que estas materias
ofrecen a la música, el medio ambiente
y la formación musical. Si bien Schafer
formalizó este concepto, es importante
mencionar que aproximaciones similares ya
se intuían en otras prácticas artísticas. Tal
es el caso del cineasta Walter Ruttmann,
quien en su obra Wochenende (1930), en
lugar de recurrir a imágenes visuales, optó
por grabar sonidos cotidianos en su forma
más cruda: campanas de iglesia, fábricas,
niños en la escuela, adultos trabajando o
comercios en plena actividad (Saénz, 2024).
Esta obra prefiguraba ya una manera de
retratar el entorno a través del oído.</p>

<p>En (2018), Cohabitar Sonoro, una
residencia artística de performance y
arte sonoro tuvo lugar en Lota, Chile. En
el texto curatorial que acompaña esta
experiencia, se plantea cómo lo auditivo
se presenta como una alternativa para
habitar los espacios, desafiando el ojo-
centrismo. La escucha, según declaran,
es nuestro vínculo sensible con el mundo,
abriendo posibilidades de resignificación del
territorio, de nuestra experiencia sonora y
de nosotros mismos.</p>

<p>Reflexionar profundamente sobre lo que
escuchamos suscita diversas preguntas,
experiencias y posibilidades. Se vuelve
necesario comprender la materia sonora, su
vínculo con los espacios y el oído humano;
encontrar distintas formas de categorizar
los sonidos, tal vez según sus decibeles,
frecuencia vibrátil (Hz), o la frecuencia
con la que se escucha un sonido en espacio
determinado, entender qué produce estos
sonidos, sea el mismo ser humano, un
ave, un carro, una máquina, factores o
fenómenos ambientales, entre otros. Schafer
propone también que estas sonoridades
pueden ser analizadas por su longitud,
frecuencia y continuidad, lo cual permite
trazar verdaderas cartografías sonoras. A
partir de este enfoque, emergen conceptos
como el de marca sonora (soundmark),
que al igual que los landmarks geográficos,
se refiere a aquellos sonidos únicos que
identifican a una comunidad. En Medellín,
por ejemplo, el Tranvía de Ayacucho
constituye una marca sonora que da cuenta
de la vida urbana del lugar. Según Schafer
(1993), una vez identificadas, estas marcas
merecen ser protegidas, pues constituyen
la memoria acústica de un entorno. Es así
como, con las herramientas tecnológicas
actuales, ha sido posible expandir las
formas de análisis y representación del
paisaje sonoro urbano. Tecnologías como
la grabación binaural y el mapeo acústico,
permiten registrar y visualizar niveles de
presión sonora en zonas específicas durante
lapsos determinados. Estas herramientas
no solo facilitan la documentación y
preservación de los paisajes sonoros,
sino que también revelan aspectos del
entorno que podrían pasar desapercibidos.</p>

<p>Compositoras como Hildegard Westerkamp
han explorado esta dimensión de forma
creativa: en su obra Whisper Study (1975),
parte de una grabación de su propia voz
diciendo “When there is no sound” y la
palabra “Silence”, indagando en los límites
perceptuales del sonido y del silencio mismo
(Poe, 2025).</p>

<img src="./assets/e1.png" alt="Paisaje">
    </figure>

<p>Sin embargo, estos sonidos, en
determinados momentos, se convierten en
parte de la vida cotidiana hasta convertirse
en “ruido”, que, como dice Schafer
(1993) “los ruidos son aquellos sonidos
que hemos aprendido a ignorar” (p.20),
convirtiéndose entonces en elementos que
pasan desapercibidos. Los paisajes sonoros
nos sitúan en el tiempo y en el espacio,
permitiendo reconocer ambientes a través
de sus sonidos característicos (Cabrelles
Sagredo, 2006).</p>

<p>El paisaje sonoro en sí mismo actúa
como material y fuente de investigación,
dándonos la oportunidad de sumergirnos
en cada detalle de la acústica urbana,
sus matices, sus colores y sus timbres.
Reconocer cada una de estas características
sonoras es también reconocer el territorio
donde habitamos, sus dinámicas y sus
ritmos. A través del paisaje sonoro el ser
humano toma conciencia plena de que en
sí mismo él también es paisaje que resuena
en cada espacio que ocupa en el mundo.
Estos paisajes sonoros actúan como la
“voz” de una sociedad, paisaje o ambiente,
y son inseparables de su contexto específico
(Cabrelles Sagredo, 2006).</p>

<p><strong>Paisaje sonoro y ciudad: cohabitando
la 42 desde lo sonoro</strong></p>

<p>Dentro de los enfoques, estudios
y aplicaciones del paisaje sonoro,
encontramos su vínculo con lo urbano,
las sonoridades cohabitan la cuidad con
nosotros y se transforman en parte de
nuestra cotidianidad. Juan Pablo Murillo
(2019, p. 9) resalta la importancia de
realizar estudios a fondo relacionados con
el paisaje sonoro, en especial el urbano,
utilizando como argumento la necesidad de
eliminar la concepción de contaminación
auditiva para transformarla en elementos
estéticos de la ciudad. Esta visión está en
sintonía con los planteamientos de Walter
Gropius en la Bauhaus, donde se buscaba
integrar el arte a la vida cotidiana. De
manera similar, Katya Mandoki propone
una “estética en la vida cotidiana” que
reconoce el valor sensible y significativo
de los estímulos del entorno, incluyendo lo
sonoro (Mandoki, 2006).</p>

<p>En la carrera 42 (Córdoba), entre la avenida
La Playa y la calle Ayacucho, se encuentran
las dos sedes de la Fundación Universitaria
Bellas Artes (FUBA). Como estudiantes
de la institución, transitamos este espacio
constantemente, a menudo en piloto
automático. El propósito de este semillero
fue recuperar los elementos que conforman
el paisaje sonoro y visual del recorrido,
para integrarlos en productos creativos e
interactivos que permitan a la comunidad
universitaria tomar conciencia y resignificar
el espacio.</p>

<img src="./assets/e2.png" alt="Paisaje 2">
    </figure>
  
<p><strong>Metodología</strong></p>

<p>El proyecto comenzó con la captura de
los sonidos que hacían parte del paisaje;
aquí se incluyeron tanto sonidos naturales
y humanos (por ejemplo: el viento, los
pájaros, conversaciones, gritos) como
artificiales (entre los cuales resaltaban
la sirena del tranvía; los automóviles
desplazándose, tocando la bocina; golpes
de herramientas de construcción; entre
otros). Posteriormente, las grabaciones se
exportaron a una estación de trabajo de
audio digital (DAW) y fueron utilizadas
por tres estudiantes de música para la
creación de piezas experimentales que
buscaban evocar diferentes sensaciones
y emociones experimentadas al recorrer
la carrera 42, desde el estrés causado por
la sobreestimulación auditiva hasta la
exploración de las cualidades musicales de
estos sonidos.</p>

<p>La segunda etapa de la instalación se
realizó en colaboración con el semillero de
Fotografía. Los estudiantes de fotografía
utilizaron las piezas musicales como
inspiración para crear imágenes, utilizando
diversas técnicas de captura y edición que
complementaran la experiencia sensorial.
El resultado fue una obra multimedia que
fusionó lo visual y lo auditivo.</p>

<p>El montaje final se realizó con la
participación de estudiantes, docentes
y colaboradores, en un salón de “Casa
Pública” de la Sociedad de Mejoras
Públicas. Se dispuso un sistema de sonido
envolvente, un televisor y un proyector para
las fotografías, velas eléctricas decorativas
y, fuera de la sala, un teclado MIDI que
permitía a los asistentes reproducir los
sonidos recogidos entre ambas sedes.
También se exhibió una maqueta del tramo
de la carrera 42, elaborada por miembros
del semillero.</p>

<p>La exposición estuvo abierta al público el
15 de noviembre de 2024, de 1:00 p. m. a
5:00 p. m. Asistieron estudiantes activos y
egresados de la FUBA, docentes, personas
del sector de la Comuna 10 La Candelaria
y jóvenes de otras instituciones cercanas.
La respuesta del público fue positiva,
mostrando interés y curiosidad por la
instalación.</p>

<p><strong>Fase 1</strong></p>

<p>Durante la primera fase, se realizaron
una serie de investigaciones sobre el
paisaje sonoro para entender su origen,
enfocándonos principalmente en Murray
Shafer como referente principal. Esto nos
permitió crear una base de antecedentes
estructurado, así como un estado del arte
del tema. Adicionalmente, se tuvo la visita
del profesor Paulo Salazar quien ayudó a
encaminar la investigación.</p>

<img src="./assets/e3.png" alt="Paisaje 3">
    </figure>

<p><strong>Fase 2</strong></p>

<p>La segunda fase, se basó en realizar la
recolección de datos sonoros utilizando una
grabadora Zoom H4n en el recorrido entre
las dos sedes de la FUBA. Las grabaciones
se realizaron en dos horarios: de 8:00
a9:00 a.m. y de 5:00 a6:00 p.m.</p>

<p><strong>Mapa del espacio recorrido</strong></p>

<img src="./assets/e4.png" alt="Paisaje 4">
      <figcaption>
        Imagen 1: Tomado de https://centrodemedellin.co/
        mapaCentro.aspx Muestra los lugares en donde se
        ubicó la grabadora.
      </figcaption>
    </figure>

<img src="./assets/e5.png" alt="Paisaje 5">
      <figcaption>
        Imagen 2: Maqueta realizada por Laura Kogan y
        Mariana Londoño, representando el espacio sonoro
        investigado.
      </figcaption>
    </figure>

<p><strong>Fase 3</strong></p>

<p>Catalogación de los sonidos según
categorías adaptadas de las propuestas de
Schafer, mediante el uso de Sonic Visualizer
y Reaper, para su ubicación en una
cartografía sonora.</p>

<p><strong>Ejemplo del análisis realizado:</strong></p>

<img src="./assets/e6.png" alt="Paisaje 6">
      <figcaption>
        Gráfico 1: Elaboración propia
      </figcaption>
    </figure>

<p><strong>Fase 4</strong></p>

<p>Experimentación creativa y creación de la
experiencia sonora</p>

<img src="./assets/e7.png" alt="Paisaje 7">
      <figcaption>
        Fotografía 1: Magenta Neira grabando el palo
        de lluvia mientras escucha elementos del paisaje
        sonoro.
      </figcaption>
    </figure>

<p><strong>Fase 5</strong></p>

<p>Montaje y exposición de resultados del
proyecto.</p>

<img src="./assets/e9.png" alt="Paisaje 9">
      <figcaption>
        Foto 2: Integrantes del semillero, Johan Sebastian
        Prado, Santiago Cárdenas y Magenta Neira, prueban
        el funcionamiento del dispositivo MIDI adaptado con
        elementos del paisaje sonoro investigado.
      </figcaption>
    </figure>

<p><strong>Resultados</strong></p>

<p>Los resultados obtenidos de este proyecto
de investigación pueden verse reflejados en
el texto curatorial escrito por Sofía García
Cárdenas y expuesto a la entrada de la
instalación interactiva, El ejercicio resumió
de manera clara las expectativas que tenían
los integrantes del semillero al invitar a los
participantes a vivir la experiencia a la que
fueron invitados.</p>

<p><i>El sonido nos acompaña y se
transforma constantemente a
nuestro alrededor, según los lugares
que transitamos y nuestro nivel de
consciencia al escuchar. Sin embargo,
muchas sonoridades nos pasan
desapercibidas, ya sea porque no
tenemos la disposición de escuchar,
por andar en piloto automático o por
la cantidad de estímulos visuales que
muchas veces suelen primar y llevarse
nuestra atención.
¿Qué pasaría si fuésemos más
conscientes de los sonidos que
cohabitan en los espacios?
¿Escucharíamos sonidos inesperados,
nuevos? ¿Cambiaría nuestra
percepción y manera de transitar y
habitar los espacios?
Preguntas como estas mueven
las creaciones y experiencias
presentadas en esta sala por nuestro
semillero, a través de las reflexiones
y exploraciones sonoras nacidas del
recorrido por la carrera 42 (Córdoba)
entre ambas sedes de la Fundación
Universitaria Bellas Artes; invitamos
con esta muestra a quien se atreva,
a tener una escucha más activa y
consciente, a dejarse atravesar por
los sonidos, cohabitar los espacios con
ellos y tomar la batuta de la orquesta
viva de la cuidad. (García Cárdenas,
2024)</i></p>

<p>Los resultados obtenidos de la experiencia
creativa se materializaron en tres
composiciones musicales realizadas por
algunos de los miembros del semillero.
Estas composiciones incluyeron elementos
de las grabaciones obtenidas durante la
fase uno. Adicionalmente, los fotógrafos del
semillero de fotografía (Julián Martínez,
María José Cadavid, Gustavo Montoya y
Enrique Aguirre), presentaron en bucle, sus
series fotográficas durante la instalación.
Con estas fotografías y algunos videos,
se realizó un proceso curatorial para
sincronizarlas con lo audios y generar los
videos que se pueden ver en el canal de
YouTube institucional.</p>

<p><strong>Composiciones musicales:</strong></p>

<p><strong>Cápsula Ayacucho - Maria Magenta
Neira</strong></p>

<p>¿Por qué creamos vínculos emocionales con
el paisaje sonoro que habitamos? y, ¿cómo
entendemos nuestra relación emocional con
esa sonoridad? Cápsula1 es un intento de
desenredar esas preguntas.
Las vértebras de esta pieza son los buses,
sus pitos y frenos intentando calmadamente
encontrar armonía. La médula que dirige
ese coro vehicular son las voces: parlantes y
cantantes.</p>

<p>La cápsula de tiempo es un dispositivo
resignificado de objetos, momentos, lugares
y, en este intento, sonidos, a través de la
memoria. Cápsula Ayacucho se enterró
con retazos de grabaciones tomadas del
recorrido desde la FUBA (Ayacucho)
hasta el Palacio de Bellas Artes (La Playa)
y devuelta. Esas manos que sepultaron
abrumadas por el ruido hoy excavan con
emoción y no pueden evitar sentir nostalgia
al contemplar el contenido de la cápsula.
Como los baños en el río de Heráclito, un
paisaje sonoro no se escucha dos veces.
Entrando en terreno más técnico, Cápsula1
utiliza únicamente sampleo digital de
las grabaciones tomadas en el semillero
(no utiliza fuentes de sonido externas).
Desde síntesis granular (reorganización
de fragmentos pequeños a minúsculos
de un audio) para el dron de buseta que
inaugura y se mantiene en la pieza, hasta
aleatoriedad en la selección de samples
a través de herramientas MIDI. La
intención de esta creación fue subvertir
las reacciones emocionales a estas calles
tan densas sonoramente. Aunque con
elementos aleatorios estruendosos y toscos,
Cápsula1 en conjunto es lenta, silenciosa e
introspectiva.</p>

<p>Enlace: <a href="https://youtu.be/
MrL6Z384AJ4?si=vZ77DsY1P7f_jZ8a" target="_blank">Abrir enlace</a></p>

<p><strong>Estrés – Johan Sebastian Prado</strong></p>

<p>“Estrés” es una obra experimental enfocada
al diseño sonoro de las calles Ayacucho con
Córdoba en el centro de Medellín. La obra
busca expresar las emociones que podría
experimentar una persona en una situación
de sobre estimulación auditiva y el estrés
que esto conlleva.</p>

<p>Enlace: <a href="https://youtu.be/
f0pW0aNhiLE?si=aAMHU4_o5hXqgYWr" target="_blank">Abrir enlace</a></p>

<p><strong>Habitando Ayacucho – Santiago
Cárdenas Amelines</strong></p>

<p>De una forma corta, se intenta representar
un poco lo que es habitar el centro de
Medellín, encontrando elementos claves
como lo pueden ser el tranvía y los
pregoneros (vendedores ambulantes),
intentando darle una nueva perspectiva
y sensación a lo que es una relación más
estrecha con esta parte del centro.</p>

<p>Enlace: <a href=" https://youtu.be/
MOQSDTzLYO4?si=ChacJ2gps6XdtvFp" target="_blank">Abrir enlace</a></p>

<p><strong>Resultados de las encuestas</strong></p>

<p>Durante la instalación, los participantes
llenaron unas encuestas en donde se
revelaron que los sonidos más impactantes
fueron los urbanos y de transporte (tranvía,
buses, carros), los sonidos caóticos y
ruidosos (martillos, frituras) y los sonidos
inesperados o naturales (cantos de
aves). Las palabras más usadas por los
asistentes para describir la experiencia
fueron: “caótico”, “ruido”, “consciencia”,
“imaginación”, “orgánico” y “urbano”.
La relación entre audios y fotografías
fue reconocida como complementaria,
aunque la disposición de las imágenes y
sonidos fue aleatoria. Algunos participantes
encontraron en esta relación una fuente
de evocación personal y reflexión sobre el
entorno.</p>

<img src="./assets/e10.png" alt="Paisaje ">
    </figure>

<p><strong>Conclusión</strong></p>

<p>El soundscape (paisaje sonoro) se
convierte a partir de este tipo de procesos
y experimentaciones en una puerta hacia
una nueva manera de percibir la realidad.
Es una conexión directa entre lo externo
(el ambiente) y lo interno (el cuerpo).
Esta relación está delicadamente mediada
por diversos factores: la hora del día, los
objetos presentes, la posición del oyente
y las fuentes de escucha, entre otros. En
pocas palabras, lo que nos enseña el paisaje
sonoro es que aunque Ayacucho sea la
misma calle, con el mismo tranvía y a la
misma hora, siempre presentará variaciones
dependiendo de quién la escuche, cómo la
escuche y desde dónde la escuche. Todo
capta sonido; por lo tanto, todo cambia en
virtud de esta variable.</p>

<p><strong>Referencias</strong></p>

<p>AISTEC. (2017, noviembre 8). Mapa de Ruido: Formas de elaboración y fuentes de ruido.
aistec. https://aistec.com/fuentes-mapa-de-ruido/
Cabrelles Sagredo, M. a S. (2006). EL PAISAJE SONORO: “UNA EXPERIENCIA BASADA
EN LA PERCEPCIÓN DEL ENTORNO ACÚSTICO COTIDIANO”. Revista de Folklore, 302,
49-56.</p>
<p>Cohabitar Sonoro: Residencia de performance y arte sonoro. (2018). Facebook. https://
www.facebook.com/events/317801035399294/?acontext=%7B%22event_action_his-
tory%22%3A[%7B%22surface%22%3A%22external_search_engine%22%7D%2C%7B%-
22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%-
7D]%2C%22ref_notif_type%22%3Anull%7D</p>
<p>García Cárdenas, S. (2024). Uniendo sedes a través del paisaje sonoro.</p>
<p>Mandoki, K. (2006). Prosaica uno: Estética cotidiana y juegos de la cultura. Siglo Vein-
tiuno Editores. https://katyamandoki.com/books/prosaica-uno</p>
<p>Murillo Alvarez, J. P. (2019). Entre paisajes y pasajes [Fundación Universitaria Bellas
Artes]. https://bellasartesmed.janium.net/janium-bin/janium_login_opac.pl?find&ficha_
no=2029</p>
<p>Poe, M. (2025). Hildegard Westerkamp: A Life in Soundscape Composition [Podcast].
https://open.spotify.com/episode/1CoOc0Lqq4MPuAStFIXGWe</p>
<p>Saénz, C. (2024, agosto 14). Walter Ruttmann, pionero de la experimentación sonora en el
cine. El Siglo de Torreón. https://www.elsiglodetorreon.com.mx/noticia/2024/walter-ru-
ttmann-pionero-de-la-experimentacion-sonora-en-el-cine.html</p>
<p>Schafer, R. M. (1993). El paisaje sonoro y la afinación del mundo. Intermedio Editores.</p>
<p>Vansur, G. (2020, febrero 14). Técnicas de grabación binaural. EQUAPHON. https://equa-
phon.net/tecnicas-de-grabacion-binaural/</p>

<p><strong>Bibliografía</strong></p>

<p>Guastavino, C. (2006). The ideal urban soundscape: Investigating the sound quality of
French cities. Acta Acustica united with Acustica, 92(6), 945-951.</p>
<p>Schafer, R. M. (1969). The new soundscape. Don Mills: BMI Canada Limited.</p>
<p>Schafer, R. M. (Ed.). (1978). The Vancouver Soundscape. World Soundscape Project,
Sonic Research Studio, Department of Communication, Simon Fraser University</p>
<p>SCHAFER, R. M. (1994): Hacia una Educación Sonora. Pedagogías Musicales Abiertas,
Buenos Aires.</p>`,
  },

  "Próximamente": {
    title: "Próximamente",
    text: `<p>Próximamente aquí podrá disfrutar el próximo artículo de la revista Progresivo.
    Le invitamos a descargar el PDF con la revista completa al inicio de esta página.</p>`,
  }
};

// Eventos
document.querySelectorAll(".sidebar-list button").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".sidebar-list button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.article;
    const article = articles[key];

    viewer.innerHTML = `
      <div class="article-card fade-up">
    <h2>${article.title}</h2>
    ${article.text}
    ${article.img ? `<img src="${article.img}" alt="">` : ""}
  </div>
      
    `;
  });
});