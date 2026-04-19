import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // レンタルサーバーにアップロードするために「静的ファイル（HTML/CSS/JSの塊）」として out フォルダに書き出し
	images: { unoptimized: true },
  allowedDevOrigins: ['192.168.40.27', '192.168.40.33', '172.20.10.5', '192.168.40.252', 'rynoMac-mini.local', 'localhost'],
  // もし Next.js 15以上であれば、以下も有効な場合があります

};

export default nextConfig;
