import { Container } from "@/components/Container";
import ArrowLink from "@/components/ArrowLink";

const MESSAGE_CONTENT = {
    mission: "Mission Statement",
    catchphrase: {
      top: "テクノロジーで",
      middle_1: "ビジネスの",
      middle_2: "「次」を",
      bottom: "形にする。",
    },
    paragraphs: [
      "私たちは、単にコードを書く集団ではありません。お客様のビジネスの本質を理解し、最新のテクノロジーを駆使して、真に価値のあるデジタル体験を共創するパートナーです。",
      "堅牢な設計による安定した基盤と、洗練されたインターフェースによる快適な操作性。高度な専門性と確かな実装力をもって、複雑なビジネス課題を最適なデジタルソリューションへと導きます。",
    ],
    signature: "Established 2026",
	link: "",
  };

export default function MessageSection() {

  return (
<section 
      id="message-section" 
      data-bg="dark" 
      className="relative w-full bg-clr-base-1 py-32"
	  style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >

	  {/* 1. 背景ユニット：fixed で画面全体に固定 */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        
        {/* 【最背面】ドット模様：画面全体に敷く */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `radial-gradient(var(--color-clr-main-1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* 【前面】写真背景 + 斜めカット：これで下のドットを「隠す」 */}
        <div className="absolute inset-0 bg-clr-primary-2 
          [clip-path:polygon(0_0,100%_0,100%_70%,0_20%)]
          md:[clip-path:polygon(0_0,90%_0,15%_100%,0_100%)]">
          
          {/* 背景画像：親の clip-path の範囲内だけに表示される */}
          <div
            className="absolute inset-0 bg-[url('/images/bg_01.webp')] bg-cover
			brightness-[60%] contrast-[160%]
              [background-position:-180px_-30px] md:[background-position:0px_0px]"
          />
        </div>
      </div>
	  
      {/* --- コンテンツレイヤー --- */}
      <Container>
        <div className="relative z-10 mx-auto reveal bg-clr-base-2/80 p-10">
          
          {/* セクション見出し装飾 */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-4 sm:w-12 h-[2px] bg-clr-primary-1" />
            <span className="text-clr-main-1 font-mono text-xs tracking-[0.1em] sm:tracking-[0.4em] uppercase">
              {MESSAGE_CONTENT.mission}
            </span>
            <div className="flex-grow h-[1px] bg-clr-main-1/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 items-start">
            {/* 左側：キャッチコピー */}
            <div className="relative w-fit lg:col-span-6 bg-clr-base-2/40 py-6 pl-6 pr-8">
              <h2 className="text-3xl md:text-5xl font-[700] text-clr-main-1/90 !leading-[1.5]">
                {MESSAGE_CONTENT.catchphrase.top}<br />
                {MESSAGE_CONTENT.catchphrase.middle_1}<br />
                {MESSAGE_CONTENT.catchphrase.middle_2}<br />
                <span className="text-clr-primary-1">{MESSAGE_CONTENT.catchphrase.bottom}</span>
              </h2>
			  <div className="absolute size-full inset-0 bg-clr-main-2
			  		[clip-path:polygon(0%_0%,5%_0%,0%_5%)]" />
            </div>

            {/* 右側：本文 */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-6">
                {MESSAGE_CONTENT.paragraphs.map((text, i) => (
                  <p key={i} className={i === 0 
                    ? "text-clr-main-1/80 text-xl font-medium md:text-2xl" 
                    : "text-clr-main-1/80 text-lg"
                  }>
                    {text}
                  </p>
                ))}
                <ArrowLink href={MESSAGE_CONTENT.link || "#"} />
              </div>

            </div>
          </div>

		                {/* 下部の署名 */}
              <div className="pt-8 flex justify-between items-center gap-4">
                <div className="flex-grow h-[1px] bg-clr-primary-1/30 reveal" />
                <span className="text-clr-main-1 font-mono text-xs italic">
                  {MESSAGE_CONTENT.signature}
                </span>
              </div>
        </div>
      </Container>
    </section>
  );
}