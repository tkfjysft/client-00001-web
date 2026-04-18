import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // レンタルサーバーにアップロードするために「静的ファイル（HTML/CSS/JSの塊）」として out フォルダに書き出し
};

export default nextConfig;
