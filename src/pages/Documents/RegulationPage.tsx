import logoDelVientoALosAndes from '../../assets/images/logoDelVientoALosAndes.png'
import Header from '../../components/Header/Header'
import './Documents.css'

function RegulationPage() {
    return (
        <main className="regulation-page min-h-screen bg-[#0F0F10] text-white">
            <Header />

            <section className="px-6 pb-24 pt-32 md:px-10">
                <div className="mx-auto max-w-5xl">

                    {/* =====================================================
              HEADER
          ====================================================== */}

                    <header className="regulation-hero text-center">
                        <img
                            src={logoDelVientoALosAndes}
                            alt="Rally del Viento a los Andes"
                            className="mx-auto mb-8 w-44 md:w-52"
                        />

                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C08A45]">
                            Documento oficial
                        </p>

                        <h1 className="text-3xl font-semibold uppercase tracking-[0.12em] md:text-5xl">
                            Reglamento
                        </h1>

                        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/50">
                            Rally en parejas · 3 etapas
                        </p>

                        <div className="mx-auto mt-8 h-px w-16 bg-[#C08A45]" />
                    </header>

                    {/* =====================================================
              DOCUMENT INTRODUCTION
          ====================================================== */}

                    <article className="regulation-document mt-16">

                        <header className="regulation-document-header">
                            <img
                                src={logoDelVientoALosAndes}
                                alt="Rally del Viento a los Andes"
                                className="mx-auto mb-6 w-36"
                                style={{ objectFit: 'contain' }}
                            />
                            <p className="text-center text-xs font-medium uppercase tracking-[0.16em] text-[#C08A45]">
                                5ta. Edición
                            </p>

                            <h2 className="mt-3 text-center text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                                Rally en parejas por etapas
                            </h2>

                            <p className="mt-3 text-center text-lg italic text-white/60">
                                “DEL VIENTO A LOS ANDES”
                            </p>

                            <p className="mt-4 text-center text-xs uppercase tracking-[0.14em] text-white/40">
                                06, 07 y 08 de febrero de 2026
                            </p>
                        </header>

                        <div className="regulation-introduction mt-12 space-y-6 text-base leading-8 text-white/70">
                            <p>
                                El rally “Del Viento a los Andes” es una competencia de
                                Mountain Bike de 262 km, a realizar en tres etapas, que une
                                los parajes y pueblos del norte neuquino, en el departamento
                                Minas.
                            </p>

                            <p>
                                El recorrido tiene como eje al rio Neuquén, transitando rutas
                                provinciales en las imponentes montañas de la Cordillera del
                                Viento, con cruces de arroyos, aguas termales, paisaje único
                                por veranadas con variada fauna característica de la zona,
                                lagunas, y un regreso por la Cordillera de los Andes uniendo
                                19 pueblos y parajes del norte de la provincia del Neuquén,
                                Patagonia Argentina.
                            </p>

                            <p>
                                Salida desde la localidad de Huinganco por rp n°39 hacia
                                Charra Ruca, Butalón Norte, Colo Michico, empalme con rp n°
                                43, Varvarco; posteriormente hacia las Ramadillas, Atreuco,
                                Villa Aguas Calientes, Ailinco, laguna Varvarco Tapia en los
                                Cerrillos; empalme rp n°54 hacia Pichi Neuquén, Manzano
                                Amargo; empalme rp n° 43 hacia Invernada Vieja, Las Ovejas,
                                Bella Vista, Los Carrizos, (Villa Nahueve), Cayanta, Camalón,
                                Andacollo, empalme rp n°39 hacia Huaraco, finalizando en
                                Huinganco.
                            </p>

                            <p>
                                Será una vivencia inolvidable, donde el clima y geografía
                                pueden hacer de este un gran desafío, marcado por el
                                compañerismo, trabajo en equipo, valores deportivos, junto a
                                la fortaleza física y mental del team. Escenarios paradisíacos
                                en contacto absoluto con la naturaleza, donde cada ciclista
                                tendrá la oportunidad de compartir la ruta del criancero,
                                gastronomía típica y la cultura propia de esta zona.
                            </p>
                        </div>

                        {/* ===================================================
                TABLE OF CONTENTS
            ==================================================== */}

                        <nav className="regulation-contents mt-16 border-y border-white/10 py-8">
                            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#C08A45]">
                                Contenido
                            </p>

                            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                                <a href="#modalidad" className="regulation-content-link">
                                    <span>01</span>
                                    <span>Modalidad de la competencia</span>
                                </a>

                                <a href="#categorias" className="regulation-content-link">
                                    <span>02</span>
                                    <span>Categorías</span>
                                </a>

                                <a href="#premiacion" className="regulation-content-link">
                                    <span>03</span>
                                    <span>Premiación</span>
                                </a>

                                <a href="#recorrido" className="regulation-content-link">
                                    <span>04</span>
                                    <span>Descripción del recorrido</span>
                                </a>

                                <a href="#reglamento" className="regulation-content-link">
                                    <span>05</span>
                                    <span>Reglamento</span>
                                </a>

                                <a href="#inscripciones" className="regulation-content-link">
                                    <span>06</span>
                                    <span>Inscripciones</span>
                                </a>

                                <a href="#tiempos-corte" className="regulation-content-link">
                                    <span>07</span>
                                    <span>Tiempos de corte</span>
                                </a>

                                <a href="#bicicletas" className="regulation-content-link">
                                    <span>08</span>
                                    <span>Bicicletas</span>
                                </a>

                                <a href="#denuncias" className="regulation-content-link">
                                    <span>09</span>
                                    <span>Denuncias</span>
                                </a>
                            </div>
                        </nav>

                        {/* ===================================================
                01 — MODALIDAD
            ==================================================== */}

                        <section id="modalidad" className="regulation-section">
                            <RegulationSectionHeader
                                number="01"
                                title="Modalidad de la competencia"
                            />

                            <div className="regulation-body">
                                <RegulationItem label="a">
                                    Será en parejas, las mismas deberán encuadrar en las
                                    categorías que dispone la organización, sin excepción.
                                </RegulationItem>

                                <RegulationItem label="b">
                                    Opción individual tres etapas categoría única damas y
                                    caballeros.
                                </RegulationItem>

                                <RegulationItem label="c">
                                    Cada equipo e individual deberá proveer su traslado al
                                    lugar de partida (Huinganco), debiendo estar en dicho lugar
                                    el día jueves 05/02/26 para la acreditación y entrega de
                                    equipaje. Concluye la etapa 3 en la misma localidad, allí
                                    se realizará la premiación y posterior desconcentración del
                                    evento.
                                </RegulationItem>

                                <RegulationItem label="d">
                                    Finalizada la etapa 1 en la localidad de Varvarco, los
                                    corredores tendrán la opción de ingresar al campamento de
                                    la organización, o tramitar su estadía de manera particular
                                    en hosterías y cabañas de las cercanías.
                                    <br />
                                    <br />
                                    Finalizada la etapa 2 en los Cerrillos, los participantes
                                    ingresarán al Campamento “Rally del Viento a los Andes”. La
                                    permanencia en el mismo es de carácter obligatorio para
                                    corredores, disponiendo del servicio de baños, alimentación
                                    anunciada, asistencia médica, y servicios opcionales.
                                </RegulationItem>

                                <RegulationItem label="e">
                                    La clasificación final será por suma de tiempos de las tres
                                    etapas. Se tendrán en cuenta eventuales penalizaciones en
                                    tiempo, por situaciones extradeportivas, determinadas por el
                                    director del evento.
                                </RegulationItem>

                                <RegulationItem label="f">
                                    La pareja debe cruzar junta la meta, tomando el tiempo de la
                                    tercera rueda.
                                </RegulationItem>

                                <RegulationItem label="g">
                                    Si por razones mecánicas o físicas (caídas, descompensación,
                                    etc.), un corredor o equipo, no pueden completar una etapa,
                                    tendrán la posibilidad de continuar en carrera y clasificar,
                                    asignándole en esa etapa el tiempo del último equipo en
                                    llegar más dos minutos.
                                </RegulationItem>

                                <RegulationItem label="h">
                                    Si un integrante del equipo abandona la competencia, se le
                                    permitirá al compañero/a completar el recorrido, sin tiempo
                                    y clasificación, recibiendo asistencia en carrera.
                                </RegulationItem>

                                <RegulationItem label="i">
                                    La carrera se define como de autosuficiencia, por lo que
                                    está prohibido recibir en el desarrollo de cada etapa
                                    asistencia externa. Podrán ser asistidos y abastecidos en
                                    los pass y campamentos.
                                </RegulationItem>

                                <RegulationItem label="j">
                                    Los servicios y permanencia en campamento son de
                                    exclusividad para corredores.
                                </RegulationItem>
                            </div>
                        </section>

                        {/* ===================================================
                02 — CATEGORÍAS
            ==================================================== */}

                        <section id="categorias" className="regulation-section">
                            <RegulationSectionHeader
                                number="02"
                                title="Categorías"
                            />

                            <div className="regulation-body">

                                <RegulationCategory title="Damas">
                                    <p>Damas A: 15 a 34 años.</p>
                                    <p>Damas B: 35 a 49 años.</p>
                                    <p>Damas C: + 50 años.</p>
                                </RegulationCategory>

                                <RegulationCategory title="Mixto">
                                    <p>Mixto A: 15 a 34 años.</p>
                                    <p>Mixto B: 35 a 49 años.</p>
                                    <p>Mixto C: + 50 años.</p>
                                </RegulationCategory>

                                <RegulationCategory title="Caballeros">
                                    <p>Elite: 15 a 29 años.</p>
                                    <p>Master A: 30 a 39 años.</p>
                                    <p>Master B: 40 a 49 años.</p>
                                    <p>Master C: 50 a 59 años.</p>
                                    <p>Master D: + 60 años.</p>
                                </RegulationCategory>

                                <RegulationCategory title="Individual">
                                    <p>Damas única.</p>
                                    <p>Caballeros única – tres etapas.</p>
                                </RegulationCategory>

                                <div className="mt-8 space-y-5">
                                    <p>
                                        La categoría será definida con la edad del corredor al
                                        05 de febrero del 2026.
                                    </p>

                                    <p>
                                        En Mixto la categoría se define por la edad de la dama.
                                    </p>

                                    <p>
                                        Las categorías de damas y caballeros serán definidas por
                                        el de menor edad.
                                    </p>

                                    <p>
                                        Se habilitará cada categoría con un mínimo de 4 parejas.
                                        Si el número es menor, pasarán a integrar la categoría
                                        inmediata inferior. Si fueran menos en la categoría
                                        elite, pasarán a integrar la categoría inmediata
                                        superior.
                                    </p>

                                    <p>
                                        La categoría individual única abarca todas las edades de
                                        damas y caballeros, para tres etapas.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* ===================================================
                03 — PREMIACIÓN
            ==================================================== */}

                        <section id="premiacion" className="regulation-section">
                            <RegulationSectionHeader
                                number="03"
                                title="Premiación"
                            />

                            <div className="regulation-body">
                                <RegulationItem label="">
                                    Por etapas: medalla al primero de cada categoría.
                                </RegulationItem>

                                <RegulationItem label="">
                                    Premiación final: Jersey de Campeón Rally 3 etapas “Del
                                    Viento a los Andes” 2025 a la pareja ganadora de cada
                                    categoría.
                                </RegulationItem>

                                <RegulationItem label="">
                                    Medalla del primero al tercero de cada categoría.
                                </RegulationItem>

                                <RegulationItem label="">
                                    General primero al quinto.
                                </RegulationItem>

                                <RegulationItem label="">
                                    Premiación individual categoría única femenino y masculino:
                                    jersey de campeón.
                                </RegulationItem>

                                <RegulationItem label="">
                                    Medalla al primero de cada etapa.
                                </RegulationItem>

                                <RegulationItem label="">
                                    General del primero al quinto.
                                </RegulationItem>

                                <RegulationItem label="">
                                    Medallas finisher para quienes concluyan el recorrido,
                                    tanto en la individual, como en parejas.
                                </RegulationItem>
                            </div>
                        </section>

                        {/* ===================================================
                04 — DESCRIPCIÓN DEL RECORRIDO
            ==================================================== */}

                        <section id="recorrido" className="regulation-section">
                            <RegulationSectionHeader
                                number="04"
                                title="Descripción del recorrido"
                            />

                            <div className="regulation-body">

                                <div className="mb-12">
                                    <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.22em] text-[#C08A45]">
                                        Etapas y distancias
                                    </p>

                                    <RegulationStage
                                        number="01"
                                        title="Junto al viento"
                                        route="Huinganco — Varvarco"
                                        distance="53 KM"
                                        date="06/02/26"
                                        start="8:00 a.m."
                                    >
                                        <p>
                                            Esta etapa da inicio en la localidad de Huinganco, a
                                            1300 msnm; la largada será frente a la Municipalidad, se
                                            transitará sobre ruta prov. n° 39; el primer paraje que
                                            cruzarán es Charra Ruca (donde se encuentra el área
                                            natural Cañada Molina con los cipreses más antiguos de
                                            América).
                                        </p>

                                        <p>
                                            Siguiendo la margen izquierda del rio Neuquén hacia el
                                            norte, hay múltiples cruces de cajones de arroyos del
                                            deshielo de la cordillera, donde en el km 18 estará el
                                            primer pass de control, pasaran frente a la cascada de
                                            Cañada Félix, a pocos kilómetros del paraje Butalón
                                            Norte, donde se puede visualizar un puente emblemático
                                            que da una particular vista sobre el rio Neuquén.
                                        </p>

                                        <p>
                                            A continuación, el pass 2 en el km 36. Continuando
                                            pasaran por Colo Michico (paraje donde se encuentran
                                            bloques de arte rupestre siendo este uno de los sitios
                                            de riqueza arqueológica más importante de América).
                                        </p>

                                        <p>
                                            Más al norte, tenemos el empalme con Ruta Prov. N °43,
                                            llegando a la localidad de Varvarco, a 1250 msnm. En
                                            este lugar finaliza la primera etapa.
                                        </p>
                                    </RegulationStage>

                                    <RegulationStage
                                        number="02"
                                        title="En lo alto"
                                        route="Varvarco — Los Cerrillos · Laguna Varvarco Tapia"
                                        distance="73 KM"
                                        date="07/02/26"
                                        start="08:00 a.m."
                                    >
                                        <p>
                                            La etapa da inicio en la localidad de Varvarco,
                                            considerada la puerta del Domuyo, y nos permitirá
                                            transitar entre peculiares formaciones rocosas,
                                            pronunciados precipicios y pendientes, junto al vuelo
                                            del cóndor, encontrando el pass 1 en el km 17, pasando
                                            por los cajones de los a° Atreuco y Covunco, la villa
                                            Aguas Calientes, lugar turístico por excelencia del
                                            Norte Neuquino por sus aguas termales.
                                        </p>

                                        <p>
                                            Aquí estará el pass 2, km 32. Etapa de mucho cambio
                                            geográfico con descensos pronunciados y escaladas, donde
                                            cada pareja pondrá a prueba el trabajo en equipo y
                                            fortaleza mental.
                                        </p>

                                        <p>
                                            Pasarán por la capilla de Ailinco, donde se encontrarán
                                            con el pass 3 (km 42) y la festividad popular de la
                                            Virgen de Lourdes, donde cientos de creyentes, gente de
                                            a caballo, crianceros, turistas y vecinos confraternizan
                                            para celebrar en este lugar perdido, al pie del Volcán
                                            Domuyo.
                                        </p>

                                        <p>
                                            Desde allí entraremos en zonas de veranadas, donde
                                            familias trashumantes cuidan de sus animales.
                                            Cruzando el puente sobre el rio Manchana Covunco, estará
                                            el pass 4, km 56, desde donde ascenderán hasta Los
                                            Cerrillos, finalizando la etapa a 1.965 msnm.
                                        </p>

                                        <p>
                                            Esta será una etapa desafiante, donde el cerro Domuyo
                                            escoltará a cada pareja hasta llegar a la meta en la
                                            laguna Varvarco Tapia, muy cerca de la naciente del Rio
                                            Neuquén.
                                        </p>
                                    </RegulationStage>

                                    <RegulationStage
                                        number="03"
                                        title="Uniendo rios"
                                        route="Laguna Varvarco Tapia — Huinganco"
                                        distance="136 KM"
                                        date="08/02/26"
                                        start="7:00 a.m."
                                    >
                                        <p>
                                            Esta última etapa inicia con una pequeña trepada de 200
                                            mts que nos coloca en el punto más alto del recorrido,
                                            en el empalme con ruta provincial n° 54, a 2040 msnm;
                                            desde ahí los ciclistas tendrán un largo y vertiginoso
                                            descenso por el cajón del rio Neuquén, con muchos
                                            cruces de su cauce en su naciente, pequeñas trepadas,
                                            curvas muy pronunciadas que requerirán mucho dominio de
                                            la bicicleta, pura aventura sobre ruedas que requieren
                                            extremar cuidados.
                                        </p>

                                        <p>
                                            Pasando el puente de piedras, en el km 40, el primer
                                            pass. Siguiendo con un descenso menos pronunciado, el
                                            paraje Pichi Neuquén y la cascada La Fragua anunciarán
                                            el arribo a la localidad de Manzano Amargo.
                                        </p>

                                        <p>
                                            Aquí se asentará el segundo pass y control, en el km 64
                                            de la etapa, y cada team se podrá abastecer de
                                            alimentos, hidratarse, habrá asistencia mecánica y podrá
                                            ser controlado por enfermería (quién evaluará de ser
                                            necesario la continuidad de cada ciclista).
                                        </p>

                                        <p>
                                            Saliendo de esta bella localidad del norte neuquino
                                            cruzarán el a° Ranquileo, encontrando el tercer pass en
                                            el c° la pata, km 75, para empalmar nuevamente con la
                                            ruta prov. n° 43, pasando por el paraje Invernada Vieja
                                            (4to. Pass, km87), que nos llevará hasta el mirador “la
                                            puntilla parque ufológico” ya cercano a la localidad de
                                            Las Ovejas cumpliendo 98 km., donde será quinto pass y
                                            el punto de corte de carrera.
                                        </p>

                                        <p>
                                            Saliendo de esta localidad y sobre ruta provincial n°
                                            43 transitarán los únicos 33 km de asfalto hasta el
                                            puente sobre el rio Neuquén con el pass (km 116) y el 7
                                            (km 132), próximo al ingreso a la localidad de Andacollo
                                            y desde ahí por asfalto nuevamente quedaran sobre ruta
                                            provincial n° 39, en los últimos 5 km hasta la localidad
                                            de Huinganco, finalizando el rally.
                                        </p>
                                    </RegulationStage>
                                </div>
                            </div>
                        </section>

                        {/* ===================================================
                05 — REGLAMENTO
            ==================================================== */}

                        <section id="reglamento" className="regulation-section">
                            <RegulationSectionHeader
                                number="05"
                                title="Reglamento"
                            />

                            <div className="regulation-body">
                                <RegulationItem label="a">
                                    La organización asegura el encuadre deportivo de la
                                    competencia (señalización del circuito, cronometraje,
                                    logística general, etc.) y asistencia médica durante la
                                    misma.
                                </RegulationItem>

                                <RegulationItem label="b">
                                    El Rally “Del Viento a Los Andes” se correrá por equipos
                                    conformados por dos corredores varones, mujeres o mixto,
                                    que se encuadre dentro de las categorías previstas en el
                                    reglamento y tendrá la opción individual categoría única
                                    varones y damas.
                                </RegulationItem>

                                <RegulationItem label="c">
                                    La organización controlará a través del director del evento
                                    el cumplimiento del reglamento por parte de los
                                    competidores, quienes al momento de inscribirse declaran
                                    conocerlo en su totalidad, y que tiene carácter de
                                    definitivo e irreversible.
                                </RegulationItem>

                                <RegulationItem label="d">
                                    El circuito puede ser modificado o acortado por la
                                    organización en función de factores de fuerza mayor. Como
                                    así también modificar y/o sacar etapas, cambio de horarios
                                    y puntos de largada, debido a situaciones climáticas y de
                                    fuerza mayor que la organización considere de riesgo para
                                    los corredores y logística.
                                </RegulationItem>

                                <RegulationItem label="e">
                                    La competencia no se suspende por mal tiempo, a no ser por
                                    alerta meteorológico.
                                </RegulationItem>

                                <RegulationItem label="f">
                                    La organización y director médico podrán evaluar la
                                    continuidad o no de un participante dentro de la
                                    competencia, siempre y cuando consideren que su estado de
                                    salud no es el apropiado para seguir en carrera.
                                </RegulationItem>

                                <RegulationItem label="g">
                                    La Organización podrá dejar fuera de competencia a aquellos
                                    que muestren falta de conducta y/o provoquen disturbios o
                                    actitudes antideportivas en campamentos y carrera.
                                </RegulationItem>

                                <RegulationItem label="h">
                                    Todo tipo de alimentación particular, sea por dietas o
                                    prescripción médica es a cargo del corredor al igual que lo
                                    necesario para cada etapa (geles, bebidas isotónicas. etc.).
                                </RegulationItem>

                                <RegulationItem label="i">
                                    La organización proveerá una alimentación basada en
                                    carbohidratos y proteínas, frutas y verduras.
                                </RegulationItem>

                                <RegulationItem label="j">
                                    La organización se reserva el derecho de rechazar la
                                    inscripción de aquellos interesados en participar que
                                    tengan antecedentes antideportivos o sanciones
                                    disciplinarias.
                                </RegulationItem>

                                <RegulationItem label="k">
                                    Los corredores eximen a la Organización, a sus sponsors,
                                    colaboradores y a sus agentes y empleados de cualquier
                                    reclamo o demanda resultante de un daño al equipo técnico
                                    de carrera, a sus materiales y propiedades, incluyendo,
                                    pero no limitando, pérdida o extravío, roturas, etc.
                                </RegulationItem>

                                <RegulationItem label="l">
                                    La organización dispondrá de fotógrafos oficiales del
                                    evento.
                                </RegulationItem>

                                <RegulationItem label="m">
                                    La organización dispondrá de atención médica en carrera y
                                    campamentos, ante cualquier accidente se brindarán los
                                    primeros auxilios y se trasladará al hospital público más
                                    cercano.
                                </RegulationItem>

                                <RegulationItem label="n">
                                    Aquellos corredores que abandonen o desistan de largar una
                                    etapa serán trasladados en el vehículo barredora de la
                                    organización, o podrán optar por hacerlo en sus vehículos
                                    particulares, dando aviso a la organización.
                                </RegulationItem>

                                <RegulationItem label="o">
                                    La organización no permite acompañamiento de vehículos
                                    externos a la organización a corredores durante la carrera,
                                    se sancionará al team o individual con tiempo de recargo
                                    según informe de comisarios deportivos.
                                </RegulationItem>
                            </div>
                        </section>

                        {/* ===================================================
                06 — INSCRIPCIONES
            ==================================================== */}

                        <section id="inscripciones" className="regulation-section">
                            <RegulationSectionHeader
                                number="06"
                                title="Inscripciones"
                            />

                            <div className="regulation-body">
                                <RegulationItem label="a">
                                    Las inscripciones se realizan a través del link de
                                    inscripción, disponible en la web
                                    www.rallydelvientoalosandes.com y en las redes Facebook:
                                    RallyDelVientoALosAndes, e Instagram:
                                    Rally_delvientoalosandes
                                </RegulationItem>

                                <RegulationItem label="b">
                                    Contacto para consultas: por watsap al 2942648722./
                                    2942550754
                                </RegulationItem>

                                <RegulationItem label="c">
                                    Se habilita la inscripción desde el 05/08/25 hasta el
                                    05/01/26.
                                </RegulationItem>

                                <RegulationItem label="d">
                                    El periodo tendrá vigencia hasta cubrir los cupos
                                    estipulados por la organización.
                                </RegulationItem>

                                <RegulationItem label="e">
                                    El valor para cada team será de $500.000 (quinientos mil)
                                    con las siguientes opciones reserva de cupo) y 1 pago de
                                    $250.000.- (dosciento cincuenta mil pesos) al 05/12/25, o 1
                                    pago de $ 200.000 (dosciento mil pesos) antes del 05/09/25,
                                    1 pago de $ 200.000 (dosciento mil pesos) al 05/10/25 y 1
                                    pago de $100.000.- (cien mil pesos) al 05/11/25 será por
                                    transferencia bancaria saldado el total al del 05/12/25.
                                    Se abre una segunda etapa de inscripción, a partir del
                                    05/12/25 hasta el 01/01/26, cuyo valor para el team será
                                    según ajuste inflacionarios.
                                </RegulationItem>

                                <RegulationItem label="f">
                                    El valor para individual será de $ 300.000, (trecientos mil),
                                    podrá ser abonado en un pago o dos, diciembre y enero,
                                    debiendo completar el saldo al 15/01/26.
                                </RegulationItem>

                                <RegulationItem label="g">
                                    El valor para correr la primera etapa de manera individual
                                    promocional es de $60.000.- (sesenta mil pesos), por
                                    transferencia bancaria saldada antes del 05/12/25. El
                                    segundo periodo tendrá un valor de, según ajuste
                                    inflacionario.
                                </RegulationItem>

                                <RegulationItem label="h">
                                    Se considera la dupla y al individual inscripto cuando
                                    completa el pago de la inscripción, y envía el comprobante
                                    del mismo por whatsapps al 2942648722 con nombre del team.
                                </RegulationItem>

                                <RegulationItem label="i">
                                    Pago por transferencia al cbu 0970044451002623110045 alias:
                                    DESEO.PRENDA.RACION. BANCO PROVINCIA NEUQUEN, titular:
                                    Barrera María Daniela.
                                </RegulationItem>

                                <RegulationItem label="j">
                                    la inscripción incluye: jersey rally del Viento a los Andes
                                    edición 2026; placas con número del equipo; medalla
                                    finisher; hidratación, frutas y snacks en puestos de
                                    hidratación y abastecimiento; atención médica; seguro del
                                    corredor; servicio de barredora para corredor y bicicleta;
                                    pulsera identificadora del corredor; baños en campamentos;
                                    dos desayunos, dos viandas en llegada de etapa, dos
                                    meriendas, dos cenas; traslado de un bolso o mochila con
                                    elementos personales por corredor (sin excepción);
                                    traslado de bulto con carpa, aislantes, bolsas de dormir,
                                    repuestos, etc., del equipo; ambulancia y asistencia de
                                    enfermería en carrera y en los campamentos, traslado a
                                    centros asistenciales públicos de salud; charlas técnicas,
                                    oficina de carrera.
                                    <br />
                                    <br />
                                    No incluye el servicio mecánico, que será ofrecido por
                                    terceros (habilitados por la organización) en campamento, a
                                    costo del corredor.
                                </RegulationItem>

                                <RegulationItem label="k">
                                    La acreditación, entrega de kit, se realizará el día jueves
                                    05/02/26 en la localidad de Huinganco, en lugar y horario a
                                    determinar. Será el único momento para este fin.
                                </RegulationItem>

                                <RegulationItem label="l">
                                    Cada team deberá presentar al momento de la acreditación,
                                    su DNI, certificado médico de aptitud provisto por la
                                    organización en su página web, deslinde de responsabilidad
                                    dispuesta por la organización, para firmar de puño y letra
                                    en ese momento, autorización para menores (de ser
                                    necesario). Sin estos requisitos, no podrán participar del
                                    evento, sin excepciones.
                                </RegulationItem>

                                <RegulationItem label="m">
                                    En caso de no participación, la inscripción NO es
                                    reintegrable, si podrá ser transferible hasta el 05/01/2026,
                                    en tal caso quien no participe deberá enviar correo
                                    electrónico a ciclismohuinganco@gmail.com, indicando su baja
                                    y los datos de la transferencia.
                                </RegulationItem>

                                <RegulationItem label="n">
                                    Todos los menores de 18 años deberán presentar autorización
                                    expresa de sus padres o tutor legal, junto a copia del DNI
                                    de los mismos, y sus firmas en la declaración dispuesta por
                                    la organización, SIN dicha documentación no podrán
                                    participar del evento, sin excepciones.
                                </RegulationItem>
                            </div>
                        </section>

                        {/* ===================================================
                07 — TIEMPOS DE CORTE
            ==================================================== */}

                        <section id="tiempos-corte" className="regulation-section">
                            <RegulationSectionHeader
                                number="07"
                                title="Tiempos de corte"
                            />

                            <div className="regulation-body">
                                <RegulationItem label="a">
                                    Horario máximo permitido oficialmente por la organización
                                    del rally, para terminar una etapa, será informada el día
                                    anterior a la largada de cada etapa.
                                </RegulationItem>

                                <RegulationItem label="b">
                                    Quien se reúse a ser trasladado por la organización en ese
                                    tiempo límite, será automáticamente considerado fuera de
                                    carrera en la etapa, calificará con el tiempo máximo de la
                                    etapa y la organización no se responsabilizará de aquellos
                                    que pasado el tiempo insistan en permanecer en el circuito
                                    para culminarlos.
                                </RegulationItem>

                                <RegulationItem label="c">
                                    Barredora: es el vehículo de asistencia dispuesto por la
                                    organización para cerrar cada etapa.
                                </RegulationItem>
                            </div>
                        </section>

                        {/* ===================================================
                08 — BICICLETAS
            ==================================================== */}

                        <section id="bicicletas" className="regulation-section">
                            <RegulationSectionHeader
                                number="08"
                                title="Bicicletas"
                            />

                            <div className="regulation-body">
                                <RegulationItem label="a">
                                    Serán permitidas bicicletas de Mountain bike rodado 26;
                                    27,5 ó 29.
                                </RegulationItem>

                                <RegulationItem label="b">
                                    Cada ciclista deberá contar con su número frontal siempre
                                    visible a efectos de ser fácilmente identificado.
                                </RegulationItem>

                                <RegulationItem label="c">
                                    Cada bicicleta será verificada por el director deportivo y
                                    su equipo al inicio y final de cada etapa, a fin de
                                    controlar cualquier situación antideportiva o que ponga en
                                    riesgo su integridad física y la de otros competidores.
                                </RegulationItem>

                                <RegulationItem label="d">
                                    Los extremos del manubrio no podrán tener aristas
                                    irregulares o cortantes, tampoco en los pedales.
                                </RegulationItem>

                                <RegulationItem label="e">
                                    No se permitirán en manubrios, extensiones, apliques o
                                    prolongaciones de ningún tipo.
                                </RegulationItem>

                                <RegulationItem label="f">
                                    La relación plato- piñón será libre.
                                </RegulationItem>

                                <RegulationItem label="g">
                                    Cada ciclista es responsable del mantenimiento y cuidado de
                                    su bicicleta.
                                </RegulationItem>

                                <RegulationItem label="h">
                                    La bicicleta de montaña es el único medio de transporte
                                    durante la carrera, permitiéndose la marcha a pie cargando
                                    la bicicleta o abandonándola en caso de deterioro
                                    irreparable (en dicho caso la organización no se hace cargo
                                    de la misma hasta que llegue la barredora), para arribar
                                    con el compañero ya sea los dos en una misma bicicleta o
                                    alternándose en el uso de la misma. Los que no cumplan
                                    serán descalificados. Los corredores deberán llegar
                                    exhibiendo sus placas con el número de la pareja
                                    correspondiente.
                                </RegulationItem>

                                <RegulationItem label="i">
                                    Ningún corredor podrá cruzar la línea de meta sin su
                                    compañero.
                                </RegulationItem>

                                <RegulationItem label="j">
                                    Si bien el espíritu de solidaridad es propio de la carrera,
                                    por cuestiones de seguridad y respeto a los demás
                                    participantes, está prohibido tirarse/remolcarse uniendo
                                    las bicicletas con cualquier tipo de suplemento. En caso de
                                    que un miembro necesite ayuda el otro podrá ir empujándolo.
                                </RegulationItem>

                                <RegulationItem label="k">
                                    En los pass de hidratación o abastecimiento, podrán ser
                                    asistidos por terceros con arreglos mecánicos, incluyendo
                                    el cambio de ruedas, acción que será informada.
                                </RegulationItem>

                                <RegulationItem label="l">
                                    No se puede cambiar de bicicleta durante el desarrollo de
                                    la etapa.
                                </RegulationItem>

                                <RegulationItem label="m">
                                    No se permitirá el seguimiento de ningún tipo de vehículo
                                    motorizado a los corredores.
                                </RegulationItem>

                                <RegulationItem label="n">
                                    Todos los ciclistas deberán utilizar vestimenta adecuada:
                                    jersey, calza o maillot.
                                </RegulationItem>

                                <RegulationItem label="o">
                                    Cada team deberá vestir idéntico jersey o campera en caso
                                    de usarla en competencia.
                                </RegulationItem>

                                <RegulationItem label="p">
                                    Equipamiento obligatorio durante la prueba. Cada corredor
                                    debe poseer:
                                    <br />
                                    <br />
                                    Bicicleta de Montaña (mtb) en perfectas condiciones, casco
                                    de ciclismo rígido (es obligatorio el uso del mismo mientras
                                    dure la prueba, el incumplimiento será motivo de
                                    descalificación), tapones en el manubrio, gafas y guantes,
                                    número de equipo colocado en la parte delantera de la
                                    bicicleta, el que será provisto por la Organización (la
                                    placa no se puede modificar por ningún motivo), sus propias
                                    herramientas y repuestos, los que pueden ser complementados
                                    entre los integrantes del equipo.
                                    <br />
                                    <br />
                                    Opcionales: rompeviento o campera, doble caramañola y/o
                                    mochila de hidratación.
                                </RegulationItem>

                                <RegulationItem label="q">
                                    Cada team deberá traer carpa tipo Iglú para 2 personas sin
                                    excepción, colchonetas y bolsas de dormir, repuestos y
                                    herramientas podrán ser alcanzados en el desarrollo de la
                                    prueba en las zona de abastecimiento y/o campamentos. Plato
                                    y jarro plástico, cubiertos.
                                </RegulationItem>

                                <RegulationItem label="r">
                                    Cada corredor individual deberá traer carpa para 1 o
                                    compartir con otro corredor, colchoneta y bolsa de dormir,
                                    repuestos y herramientas podrán ser alcanzados en el
                                    desarrollo de la prueba en la zona de abastecimiento y/o
                                    campamentos, plato y jarro plásticos, cubiertos.
                                </RegulationItem>

                                <RegulationItem label="s">
                                    Toda solución de problemas en las bicicletas debe ser
                                    efectuada únicamente por los integrantes de cada equipo, a
                                    excepción de mecánicos de la organización o asistentes en
                                    zona de abastecimiento y/o campamentos. La organización se
                                    reserva el derecho a denegar la salida a los equipos que no
                                    cumplan con este equipamiento y reglamentación.
                                </RegulationItem>

                                <RegulationItem label="t">
                                    El rally “Del viento a los Andes” se desarrollará sobre
                                    rutas provinciales y en la vía pública, por lo que todos los
                                    competidores deben acatar y obedecer las leyes de tránsito
                                    correspondiente, ya que el tránsito será libre.
                                </RegulationItem>
                            </div>
                        </section>

                        {/* ===================================================
                09 — DENUNCIAS
            ==================================================== */}

                        <section id="denuncias" className="regulation-section">
                            <RegulationSectionHeader
                                number="09"
                                title="Denuncias"
                            />

                            <div className="regulation-body">
                                <p>
                                    Las denuncias que efectúen los competidores sobre otros,
                                    serán recibidas finalizada la etapa del día, debiendo
                                    depositar previamente el valor de $ 40.000 (pesos cuarenta
                                    mil), que serán reintegrados al comprobarse la denuncia.
                                    Caso contrario será retenido por la organización.
                                </p>

                                <p>
                                    La denuncia se realizará por escrito, debiéndose acompañar
                                    la firma de dos corredores testigos, que la avalen junto al
                                    competidor denunciante, pudiendo adjuntar material
                                    audiovisual. No se aceptarán denuncias de no corredores.
                                </p>

                                <p>
                                    Los competidores deberán cuidar de no hacer daño a la
                                    naturaleza, no arrojarán basura ni desperdicios de ningún
                                    tipo, respetando las normas establecidas para Áreas
                                    Naturales Protegidas Provinciales.
                                </p>

                                <p>
                                    Además, guardarán respeto a los pobladores, nuestra cultura,
                                    vegetación y fauna de los distintos lugares por los que se
                                    transitará.
                                </p>
                            </div>
                        </section>

                        {/* ===================================================
                CLOSING
            ==================================================== */}

                        <footer className="regulation-closing">
                            <div className="mx-auto h-px w-16 bg-[#C08A45]" />

                            <p className="mt-8 text-center text-xl font-medium uppercase tracking-[0.12em] text-white/80">
                                ¡¡¡¡¡¡¡¡¡¡¡¡¡¡LOS ESPERAMOS!!!!!!!!!!!!!!!!!!
                            </p>
                        </footer>
                    </article>

                    {/* =====================================================
              ACTIONS
          ====================================================== */}

                    <div className="regulation-actions mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="w-full border border-[#C08A45]/60 px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#C08A45] transition-colors hover:border-[#C08A45] hover:bg-[#C08A45] hover:text-[#0F0F10] sm:w-auto"
                        >
                            Imprimir / Guardar PDF
                        </button>

                        <a
                            href="/documentos"
                            className="w-full px-7 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white sm:w-auto"
                        >
                            Volver a documentos
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

/* ===============================================================
   COMPONENTES AUXILIARES
================================================================ */

type RegulationSectionHeaderProps = {
    number: string
    title: string
}

function RegulationSectionHeader({
    number,
    title,
}: RegulationSectionHeaderProps) {
    return (
        <header className="regulation-section-header">
            <div className="flex items-end gap-5">
                <span className="text-sm font-medium tracking-[0.18em] text-[#C08A45]">
                    {number}
                </span>

                <h2 className="text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
                    {title}
                </h2>
            </div>

            <div className="mt-6 h-px bg-white/10" />
        </header>
    )
}

type RegulationItemProps = {
    label: string
    children: React.ReactNode
}

function RegulationItem({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className={`regulation-item ${label ? '' : 'regulation-item-no-label'}`}>
      {label && (
        <span className="regulation-item-label">
          {label}
        </span>
      )}

      <div className="regulation-item-content">
        {children}
      </div>
    </div>
  )
}

type RegulationCategoryProps = {
    title: string
    children: React.ReactNode
}

function RegulationCategory({
    title,
    children,
}: RegulationCategoryProps) {
    return (
        <div className="regulation-category">
            <h3>{title}</h3>

            <div className="mt-3 space-y-1">
                {children}
            </div>
        </div>
    )
}

type RegulationStageProps = {
    number: string
    title: string
    route: string
    distance: string
    date: string
    start: string
    children: React.ReactNode
}

function RegulationStage({
    number,
    title,
    route,
    distance,
    date,
    start,
    children,
}: RegulationStageProps) {
    return (
        <article className="regulation-stage">
            <div className="regulation-stage-heading">
                <div className="flex items-start gap-4">
                    <span className="text-xs font-medium tracking-[0.16em] text-[#C08A45]">
                        ETAPA {number}
                    </span>

                    <h3 className="text-xl font-semibold uppercase tracking-[0.08em]">
                        “{title}”
                    </h3>
                </div>

                <div className="mt-5 grid gap-3 border-y border-white/10 py-5 text-xs uppercase tracking-[0.12em] text-white/40 sm:grid-cols-3">
                    <div>
                        <span className="block text-[9px] tracking-[0.2em] text-white/25">
                            Recorrido
                        </span>
                        <span className="mt-1 block text-white/60">
                            {route}
                        </span>
                    </div>

                    <div>
                        <span className="block text-[9px] tracking-[0.2em] text-white/25">
                            Distancia
                        </span>
                        <span className="mt-1 block text-white/60">
                            {distance}
                        </span>
                    </div>

                    <div>
                        <span className="block text-[9px] tracking-[0.2em] text-white/25">
                            Largada
                        </span>
                        <span className="mt-1 block text-white/60">
                            {date} · {start}
                        </span>
                    </div>
                </div>
            </div>

            <div className="regulation-stage-content">
                {children}
            </div>
        </article>
    )
}

export default RegulationPage
