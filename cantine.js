const client = "Awa";
const codePlat = 1;
const quantite =  Number(3);
const montantVerse = 5000;

let plat = "";
let prixUnitaire = 0;

if (codePlat === 1) {
    plat = "Attiéké-poisson";
    prixUnitaire = 1500;
} else if (codePlat === 2) {
    plat = "Riz-poulet";
    prixUnitaire = 2000;
} else if (codePlat === 3) {
    plat = "Alloco-œuf";
    prixUnitaire = 1000;
} else {
    console.log("Code du plat invalide.");
}
    function calculerTotal(prixUnitaire, quantite) {
        return prixUnitaire * quantite;
    }
if (prixUnitaire > 0 && Number.isInteger(quantite) && quantite > 0) {

    const total = calculerTotal(prixUnitaire, quantite);

    console.log("====CAISSE DE LA CANTINE=====");

    console.log(`Client : {client}`);
    console.log(`Plat : {plat}`);
    console.log(`Prix unitaire : ${prixUnitaire} FCFA`);
    console.log(`Quantité : {quantite}`);

    for (let i = 1; i <= quantite; i++) {
        console.log(`Achat numéro {i}`);
    }

    console.log(`Total à payer : {total} FCFA`);
    console.log(`Montant versé : {montantVerse} FCFA`);

    if (montantVerse >= total) {
        const monnaie = montantVerse - total;
        console.log(`Monnaie à rendre : {monnaie} FCFA`);
    } else {
        const manque = total - montantVerse;
        console.log(`Montant manquant : {manque} FCFA`);
    }

} else {
    console.log("Veuillez verifiez le code du plat et la quantité.");
}


  
