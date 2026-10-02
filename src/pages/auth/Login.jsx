import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-sm sm:p-8">

        <div className="text-center">

          <h1 className="text-2xl font-bold text-[#003f35]">
            Bienvenue sur EasyZakat
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Connectez-vous à votre compte
          </p>

        </div>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#005b49]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Mot de passe
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#005b49]"
            />
          </div>

          <div className="text-right">
            <Link
              to="/mot-de-passe-oublie"
              className="text-sm text-[#005b49] underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#005b49] py-3 font-bold text-white"
          >
            Se connecter
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">

          Vous n'avez pas de compte ?{" "}

          <Link
            to="/register"
            className="font-semibold text-[#005b49]"
          >
            Créer un compte
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;