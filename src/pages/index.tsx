import Image from "next/image";


import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Spline scene="https://prod.spline.design/agbl9HbUh2NKCr4W/scene.splinecode" />
      <div><Spline scene="https://prod.spline.design/GS5cR1F7ul7wbOse/scene.splinecode" /></div>
      <div><Spline scene="https://prod.spline.design/4-yxNqkhkzAuyfy0/scene.splinecode" /></div>
    </main>
  );
}
