import Navbar from "../components/navbar"
import Cards from "../components/cards"

export default function Experience() {
    return (
        <div className="pt-24">
            <Navbar />
            <header className="text-center py-8 border-y-2">
                <h1 className="text-4xl font-bold text-gray-800">My Work Experience</h1>
            </header>
            <Cards 
                title="Junior Development Lead at Hack4Impact"
                date="January 2024 - May 2024"
                body="Designed a full-stack curriculum to teach and engage a cohort of 50+ college students, a 300% increase in participation from last semester. 
                      Led the backend Express.js and Databases courses by assisting students in establishing their foundations of SQL query writing, creating restful APIs, and connecting frontend to backend."
            />
            <Cards 
                title="Software Engineer Intern at Dominion Capital"
                date="May 2024 - August 2024"
                body="Optimized the company's OpenAI Slackbot data query feature by replacing Redis with JSON files, which reduced memory usage by 40%, and improved AI prompts to increase result consistency.
                      Enhanced web scraping efficiency by 18% by optimizing URL data extraction using advanced tools for headless browsing and HTML parsing.
                      Implemented 4 features for the AI Slackbot using Ruby on Rails by utilizing the chat completions API, leveraging model-generated arguments to execute function calls, and managing conversation state with Redis, streamlining business processes."
            />
            <Cards 
                title="Lead Software Engineer at Hack4Impact"
                date="June 2024 - Present"
                body="Led a team of three software engineers to develop a membership portal for Amplify Latinx, a a non-partisan, collaborative non-profit with the mission of advancing Latino prosperity and leadership representation.
                      Built features such as a Membership Dashboard, Benefits & Discounts Section, Events & Early Access, and more.
                      Managed the tech stacks and git flow to maintain fluidity within merges between branches"
            />
        </div>
    )
}