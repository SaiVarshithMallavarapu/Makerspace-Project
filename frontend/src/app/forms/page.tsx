import Link from 'next/link'

const forms = [
  {
    title: "Equipment Reservation",
    description: "Reserve time slots for using specific equipment in the MakerSpace.",
    link: "/forms/equipment-reservation"
  },
  {
    title: "Project Proposal",
    description: "Submit a proposal for your project to get approval and resources.",
    link: "/forms/project-proposal"
  },
  {
    title: "Training Request",
    description: "Request training sessions for specific machinery or tools.",
    link: "/forms/training-request"
  },
  // Add more forms as needed
]

export default function FormsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Forms</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {forms.map((form, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{form.title}</h2>
            <p className="text-gray-600 mb-4">{form.description}</p>
            <Link
              href={form.link}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Fill Form
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

