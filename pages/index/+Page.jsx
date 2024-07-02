import "./code.css"

export { Page }

// import { Counter } from './Counter'

function Page() {
  const skills = ["HTML", "CSS", "JavaScript", "RestAPI", "React", "Node.js"];
  return (
    <>
      <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <header className="bg-blue-900 text-white p-6 shadow-md flex flex-col items-center">
          <h1 className="text-4xl font-bold">Your Name</h1>
          <p className="text-lg mt-2">Your Job Title</p>
        </header>

        <main className="p-6 max-w-4xl mx-auto">
          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Profile</h2>
            <p className="text-lg">
              Experienced professional in [Your Field] with a passion for [Your Passion]. 
              Proven track record in [Your Achievements]. Excellent skills in [Your Skills].
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Experience</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Job Title - Company Name</h3>
              <p className="text-gray-700 italic mb-2">Dates of Employment</p>
              <ul className="list-disc pl-5 text-lg">
                <li>Key responsibility or achievement #1</li>
                <li>Key responsibility or achievement #2</li>
                <li>Key responsibility or achievement #3</li>
              </ul>
            </div>
            {/* Add more job experiences as needed */}
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Education</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Degree - University Name</h3>
              <p className="text-gray-700 italic mb-2">Dates of Attendance</p>
              <p className="text-lg">Relevant coursework or achievements.</p>
            </div>
            {/* Add more educational experiences as needed */}
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </section>


          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Contact</h2>
            <p className="text-lg">Email: <a href="mailto:your.email@example.com" className="text-blue-700">your.email@example.com</a></p>
            <p className="text-lg">Phone: <a href="tel:+1234567890" className="text-blue-700">+1234567890</a></p>
            <p className="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-700">linkedin.com/in/yourprofile</a></p>
          </section>
        </main>
      </div>
    </>
  )
}
