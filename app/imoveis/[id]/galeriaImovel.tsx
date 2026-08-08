"use client";

import { useState } from "react";

type Props = {
  imagens: string[];
  titulo: string;
};

export default function GaleriaImovel({ imagens, titulo }: Props) {
  const [imagemSelecionada, setImagemSelecionada] = useState(0);

  if (imagens.length === 0) {
    return (
      <div className="w-full h-[500px] bg-[#191714] flex flex-col items-center justify-center">
        <span className="text-lg text-[#F4EFE9]">
          Flomar Propiedades
        </span>

        <span className="text-sm text-[#F4EFE9]/30 mt-2">
          Foto do imóvel
        </span>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Foto principal */}
      <div className="w-full h-[500px] overflow-hidden rounded-2xl bg-[#191714]">
        <img
          src={imagens[imagemSelecionada]}
          alt={`${titulo} - foto ${imagemSelecionada + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
        {imagens.map((imagem, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setImagemSelecionada(index)}
            className={`flex-shrink-0 w-24 h-20 overflow-hidden rounded-lg border-2 ${
              imagemSelecionada === index
                ? "border-[#163191]"
                : "border-transparent"
            }`}
          >
            <img
              src={imagem}
              alt={`${titulo} - miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}