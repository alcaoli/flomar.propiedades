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
    const correspondeNegocio = imovel.negocio === tipoNegocio;

    const correspondeBusca = imovel.local
      .toLowerCase()
      .includes(busca.toLowerCase());

    const correspondeTipo =
      tipoImovel === "Todos" || imovel.tipo === tipoImovel;

    const correspondeQuartos =
      quartos === "Todos" || imovel.quartos >= Number(quartos);

    const precoNumerico = Number(imovel.preco.replace(/\D/g, ""));

    const correspondePreco =
      precoMaximo === "" || precoNumerico <= Number(precoMaximo);

    return (
      correspondeNegocio &&
      correspondeBusca &&
      correspondeTipo &&
      correspondeQuartos &&
      correspondePreco
    );
  });

  return (
    <main className="min-h-screen bg-[#163191] text-[#F4EFE9]">

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-8 py-7 flex items-center justify-between">

        <a
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          flomar <span className="text-[#BAAA97]">propiedades</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">

          <button
            onClick={() => setTipoNegocio("Comprar")}
            className="hover:text-[#BAAA97] transition"
          >
            Comprar
          </button>

          <button
            onClick={() => setTipoNegocio("Alugar")}
            className="hover:text-[#BAAA97] transition"
          >
            Alugar
          </button>

          <a
            href="/sobre"
            className="hover:text-[#BAAA97] transition"
          >
            Sobre nós
          </a>

          <button
            className="border border-[#BAAA97] text-[#BAAA97] rounded-full px-5 py-2 hover:bg-[#BAAA97] hover:text-[#191714] transition"
          >
            Entrar
          </button>

        </nav>
      </header>


      {/* INTRODUÇÃO */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-12">

        <p className="text-sm uppercase tracking-[0.25em] text-[#BAAA97]">
          Imóveis
        </p>

        <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mt-4 leading-tight">
          Encontre seu próximo{" "}
          <span className="text-[#BAAA97]">endereço.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-[#F4EFE9]/70 leading-7">
          Explore nossa seleção de imóveis escolhidos para diferentes
          momentos, estilos e formas de viver.
        </p>

      </section>


      {/* FILTROS */}
      <section className="max-w-7xl mx-auto px-8 pb-16">

        <div className="bg-[#191714] rounded-3xl p-4 border border-[#F4EFE9]/10">

          <div className="flex gap-3 mb-5">

            <button
              onClick={() => setTipoNegocio("Comprar")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                tipoNegocio === "Comprar"
                  ? "bg-[#163191] text-[#F4EFE9]"
                  : "bg-[#F4EFE9]/10 text-[#F4EFE9]/70 border border-[#F4EFE9]/10 hover:text-[#F4EFE9]"
              }`}
            >
              Comprar
            </button>

            <button
              onClick={() => setTipoNegocio("Alugar")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                tipoNegocio === "Alugar"
                  ? "bg-[#163191] text-[#F4EFE9]"
                  : "bg-[#F4EFE9]/10 text-[#F4EFE9]/70 border border-[#F4EFE9]/10 hover:text-[#F4EFE9]"
              }`}
            >
              Alugar
            </button>

          </div>


          <div className="grid md:grid-cols-4 gap-3">

            <input
              type="text"
              placeholder="Cidade ou região"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="bg-[#F4EFE9]/10 border border-[#F4EFE9]/10 rounded-xl px-4 py-3 text-sm text-[#F4EFE9] placeholder:text-[#F4EFE9]/40 outline-none focus:border-[#BAAA97]"
            />

            <select
              value={tipoImovel}
              onChange={(e) => setTipoImovel(e.target.value)}
              className="bg-[#F4EFE9]/10 border border-[#F4EFE9]/10 rounded-xl px-4 py-3 text-sm text-[#F4EFE9] outline-none"
            >
              <option value="Todos" className="bg-[#191714]">
                Todos os tipos
              </option>

              <option value="Casa" className="bg-[#191714]">
                Casa
              </option>

              <option value="Apartamento" className="bg-[#191714]">
                Apartamento
              </option>
            </select>


            <select
              value={quartos}
              onChange={(e) => setQuartos(e.target.value)}
              className="bg-[#F4EFE9]/10 border border-[#F4EFE9]/10 rounded-xl px-4 py-3 text-sm text-[#F4EFE9] outline-none"
            >
              <option value="Todos" className="bg-[#191714]">
                Qualquer quantidade de quartos
              </option>

              <option value="1" className="bg-[#191714]">
                1+ quartos
              </option>

              <option value="2" className="bg-[#191714]">
                2+ quartos
              </option>

              <option value="3" className="bg-[#191714]">
                3+ quartos
              </option>

              <option value="4" className="bg-[#191714]">
                4+ quartos
              </option>
            </select>


            <input
              type="number"
              placeholder="Preço máximo"
              value={precoMaximo}
              onChange={(e) => setPrecoMaximo(e.target.value)}
              className="bg-[#F4EFE9]/10 border border-[#F4EFE9]/10 rounded-xl px-4 py-3 text-sm text-[#F4EFE9] placeholder:text-[#F4EFE9]/40 outline-none focus:border-[#BAAA97]"
            />

          </div>

        </div>

      </section>


      {/* LISTAGEM */}
      <section className="bg-[#191714] py-20">

        <div className="max-w-7xl mx-auto px-8">

          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.2em] text-[#BAAA97]">
              Seleção
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2 text-[#F4EFE9]">
              {tipoNegocio === "Comprar"
                ? "Imóveis para comprar"
                : "Imóveis para alugar"}
            </h2>

            <p className="text-sm text-[#F4EFE9]/50 mt-3">
              {imoveisFiltrados.length} imóveis encontrados
            </p>

          </div>


          {imoveisFiltrados.length > 0 ? (

            <div className="grid md:grid-cols-3 gap-6">

              {imoveisFiltrados.map((imovel) => (

                <article
                  key={imovel.id}
                  className="group bg-[#F4EFE9] rounded-3xl p-3 pb-6 hover:shadow-xl transition-shadow duration-300"
                >

                  <div className="h-72 rounded-2xl bg-[#BAAA97]/20 overflow-hidden">

                    {imovel.imagem ? (

                      <img
                        src={imovel.imagem}
                        alt={imovel.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                    ) : (

                      <div className="w-full h-full flex items-center justify-center text-[#191714]/40 text-sm">
                        Foto do imóvel
                      </div>

                    )}

                  </div>


                  <div className="px-2 pt-5">

                    <p className="text-xs uppercase tracking-wider text-[#163191]">
                      {imovel.tipo}
                    </p>

                    <h3 className="text-lg font-serif font-medium mt-2 text-[#191714]">
                      {imovel.titulo}
                    </h3>

                    <p className="text-sm text-[#191714]/70 mt-1">
                      {imovel.local}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#191714]/60 mt-3">

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

                    <p className="font-semibold mt-4 text-[#191714]">
                      {imovel.preco}
                    </p>

                    <a
                      href={`/imoveis/${imovel.id}`}
                      className="inline-block mt-4 text-sm font-medium text-[#191714] underline underline-offset-4 hover:text-[#163191] transition"
                    >
                      Ver imóvel →
                    </a>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="py-20 text-center">

              <p className="text-lg font-medium text-[#F4EFE9]">
                Nenhum imóvel encontrado.
              </p>

              <p className="text-sm text-[#F4EFE9]/50 mt-2">
                Tente alterar os filtros da busca.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#163191] px-8 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#F4EFE9]/50">

        <p>
          © 2026 Flomar Propiedades. Todos os direitos reservados.
        </p>

        <p>
          Seu próximo capítulo começa aqui.
        </p>

      </footer>

    </main>
  );
}