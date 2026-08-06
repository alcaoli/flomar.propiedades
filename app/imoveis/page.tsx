"use client";

import { useState } from "react";
import { imoveis } from "../dados/imoveis";

export default function Imoveis() {
  const [tipoNegocio, setTipoNegocio] = useState("Comprar");
  const [busca, setBusca] = useState("");
  const [tipoImovel, setTipoImovel] = useState("Todos");
  const [quartos, setQuartos] = useState("Todos");
  const [precoMaximo, setPrecoMaximo] = useState("");

  const imoveisFiltrados = imoveis.filter((imovel) => {
    const correspondeNegocio =
      imovel.negocio === tipoNegocio;

    const correspondeBusca =
      imovel.local
        .toLowerCase()
        .includes(busca.toLowerCase());

    const correspondeTipo =
      tipoImovel === "Todos" ||
      imovel.tipo === tipoImovel;

    const correspondeQuartos =
      quartos === "Todos" ||
      imovel.quartos >= Number(quartos);

    const precoNumerico = Number(
      imovel.preco.replace(/\D/g, "")
    );

    const correspondePreco =
      precoMaximo === "" ||
      precoNumerico <= Number(precoMaximo);

    return (
      correspondeNegocio &&
      correspondeBusca &&
      correspondeTipo &&
      correspondeQuartos &&
      correspondePreco
    );
  });

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#171614]">

      {/* CABEÇALHO */}

      <header className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        <a
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          imobiliária<span className="text-[#8b7355]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">

          <button
            onClick={() => setTipoNegocio("Comprar")}
            className="hover:text-[#6F6255] transition"
          >
            Comprar
          </button>

          <button
            onClick={() => setTipoNegocio("Alugar")}
            className="hover:text-[#6F6255] transition"
          >
            Alugar
          </button>

          <a
            href="/sobre"
            className="hover:text-[#6F6255] transition"
          >
            Sobre nós
          </a>

          <button className="border border-[#20201e] rounded-full px-5 py-2 hover:bg-[#20201e] hover:text-white transition">
            Entrar
          </button>

        </nav>

      </header>

      {/* INTRODUÇÃO */}

      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">

        <p className="text-sm uppercase tracking-[0.25em] text-[#B8A58E]">
          Imóveis
        </p>

        <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mt-4">
          Encontre seu próximo endereço.
        </h1>

        <p className="mt-5 max-w-2xl text-[#6F6255] leading-7">
          Explore nossa seleção de imóveis escolhidos para diferentes
          momentos, estilos e formas de viver.
        </p>

      </section>

      {/* FILTROS */}

      <section className="max-w-7xl mx-auto px-8 pb-16">

        <div className="bg-white rounded-3xl p-4 border border-[#EDE7DD] shadow-[0_10px_40px_rgba(23,22,20,0.04)]">

          {/* COMPRAR / ALUGAR */}

          <div className="flex gap-3 mb-5">

            <button
              onClick={() => setTipoNegocio("Comprar")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                tipoNegocio === "Comprar"
                  ? "bg-[#171614] text-white"
                  : "bg-[#F7F3EC] text-[#171614] border border-[#EDE7DD]"
              }`}
            >
              Comprar
            </button>

            <button
              onClick={() => setTipoNegocio("Alugar")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                tipoNegocio === "Alugar"
                  ? "bg-[#171614] text-white"
                  : "bg-[#F7F3EC] text-[#171614] border border-[#EDE7DD]"
              }`}
            >
              Alugar
            </button>

          </div>

          {/* CAMPOS */}

          <div className="grid md:grid-cols-4 gap-3">

            <input
              type="text"
              placeholder="Cidade ou região"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="bg-[#F7F3EC] border border-[#EDE7DD] rounded-xl px-4 py-3 text-sm text-[#171614] outline-none focus:border-[#B8A58E]"
            />

            <select
              value={tipoImovel}
              onChange={(e) => setTipoImovel(e.target.value)}
              className="bg-[#F7F3EC] border border-[#EDE7DD] rounded-xl px-4 py-3 text-sm text-[#171614] outline-none"
            >
              <option value="Todos">
                Todos os tipos
              </option>

              <option value="Casa">
                Casa
              </option>

              <option value="Apartamento">
                Apartamento
              </option>

            </select>

            <select
              value={quartos}
              onChange={(e) => setQuartos(e.target.value)}
              className="bg-[#F7F3EC] border border-[#EDE7DD] rounded-xl px-4 py-3 text-sm text-[#171614] outline-none"
            >
              <option value="Todos">
                Qualquer quantidade de quartos
              </option>

              <option value="1">
                1+ quartos
              </option>

              <option value="2">
                2+ quartos
              </option>

              <option value="3">
                3+ quartos
              </option>

              <option value="4">
                4+ quartos
              </option>

            </select>

            <input
              type="number"
              placeholder="Preço máximo"
              value={precoMaximo}
              onChange={(e) => setPrecoMaximo(e.target.value)}
              className="bg-[#F7F3EC] border border-[#EDE7DD] rounded-xl px-4 py-3 text-sm text-[#171614] outline-none focus:border-[#B8A58E]"
            />

          </div>

        </div>

      </section>

      {/* LISTAGEM */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <div className="flex items-end justify-between mb-10">

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-[#B8A58E]">
                Seleção
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2">
                {tipoNegocio === "Comprar"
                  ? "Imóveis para comprar"
                  : "Imóveis para alugar"}
              </h2>

              <p className="text-sm text-[#6F6255] mt-3">
                {imoveisFiltrados.length} imóveis encontrados
              </p>

            </div>

          </div>

          {/* CARDS */}

          {imoveisFiltrados.length > 0 ? (

            <div className="grid md:grid-cols-3 gap-6">

              {imoveisFiltrados.map((imovel) => (

                <article
                  key={imovel.id}
                  className="group bg-white rounded-3xl p-3 pb-6 border border-[#EDE7DD] hover:shadow-md transition-shadow duration-300"
                >

                  {/* IMAGEM */}

                  <div className="h-72 rounded-2xl bg-[#EDE7DD] overflow-hidden">

                    {imovel.imagem ? (

                      <img
                        src={imovel.imagem}
                        alt={imovel.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                    ) : (

                      <div className="w-full h-full flex items-center justify-center text-[#B8A58E] text-sm">
                        Foto do imóvel
                      </div>

                    )}

                  </div>

                  {/* INFORMAÇÕES */}

                  <div className="px-2 pt-5">

                    <p className="text-xs uppercase tracking-wider text-[#B8A58E]">
                      {imovel.tipo}
                    </p>

                    <h3 className="text-lg font-serif font-medium mt-2">
                      {imovel.titulo}
                    </h3>

                    <p className="text-sm text-[#6F6255] mt-1">
                      {imovel.local}
                    </p>

                    <div className="flex gap-4 text-sm text-[#6F6255] mt-3">

                      <span>
                        {imovel.quartos} quartos
                      </span>

                      <span>
                        {imovel.banheiros} banheiros
                      </span>

                      <span>
                        {imovel.area} m²
                      </span>

                    </div>

                    <p className="font-semibold mt-4">
                      {imovel.preco}
                    </p>

                    <a
                      href={`/imoveis/${imovel.id}`}
                      className="inline-block mt-4 text-sm font-medium underline underline-offset-4 hover:text-[#6F6255] transition"
                    >
                      Ver imóvel →
                    </a>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="py-20 text-center">

              <p className="text-lg font-medium">
                Nenhum imóvel encontrado.
              </p>

              <p className="text-sm text-[#6F6255] mt-2">
                Tente alterar os filtros da busca.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* RODAPÉ */}

      <footer className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#777770]">

        <p>
          © 2026 imobiliária. Todos os direitos reservados.
        </p>

        <p>
          Seu próximo capítulo começa aqui.
        </p>

      </footer>

    </main>
  );
}