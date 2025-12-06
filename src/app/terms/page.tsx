import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
            <p>
              Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation
              du site web AFood et des services proposés. En accédant au site, vous acceptez
              sans réserve les présentes conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Présentation du service</h2>
            <p>
              AFood est une plateforme de commande et de livraison de repas en ligne qui met
              en relation les utilisateurs avec des restaurants partenaires. Notre service
              permet de découvrir, commander et se faire livrer des repas de qualité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accès au service</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">3.1 Conditions d'accès</h3>
            <p>
              L'accès au service est libre et gratuit. La commande de repas nécessite
              la création d'un compte utilisateur.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2">3.2 Création de compte</h3>
            <ul className="list-disc pl-6">
              <li>Vous devez être âgé de plus de 18 ans</li>
              <li>Les informations fournies doivent être exactes et à jour</li>
              <li>Vous êtes responsable de la confidentialité de vos identifiants</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Commandes et livraisons</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">4.1 Processus de commande</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Sélection des produits dans notre catalogue</li>
              <li>Validation du panier et des informations de livraison</li>
              <li>Paiement sécurisé en ligne</li>
              <li>Confirmation de commande par email</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-2">4.2 Livraison</h3>
            <ul className="list-disc pl-6">
              <li>Délai de livraison estimé : 20-45 minutes</li>
              <li>Zone de livraison limitée selon votre localisation</li>
              <li>Frais de livraison variables selon la distance</li>
              <li>Suivi en temps réel de votre commande</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prix et paiement</h2>
            <ul className="list-disc pl-6">
              <li>Tous les prix sont indiqués en euros TTC</li>
              <li>Les prix peuvent varier selon les restaurants partenaires</li>
              <li>Paiement par carte bancaire ou autres moyens acceptés</li>
              <li>Facturation immédiate lors de la validation de commande</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Droit de rétractation et remboursement</h2>
            <p>
              Conformément à la réglementation, le droit de rétractation ne s'applique pas
              aux services de livraison de repas frais. Toutefois :
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Remboursement en cas de problème de livraison</li>
              <li>Remboursement en cas de problème qualité</li>
              <li>Annulation possible jusqu'à la préparation de la commande</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Responsabilités</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">7.1 Responsabilité d'AFood</h3>
            <p>
              AFood s'engage à fournir un service de qualité mais ne peut être tenu
              responsable des retards dus à des circonstances exceptionnelles.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-2">7.2 Responsabilité de l'utilisateur</h3>
            <ul className="list-disc pl-6">
              <li>Utilisation conforme du service</li>
              <li>Exactitude des informations de livraison</li>
              <li>Respect des autres utilisateurs et du personnel</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Propriété intellectuelle</h2>
            <p>
              Tous les éléments du site (textes, images, logos, design) sont protégés
              par les droits de propriété intellectuelle et appartiennent à AFood
              ou à ses partenaires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Données personnelles</h2>
            <p>
              Le traitement de vos données personnelles est régi par notre
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                Politique de Confidentialité
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modification des CGU</h2>
            <p>
              AFood se réserve le droit de modifier les présentes CGU à tout moment.
              Les modifications prennent effet dès leur publication sur le site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige sera
              de la compétence exclusive des tribunaux français.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
            <p>
              Pour toute question concernant ces conditions générales,
              vous pouvez nous contacter à :
            </p>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;