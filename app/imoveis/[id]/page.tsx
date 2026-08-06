import { imoveis } from "../../dados/imoveis";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Imovel({ params }: Props) {
  const { id } = await params;

  const imovel = imoveis.find((item) => item.id === Number(id));

  if (!imovel) {
    return (
      <main className="min-h-screen bg-[#163191] text-[#F4EFE9]">
        <div className="max-w-5xl mx-auto px-8 py-24">

          <p className="text-sm uppercase tracking-[0.2em] text-[#BAAA97]">
            Flomar Propiedades
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-medium mt-5">
            Imóvel não encontrado
          </h1>

          <p className="mt-4 text-[#F4EFE9]/65">
            O imóvel que você procura não existe ou não está mais disponível.
          </p>

          <a
            href="/imoveis"
            className="inline-block mt-8 border border-[#BAAA97] text-[#BAAA97] rounded-full px-6 py-3 text-sm hover:bg-[#BAAA97] hover:text-[#191714] transition"
          >
            Voltar para imóveis
          </a>

        </div>
      </main>
    );
  }

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

          <a
            href="/?tipo=Comprar"
            className="hover:text-[#BAAA97] transition"
          >
            Comprar
          </a>

          <a
            href="/?tipo=Alugar"
            className="hover:text-[#BAAA97] transition"
          >
            Alugar
          </a>

          <a
            href="/imoveis"
            className="hover:text-[#BAAA97] transition"
          >
            Imóveis
          </a>

          <a
            href="/sobre"
            className="hover:text-[#BAAA97] transition"
          >
            Sobre nós
          </a>

        </nav>

      </header>


      {/* CONTEÚDO */}

      <section className="max-w-5xl mx-auto px-8 py-20">

        <a
          href="/imoveis"
          className="text-sm text-[#F4EFE9]/60 hover:text-[#BAAA97] transition"
        >
          ← Voltar para imóveis
        </a>


        {/* TÍTULO */}

        <div className="mt-12">

          <p className="text-sm uppercase tracking-[0.2em] text-[#BAAA97]">
            {imovel.tipo}
          </p>

          <h1 className="text-5xl md:text-6xl font-serif font-medium mt-4 leading-tight">
            {imovel.titulo}
          </h1>

          <p className="text-lg text-[#F4EFE9]/65 mt-4">
            {imovel.local}
          </p>

        </div>


        {/* IMAGEM */}

        <div className="mt-12 h-96 md:h-[520px] rounded-3xl bg-[#191714] border border-[#F4EFE9]/10 overflow-hidden">

          {imovel.imagem ? (

            <img
              src={imovel.imagem}
              alt={imovel.titulo}
              className="w-full h-full object-cover"
            />

          ) : (

            <div className="w-full h-full flex flex-col items-center justify-center text-[#BAAA97]">

              <span className="text-sm uppercase tracking-[0.2em]">
                Flomar Propiedades
              </span>

              <span className="text-sm text-[#F4EFE9]/30 mt-2">
                Foto do imóvel
              </span>

            </div>

          )}

        </div>


        {/* PREÇO */}

        <div className="mt-10">

          <p className="text-sm text-[#F4EFE9]/50">
            Valor do imóvel
          </p>

          <p className="text-3xl md:text-4xl font-semibold mt-2 text-[#BAAA97]">
            {imovel.preco}
          </p>

        </div>


        {/* CARACTERÍSTICAS */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

          <div className="bg-[#191714] border border-[#F4EFE9]/10 rounded-2xl p-6">

            <p className="text-3xl font-semibold">
              {imovel.quartos}
            </p>

            <p className="text-sm text-[#F4EFE9]/50 mt-1">
              Quartos
            </p>

          </div>


          <div className="bg-[#191714] border border-[#F4EFE9]/10 rounded-2xl p-6">

            <p className="text-3xl font-semibold">
              {imovel.banheiros}
            </p>

            <p className="text-sm text-[#F4EFE9]/50 mt-1">
              Banheiros
            </p>

          </div>


          <div className="bg-[#191714] border border-[#F4EFE9]/10 rounded-2xl p-6">

            <p className="text-3xl font-semibold">
              {imovel.area}m²
            </p>

            <p className="text-sm text-[#F4EFE9]/50 mt-1">
              Área
            </p>

          </div>

        </div>


        {/* DESCRIÇÃO */}

        <div className="mt-16 max-w-2xl">

          <p className="text-sm uppercase tracking-[0.2em] text-[#BAAA97]">
            Sobre este imóvel
          </p>

          <h2 className="text-3xl font-serif font-medium mt-3">
            Um espaço pensado para viver.
          </h2>

          <p className="mt-6 text-[#F4EFE9]/65 leading-8">
            {imovel.descricao}
          </p>

        </div>


        {/* CTA */}
<div className="mt-12">

  <a
    href={`https://wa.me/5524999668881?text=${encodeURIComponent(
      `Olá! Tenho interesse no imóvel "${imovel.titulo}", localizado em ${imovel.local}. Gostaria de saber mais informações.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#BAAA97] text-[#191714] rounded-full px-8 py-4 font-medium hover:bg-[#F4EFE9] transition"
  >
    Tenho interesse
  </a>
  
</div>
      </section>


      {/* FOOTER */}

      <footer className="border-t border-[#F4EFE9]/10 px-8 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#F4EFE9]/50">

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