export default function Navbar() {
    return (
      <div className="fixed top-0 left-0 w-full z-50">
        <nav className="bg-black text-white shadow-md">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="text-xl font-bold">
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
            </div>
            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="/" className="hover:text-gray-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="work-experience" className="hover:text-gray-400">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="projects" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="assignments" className="hover:text-gray-400">
                  Assignments
                </a>
              </li>
              <li>
                <a href="contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}