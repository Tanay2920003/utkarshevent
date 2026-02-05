export default function DayCard({ day }: any) {
     return (
          <div className="bg-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition">
               <h2 className="text-2xl font-bold">{day.day}</h2>
               <p className="text-pink-400">{day.date}</p>
               <p className="mt-2">📍 {day.venue}</p>

               <ul className="mt-4 space-y-1">
                    {day.events.map((e: string, i: number) => (
                         <li key={i}>✨ {e}</li>
                    ))}
               </ul>
          </div>
     );
}
