import { assets } from "../assets/assets"

const About = () => {
  return (
     <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mt-28">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src={assets.heroImage}
                        alt="" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                        <div className="flex -space-x-4 shrink-0">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                            <div
                                className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-800">Rated by users Worldwide</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">Bookify is a modern hotel booking platform designed to simplify the way travelers discover, compare, and reserve accommodations worldwide. Whether you're planning a weekend getaway, a business trip, or a family vacation, our platform puts you in control — with transparent pricing, real-time availability, and a seamless booking experience from search to check-in. 
                        What sets us apart:
                        
                        <ol className="list-disc mt-1">
                            <li>Curated listings — Every property on Bookify is verified, so what you see is what you get.</li>
                            <li>Smart search — Filter by location, price, amenities, and guest ratings to find your ideal stay in seconds.</li>
                            <li>Direct booking — Book directly with properties and skip the middleman fees.</li>
                            <li>Secure payments — Your transactions are protected end-to-end with industry-standard encryption.</li>
                            <li>24/7 support — Our team is here to help before, during, and after your stay.</li>
                        </ol>
                    </p>
                
                </div>
            </section>
        </>
  )
}

export default About
