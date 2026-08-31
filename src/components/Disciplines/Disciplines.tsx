import './Disciplines.css'

const disciplines = [
  {
    number: '01',
    title: 'Rally Promocional',
    subtitle: 'Huinganco → Varvarco',
    description: 'Una única etapa para vivir la experiencia del Rally.',
    image: '/assets/photos/raw/paisajesincreibles.jpg',
  },
  {
    number: '02',
    title: 'Rally Duplas',
    subtitle: 'Tres etapas',
    description: 'Tres días de montaña, esfuerzo y compañerismo.',
    image: '/assets/photos/raw/crucedeaguastermales2aetapa.jpeg',
  },
  {
    number: '03',
    title: 'Rally Competitivo Individual',
    subtitle: 'Tres etapas',
    description: 'El desafío de recorrer la montaña a tu propio ritmo.',
    image: '/assets/photos/raw/rumboalvolcánDomuyo.jpg',
  },
]

function Disciplines() {
  return (
    <section id="disciplinas" className="disciplines">
      <div className="disciplines__header">
        <span className="disciplines__eyebrow">DISCIPLINAS</span>

        <h2>
          Elegí cómo vivir
          <br />
          el Rally.
        </h2>
      </div>

      <div className="disciplines__grid">
        {disciplines.map((discipline) => (
          <article className="discipline-card" key={discipline.number}>
            <img
              className="discipline-card__image"
              src={discipline.image}
              alt={discipline.title}
              loading="lazy"
            />

            <div className="discipline-card__overlay" />

            <div className="discipline-card__content">
              <span className="discipline-card__number">
                {discipline.number}
              </span>

              <div>
                <h3>{discipline.title}</h3>
                <p className="discipline-card__subtitle">
                  {discipline.subtitle}
                </p>
                <p className="discipline-card__description">
                  {discipline.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Disciplines