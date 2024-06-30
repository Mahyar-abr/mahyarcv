export { Page }

// import { Counter } from './Counter'

function Page() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold">Your Name</h1>
        <p className="text-lg">Your Job Title</p>
      </header>
      
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-1 mb-2">Profile</h2>
          <p>
            Experienced professional in [Your Field] with a passion for [Your Passion]. 
            Proven track record in [Your Achievements]. Excellent skills in [Your Skills].
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-1 mb-2">Experience</h2>
          <div>
            <h3 className="text-xl font-semibold">Job Title - Company Name</h3>
            <p className="text-gray-700 italic">Dates of Employment</p>
            <ul className="list-disc pl-5">
              <li>Key responsibility or achievement #1</li>
              <li>Key responsibility or achievement #2</li>
              <li>Key responsibility or achievement #3</li>
            </ul>
          </div>
          {/* Add more job experiences as needed */}
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-1 mb-2">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Degree - University Name</h3>
            <p className="text-gray-700 italic">Dates of Attendance</p>
            <p>Relevant coursework or achievements.</p>
          </div>
          {/* Add more educational experiences as needed */}
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-1 mb-2">Skills</h2>
          <ul className="list-disc pl-5">
            <li>Skill #1</li>
            <li>Skill #2</li>
            <li>Skill #3</li>
            {/* Add more skills as needed */}
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-blue-900 pb-1 mb-2">Contact</h2>
          <p>Email: <a href="mailto:your.email@example.com" className="text-blue-700">your.email@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-700">+1234567890</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-700">linkedin.com/in/yourprofile</a></p>
        </section>
      </main>
      
      <footer className="bg-blue-900 text-white p-4 mt-8">
        <p className="text-center">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}
