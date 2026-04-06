import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-[1.5fr,1fr] h-screen">
      <aside>
        <Image
          src="/images/auth-bg.webp"
          alt="Escritório com vários currículos espalhados por todas as mesas."
          width={1000}
          height={800}
          className="w-full h-full object-cover"
          quality={100}
        />
      </aside>

      <form></form>
    </div>
  );
}
