import Navbar from "../components/navbar"
import Cards from "../components/cards"

export default function Projects() {
    return (
        <div className="pt-24">
            <Navbar />
            <header className="text-center py-8 border-y-2">
                <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
            </header>
            <Cards 
                title="E-commerce Website"
                date="June 2023"
                body="A mock e-commerce website with full functionality ranging from selecting different styles of a product, Q&A section, and Ratings/Reviews section. 
                      To reduce latency from 4+ seconds to < 100ms, I identified inefficiencies using Postman to test API endpoints with JSON payloads, query plans, K6, and Loader.io. 
                      I increased client RPS from 100 to 2500 with < 1% error rate using NGINX load balancer and EC2 Instances. 
                      I also improved Google Lighthouse performance by 25% by modularizing functions and using HTML async attributes."
            />
            <Cards 
                title="Worlddex"
                date="October 2023"
                body="A prize-winning hackathon project that my team and I presented at the CalHacks UC Berkeley Hackathon. 
                      WorldDex is an iOS mobile app that lets users scan objects, speak their names, and try to “catch” them, adding the item to a collection stored both in the app and on the blockchain. Users can interact with their collection through conversations powered by AI models, and each scan creates an NFT to verify ownership, with features like community sharing and real-time updates."
            />
            <Cards 
                title="Open-AI powered Slackbot"
                date="May 2024 - August 2024"
                body="As part of an ongoing project, I optimized the company’s OpenAI-powered Slackbot by replacing Redis with JSON files, significantly improving memory usage and result consistency. 
                      Additionally, I integrated new features using Ruby on Rails, leveraging the chat completions API and enhancing web scraping efficiency to streamline business workflows and improve bot performance."
            />
        </div>
    )
}