import Image from "next/image";
import Logo from "@/assets/logo.png";
import LandingImg from "@/assets/job-tracker.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo" width={300} className="max-w-xs" />
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr_600px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            <span className="text-primary">Effortless </span>job tracking
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Stay on top of your job search with a streamlined tracking system
            that keeps everything in one place. From applications and interview
            schedules to offer letters and follow-ups, our platform helps you
            manage every step with clarity and ease. Say goodbye to scattered
            spreadsheets and hello to smarter job hunting.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>

        <Image
          src={LandingImg}
          alt="landing"
          width={600}
          className="hidden lg:block"
        />
      </section>
    </main>
  );
}
