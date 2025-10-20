import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          formRef.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setIsSending(false);
          //console.error("Erreur d'envoi :", error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      );
  };

  return (
    <section className="py-20 bg-base-100 min-h-screen">
      <h2 className="text-4xl font-bold text-primary text-center mb-6">Me contacter 📬</h2>
          <p className="text-gray-700 text-center mb-8">
            Vous souhaitez collaborer, proposer une alternance ou simplement échanger ?  
            N'hésitez pas à me contacter via le formulaire ou les coordonnées ci-dessous.
          </p>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* === INFOS DE CONTACT === */}
        <div>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-xl" />
              <a href="mailto:adiyofouad@example.com" className="hover:text-primary">
                adiyofouad@example.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary text-xl" />
              <a href="tel:+33612345678" className="hover:text-primary">
                +33 6 12 34 56 78
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin className="text-primary text-xl" />
              <a
                href="https://www.linkedin.com/in/adiyofouad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                linkedin.com/in/adiyofouad
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaGithub className="text-primary text-xl" />
              <a
                href="https://github.com/AdiyoFouad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                github.com/AdiyoFouad
              </a>
            </div>
          </div>
        </div>

        {/* === FORMULAIRE DE CONTACT === */}
        <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Envoyez-moi un message ✉️</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Nom complet *</label>
              <input
                type="text"
                name="from_name"
                placeholder="Jean Dupont"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="from_email"
                placeholder="email@example.com"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="from_phone"
                placeholder="XX XX XX XX XX"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Objet *</label>
              <input
                type="text"
                name="subject"
                placeholder="Opportunité de stage, d'alternance, ..."
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                placeholder="Écrivez votre message ici..."
                required
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`btn btn-primary w-full mt-4 transition-transform duration-300 hover:scale-105 ${
                isSending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {sent && (
              <p className="text-green-600 text-center mt-4">
                ✅ Message envoyé avec succès !
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
