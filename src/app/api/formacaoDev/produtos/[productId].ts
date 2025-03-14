import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;
  const url = `https://us-central1-teste-formacao-dev.cloudfunctions.net/produtos/${productId}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Erro ao buscar produto" });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(`Erro ao buscar o produto ${productId}:`, error);
    res.status(500).json({ error: "Erro interno" });
  }
}
