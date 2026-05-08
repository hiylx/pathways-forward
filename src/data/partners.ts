import lbcLogo from "@/assets/partners/lancaster-baptist.svg";

export interface Partner {
  name: string;
  shortName: string;
  url: string;
  description: string;
  logo?: string;
}

export const partners: Partner[] = [
  {
    name: "Lancaster District CVS",
    shortName: "LDCVS",
    url: "https://www.ldcvs.org.uk",
    description: "Voluntary, community and social enterprise infrastructure for Lancaster.",
  },
  {
    name: "Lancaster Baptist Church",
    shortName: "Lancaster Baptist",
    url: "https://lancasterbaptist.org",
    description: "A community partner supporting wellbeing and outreach in Lancaster.",
    logo: lbcLogo,
  },
  {
    name: "AIDUS",
    shortName: "AIDUS",
    url: "https://www.aidus.co.uk",
    description: "Strategic ecosystem partner supporting innovation and inclusion.",
  },
];
