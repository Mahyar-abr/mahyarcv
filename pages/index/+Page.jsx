import "./code.css";

export { Page };

function Page() {
  const skills = [
    "Développement Web",
    "Python",
    "Django",
    "React",
    "JavaScript",
    "Node.js",
    "API RESTful",
    "Docker",
    "Ubuntu Server",
    "Déploiement Web",
    "Développement Full-Stack",
    "Intelligence Artificielle",
  ];

  const interests = [
    "Langues",
    "Voyages",
    "Musique",
    "Cinéma",
    "Cuisine",
    "Développement personnel",
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans leading-relaxed">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-10 shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">
            Mahyar Aliakbariabar
          </h1>

          <p className="text-lg md:text-xl mt-3">
            Développeur Web | Étudiant en BTS SIO
          </p>

          <p className="mt-2 text-blue-100">
            Rouen, France
          </p>
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        {/* Profil */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">
            Profil
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              Passionné par l&apos;informatique, je suis arrivé en France avec
              l&apos;ambition de devenir ingénieur en informatique. Après une
              première année de licence IEEEA — Informatique, Électronique,
              Énergie Électrique et Automatique — j&apos;ai choisi de me
              réorienter vers le lycée privé La Châtaigneraie afin de suivre une
              formation plus pratique en Services Informatiques aux
              Organisations, davantage axée sur les compétences
              professionnelles.
            </p>

            <p>
              Depuis mon arrivée en France, j&apos;ai également réussi à
              décrocher un emploi étudiant, ce qui témoigne de mon sérieux, de
              ma motivation et de ma capacité d&apos;adaptation.
            </p>

            <p>
              En tant qu&apos;étudiant international maîtrisant trois langues,
              je suis déterminé à poursuivre mon développement personnel et
              professionnel, à approfondir mes compétences techniques et à
              contribuer à des projets innovants.
            </p>
          </div>
        </section>

        {/* Expériences professionnelles */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-6">
            Expériences professionnelles
          </h2>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
              <h3 className="text-2xl font-semibold">
                Développeur Web — Hiwatech
              </h3>

              <p className="text-gray-700 italic">
                2023 - 2024
              </p>
            </div>

            <p className="text-blue-900 font-semibold mb-3">
              Stage — Téhéran, Iran
            </p>

            <ul className="list-disc pl-5 text-lg space-y-2">
              <li>
                Développement de plugins Python avec Django et intelligence
                artificielle.
              </li>

              <li>
                Utilisation et intégration d&apos;API RESTful pour des
                applications web.
              </li>

              <li>
                Gestion d&apos;environnements serveurs Ubuntu avec Docker.
              </li>

              <li>
                Intégration de solutions web avec Python et Docker.
              </li>

              <li>
                Création de plugins innovants pour des applications web.
              </li>

              <li>
                Développement full-stack avec Python, Django, Node.js,
                JavaScript et API RESTful.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
              <h3 className="text-2xl font-semibold">
                Employé commercial polyvalent — Carrefour
              </h3>

              <p className="text-gray-700 italic">
                2025
              </p>
            </div>

            <p className="text-blue-900 font-semibold mb-3">
              Emploi étudiant — Rouen, France
            </p>

            <ul className="list-disc pl-5 text-lg space-y-2">
              <li>Préparation des commandes.</li>

              <li>
                Communication avec les clients et service à la clientèle.
              </li>

              <li>
                Vérification des produits manquants et mise en rayon en
                conséquence.
              </li>
            </ul>
          </div>
        </section>

        {/* Formation */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-6">
            Éducation et formation
          </h2>

          <div className="space-y-7">
            <div>
              <h3 className="text-2xl font-semibold">
                Première année de BTS SIO
              </h3>

              <p className="text-gray-700 mt-1">
                Lycée privé La Châtaigneraie
              </p>

              <p className="text-gray-600 italic">
                2026 — Rouen, France
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Première année de licence IEEEA
              </h3>

              <p className="text-gray-700 mt-1">
                Université de Rouen Normandie
              </p>

              <p className="text-gray-600 italic">
                2025 - 2026 — Rouen, France
              </p>

              <p className="text-gray-700 mt-2">
                Informatique, Électronique, Énergie Électrique et Automatique.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Formation en conception Web
              </h3>

              <p className="text-gray-700 mt-1">
                SEMATEC — IT Training Center
              </p>

              <p className="text-gray-600 italic">
                2023 — Téhéran, Iran
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Diplôme de fin d&apos;études secondaires
              </h3>

              <p className="text-gray-700 mt-1">
                Enghelab Eslami
              </p>

              <p className="text-gray-600 italic">
                2019 - 2022 — Téhéran, Iran
              </p>
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">
            Compétences numériques
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Langues */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">
            Compétences linguistiques
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-xl font-semibold text-blue-900">
                Persan
              </h3>

              <p className="text-gray-700 mt-1">
                Langue maternelle
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-xl font-semibold text-blue-900">
                Français
              </h3>

              <p className="text-gray-700 mt-1">
                Langue étrangère
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-xl font-semibold text-blue-900">
                Anglais
              </h3>

              <p className="text-gray-700 mt-1">
                Langue étrangère
              </p>
            </div>
          </div>
        </section>

        {/* Centres d’intérêt */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">
            Centres d&apos;intérêt
          </h2>

          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">
            Contact
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 space-y-3 text-lg">
            <p>
              <span className="font-semibold">E-mail : </span>

              <a
                href="mailto:mahyarabr96@gmail.com"
                className="text-blue-700 hover:underline break-all"
              >
                mahyarabr96@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold">Téléphone : </span>

              <a
                href="tel:0649241278"
                className="text-blue-700 hover:underline"
              >
                EMAIL ME PLEASE!
              </a>
            </p>

            <p>
              <span className="font-semibold">Ville : </span>
              Rouen, France
            </p>

            <p>
              <span className="font-semibold">Nationalité : </span>
              Iranienne
            </p>

            <p>
              <span className="font-semibold">Mobilité : </span>
              Oui
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center px-6 py-5">
        <p>
          © {new Date().getFullYear()} Mahyar Aliakbariabar
        </p>
      </footer>
    </div>
  );
}