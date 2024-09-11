import Navbar from "../components/navbar"
import Cards from "../components/cards"

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="pt-24">
                <header className="text-center py-8 border-y-2">
                    <h1 className="text-4xl font-bold text-gray-800">My Contact Information</h1>
                </header>
                <Cards 
                    title="Email" 
                    body="andeliu@bu.edu"
                />
            </div>
        </div>
    )
}