export type Imovel = {
  id: number;
  tipo: string;
  imagem: string;
  titulo: string;
  local: string;
  negocio: "Comprar" | "Alugar";
  preco: string;
  quartos: number;
  suites: number;
  banheiros: number;
  lavabos: number;
  area: number;
  terreno?: number;
  vagas: number;
  descricao: string;
};

export const imoveis: Imovel[] = [
  {
    id: 1,
    tipo: "Casa",
    imagem: "",
    titulo: "Casa nova de alto padrão no Alphaville",
    local: "Alphaville Resende, Resende - RJ",
    negocio: "Comprar",
    preco: "R$ 1.550.000",
    quartos: 3,
    suites: 1,
    banheiros: 2,
    lavabos: 1,
    area: 213,
    terreno: 399,
    vagas: 4,
    descricao:
      "Casa nova de alto padrão no Alphaville Resende, com ambientes amplos, iluminados e integrados. O projeto combina sofisticação e praticidade, com sala de estar e jantar integradas, cozinha planejada, área gourmet com churrasqueira, escritório e uma suíte master com closet.",
  },

  {
    id: 2,
    tipo: "Casa",
    imagem: "",
    titulo: "Casa sofisticada com 3 suítes no Alphaville",
    local: "Alphaville Resende, Resende - RJ",
    negocio: "Comprar",
    preco: "R$ 1.050.000",
    quartos: 3,
    suites: 3,
    banheiros: 1,
    lavabos: 0,
    area: 0,
    vagas: 0,
    descricao:
      "Casa de alto padrão em um dos condomínios mais desejados de Resende, com três suítes, móveis planejados, closet, sala ampla, cozinha planejada e espaço gourmet com churrasqueira. Um imóvel pensado para oferecer sofisticação, conforto e praticidade.",
  },

  {
    id: 3,
    tipo: "Casa",
    imagem: "",
    titulo: "Casa contemporânea com amplo espaço no Alphaville",
    local: "Alphaville Resende, Resende - RJ",
    negocio: "Comprar",
    preco: "R$ 1.380.000",
    quartos: 3,
    suites: 3,
    banheiros: 4,
    lavabos: 0,
    area: 266,
    terreno: 405,
    vagas: 2,
    descricao:
      "Excelente casa em condomínio de alto padrão, com arquitetura moderna e ambientes integrados. O imóvel conta com sala, copa e cozinha em conceito aberto, três suítes, escritório, lavanderia, área gourmet e um porão versátil, ideal para depósito, adega ou espaço de lazer.",
  },
];