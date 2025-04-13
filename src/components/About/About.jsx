import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/31451218/pexels-photo-31451218/free-photo-of-young-woman-with-red-hair-looking-out-train-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Here is your fullstack developer Chapnam_jr
                        </h2>
                        <h4 className="mt-6 text-red-800">
                            Hi, I am Kaustav Mani Deka, a passionate engineering student currently pursuing my degree in Computer Science and Engineering. I live in Guwahati, Assam, India.
                        </h4>
                        <h4 className="mt-4 text-red-800">
                            I have developed skills in Nodejs,ExpressJs,Mongoose,TailwindCss, React.js, JavaScript, HTML, CSS,PHP and Languages Like C,C++,Java,Python, while constantly exploring and mastering new technologies. My aim is to craft impactful and innovative software solutions.
                        </h4>
                        <h4 className="mt-4 text-red-800">
                            You can reach out to me at <a href="mailto:your-email@example.com" className="text-blue-800 underline">chwapnamkashyap@gmail.com</a>. Let's connect and collaborate!
                        </h4>

                  </div>
              </div>
          </div>
      </div>
  );
}