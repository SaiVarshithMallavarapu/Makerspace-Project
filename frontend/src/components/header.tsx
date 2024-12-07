import Image from "next/image"

export default function Header() {
  return (
    <div className="bg-[#1e3c72] py-4">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png?height=100&width=100"
            alt="IIT Indore MakerSpace Logo"
            width={180}
            height={180}
            className="rounded-full bg-[#1e3c72] p-1"
          />
          <div className="text-white">
            <h1 className="text-3xl font-semibold py-2">MakerSpace</h1>
            <p className="text-xl">Indian Institute of Technology Indore</p>
          </div>
        </div>
      </div>
    </div>
  )
}

