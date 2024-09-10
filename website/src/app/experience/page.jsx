import Navbar from "../components/navbar"

export default function Experience() {
    return (
        <div>
            <Navbar />
            <div className="pt-16">
                <section className="bg-white shadow-md rounded-lg p-6 my-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>
                        <strong>E-commerce Website:</strong> A mock online store built with React, Tailwind CSS, and dynamic product
                        components.
                        </li>
                        <li>
                        <strong>AI Slackbot:</strong> A chatbot that assists users in generating payoff letters and retrieving data from
                        databases.
                        </li>
                        <li>
                        <strong>Blockchain Hackathon Project:</strong> A prize-winning project using blockchain technology to enhance
                        sustainability tracking.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}