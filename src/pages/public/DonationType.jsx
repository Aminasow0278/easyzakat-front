import Header from "../../layouts/Header";
import TypeIntro from "../../components/DonationType/TypeIntro";
import TypeList from "../../components/DonationType/TypeList";
import AmountForm from "../../components/DonationType/AmountForm";
import BottomNav from "../../layouts/BottomNav";

function DonationType()  {
  return (
    <div>
    <Header />
    <main
      className="
        min-h-screen
        w-full
        bg-[#F8F8FC]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-[34px]
          pb-10
          pt-[30px]
          
          sm:px-6
          sm:pt-10
          
          md:px-8
          
          lg:px-10
          lg:pt-12
        "
      >
        {/* ================= INTRODUCTION ================= */}

        <div className="mt-2">
          <TypeIntro />
        </div>

        {/* ================= LISTE DES TYPES DE DONS ================= */}

        <div className="mt-8">
          <TypeList />
        </div>

        {/* ================= FORMULAIRE DU MONTANT ================= */}

        <div className="mt-8">
          <AmountForm />
        </div>

      </div>
    </main>
    <BottomNav />
    </div>
  );
};

export default DonationType;