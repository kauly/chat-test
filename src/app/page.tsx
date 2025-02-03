import Script from "next/script";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      id="gpt-max-webchat"
    >
      <Script
        defer
        id="script-gptmax"
        src="https://d1nfa9z59crrh.cloudfront.net/scripts-files/index.umd.js?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNDIzNCwia25vd2xlZGdlX2Jhc2VfaWQiOjQyNDU3fQ.Xrf1Z7UBhX4u-Vz7S3GvDvoYJn1AxSf6flLCbhFiCeQ"
      />
    </div>
  );
}
