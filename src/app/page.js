import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_4fr] h-screen">
      <Sidebar />
      <div>
        <Navbar />
      </div>
    </div>
  );
}
