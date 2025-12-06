import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              AFood s'engage à protéger votre vie privée. Cette politique de confidentialité
              explique comment nous collectons, utilisons et protégeons vos informations personnelles
              lorsque vous utilisez notre site web et nos services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informations que nous collectons</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 Informations personnelles</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Adresse de livraison</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 Informations techniques</h3>
            <ul className="list-disc pl-6">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Durée de visite</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Comment nous utilisons vos informations</h2>
            <ul className="list-disc pl-6">
              <li>Traitement et livraison de vos commandes</li>
              <li>Communication concernant votre commande</li>
              <li>Amélioration de nos services</li>
              <li>Envoi d'offres promotionnelles (avec votre consentement)</li>
              <li>Respect de nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage de vos informations</h2>
            <p>
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers.
              Nous pouvons partager vos informations avec :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Nos partenaires restaurants pour traiter vos commandes</li>
              <li>Nos prestataires de livraison</li>
              <li>Nos prestataires de services techniques (hébergement, paiement)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de
              petits fichiers stockés sur votre appareil qui nous aident à personnaliser votre visite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vos droits</h2>
            <p>Vous avez le droit de :</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier vos données personnelles</li>
              <li>Supprimer vos données personnelles</li>
              <li>Vous opposer au traitement de vos données</li>
              <li>Demander la portabilité de vos données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Sécurité</h2>
            <p>
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos
              informations personnelles contre tout accès, modification, divulgation ou
              destruction non autorisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité,
              vous pouvez nous contacter à :
            </p>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;