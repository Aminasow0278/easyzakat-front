import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700">
            Créer un compte
          </h1>

          <p className="text-gray-500 mt-2">
            Rejoignez EasyZakat
          </p>
        </div>

        <form className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>

            <input
              type="text"
              placeholder="Votre nom complet"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="vous@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Créer mon compte
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Vous avez déjà un compte ?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Se connecter
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register