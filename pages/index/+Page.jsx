import "./code.css"

export { Page }

// import { Counter } from './Counter'

function Page() {
  const skills = ["Django", "React", "JavaScript", "Python", "Docker", "Ubuntu Server", "Celery", "Redis", "PostgreSQL", "MongoDB", "MySQL", "WordPress", "PHP", "RabbitMQ"];
  return (
    <>
      <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <header className="bg-blue-900 text-white p-6 shadow-md flex flex-col items-center">
          <h1 className="text-4xl font-bold">MAHYAR ALIAKBARI</h1>
          <p className="text-lg mt-2">WEB DEVELOPER</p>
        </header>

        <main className="p-6 max-w-4xl mx-auto">
          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Profile</h2>
            <p className="text-lg">
            As a motivated and driven individual with a passion for web development, 
            I am seeking opportunities with companies that prioritize professional 
            growth and personal development. 
            My goal is to continuously enhance my skills and contribute to the company's 
            success by tackling new challenges. 
            Leveraging my technical expertise and modern programming principles, 
            I aim to make a significant impact and become a key member of the team.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Experience</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">HI-TECH</h3>
              <p className="text-gray-700 italic mb-2">2023-10-23 - 2024-07-21</p>
              <ul className="list-disc pl-5 text-lg">
                <li>Advanced Web Development with Django and React</li>
                <li>Proficient in Server Management and Deployment</li>
                <li>Expert in Database Technologies(PostgreSQL, MongoDB, and MySQL)</li>
                <li>Efficient Background Task Management with Celery</li>
                <li>Proficient in .NET Core and PHP</li>
                <li>Proficient in Containerization with Docker</li>
                <li>Experienced WordPress Development</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold">IR-TECH</h3>
              <p className="text-gray-700 italic mb-2">2022-01-26 - 2024-06-26</p>
              <ul className="list-disc pl-5 text-lg">
                <li>Experienced with System Messaging and Queuing</li>
                <li>Machine Learning and Python Development</li>
                <li>Skilled in Frontend Development with Tailwind and CSS</li>
                <li>System Messaging and Queue Management with RabbitMQ</li>
                <li>Successful Implementation of WordPress E-Commerce Solutions</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4">Education</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">Diploma in Software Engineering from a Technical College</h3>
            </div>
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
            <p className="text-lg">Email: <a href="mailto:your.email@example.com" className="text-blue-700">mahyarabr96@gmail.com</a></p>
            <p className="text-lg">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-700">www.linkedin.com/in/mahyar-akbari-8b5a77228</a></p>
          </section>
        </main>
      </div>
    </>
  )
}
