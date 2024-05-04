import { useState, useEffect } from "react";
import axios from "axios";

export function ConnexionBackend() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Ajout de l'état de chargement

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/product');
                setData(response.data);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données:', error);
                setData("error"); // Afficher le composant d'erreur 404 si une erreur se produit

            } finally {
                setLoading(false); // Mettre à jour l'état de chargement une fois la requête terminée
            }
        };

        fetchData();
    }, []);
    return [data, loading];
}

