import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/Api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Gérer les champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Envoyer le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      // Séparer le nom complet
      const parts = formData.fullName.trim().split(/\s+/);

      const firstName = parts[0];
      const lastName = parts.slice(1).join(" ");

      if (!firstName || !lastName) {
        throw new Error(
          "Veuillez entrer votre prénom et votre nom."
        );
      }

      // Envoyer au backend
      const data = await registerUser({
        firstName,
        lastName,
        email: formData.email,
        password: formData.password,
      });

      console.log("Inscription réussie :", data);

      setMessage("Compte créé avec succès !");

      // Réinitialiser le formulaire
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });

      // Aller vers la connexion
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      console.error("Erreur inscription :", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#003f35]">
            Créer un compte
          </h1>

          <p className="text-gray-500 mt-2">
            Rejoignez EasyZakat
          </p>
        </div>

        {/* Message de succès */}
        {message && (
          <div className="mb-5 rounded-xl bg-green-100 px-4 py-3 text-green-700">
            {message}
          </div>
        )}

        {/* Message d'erreur */}
        {error && (
          <div className="mb-5 rounded-xl bg-red-100 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Votre nom complet"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vous@example.com"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              minLength={6}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#005b49] hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
          >
            {loading ? "Création..." : "Créer mon compte"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Vous avez déjà un compte ?{" "}
          <Link
            to="/login"
            className="text-[#005b49] font-semibold hover:underline"
          >
            Se connecter
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;