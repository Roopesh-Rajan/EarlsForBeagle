import Signature from "../assets/signature.mp4";
import { Play, Plus } from "lucide-react";

function Signatures() {
  return (
    <div  className="relative h-screen bg-black text-white font-sans">
      <video
        src={Signature}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-8">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <button className="bg-transparent border-2 border-gold text-gold w-16 h-16 rounded-full flex items-center justify-center mb-4 hover:bg-gold hover:text-black transition duration-300">
            <Play className="w-6 h-6" />
          </button>
          <p className="text-center md:text-left text-lg md:text-4xl font-light font-sans ml-16">
            We create delightful experiences.
          </p>
        </div>
        <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 md:w-1/3 font-serif">
          <h2 className="text-gold text-3xl mb-2 font-title">Reservations</h2>
          <h3 className="text-lg md:text-xl font-light mb-6">
            It only takes a <span className="text-gold italic">little sip.</span>
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Crocodile undergoes incision prior to preserving the incisors and
            after that cleaning the tongue.
          </p>
          <div>
            <h4 className="text-gold text-lg font-medium border-b border-gray-700 pb-2 mb-4">
              Signature Cocktails
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Irish Hopped Scotch</span>
                <span>$9.50</span>
              </li>
              <li className="flex justify-between">
                <span>Vieux Carre</span>
                <span>$9.50</span>
              </li>
              <li className="flex justify-between">
                <span>Vesper Martini</span>
                <span>$9.50</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center py-2 border-t border-gray-700">
              <span>Almondmilk Latte</span>
              <Plus className="text-gold w-5 h-5" />
            </div>
            <div className="flex justify-between items-center py-2 border-t border-gray-700">
              <span>Sparkling</span>
              <Plus className="text-gold w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signatures;
