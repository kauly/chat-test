import Script from "next/script";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-positivo bg-cover">
      <div id="gpt-max-webchat" className="w-[800px] h-[600px]">
        <Script
          defer
          id="script-gptmax"
          src="https://d1nfa9z59crrh.cloudfront.net/scripts-files/index.umd.js?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNDI4Niwia25vd2xlZGdlX2Jhc2VfaWQiOjQzODQ3fQ.X_GUyLzlamgT9mViBP9vDLarYwEJoXbgoOYJoKwTxUk"
        />
      </div>
    </div>
  );
}
