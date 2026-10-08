import {
  Waves,
  Smartphone,
  CreditCard,
  Wallet,
  Landmark,
} from "lucide-react";

export const PAYMENT_METHOD_CONFIG = {
  wave: {
    icon: Waves,
    subtitle: "MOBILE MONEY",
    iconColor: "text-[#329B87]",
    iconBackground: "bg-[#E8F0FF]",
  },

  "orange-money": {
    icon: Smartphone,
    subtitle: "RAPIDE & SÛR",
    iconColor: "text-[#FF7900]",
    iconBackground: "bg-[#E8F0FF]",
  },

  card: {
    icon: CreditCard,
    subtitle: "VISA / MASTERCARD",
    iconColor: "text-[#005B4F]",
    iconBackground: "bg-[#E8F0FF]",
  },

  "free-money": {
    icon: Wallet,
    subtitle: "MOBILE WALLET",
    iconColor: "text-[#8A7200]",
    iconBackground: "bg-[#E8F0FF]",
  },

  bank: {
    icon: Landmark,
    subtitle: "COMPTE BANCAIRE",
    iconColor: "text-[#60666A]",
    iconBackground: "bg-[#E8F0FF]",
  },
};

export const PAYMENT_METHODS = [
  {
    id: "wave",
    name: "Wave",
    enabled: true,
  },

  {
    id: "orange-money",
    name: "Orange Money",
    enabled: true,
  },

  {
    id: "card",
    name: "Carte Bancaire",
    enabled: true,
  },

  {
    id: "free-money",
    name: "Free Money",
    enabled: true,
  },

  {
    id: "bank",
    name: "Virement",
    enabled: true,
  },
];

