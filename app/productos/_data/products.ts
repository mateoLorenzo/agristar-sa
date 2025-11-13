import type { Product } from "./types";

/**
 * Helper para obtener la ruta del logo basado en el nombre del producto
 */
function getLogoPath(productName: string): string {
  // Normalizar el nombre para buscar el archivo
  // Buscar el archivo exacto o variaciones comunes
  const normalizedName = productName.trim();
  
  // Mapeo de nombres de productos a nombres de archivo exactos
  const logoMap: Record<string, string> = {
    "Amitraz Estrella": "AMITRAZ ESTRELLA.png",
    "Amarillo": "Amarillo.png",
    "Bac HM 36": "Bac HM 36.png",
    "CROP +": "CROP +.png",
    "Candil 80": "Candil 80.png",
    "Carbendazim Insuagro": "Carbendazim Insuagro.png",
    "Cyd – X LC": "Cyd – X LC.png",
    "DIPI": "DIPI.png",
    "EXOCET": "EXOCET.jpg",
    "Ecotech": "Ecotech.png",
    "Emerald 23 Me": "Emerald 23 Me.png",
    "Fitocel 75": "Fitocel 75.png",
    "Frufix k": "Frufix k.png",
    "IMISTAR": "IMISTAR.png",
    "Ishimetrin Active": "ISHIMETRIN ACTIVE.png",
    "Metoxistar": "METOXISTAR.png",
    "Manconyl": "Manconyl.png",
    "Mancostar": "Mancostar.png",
    "Mepistar": "Mepistar.png",
    "Myclostar": "Myclostar.png",
    "Neoram 37.5 WG": "Neoram 37.5 WG.png",
    "PHOTON": "PHOTON.png", // Preferir PNG sobre JPG
    "PID": "PID.png",
    "Ronfos +": "RONFOS+.png",
    "STARBUZIN": "STARBUZIN.jpg",
    "STARECO": "STARECO.png",
    "STARFEN": "STARFEN.jpg",
    "STARON": "STARON.jpg",
    "STARPRID": "STARPRID.png",
    "Startina LPU": "STARTINA LPU.png",
    "Starcher": "Starcher.jpg",
    "Starfert Cab": "Starfert Cab.png",
    "Starfert Cu": "Starfert Cu.png",
    "Starfert Zn": "Starfert Zn.png",
    "Starfert": "Starfert.png",
    "Starlin 33": "Starlin 33.jpg",
    "Starquat": "Starquat.jpg",
    "Startion": "Startion.png",
    "Startop": "Startop.png",
    "Starxifop R LPU": "Starxifop R LPU.jpg",
    "Starzoato": "Starzoato.png",
    "Starzone": "Starzone.jpg",
    "Starzone 36 CS": "logo STARZONE 36 CS.png",
    "Stress StoP": "Stress StoP.png",
    "TEPPEKI": "TEPPEKI.png",
    "Trampa de Feromona": "TRAMPA DE FEROMONA.png",
    "Thiram Granuflo Agri Star": "Thiram Granuflo Agri Star.png",
    "Timbal": "Timbal.png",
    "Vapam": "Vapam.png",
    "Ziram Granuflo Agri Star": "Ziram Granuflo Agri Star.png",
  };

  const fileName = logoMap[normalizedName] || `${normalizedName}.png`;
  return `/products/logos/${fileName}`;
}

export const PRODUCTS: Product[] = [
  // Insecticidas
  {
    id: "1",
    name: "Amitraz Estrella",
    logoUrl: getLogoPath("Amitraz Estrella"),
    category: "Insecticidas",
  },
  {
    id: "2",
    name: "Cyd – X LC",
    logoUrl: getLogoPath("Cyd – X LC"),
    category: "Insecticidas",
  },
  {
    id: "3",
    name: "DIPI",
    logoUrl: getLogoPath("DIPI"),
    category: "Insecticidas",
  },
  {
    id: "4",
    name: "EXOCET",
    logoUrl: getLogoPath("EXOCET"),
    category: "Insecticidas",
  },
  {
    id: "5",
    name: "Ishimetrin Active",
    logoUrl: getLogoPath("Ishimetrin Active"),
    category: "Insecticidas",
  },
  {
    id: "6",
    name: "TEPPEKI",
    logoUrl: getLogoPath("TEPPEKI"),
    category: "Insecticidas",
  },
  {
    id: "7",
    name: "Trampa de Feromona",
    logoUrl: getLogoPath("Trampa de Feromona"),
    category: "Insecticidas",
  },
  {
    id: "8",
    name: "Timbal",
    logoUrl: getLogoPath("Timbal"),
    category: "Insecticidas",
  },
  {
    id: "9",
    name: "PID",
    logoUrl: getLogoPath("PID"),
    category: "Insecticidas",
  },
  {
    id: "10",
    name: "IMISTAR",
    logoUrl: getLogoPath("IMISTAR"),
    category: "Insecticidas",
  },

  // Fungicidas
  {
    id: "11",
    name: "Candil 80",
    logoUrl: getLogoPath("Candil 80"),
    category: "Fungicidas",
  },
  {
    id: "12",
    name: "Carbendazim Insuagro",
    logoUrl: getLogoPath("Carbendazim Insuagro"),
    category: "Fungicidas",
  },
  {
    id: "13",
    name: "Emerald 23 Me",
    logoUrl: getLogoPath("Emerald 23 Me"),
    category: "Fungicidas",
  },
  {
    id: "14",
    name: "Fitocel 75",
    logoUrl: getLogoPath("Fitocel 75"),
    category: "Fungicidas",
  },
  {
    id: "15",
    name: "Metoxistar",
    logoUrl: getLogoPath("Metoxistar"),
    category: "Fungicidas",
  },
  {
    id: "16",
    name: "Manconyl",
    logoUrl: getLogoPath("Manconyl"),
    category: "Fungicidas",
  },
  {
    id: "17",
    name: "Mancostar",
    logoUrl: getLogoPath("Mancostar"),
    category: "Fungicidas",
  },
  {
    id: "18",
    name: "Mepistar",
    logoUrl: getLogoPath("Mepistar"),
    category: "Fungicidas",
  },
  {
    id: "19",
    name: "Myclostar",
    logoUrl: getLogoPath("Myclostar"),
    category: "Fungicidas",
  },
  {
    id: "20",
    name: "Neoram 37.5 WG",
    logoUrl: getLogoPath("Neoram 37.5 WG"),
    category: "Fungicidas",
  },
  {
    id: "21",
    name: "Starzoato",
    logoUrl: getLogoPath("Starzoato"),
    category: "Fungicidas",
  },
  {
    id: "22",
    name: "Thiram Granuflo Agri Star",
    logoUrl: getLogoPath("Thiram Granuflo Agri Star"),
    category: "Fungicidas",
  },
  {
    id: "23",
    name: "Ziram Granuflo Agri Star",
    logoUrl: getLogoPath("Ziram Granuflo Agri Star"),
    category: "Fungicidas",
  },
  {
    id: "24",
    name: "Bac HM 36",
    logoUrl: getLogoPath("Bac HM 36"),
    category: "Fungicidas",
  },

  // Herbicidas
  {
    id: "25",
    name: "Ronfos +",
    logoUrl: getLogoPath("Ronfos +"),
    category: "Herbicidas",
  },
  {
    id: "26",
    name: "STARBUZIN",
    logoUrl: getLogoPath("STARBUZIN"),
    category: "Herbicidas",
  },
  {
    id: "27",
    name: "STARFEN",
    logoUrl: getLogoPath("STARFEN"),
    category: "Herbicidas",
  },
  {
    id: "28",
    name: "Startina LPU",
    logoUrl: getLogoPath("Startina LPU"),
    category: "Herbicidas",
  },
  {
    id: "29",
    name: "Starcher",
    logoUrl: getLogoPath("Starcher"),
    category: "Herbicidas",
  },
  {
    id: "30",
    name: "Starquat",
    logoUrl: getLogoPath("Starquat"),
    category: "Herbicidas",
  },
  {
    id: "31",
    name: "Startion",
    logoUrl: getLogoPath("Startion"),
    category: "Herbicidas",
  },
  {
    id: "32",
    name: "Startop",
    logoUrl: getLogoPath("Startop"),
    category: "Herbicidas",
  },
  {
    id: "33",
    name: "Starxifop R LPU",
    logoUrl: getLogoPath("Starxifop R LPU"),
    category: "Herbicidas",
  },
  {
    id: "34",
    name: "Amarillo",
    logoUrl: getLogoPath("Amarillo"),
    category: "Herbicidas",
  },

  // Bioestimulantes
  {
    id: "35",
    name: "Frufix k",
    logoUrl: getLogoPath("Frufix k"),
    category: "Bioestimulantes",
  },
  {
    id: "36",
    name: "Starfert",
    logoUrl: getLogoPath("Starfert"),
    category: "Bioestimulantes",
  },
  {
    id: "37",
    name: "Starfert Cab",
    logoUrl: getLogoPath("Starfert Cab"),
    category: "Bioestimulantes",
  },
  {
    id: "38",
    name: "Starfert Cu",
    logoUrl: getLogoPath("Starfert Cu"),
    category: "Bioestimulantes",
  },
  {
    id: "39",
    name: "Starfert Zn",
    logoUrl: getLogoPath("Starfert Zn"),
    category: "Bioestimulantes",
  },
  {
    id: "40",
    name: "Stress StoP",
    logoUrl: getLogoPath("Stress StoP"),
    category: "Bioestimulantes",
  },
  {
    id: "41",
    name: "PHOTON",
    logoUrl: getLogoPath("PHOTON"),
    category: "Bioestimulantes",
  },
  {
    id: "42",
    name: "Starlin 33",
    logoUrl: getLogoPath("Starlin 33"),
    category: "Bioestimulantes",
  },

  // Aditivos
  {
    id: "43",
    name: "CROP +",
    logoUrl: getLogoPath("CROP +"),
    category: "Aditivos",
  },
  {
    id: "44",
    name: "Ecotech",
    logoUrl: getLogoPath("Ecotech"),
    category: "Aditivos",
  },
  {
    id: "45",
    name: "STARECO",
    logoUrl: getLogoPath("STARECO"),
    category: "Aditivos",
  },
  {
    id: "46",
    name: "STARON",
    logoUrl: getLogoPath("STARON"),
    category: "Aditivos",
  },
  {
    id: "47",
    name: "STARPRID",
    logoUrl: getLogoPath("STARPRID"),
    category: "Aditivos",
  },
  {
    id: "48",
    name: "Starzone",
    logoUrl: getLogoPath("Starzone"),
    category: "Aditivos",
  },
  {
    id: "49",
    name: "Starzone 36 CS",
    logoUrl: getLogoPath("Starzone 36 CS"),
    category: "Aditivos",
  },
  {
    id: "50",
    name: "Vapam",
    logoUrl: getLogoPath("Vapam"),
    category: "Aditivos",
  },
];
