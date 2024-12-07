import { Book, Clock, Calendar } from 'lucide-react'

const courses = [
  {
    title: "Introduction to 3D Printing",
    description: "Learn the basics of 3D printing technology and how to create your first 3D model.",
    duration: "4 weeks",
    schedule: "Tuesdays and Thursdays, 2-4 PM"
  },
  {
    title: "Advanced CNC Machining",
    description: "Master the art of CNC machining with hands-on projects and industry-standard software.",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 3-5 PM"
  },
  // Add more courses as needed
]

export default function CoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex items-center text-gray-600 mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{course.schedule}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

