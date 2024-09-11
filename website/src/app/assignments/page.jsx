import Navbar from "../components/navbar"
import Cards from "../components/cards"

export default function Assignments() {
    return (
        <div>
            <Navbar />
            <div className="pt-24">
                <header className="text-center py-8 border-y-2">
                    <h1 className="text-4xl font-bold text-gray-800">My Assignments</h1>
                </header>
                <Cards 
                    title="Assignment 1" 
                    date="Due: 9/16/2024"
                    body="Creating my own portfolio website!"
                    link="https://github.com/andeliuliu/andeliuliu.github.io"
                />
                <Cards 
                    title="Assignment 2" 
                    date="Due: TBD!"
                    body="TBD!"
                    link="GitHub"
                />
                <Cards 
                    title="Assignment 3" 
                    date="Due: TBD!"
                    body="TBD!"
                    link="GitHub"

                />
                <Cards 
                    title="Assignment 4" 
                    date="Due: TBD!"
                    body="TBD!"
                    link="GitHub"

                />
                <Cards 
                    title="Assignment 5" 
                    date="Due: TBD!"
                    body="TBD!"
                    link="GitHub"

                />
                <Cards 
                    title="Assignment 6" 
                    date="Due: TBD!"
                    body="TBD!"
                    link="GitHub"

                />
                <Cards 
                    title="Assignment 7" 
                    date="Due: TBD!"
                    body="TBD!"
                    link="GitHub"

                />
                <Cards 
                    title="Assignment 8" 
                    date="Due: TBD!"
                    body="TBD!"
                    link="GitHub"
                />

            </div>
        </div>
    )
}