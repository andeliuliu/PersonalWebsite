export default function Cards( {title, date, body, link} ) {

    return (
        <section className="bg-white shadow-md rounded-lg p-6 my-8 w-8/12 mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
            <h4 className="text-l text-gray-700 mb-4">{date}</h4>
            <p className="text-gray-600">
                {body}
            </p>

            {link && link.includes('https://github.com/') && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        View on GitHub
                    </button>
                </a>
            )}
        </section>    
    )
}

