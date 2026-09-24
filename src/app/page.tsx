import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Image
            src="/images/church-logo.jpg"
            alt="New Christian Faith Ministry"
            width={160}
            height={160}
            priority
            className="mx-auto mb-8 h-auto w-32 object-contain md:w-40"
          />

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-church-red">
            Welcome To
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-church-blue-dark md:text-6xl lg:text-7xl">
            New Christian Faith Ministry
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            The Word is true from the beginning
          </p>
        </div>
      </section>
    </main>
  );
}