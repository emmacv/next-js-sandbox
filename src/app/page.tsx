import ClientComponent from "@/components/ClientComponent";
import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      <span>Client component</span>
      <ClientComponent>
        <Title />
      </ClientComponent>
    </div>
  );
}
