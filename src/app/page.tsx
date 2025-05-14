import Image from "next/image";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-screen h-screen justify-center items-center bg-black flex space-x-10 bg-gradient-to-b from-yellow-100 to-gray-400">

      <section className="w-[280px] h-[400px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">

        <section className="bg-morado h-36 flex justify-center relative">
          <section className="absolute top-4 z-10">
            <section className="absolute -z-10 w-29 h-29 rounded-full left-2.5 top-2.5 bg-white"></section>
            <Image 
              src="/senor.png" 
              alt="Christian Jeria" 
              width={135} 
              height={100} 
              className="relative z-20"
            />
          </section>
        </section>


        <section className="mt-16 text-center">
          <h1 className="text-morado text-2xl font-semibold">Christian Jeria</h1>
          <p className="text-morado">Designer</p>
        </section>


        <section className="px-6 py-4 text-center text-sm">
          <p className="text-gray-700">
            Christian contributes a unique sense of design and style to MochaLeaf. He enjoys art, photography, front-end
            web development, and building clean user interfaces.
          </p>
        </section>


        <section className="mt-auto border-t border-gray-200">
          <section className="grid grid-cols-2 divide-x divide-gray-200">
            <a href="#" className="flex justify-center py-3 text-gray-400 hover:bg-gray-100">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="flex justify-center py-3 text-gray-400 hover:bg-gray-100">
              <FaGithub size={20} />
            </a>
          </section>
        </section>
      </section>

      {/* Tarjeta Horizontal (original a la derecha) */}
      <section className="w-[400px] h-[300px] bg-gris rounded-xl relative">
        <section>
          <section className="absolute top-4 left-10 z-10">
            <section className="absolute -z-10 w-29 h-29 rounded-full left-2.5 top-2.5 bg-white"></section>
            <Image 
              src="/senor.png" 
              alt="Christian Jeria" 
              width={135} 
              height={100} 
              className="relative z-20"
            />
          </section>
        </section>
        
        <section className="absolute top-25 left-53 flex space-x-4">
          <a href="#" className="text-morado hover:text-gray-300 text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-morado hover:text-gray-300 text-2xl">
            <FaGithub />
          </a>
        </section>

        <section className="items-end flex flex-col w-full h-20 bg-morado rounded-ss-xl rounded-se-xl">
          <section className="pr-9 p-4">
            <h1 className="text-white text-2xl font-semibold">Christian Jeria</h1>
            <p className="text-white">Designer</p>
          </section>
        </section>
        
        <section className="m-18 ml-10">
          <p>Christian contributes a unique sense of design and style to MochaLeaf. He enjoys art, photography, front-end web development, and building clean user interfaces.</p>
        </section>
      </section>
    </div>
  );
}