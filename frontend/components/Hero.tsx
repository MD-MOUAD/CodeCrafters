import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[100vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1740149591335-44c89e0533c2?q=80&w=1344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Where Thoughts Take Flight
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
        Creativity is the bridge between our cultural heritage and a tech-driven future
        </p>
        <button className="relative px-6 py-3 text-white font-semibold bg-transparent border-2 border-transparent rounded-lg before:absolute before:inset-0 before:bg-gradient-to-r from-blue-500 to-yellow-500 before:rounded-lg before:-z-10 hover:before:blur-md transition">
      <Link href="/blogs">
      Start reading
      </Link> 
    </button>
      </div>
    </div>
  )};