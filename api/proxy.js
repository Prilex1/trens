export default async function handler(req, res) {
  // Obtenim quina ruta ens demanen (ex: stats, lines, incidents)
  const { path } = req.query;
  const endpoint = path ? path.join('/') : 'stats';
  
  const API_KEY = 'etf_5c7348c414836e8020a90ae0b78c007bf1011986749088f659c06bc58f8b1a09';
  const BASE_URL = 'https://www.eltrennofunca.cat/api';

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: { 'X-API-Key': API_KEY }
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Error de connexió amb l\'API externa' });
  }
}