// pages/index.js
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div> 
      <Navbar />
      <div className="pt-16">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">Andrew Liu</h1>
          <p className="text-lg text-gray-600 mt-2">Software Engineer & Web Developer</p>
        </header>

        {/* Introduction Section */}
        <section className="bg-white shadow-md rounded-lg p-6 my-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
          <p className="text-gray-600">
            Hello beautiful people! I am Andrew Liu, a senior computer science student at Boston University looking to make a substantial, positive impact on society!
          </p>
        </section>    

        {/* Footer Section */}
        <footer className="text-center mt-8">
          <p className="text-gray-500">Contact: andrew@example.com</p>
        </footer>
        </div>
    </div>
    
  );
}