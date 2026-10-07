
const API_URL = "http://localhost:5000/api";

export const registerUser = async (data) => {
  try {
    console.log("📤 Données envoyées :", data);
    console.log("🌐 URL :", `${API_URL}/auth/register`);

    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("📥 Status :", response.status);

    const result = await response.json();

    console.log("📥 Réponse :", result);

    if (!response.ok) {
      throw new Error(
        result.message || "Erreur lors de l'inscription"
      );
    }

    return result;
  } catch (error) {
    console.error("❌ Erreur API :", error);
    throw error;
  }
};

export const loginUser = async (data) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Erreur lors de la connexion"
    );
  }

  return result;
};
