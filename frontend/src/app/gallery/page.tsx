import Image from 'next/image'

const events = [
  {
    title: "Annual MakerFaire 2023",
    date: "June 15-17, 2023",
    description: "Showcased innovative projects from students and faculty. Featured workshops on emerging technologies.",
    images: [
      "/images/gallery/workshop.jpg?height=300&width=500",
      "/images/gallery/workshop.jpg?height=300&width=500"
    ]
  },
  {
    title: "3D Printing Workshop",
    date: "April 5, 2023",
    description: "Hands-on workshop covering advanced techniques in 3D printing, led by industry experts.",
    images: [
      "/images/gallery/workshop.jpg?height=300&width=500"
    ]
  },
  {
    title: "Robotics Symposium",
    date: "February 20-22, 2023",
    description: "Three-day event featuring talks, demonstrations, and competitions in the field of robotics.",
    images: [
      "/images/gallery/workshop.jpg?height=300&width=500",
      "/images/gallery/workshop.jpg?height=300&width=500"
    ]
  },
  {
    title: "IoT Hackathon",
    date: "November 10-12, 2022",
    description: "48-hour hackathon focused on developing innovative IoT solutions for real-world problems.",
    images: [
      "/images/gallery/workshop.jpg?height=300&width=500"
    ]
  }
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Events & Gallery</h1>
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`${event.title} - Image ${imgIndex + 1}`}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

