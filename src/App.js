// AutoCI Express - Site de revente de voitures Canada → Côte d'Ivoire

import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Components

const RetourButton = ({ to = "/" }) => (
  <Link to={to} className="inline-block mb-4 text-blue-700 hover:underline">
    ← Retour
  </Link>
);

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <Link to="/" className="text-xl font-bold">AutoCI Express</Link>
    <div className="space-x-4">
      <Link to="/voitures">Voitures</Link>
      <Link to="/sondage">Sondage</Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="text-center p-4 bg-gray-200 mt-10">&copy; AutoCI Express</footer>
);

// AutoCI Express - Page d'accueil améliorée

const Home = () => (
  <div className="relative bg-gray-900 text-white overflow-hidden w-full">
    <div className="absolute inset-0 z-0">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/06/19/15/auto-1957944_1280.jpg"
        alt="voiture de luxe"
        className="w-full h-full object-cover opacity-20"
      />
    </div>

    <div className="relative z-10 px-6 md:px-12 py-16 min-h-screen flex flex-col items-center justify-center space-y-12 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
        AutoCI Express 🚘
      </h1>

      <p className="text-lg md:text-2xl max-w-2xl drop-shadow-lg">
        Nous gérons tout depuis le Canada 🇨🇦. Achetez votre voiture depuis la Côte d'Ivoire.
      </p>

      <Link
        to="/voitures"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition"
      >
        Parcourir les voitures 🔍
      </Link>

      <div className="mt-10 bg-yellow-300 text-gray-900 px-6 py-6 rounded-2xl font-semibold text-lg shadow-lg max-w-xl">
        <p>Promo Juillet : 10% de réduction sur tous les véhicules jusqu'au 31 juillet ! 🎉</p>
      </div>

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
          <div
            key={index}
            className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl text-center"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-24 w-full px-4">
        <h2 className="text-3xl font-bold text-white mb-12">
          Ce que disent nos clients
        </h2>
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
            <div
              key={i}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-yellow-400 text-xl mb-2">
                {"★".repeat(avis.note)}{"☆".repeat(5 - avis.note)}
              </div>
              <p className="text-sm mb-4">"{avis.texte}"</p>
              <div className="text-sm font-bold">— {avis.nom}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 w-full px-4">
        <h2 className="text-3xl font-bold text-white mb-12">
          Comment ça marche ?
        </h2>
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
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{item.icone}</div>
              <h3 className="text-lg font-bold mb-2">{item.titre}</h3>
              <p className="text-sm text-gray-600">{item.texte}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);




const cars = [
  {
    id: 1,
    marque: "Toyota",
    modele: "Corolla",
    annee: 2018,
    prix: 8200,
    km: 64000,
    transmission: "Automatique",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  },
  {
    id: 2,
    marque: "Honda",
    modele: "Civic",
    annee: 2019,
    prix: 8900,
    km: 52000,
    transmission: "Manuelle",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/3/38/Honda_Logo.svg",
  },
  {
    id: 3,
    marque: "Hyundai",
    modele: "Elantra",
    annee: 2020,
    prix: 9500,
    km: 37000,
    transmission: "Automatique",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Hyundai_Motor_Company_logo.svg",
  },
  {
    id: 4,
    marque: "Mazda",
    modele: "3",
    annee: 2017,
    prix: 7800,
    km: 72000,
    transmission: "Manuelle",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mazda_logo.svg",
  },
  {
    id: 5,
    marque: "Nissan",
    modele: "Altima",
    annee: 2018,
    prix: 8100,
    km: 61000,
    transmission: "Automatique",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1630002025404-1d5d964096a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg",
  },
  {
    id: 6,
    marque: "Kia",
    modele: "Forte",
    annee: 2020,
    prix: 8700,
    km: 43000,
    transmission: "Automatique",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1630002025404-1d5d964096a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/6/6a/KIA_logo.svg",
  },
  {
    id: 7,
    marque: "Chevrolet",
    modele: "Cruze",
    annee: 2019,
    prix: 8600,
    km: 57000,
    transmission: "Manuelle",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1580274437631-9062f85a3791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/3/39/Chevrolet_logo.svg",
  },
  {
    id: 8,
    marque: "Ford",
    modele: "Focus",
    annee: 2018,
    prix: 8000,
    km: 66000,
    transmission: "Automatique",
    carburant: "Diesel",
    imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg",
  },
  {
    id: 9,
    marque: "Volkswagen",
    modele: "Jetta",
    annee: 2019,
    prix: 9200,
    km: 49000,
    transmission: "Automatique",
    carburant: "Diesel",
    imageURL: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
  },
  {
    id: 10,
    marque: "BMW",
    modele: "320i",
    annee: 2017,
    prix: 10500,
    km: 58000,
    transmission: "Automatique",
    carburant: "Essence",
    imageURL: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    logoURL: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  }
];

const CarList = () => {
  const [filters, setFilters] = React.useState({
    marque: "",
    annee: "",
    prix: "",
    transmission: "",
    carburant: "",
  });

  const filteredCars = cars.filter((car) => {
    return (
      (filters.marque === "" || car.marque === filters.marque) &&
      (filters.annee === "" || car.annee.toString() === filters.annee) &&
      (filters.prix === "" || car.prix <= parseInt(filters.prix)) &&
      (filters.transmission === "" || car.transmission === filters.transmission) &&
      (filters.carburant === "" || car.carburant === filters.carburant)
    );
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🚗 Voitures disponibles</h2>

      {/* Filtres */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        <select
          className="p-2 border rounded"
          value={filters.marque}
          onChange={(e) => setFilters({ ...filters, marque: e.target.value })}
        >
          <option value="">Toutes les marques</option>
          {[...new Set(cars.map((c) => c.marque))].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          className="p-2 border rounded"
          value={filters.annee}
          onChange={(e) => setFilters({ ...filters, annee: e.target.value })}
        >
          <option value="">Toutes les années</option>
          {[...new Set(cars.map((c) => c.annee))].sort((a, b) => b - a).map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Prix maximum"
          className="p-2 border rounded"
          value={filters.prix}
          onChange={(e) => setFilters({ ...filters, prix: e.target.value })}
        />

        <select
          className="p-2 border rounded"
          value={filters.transmission}
          onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
        >
          <option value="">Toutes transmissions</option>
          <option value="Automatique">Automatique</option>
          <option value="Manuelle">Manuelle</option>
        </select>

        <select
          className="p-2 border rounded"
          value={filters.carburant}
          onChange={(e) => setFilters({ ...filters, carburant: e.target.value })}
        >
          <option value="">Tous carburants</option>
          <option value="Essence">Essence</option>
          <option value="Diesel">Diesel</option>
        </select>
      </div>

      {/* Résultats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.length === 0 ? (
          <p className="text-gray-600 col-span-full">Aucune voiture ne correspond à vos critères.</p>
        ) : (
          filteredCars.map((car) => (
            <div key={car.id} className="border bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform">
              <div className="p-4 flex items-center space-x-3 border-b">
                <img
                  src={car.logoURL}
                  alt={`${car.marque} logo`}
                  className="h-8 w-auto object-contain"
                />
                <h3 className="text-xl font-bold text-gray-800">{car.marque} {car.modele}</h3>
              </div>

              <div className="p-4">
                <img
                  src={car.imageURL}
                  alt={`${car.marque} ${car.modele}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />

                <div className="space-y-2">
                  <p><strong>Année :</strong> {car.annee}</p>
                  <p><strong>Kilométrage :</strong> {car.km.toLocaleString()} km</p>
                  <p><strong>Transmission :</strong> {car.transmission}</p>
                  <p><strong>Carburant :</strong> {car.carburant}</p>
                  <p className="font-bold text-green-700 text-lg">Prix : ${car.prix.toLocaleString()}</p>
                </div>

                <Link
                  to={`/voiture/${car.id}`}
                  className="mt-4 inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
          <div className="md:w-1/2">
            <img 
              src={car.imageURL} 
              alt={`${car.marque} ${car.modele}`} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:w-1/2">
            <div className="flex items-center mb-4">
              <img 
                src={car.logoURL} 
                alt={`${car.marque} logo`} 
                className="h-10 w-auto mr-3"
              />
              <h2 className="text-2xl font-bold">{car.marque} {car.modele}</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-600">Année</p>
                <p className="font-semibold">{car.annee}</p>
              </div>
              <div>
                <p className="text-gray-600">Kilométrage</p>
                <p className="font-semibold">{car.km.toLocaleString()} km</p>
              </div>
              <div>
                <p className="text-gray-600">Transmission</p>
                <p className="font-semibold">{car.transmission}</p>
              </div>
              <div>
                <p className="text-gray-600">Carburant</p>
                <p className="font-semibold">{car.carburant}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-gray-600">Prix</p>
              <p className="text-3xl font-bold text-blue-700">${car.prix.toLocaleString()}</p>
            </div>
            
            <Link 
              to="/checkout" 
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-semibold"
            >
              Commander ce véhicule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const Survey = () => (
  <div className="p-8 max-w-lg mx-auto">
    <RetourButton to="/voitures" />

    <h2 className="text-2xl font-bold mb-4">Votre avis nous aide !</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-2 font-medium">Sur une échelle de 1 à 5, comment évaluez-vous votre expérience ?</label>
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
        <label className="block mb-2 font-medium">Vos commentaires</label>
        <textarea 
          placeholder="Que pouvons-nous améliorer ?" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium"
      >
        Envoyer
      </button>
    </form>
  </div>
);


function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;