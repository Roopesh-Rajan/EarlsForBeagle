import { useState } from "react";
import Chef from "../assets/chef.jpg";
import { Clock, Calendar, Users } from "lucide-react";
import Swoosh from "../assets/swoosh.png";

const ReservationSection = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ time, date, guests });
  };

  return (
    <div id="contact" className="bg-slate text-white font-sans min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-20">
        <div className="flex items-center justify-center">
          <img
            src={Chef}
            alt="Chef preparing food"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-gold text-3xl md:text-4xl font-title italic mb-2">Reservations</h3>
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Better food <span className="text-gold">forever</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4">
              Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet <br className="hidden md:block" />
              magna suscipit.
            </p>
            <img src={Swoosh} alt="swoosh" className="w-12 md:w-16 mt-4" />
          </div>
          <div className="flex flex-wrap space-x-4">
            <button className="px-4 md:px-6 py-2 bg-transparent border-2 border-white text-white rounded-md hover:bg-gray-700 transition">
              Book a Table
            </button>
            <button className="px-4 md:px-6 py-2 bg-gold text-black font-semibold rounded-md hover:bg-yellow-600 transition">
              Special Food
            </button>
          </div>
          <div className="bg-blueblack bg-opacity-80 p-6 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                  SPECIAL <br />
                  <span className="text-gold">FOOD</span>
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-6">
                  Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center border-b border-gray-700 pb-2">
                  <Clock className="text-gold text-xl mr-2" />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex items-center border-b border-gray-700 pb-2">
                  <Calendar className="text-gold text-xl mr-2" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex items-center border-b border-gray-700 pb-2">
                  <Users className="text-gold text-xl mr-2" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-white focus:outline-none"
                    required
                  >
                    <option className="text-black">1 Person</option>
                    <option className="text-black">2 Persons</option>
                    <option className="text-black">3 Persons</option>
                    <option className="text-black">4+ Persons</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold text-black font-semibold rounded-md hover:bg-yellow-600 transition"
                >
                  Find a Table
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;
