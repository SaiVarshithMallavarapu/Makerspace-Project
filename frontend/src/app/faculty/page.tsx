import Image from 'next/image'

const facultyMembers = [
  {
    name: "Elsa",
    position: "Associate Professor",
    department: "Mechanical Engineering",
    image: "/images/faculty/elsa.png?height=300&width=300",
    email: "elsa@iiti.ac.in"
  },
  {
    name: "Dr. Jane Smith",
    position: "Assistant Professor",
    department: "Mechanical Engineering",
    image: "/images/faculty/jane-smith.jpg?height=300&width=300",
    email: "janesmith@iiti.ac.in"
    },
  {
    name: "Dr. Robert",
    position: "Assistant Professor",
    department: "Mechanical Engineering",
    image: "/images/faculty/robert.jpeg?height=300&width=300",
    email: "robert@iiti.ac.in"
  },
  // Add more faculty members as needed
]

export default function FacultyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Faculty</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={faculty.image}
              alt={faculty.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{faculty.name}</h2>
              <p className="text-gray-600 mb-1">{faculty.position}</p>
              <p className="text-gray-600 mb-2">{faculty.department}</p>
              <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">
                {faculty.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

