// import Image from 'next/image'

// const machines = [
//   {
//     name: "3D Printer",
//     description: "High-precision 3D printer for rapid prototyping and small-scale manufacturing.",
//     image: "/placeholder.svg?height=300&width=300"
//   },
//   {
//     name: "Laser Cutter",
//     description: "Powerful laser cutter for precise cutting and engraving of various materials.",
//     image: "/placeholder.svg?height=300&width=300"
//   },
//   {
//     name: "CNC Router",
//     description: "Computer-controlled cutting machine for woodworking and metalworking projects.",
//     image: "/placeholder.svg?height=300&width=300"
//   },
//   // Add more machines as needed
// ]

// export default function MachineryPage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Our Machinery</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {machines.map((machine, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <Image
//               src={machine.image}
//               alt={machine.name}
//               width={300}
//               height={300}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{machine.name}</h2>
//               <p className="text-gray-600">{machine.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

import Image from 'next/image'

const machines = [
  {
    name: "3D Printer",
    description: "High-precision 3D printer for rapid prototyping and small-scale manufacturing.",
    image: "/images/facilities/3dPrinter.jpeg?height=300&width=300",
    capabilities: [
      "Resolution: 50-400 microns",
      "Build Volume: 250 x 250 x 300 mm",
      "Materials: PLA, ABS, PETG, TPU",
      "Dual extruder for multi-material printing"
    ]
  },
  {
    name: "Laser Cutter",
    description: "Powerful laser cutter for precise cutting and engraving of various materials.",
    image: "/images/facilities/laserCutter.jpeg?height=300&width=300",
    capabilities: [
      "Working Area: 900 x 600 mm",
      "Laser Power: 80W CO2 laser tube",
      "Materials: Wood, Acrylic, Leather, Paper",
      "Precision: 0.025mm"
    ]
  },
  {
    name: "CNC Router",
    description: "Computer-controlled cutting machine for woodworking and metalworking projects.",
    image: "/images/facilities/cncRouter.jpeg?height=300&width=300",
    capabilities: [
      "Working Area: 1200 x 1200 x 150 mm",
      "Spindle Speed: 24,000 RPM",
      "Materials: Wood, Soft Metals, Plastics",
      "3-axis movement with optional 4th axis"
    ]
  },
]

export default function MachineryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Machinery</h1>
      <div className="space-y-12">
        {machines.map((machine, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  width={300}
                  height={300}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-2">{machine.name}</h2>
                <p className="text-gray-600 mb-4">{machine.description}</p>
                <h3 className="text-lg font-semibold mb-2">Capabilities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {machine.capabilities.map((capability, capIndex) => (
                    <li key={capIndex}>{capability}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

