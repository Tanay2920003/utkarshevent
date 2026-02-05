import Navbar from "@/components/Navbar";
import DayCard from "@/components/DayCard";
import { event } from "@/data/events";

export default function Timeline() {
     return (
          <>
               <Navbar />

               <div className="px-10 py-20 grid md:grid-cols-3 gap-8">
                    {event.days.map((day, i) => (
                         <DayCard key={i} day={day} />
                    ))}
               </div>
          </>
     );
}
