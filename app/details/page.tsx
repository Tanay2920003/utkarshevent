import Navbar from "@/components/Navbar";
import { event } from "@/data/events";

export default function Details() {
     return (
          <>
               <Navbar />

               <div className="px-10 py-20 max-w-3xl mx-auto">

                    <h1 className="text-4xl font-bold mb-6">What Happens in 3 Days?</h1>

                    {event.days.map((d, i) => (
                         <div key={i} className="mb-8 bg-white/10 p-6 rounded-xl">
                              <h2 className="text-2xl font-bold">{d.day}</h2>
                              <p className="text-pink-400">{d.date}</p>
                              <p>Venue: {d.venue}</p>

                              <ul className="mt-3">
                                   {d.events.map((e, j) => (
                                        <li key={j}>🔥 {e}</li>
                                   ))}
                              </ul>
                         </div>
                    ))}

               </div>
          </>
     );
}
