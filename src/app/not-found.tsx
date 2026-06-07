
import Link from 'next/link';
import LogoCI from "@/components/LogoCI";


export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[99999] min-h-screen bg-clr-base-2 text-clr-main-1 flex flex-col items-center justify-center overflow-hidden px-6">
      
      <div className="absolute inset-0 bg-bgclr-startup-dark pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-clr-primary-1/5 blur-[120px] rounded-full pointer-events-none" />

<div className="absolute top-4 left-[2vw] sm:top-10 sm:left-[4vw] w-full max-w-[200px] sm:max-w-[300px] flex flex-col items-center pointer-events-auto">
  <Link href="/" className='block w-full h-full relative z-[10001]'>
    <LogoCI className={`text-clr-base-1 overflow-visible`} 
      stroke="currentColor" 
      strokeWidth="0"
	  uniqueId="hero"
    />
  </Link>
</div>

      <div className="relative z-10 text-center max-w-md">
        <p className="text-clr-primary-1 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          Status: 404
        </p>
        
        <h1 className="text-clr-base-1 text-2xl sm:text-3xl font-bold tracking-wider mb-6 uppercase">
          Frontend Demo Site
        </h1>
        
        <p className="text-clr-base-1/70 text-sm leading-relaxed tracking-widest mb-12 text-left sm:text-left">
          当サイトはフロントエンドの実装サンプル（ポートフォリオ）として制作しているため、現在はトップページのみの実装となっております。<br className="hidden sm:inline" />
          メインのコンポーネントやアニメーションの挙動は、ぜひトップページにてご覧ください。
        </p>


        <Link 
          href="/"
          className="inline-block bg-transparent border border-clr-base-1/20 hover:border-clr-primary-1 text-clr-base-1 text-xs font-mono tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--clr-primary-1-rgb),0.05)]"
        >
          Return to Home View
        </Link>
      </div>
    </div>
  );
}