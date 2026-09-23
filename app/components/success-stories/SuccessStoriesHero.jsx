export default function SuccessStoriesHero({ stories = [] }) {
  const caseStudyTiles = stories.slice(0, 6).map(({ image, brand }) => ({
    image,
    brand,
  }));

  const columns = [
    [
      caseStudyTiles[0],
      { brand: caseStudyTiles[0]?.brand },
      caseStudyTiles[1],
      { brand: caseStudyTiles[1]?.brand },
    ],
    [
      caseStudyTiles[2],
      { brand: caseStudyTiles[2]?.brand },
      caseStudyTiles[3],
      { brand: caseStudyTiles[3]?.brand },
    ],
    [
      caseStudyTiles[4],
      { brand: caseStudyTiles[4]?.brand },
      caseStudyTiles[5],
      { brand: caseStudyTiles[5]?.brand },
    ],
    [
      caseStudyTiles[0],
      { brand: caseStudyTiles[0]?.brand },
      caseStudyTiles[1],
      { brand: caseStudyTiles[1]?.brand },
    ],
  ];

  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[760px] overflow-hidden bg-[#24105c] text-center text-white max-md:h-[700px] max-md:min-h-0">
      <div className="absolute inset-0 grid grid-cols-4 gap-1 max-md:grid-cols-2">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="relative overflow-hidden">
            <div
              className={`flex flex-col gap-1 ${
                columnIndex % 2
                  ? "[animation:successStoriesVerticalReverse_34s_linear_infinite]"
                  : "[animation:successStoriesVertical_30s_linear_infinite]"
              }`}
            >
              {[...column, ...column].map((tile, index) => (
                <div
                  key={`${columnIndex}-${index}`}
                  className="relative flex h-[255px] shrink-0 items-center justify-center overflow-hidden border border-[#a078db]/35 bg-[#311477]"
                >
                  {tile?.image ? (
                    <img
                      src={tile.image}
                      alt=""
                      className="h-full w-full object-cover opacity-75"
                    />
                  ) : (
                    <span className="whitespace-pre-line px-4 font-[family-name:var(--font-fraunces)] text-3xl leading-[.9] tracking-wide text-white/65 max-md:text-xl">
                      {tile?.brand}
                    </span>
                  )}
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,#17063755,#28105d88)]" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[#1b073f]/30" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1050px] flex-col items-center justify-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-white/80">
          Customer success stories
        </p>
        <h1 className="mt-6 max-w-[950px] font-[family-name:var(--font-fraunces)] text-[64px] leading-[.98] tracking-[-1.5px] max-md:text-[42px]">
          Success stories from
          <br />
          subscription brands like yours
        </h1>
        {/* <a
          href="#stories"
          className="mt-10 inline-flex bg-[#9837ff] px-8 py-4 text-sm font-semibold text-white"
        >
          Read success stories
        </a> */}
      </div>
    </section>
  );
}
