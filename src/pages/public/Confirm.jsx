import DonationSuccess from '../../components/Confirm/DonationSuccess';
import TransactionReceipt from '../../components/Confirm/TransactionReceipt';
import DonationActions from '../../components/Confirm/DonationActions';
import Header from '../../layouts/Header';
import BottomNav from '../../layouts/BottomNav';
import Footer from '../../layouts/Footer';


import {
  DEFAULT_DONATION_CONFIRMATION,
  DONATION_ACTIONS,
} from '../../components/Confirm/DonationConfirmationData';

function Confirm({
  data = DEFAULT_DONATION_CONFIRMATION,
  onDownload,
  onShare,
  onDashboard,
  onNewDonation,
}) {
  return (
    <div>
        <Header />
            <main className="min-h-screen bg-[#f8f8ff] mb-20 text-gray-900">
      <div className="mx-auto w-full max-w-[760px]">


        <DonationSuccess
          title="Merci, votre don a bien été reçu."
          message="« Qu’Allah accepte votre Zakat, purifie vos biens et vous comble de Ses bénédictions infinies. »"
        />

        <TransactionReceipt
          transaction={data.transaction}
          cause={data.cause}
          blockchain={data.blockchain}
        />

        <DonationActions
          labels={DONATION_ACTIONS}
          onDownload={onDownload}
          onShare={onShare}
          onDashboard={onDashboard}
          onNewDonation={onNewDonation}
        />

      </div>
    </main>
        <BottomNav />
        <Footer />
    </div>
  );
}

export default Confirm;