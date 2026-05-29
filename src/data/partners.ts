export interface Partner {
  name: string;
  shortName: string;
  url: string;
  description: string;
}

// Typography-only partner cards (no logos by design).
export const partners: Partner[] = [
  {
    name: "Lancaster District CVS",
    shortName: "LDCVS",
    url: "https://lancastercvs.org.uk/",
    description: "Voluntary, community and social enterprise infrastructure for Lancaster.",
  },
  {
    name: "Lancaster Baptist Church",
    shortName: "LBC",
    url: "https://lancasterbaptist.org",
    description: "Community partner supporting wellbeing and outreach in Lancaster.",
  },
  {
    name: "AIDAUS",
    shortName: "AIDAUS",
    url: "https://www.aidaus.co.uk",
    description: "Strategic ecosystem partner advancing innovation and inclusion.",
  },
  {
    name: "Krystal Hosting",
    shortName: "Krystal",
    url: "https://krystal.uk",
    description: "Sustainable, UK-based green hosting infrastructure.",
  },
];
