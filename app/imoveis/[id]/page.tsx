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
      <main className="min-h-screen bg-[#f7f5f1] text-[#20201e] p-8">
        <div className="max-w-5xl mx-auto py-16">
          <h1 className="text-4xl font-semibold">
            Imóvel não encontrado
          </h1>

          <p className="mt-4 text-[#686863]">
            O imóvel que você procura não existe.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f5f1] text-[#20201e] p-8">
      <div className="max-w-5xl mx-auto py-16">

        <p className="text-sm uppercase tracking-[0.2em] text-[#8b7355]">
          {imovel.tipo}
        </p>

        <h1 className="text-5xl font-semibold mt-4">
          {imovel.titulo}
        </h1>

        <p className="text-lg text-[#686863] mt-3">
          {imovel.local}
        </p>

        <div className="mt-10 h-96 md:h-[520px] rounded-3xl bg-[#EDE7DD] overflow-hidden">

  {imovel.imagem ? (
    <img
      src={imovel.imagem}
      alt={imovel.titulo}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-[#B8A58E]">
      Foto do imóvel
    </div>
  )}

</div>

        <div className="mt-10">
          <p className="text-sm text-[#686863]">
            A partir de
          </p>

          <p className="text-3xl font-semibold mt-1">
            {imovel.preco}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">

          <div className="bg-white rounded-xl p-5">
            <p className="text-2xl font-semibold">
              {imovel.quartos}
            </p>
            <p className="text-sm text-[#686863]">
              Quartos
            </p>
          </div>

          <div className="bg-white rounded-xl p-5">
            <p className="text-2xl font-semibold">
              {imovel.banheiros}
            </p>
            <p className="text-sm text-[#686863]">
              Banheiros
            </p>
          </div>

          <div className="bg-white rounded-xl p-5">
            <p className="text-2xl font-semibold">
              {imovel.area}m²
            </p>
            <p className="text-sm text-[#686863]">
              Área
            </p>
          </div>

        </div>

        <div className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-semibold">
            Sobre este imóvel
          </h2>

          <p className="mt-4 text-[#686863] leading-8">
            {imovel.descricao}
          </p>
        </div>

        <button className="mt-10 bg-[#20201e] text-white rounded-xl px-8 py-4 hover:bg-[#8b7355] transition">
          Tenho interesse
        </button>

      </div>
    </main>
  );
}