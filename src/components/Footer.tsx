// src/components/Footer.tsx
import Link from "next/link";

interface TeamMember {
  name: string;
  id: string;
  role?: string;
}

const Footer: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "Akshat Bhatt", id: "202301460", role: "Group Representative" },
    { name: "Maheriya Harsh Prakashbhai", id: "202301470" },
    { name: "Nilesh Mori", id: "202301473" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">VISHWA</h3>
            <p className="text-gray-300 text-sm">
              Vital Information System for Health Wellness and Awareness. A DBMS project by Lab Group 6, Project Group No: 2.
            </p>
          </div>

          {/* Team Members */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Team</h4>
            <ul className="space-y-3">
              {teamMembers.map((member) => (
                <li key={member.id} className="text-gray-300">
                  <span className="font-medium">{member.name}</span> 
                  {member.role && <span className="text-sm text-blue-400"> ({member.role})</span>}
                  <br />
                  <span className="text-xs text-gray-400">ID: {member.id}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/statistics" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Statistics
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VISHWA Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;