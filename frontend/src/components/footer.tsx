import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1e3c72] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:makerspace@iiti.ac.in" className="hover:underline">
                makerspace@iiti.ac.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <address className="not-italic">
                IIT Indore, Khandwa Road, Simrol, Indore 453552
              </address>
            </div>
          </div>
          <div className="text-sm text-right">
            © {new Date().getFullYear()} MakerSpace, Indian Institute of Technology Indore.
            <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

