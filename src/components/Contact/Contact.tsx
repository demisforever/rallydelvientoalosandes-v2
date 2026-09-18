import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialState = {
  user_name: '',
  user_email: '',
  message: '',
}

const CONTACT = {
  whatsapp1: {
    label: 'WhatsApp',
    number: '+54 9 2942 648722',
    link: 'https://wa.me/5492942648722',
  },
  whatsapp2: {
    label: 'WhatsApp 2',
    number: '+54 9 2942 550754',
    link: 'https://wa.me/5492942550754',
  },
  email: 'ciclismohuinganco@gmail.com',
}

function Contact() {
  const [form, setForm] = useState(initialState)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (status !== 'idle') {
      setStatus('idle')
    }
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setIsSending(true)
    setStatus('idle')

    try {
      await emailjs.sendForm(
        'service_thah0ld',
        'template_bh9ddfg',
        event.currentTarget,
        '_tc4qFr-jml_sgIba',
      )

      setForm(initialState)
      setStatus('success')
    } catch (error) {
      console.error('Error enviando el mensaje:', error)
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#171717] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Formulario */}
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C08A45]">
              Contacto
            </span>

            <h2 className="mt-4 max-w-2xl text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl">
              Hablemos
              <br />
              del Rally.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              ¿Tenés alguna consulta sobre la carrera, las
              disciplinas, las etapas o la inscripción?
              Escribinos y nos pondremos en contacto.
            </p>

            <form
              name="sentMessage"
              className="mt-12"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                  >
                    Nombre
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="user_name"
                    value={form.user_name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C08A45]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="user_email"
                    value={form.user_email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C08A45]"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label
                  htmlFor="contact-message"
                  className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/40"
                >
                  Mensaje
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  required
                  className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C08A45]"
                />
              </div>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-fit bg-[#C08A45] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:scale-[1.02] hover:bg-[#d09a52] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSending
                    ? 'Enviando...'
                    : 'Enviar mensaje'}
                </button>

                {status === 'success' && (
                  <p className="text-xs text-white/60">
                    Mensaje enviado correctamente.
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-xs text-red-400">
                    No se pudo enviar el mensaje. Intentá
                    nuevamente.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="lg:pt-20">
            <span className="text-xs uppercase tracking-[0.25em] text-white/40">
              Información de contacto
            </span>

            <div className="mt-8 border-t border-white/10">
              {/* WhatsApp 1 */}
              <a
                href={CONTACT.whatsapp1.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-white/10 py-6"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  {CONTACT.whatsapp1.label}
                </span>

                <span className="mt-2 block text-sm text-white/70 transition-colors group-hover:text-[#C08A45]">
                  {CONTACT.whatsapp1.number}
                </span>
              </a>

              {/* WhatsApp 2 */}
              <a
                href={CONTACT.whatsapp2.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-white/10 py-6"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  {CONTACT.whatsapp2.label}
                </span>

                <span className="mt-2 block text-sm text-white/70 transition-colors group-hover:text-[#C08A45]">
                  {CONTACT.whatsapp2.number}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-white/10 py-6"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Email
                </span>

                <span className="mt-2 block break-all text-sm text-white/70 transition-colors group-hover:text-[#C08A45]">
                  {CONTACT.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact