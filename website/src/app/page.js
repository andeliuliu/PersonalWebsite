import Navbar from "./components/navbar";
import Cards from "./components/cards";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <Navbar />
      <div className="pt-24">
        <header className="text-center py-8 border-y-2">
          <h1 className="text-4xl font-bold text-gray-800">Andrew Liu</h1>
          <p className="text-lg text-gray-600 mt-2">Software Engineer & Web Developer</p>
        </header>

        <div className="flex justify-center mt-8">
          <Image
            src="/profile.jpeg"  
            alt="Profile"
            width={256}   
            height={256}   
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex justify-center">

        </div>

        <Cards
          title="About Me!"
          body="Hello beautiful people! I am Andrew Liu, a senior computer science student at Boston University looking to make a substantial, positive impact on society! I love to run, play basketball, and cook high protein, low calorie meals :D"
        />  
      </div>
    </div>
    
  );
}