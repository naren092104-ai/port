import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe, Trophy } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import jsPDF from 'jspdf';

export const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPosition = 10;

    // Set font
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('NARENDHAR D', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('Social Impact Leader | Volunteer Coordinator | CSR Program Manager', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 5;

    doc.setFontSize(9);
    doc.text('Open to Senior CSR Roles • B.Tech Artificial Intelligence and Data Science', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 6;

    doc.setFontSize(9);
    doc.text('Email: naren2004dn@gmail.com | Phone: +91 9751673398', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 4;

    doc.text('Location: Uthangarai, Krishnagiri, India', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    // Helper function to add section
    const addSection = (title, content) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 10;
      }
      doc.setFontSize(11);
      doc.setFont(undefined, 'bold');
      doc.text(title, 10, yPosition);
      yPosition += 7;

      doc.setFontSize(9);
      doc.setFont(undefined, 'normal');
      if (Array.isArray(content)) {
        content.forEach(line => {
          if (yPosition > pageHeight - 10) {
            doc.addPage();
            yPosition = 10;
          }
          const splitText = doc.splitTextToSize(line, pageWidth - 20);
          splitText.forEach(text => {
            doc.text(text, 10, yPosition);
            yPosition += 5;
          });
        });
      } else {
        const splitText = doc.splitTextToSize(content, pageWidth - 20);
        splitText.forEach(text => {
          if (yPosition > pageHeight - 10) {
            doc.addPage();
            yPosition = 10;
          }
          doc.text(text, 10, yPosition);
          yPosition += 5;
        });
      }
      yPosition += 3;
    };

    addSection('CAREER OBJECTIVE', 'Passionate social impact professional seeking a senior role in Corporate Social Responsibility (CSR) to drive meaningful community development through volunteer leadership, educational outreach, strategic program management, and social service initiatives.');

    addSection('EDUCATIONAL QUALIFICATION', [
      'K.S. Rangasamy College of Technology, Tamil Nadu (2022 - 2026)',
      'Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science – CGPA: 7.48',
      '',
      'HSC Adhiyaman Matric. Hr. Sec. School – 95% (May 2022)',
      '',
      'SSLC Adhiyaman Matric. Hr. Sec. School – 83% (March 2020)',
    ]);

    addSection('TECHNICAL SKILLS', [
      'Programming Language: Java and Python',
      'Frontend Development: HTML, CSS, React.js',
      'Backend Development: Node.js',
      'Database: MySQL',
    ]);

    addSection('PROJECTS', 'Volunteer Management Dashboard System: Developed a full-stack volunteer management dashboard with role-based authentication for Admin and Volunteers. Built frontend using React.js, backend using Node.js, designed SQL database, and integrated REST APIs for seamless interaction.');

    addSection('LEADERSHIP ROLES', [
      '• Overall Coordinator, SM (Service Motto) Volunteers',
      '• President, AI & DS Association',
      '• Student Coordinator, National Service Scheme (NSS)',
      '• Volunteer, Atchayam Trust (Erode), TQI (Talent Quest for India)',
      '• SPOC, Talent Quest for India — April 2025 to March 2026',
    ]);

    addSection('VOLUNTEER EXPERIENCE', [
      'Talent Quest for India (NGO) - SPOC, Cluster Class Program (3+ Years)',
      'Led academic sessions for Grades 9-12 students and coordinated volunteers.',
      '',
      'SM Volunteers Club, KSRCT (2022 - 2026)',
      'Served as Volunteer, Vice President, and Overall Coordinator.',
      '',
      'Atchayam Trust (2023 - 2026)',
      'Volunteer Leader supporting 100+ rescue interventions and 20+ family reintegrations.',
      '',
      'Bhumi & Saarvam Educational Trust (2023 - 2026)',
      'Teachers Express Volunteer and rural community development programs.',
    ]);

    addSection('AWARDS & RECOGNITION', [
      '• Best Humanitarian Award – Atchayam Trust',
      '• Best Social Service Award – Saarvam Educational Trust',
      '• Best Socially Responsible Student Award – KSRCT',
      '• Teachers Express Volunteer Award – Bhumi',
      '• Outstanding Service Award – Saarvam Educational Trust',
      '• Cash Award ₹5,000 – AI & DS Department, KSRCT',
    ]);

    addSection('PERSONAL PROFILE', [
      'Age: 21 years',
      'Currently Studying: B.Tech AI & Data Science (2022-2026)',
    ]);

    doc.save('Narendhar_D_Resume.pdf');
  };

  return (
    <>
      <SEOHead
        title="Resume - Narendhar D"
        description="Professional resume and qualifications of Narendhar D, social impact leader and volunteer"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900">
        {/* Header */}
        <div className="pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto px-4"
          >
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent mb-4">
                Narendhar D
              </h1>
              <p className="text-xl text-purple-300 mb-4">
                Social Impact Leader | Volunteer Coordinator | CSR Program Manager
              </p>
              <p className="text-sm text-purple-200 mb-6">
                Open to Senior CSR Roles • B.Tech Artificial Intelligence and Data Science
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=naren2004dn%40gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-purple-300 transition"
                >
                  <Mail size={16} />
                  naren2004dn@gmail.com
                </a>
                <a href="tel:+919751673398" className="flex items-center gap-2 hover:text-purple-300 transition">
                  <Phone size={16} />
                  +91 9751673398
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  Uthangarai, Krishnagiri, India
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <button onClick={handleDownloadPDF} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition">
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-4 pb-20 space-y-12"
        >
          {/* Career Objective */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Career Objective
              </h2>
              <p className="text-gray-200 leading-relaxed">
                Passionate social impact professional seeking a senior role in Corporate Social Responsibility (CSR) to drive meaningful community development through volunteer leadership, educational outreach, strategic program management, and social service initiatives.
              </p>
            </motion.section>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Educational Qualification
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-white">K.S. Rangasamy College of Technology, Tamil Nadu</h3>
                  <p className="text-purple-300 mb-2">Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science</p>
                  <div className="flex justify-between text-gray-300">
                    <span>2022 - 2026</span>
                    <span>CGPA: 7.48</span>
                  </div>
                </div>
                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-white">HSC Adhiyaman Matric. Hr. Sec. School</h3>
                  <div className="flex justify-between text-gray-300">
                    <span>May 2022</span>
                    <span>95%</span>
                  </div>
                </div>
                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-white">SSLC Adhiyaman Matric. Hr. Sec. School</h3>
                  <div className="flex justify-between text-gray-300">
                    <span>March 2020</span>
                    <span>83%</span>
                  </div>
                </div>
              </div>
            </motion.section>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Programming Languages</p>
                  <p className="text-gray-300">Java, Python</p>
                </div>
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Frontend Development</p>
                  <p className="text-gray-300">HTML, CSS, React.js</p>
                </div>
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Backend Development</p>
                  <p className="text-gray-300">Node.js</p>
                </div>
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Database</p>
                  <p className="text-gray-300">MySQL</p>
                </div>
              </div>
            </motion.section>
          </ScrollReveal>

          {/* Projects */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Projects
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Volunteer Management Dashboard System</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Developed a full-stack volunteer management dashboard to handle member data and communication within a club, featuring a role-based authentication system for Admin and Volunteers. Built the frontend using React.js and backend using Node.js, designed and managed an SQL database for efficient data storage, and integrated REST APIs to enable seamless frontend–backend interaction.
                  </p>
                </div>
              </div>
            </motion.section>
          </ScrollReveal>

          {/* Leadership Roles */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Leadership Roles
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                  <span>Overall Coordinator, SM (Service Motto) Volunteers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                  <span>President, AI & DS Association</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                  <span>Student Coordinator, National Service Scheme (NSS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                  <span>Volunteer, Atchayam Trust (Erode), TQI (Talent Quest for India)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                  <span>SPOC, Talent Quest for India — April 2025 to March 2026</span>
                </li>
              </ul>
            </motion.section>
          </ScrollReveal>

          {/* Volunteer Experience */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Volunteer Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-white">Talent Quest for India (NGO)</h3>
                  <p className="text-purple-300">SPOC (Single Point of Contact) – Cluster Class Program</p>
                  <p className="text-gray-400 text-sm mb-3">3+ Years (Ongoing | Entering 4th Year)</p>
                  <p className="text-gray-300">Actively contributed to the Cluster Class Program by delivering structured sessions on academics and foundational IT skills for Grade 9–12 students. Served as SPOC, coordinating volunteers, managing schedules, and handling communication with stakeholders.</p>
                </div>

                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-white">SM Volunteers Club, KSRCT</h3>
                  <p className="text-gray-400 text-sm mb-3">2022 – 2026</p>
                  <p className="text-gray-300">Served as Volunteer, Vice President, and Overall Coordinator, leading social service initiatives, fundraising campaigns, community outreach programs, and volunteer engagement activities.</p>
                </div>

                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-white">Atchayam Trust</h3>
                  <p className="text-gray-400 text-sm mb-3">2023 – 2026</p>
                  <p className="text-gray-300">Volunteer Leader and SPOC responsible for coordinating volunteers, supporting 100+ rescue interventions, facilitating 20+ family reintegration cases, and organizing social welfare activities.</p>
                </div>

                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-white">Bhumi & Saarvam Educational Trust</h3>
                  <p className="text-gray-400 text-sm mb-3">2023 – 2026</p>
                  <p className="text-gray-300">Teachers Express Volunteer and community program participant supporting educational initiatives, youth development, and grassroots development in Kolli Hills.</p>
                </div>
              </div>
            </motion.section>
          </ScrollReveal>

          {/* Awards & Recognition */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Awards & Recognition
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { title: 'Best Humanitarian Award', org: 'Atchayam Trust', img: '/awards/award-1.jpg' },
                  { title: 'Best Socially Responsible Student', org: 'KSRCT', img: '/awards/award-5.jpg' },
                  { title: 'Teachers Express Volunteer Award', org: 'Bhumi', img: '/awards/award-.jpg' },
                  { title: 'Outstanding Service Award', org: 'Saarvam Educational Trust', img: '/awards/award-4.jpg' },
                  { title: 'Cash Award ₹5,000', org: 'AI & DS Department, KSRCT', img: '/awards/award-.jpg' },
                ].map((award, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="rounded-lg overflow-hidden bg-white/5 border border-purple-500/10 hover:border-purple-500/30 transition"
                  >
                    <img src={award.img} alt={award.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <p className="text-purple-300 font-semibold text-sm mb-1">{award.title}</p>
                      <p className="text-gray-400 text-xs">{award.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </ScrollReveal>

          {/* Personal Profile */}
          <ScrollReveal>
            <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                Personal Profile
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Age</p>
                  <p>21 years</p>
                </div>
                <div>
                  <p className="text-purple-300 font-semibold mb-2">Currently Studying</p>
                  <p>B.Tech AI & Data Science (2022-2026)</p>
                </div>
              </div>
            </motion.section>
          </ScrollReveal>
        </motion.div>
      </div>
    </>
  );
};

export default Resume;
