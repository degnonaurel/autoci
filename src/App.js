// AutoCI Express - Site de revente de voitures Canada → Côte d'Ivoire

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import audiImage from './assets/Audi.jpg';
import mercedesImage from './assets/mercedes.jpeg';




const RetourButton = ({ to = "/" }) => (
  <Link to={to} className="inline-block mb-4 text-blue-700 hover:underline">
    ← Retour
  </Link>
);

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <Link to="/" className="text-xl font-bold">AutoCI Express</Link>
    <div className="flex flex-col items-end"> {/* Modification ici */}
    
      <Link to="/sondage" className="block">Sondage</Link> {/* Ajout de block */}
    </div>
  </nav>
);


const Footer = () => (
  <footer className="text-center p-4 bg-gray-200 mt-10">&copy; AutoCI Express</footer>
);

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);


const Home = () => (
  <div className="relative bg-gray-900 text-white overflow-hidden w-full min-h-screen">
    
    {/* Fond flouté et non interactif */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: 0.2,
        position: "fixed",
        width: "100%",
        height: "100vh",
        pointerEvents: "none", // 🟢 Empêche de bloquer les clics
      }}
    />

    {/* Contenu interactif */}
    <div className="relative z-10 px-6 md:px-12 py-16 min-h-screen flex flex-col items-center justify-center space-y-12 max-w-7xl mx-auto text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl"
      >
        AutoCI Express 🚘
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-2xl max-w-2xl drop-shadow-lg"
      >
        Nous gérons tout depuis le Canada 🇨🇦. Achetez votre voiture depuis la Côte d'Ivoire.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/voitures"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
        >
          Parcourir les voitures 🔍
        </Link>
      </motion.div>
    


    


      <FadeIn delay={0.9}>
        <div className="mt-10 bg-yellow-300 text-gray-900 px-6 py-6 rounded-2xl font-semibold text-lg shadow-lg max-w-xl">
          <p>Promo Juillet : 10% de réduction sur tous les véhicules jusqu'au 31 juillet ! 🎉</p>
        </div>
      </FadeIn>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {[{
          title: "Livraison rapide",
          icon: "🚚",
          text: "Sous 4 à 6 semaines à Abidjan, avec suivi personnalisé."
        }, {
          title: "Transparence totale",
          icon: "🔍",
          text: "Historique vérifié, zéro frais caché."
        }, {
          title: "Commande sur mesure",
          icon: "🛠️",
          text: "Choisissez. On importe selon vos critères."
        }].map((item, index) => (
          <FadeIn delay={1.2 + index * 0.2} key={index}>
            <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <section className="mt-24 w-full px-4">
        <FadeIn delay={2}>
          <h2 className="text-3xl font-bold text-white mb-12">
            Ce que disent nos clients
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            nom: "Abou de Yopougon",
            texte: "J'ai reçu ma voiture en 5 semaines comme promis. Service sérieux et communication au top !",
            note: 5
          }, {
            nom: "Élodie à Cocody",
            texte: "Je ne savais pas qu'on pouvait commander une voiture depuis le Canada aussi facilement. Merci AutoCI Express !",
            note: 4
          }, {
            nom: "Jean-Marc de Grand-Bassam",
            texte: "Professionnels du début à la fin. Je recommande à 100%.",
            note: 5
          }].map((avis, i) => (
            <FadeIn delay={2.2 + i * 0.2} key={i}>
              <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-yellow-400 text-xl mb-2">
                  {"★".repeat(avis.note)}{"☆".repeat(5 - avis.note)}
                </div>
                <p className="text-sm mb-4">"{avis.texte}"</p>
                <div className="text-sm font-bold">— {avis.nom}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-24 w-full px-4">
        <FadeIn delay={3}>
          <h2 className="text-3xl font-bold text-white mb-12">
            Comment ça marche ?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          {[{
            titre: "1. Choisissez votre voiture",
            icone: "🔍",
            texte: "Explorez notre catalogue filtrable selon vos préférences."
          }, {
            titre: "2. Commandez en ligne",
            icone: "🛒",
            texte: "Remplissez le formulaire sécurisé et choisissez votre mode de paiement."
          }, {
            titre: "3. Livraison rapide",
            icone: "📦",
            texte: "Votre véhicule est acheminé à Abidjan sous 4 à 6 semaines avec suivi complet."
          }].map((item, i) => (
            <FadeIn delay={3.2 + i * 0.2} key={i}>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{item.icone}</div>
                <h3 className="text-lg font-bold mb-2">{item.titre}</h3>
                <p className="text-sm text-gray-600">{item.texte}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  </div>
);



// Liste de voitures avec images réelles (Porsche, BMW, Audi, Mercedes)
const cars = [
  {
    id: 1,
    marque: "Porsche",
    modele: "Panamera Turbo",
    annee: 2022,
    prix: 125000,
    km: 8000,
    transmission: "Automatique",
    imageURL: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    marque: "BMW",
    modele: "M4 Competition",
    annee: 2023,
    prix: 89000,
    km: 5000,
    transmission: "Automatique",
    imageURL: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80",
  },
  {
    id: 3,
    marque: "Audi",
    modele: "RS7 Sportback",
    annee: 2021,
    prix: 95000,
    km: 12000,
    transmission: "Automatique",
    imageURL: audiImage,

  },
  {
    id: 4,
    marque: "Mercedes",
    modele: "AMG GT",
    annee: 2022,
    prix: 135000,
    km: 6500,
    transmission: "Automatique",
    imageURL: mercedesImage,
  }
];

const CarList = () => {
  const [filters, setFilters] = React.useState({
    marque: "",
    annee: "",
    prix: "",
    // Suppression du filtre transmission (toutes automatiques)
  });

  const filteredCars = cars.filter((car) => {
    const [minStr, maxStr] = filters.prix.split("-");
    const min = parseInt(minStr) || 0;
    const max = parseInt(maxStr) || Infinity;
  
    return (
      (filters.marque === "" || car.marque === filters.marque) &&
      (filters.annee === "" || car.annee.toString() === filters.annee) &&
      (filters.prix === "" || (car.prix >= min && car.prix <= max))
    );
  });

  // Options de filtre cohérentes
  const marques = ["Porsche", "BMW", "Audi", "Mercedes"];
  const annees = ["2023", "2022", "2021"];
  const prixOptions = [
    { label: "Tous prix", value: "" },
    { label: "Moins de 75 000", value: "0-75000" },
    { label: "75 000 – 100 000", value: "75000-100000" },
    { label: "100 000 – 130 000", value: "100000-130000" },
    { label: "130 000+", value: "130000-1000000" }
  ];
  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🚗 Voitures de prestige</h2>

      {/* Filtres cohérents */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <select
          className="p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
          value={filters.marque}
          onChange={(e) => setFilters({ ...filters, marque: e.target.value })}
        >
          <option value="">Toutes les marques</option>
          {marques.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          className="p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
          value={filters.annee}
          onChange={(e) => setFilters({ ...filters, annee: e.target.value })}
        >
          <option value="">Toutes les années</option>
          {annees.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        <select
          className="p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
          value={filters.prix}
          onChange={(e) => setFilters({ ...filters, prix: e.target.value })}
        >
          <option value="">Prix maximum</option>
          {prixOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Résultats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filteredCars.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 text-xl mb-4">Aucune voiture ne correspond à vos critères</p>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setFilters({ marque: "", annee: "", prix: "" })}
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          filteredCars.map((car) => (
            <div key={car.id} className="border bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="p-4 text-center border-b bg-gray-50">
                <h3 className="text-lg font-bold text-gray-800">{car.marque}</h3>
                <p className="font-semibold text-blue-600">{car.modele}</p>
              </div>

              <div className="p-4 flex-grow flex flex-col">
                <div className="relative h-56 mb-4 flex items-center justify-center">
                  <img
                    src={car.imageURL}
                    alt={`${car.marque} ${car.modele}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                


                <Link
                  to={`/voiture/${car.id}`}
                  className="mt-4 inline-block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Voir détails
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));
  
  if (!car) return (
    <div className="p-8">
      <RetourButton to="/voitures" />
      <p>Voiture non trouvée</p>
    </div>
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <RetourButton to="/voitures" />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-8">
            <img 
              src={car.imageURL} 
              alt={`${car.marque} ${car.modele}`} 
              className="w-full max-w-md object-contain"
            />
          </div>
          
          <div className="p-6 md:w-1/2">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">{car.marque}</h2>
              <p className="text-xl text-blue-600 font-semibold">{car.modele}</p>
            </div>
            
            <div className="space-y-2 mb-6 text-gray-800 text-base leading-relaxed">
  <p><strong>Année:</strong> {car.annee}</p>
  <p><strong>Kilométrage:</strong> {car.km.toLocaleString()} km</p>
  <p><strong>Transmission:</strong> {car.transmission}</p>
  <p><strong>PRIX TTC(Livraison incluse):</strong>${car.prix.toLocaleString()}</p>

            </div>
            
          
            
            <Link 
              to="/checkout" 
              className="block w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white text-center py-4 px-4 rounded-lg font-semibold transition-all shadow-md"
            >
              Commander ce véhicule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Le reste du code (Checkout, Confirmation, Survey, App) reste inchangé



const Checkout = () => {
  const [paiement, setPaiement] = useState("acompte");
  return (
    <div className="p-8 max-w-md mx-auto">
      <RetourButton to="/voitures" />

      <h2 className="text-2xl font-bold mb-4">Commander votre véhicule</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nom complet" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Adresse en Côte d'Ivoire" className="w-full p-2 border rounded" />

        <div>
          <label className="block mb-1 font-semibold">Mode de paiement :</label>
          <select value={paiement} onChange={(e) => setPaiement(e.target.value)} className="w-full p-2 border rounded">
            <option value="acompte">Acompte (30%)</option>
            <option value="complet">Paiement complet</option>
          </select>
        </div>

        <input type="text" placeholder="Numéro de carte (simulation)" className="w-full p-2 border rounded" />
        <Link to="/confirmation" className="block bg-blue-600 text-white px-4 py-2 rounded text-center">Soumettre la commande</Link>
      </form>
    </div>
  );
};

const Confirmation = () => (
  <div className="p-8 text-center max-w-lg mx-auto">
    <RetourButton to="/voitures" />

    <div className="bg-white p-8 rounded-lg shadow-lg">
      <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <h2 className="text-2xl font-bold mb-4">Merci pour votre commande !</h2>
      <p className="mb-4">Nous allons vous contacter rapidement pour confirmer les démarches d'importation de votre véhicule.</p>
      <p className="mb-6">Votre commande sera traitée selon le mode de paiement choisi.</p>
      <Link to="/sondage" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
        Donner votre avis
      </Link>
    </div>
  </div>
);



const Survey = () => {
  const rating= useState(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091012184-5c8f7f45f4d2?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-10"
      >
        <RetourButton to="/voitures" />

        {submitted ? (
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-green-700 mb-3">Merci pour votre retour 💚</h2>
            <p className="text-gray-600 text-lg">Votre avis nous aide à améliorer notre service AutoCI Express !</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">✨ Évaluez votre expérience</h2>
              <p className="text-gray-500 mt-2">Nous apprécions votre opinion. Cela ne prendra qu’une minute.</p>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-4">
                Sur une échelle de 1 à 5, à quel point êtes-vous satisfait ?
              </label>
              <div className="flex justify-between">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="flex flex-col items-center">
              <input type="radio" name="rating" value={num} className="mb-1" />
              {num}
            </label>

                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Un commentaire ou une suggestion ?
              </label>
              <textarea
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Écrivez votre avis ici..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold text-lg rounded-xl shadow hover:from-green-700 hover:to-emerald-800 transition-all"
            >
              Envoyer mon avis
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};




function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter basename="/autoci">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voitures" element={<CarList />} />
          <Route path="/voiture/:id" element={<CarDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/sondage" element={<Survey />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;