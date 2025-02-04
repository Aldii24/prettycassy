import AccordionText from "@/components/AccordionText";
import Chart from "@/components/Chart";
import Galerry from "@/components/Galerry";
import Image from "next/image";
import { Spotify } from "react-spotify-embed";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full md:pt-36 pt-28 md:px-8 px-4 overflow-hidden">
      <div className="relative flex w-full ">
        <Image
          src="/assets/collages/collage.png"
          width={400}
          height={400}
          alt="collage"
          className="rounded-lg shadow-lg md:h-[600px] w-1/2 h-[300px]"
        />
        <Image
          src="/assets/gif/baloon.gif"
          alt="baloon"
          width={150}
          height={150}
          className="absolute top-[150px] left-[0px]"
        />
        <Image
          src="/assets/images/pretty5.jpg"
          alt="pretty"
          width={150}
          height={150}
          className="absolute top-[10px] right-[0px] rounded-lg shadow-lg"
        />

        <Image
          src="/assets/gif/candle.gif"
          width={100}
          height={100}
          alt="candle"
          className="absolute top-[220px] right-[20px]"
        />
      </div>
      <blockquote className="mt-16 border-l-2 pl-4 italic">
        Who's birthday today? pacar akuuu hari ini ulang tahun, happy birthday
        sayang. Maaf ya kalau ngucapinnya lama, aku harap di umur kamu yang
        sekarang (uda tua tapi masi kecik), kamu bisa dapetin hal-hal yang kamu
        inginkan selama ini, yaaa!
      </blockquote>

      <div className="relative mt-4">
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute -top-4 left-[70px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute left-[100px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[20px] left-[130px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[50px] left-[150px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[90px] left-[150px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[125px] left-[130px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[135px] left-[100px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[130px] left-[70px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[100px] left-[60px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[70px] left-[70px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[60px] left-[100px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[70px] left-[130px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[110px] left-[170px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[140px] left-[180px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[170px] left-[170px]"
        />
        <Image
          src="/assets/images/star.png"
          width={50}
          height={50}
          alt="star"
          className="absolute top-[200px] left-[150px]"
        />
      </div>

      <div className="relative mt-6">
        <Image
          src="/assets/images/pretty11.jpg"
          alt="pretty"
          width={300}
          height={300}
          className="absolute left-5 top-[150px] rounded-full w-[100px] h-[100px] object-cover -z-10"
        />
        <Image
          src="/assets/images/pretty8.jpg"
          alt="pretty"
          width={300}
          height={300}
          className="absolute right-5 rounded-full w-[120px] h-[120px] object-cover -z-10"
        />
      </div>

      <div className="mt-[300px]">
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Happy Birthday to the Queen of my heart, the Lady of my dreams, and
          the Love of my Life.
        </blockquote>
      </div>

      <div className="mt-16">
        <h3>3 Hal kenapa aku mencintai dan menyayangi kamu</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Karena kamu sangat cantikkk, baikkk, lucuuu, gemesss, dan sempurnaa
          </li>
          <li>
            Karena kamu sangat cantikkk, baikkk, lucuuu, gemesss, dan sempurnaa
          </li>
          <li>
            Karena kamu sangat cantikkk, baikkk, lucuuu, gemesss, dan sempurnaa
          </li>
        </ul>

        <h4>
          Kenapa cuma 3 hal? karna kalo beribu, beratus ribu, berjuta,
          bermilyar, bertrilyun aku cape ngetiknya, sayang 🥰
        </h4>
      </div>

      <h3 className="mt-16 font-bold">
        Selain itu, kamu juga punya hal-hal yang sangat emejing, yaitu
      </h3>

      <div className="relative mt-5 py-5 pb-10">
        <Chart />
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        An Art Gallery
      </h2>

      <div className="relative">
        <Image
          src="/assets/gif/cheer.gif"
          width={100}
          height={100}
          alt="cheer"
          className="absolute z-10 top-10 right-0"
        />
        <Image
          src="/assets/gif/cheer.gif"
          width={100}
          height={100}
          alt="cheer"
          className="absolute z-10 top-10 -left-3"
        />
        <Image
          src="/assets/gif/cheer-2.gif"
          width={100}
          height={100}
          alt="cheer"
          className="absolute z-10 top-[250px] right-0"
        />
        <Image
          src="/assets/gif/cheer-2.gif"
          width={100}
          height={100}
          alt="cheer"
          className="absolute z-10 top-[250px] -left-3"
        />
      </div>

      <Galerry />

      <div className=" mt-16 w-full h-full">
        <h1 className="mb-4">
          Beberapa pertanyaan tapi sudah ada jawabannya ^_^
        </h1>
        <AccordionText />
      </div>

      <div className="flex justify-center items-center mt-16 w-full">
        <Spotify
          className="w-full"
          link="https://open.spotify.com/playlist/7KVWljKHQORCRnEnTVlSeH?si=mgSfdj2MTfO10qeOoYs9Ug"
        />
      </div>
    </div>
  );
}
