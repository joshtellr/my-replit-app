import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import ExperienceCard from "@/components/dashboard/ExperienceCard";

const Resume = () => {
  const { data: resume, isLoading } = useQuery({
    queryKey: ['/api/resume'],
  });

  const experienceData = isLoading ? [
    {
      id: 1,
      title: "Senior Product Support Specialist",
      company: "Zendesk, Inc.",
      period: "Jan 2020 - Present",
      location: "San Francisco, CA",
      logo: "https://logo.clearbit.com/zendesk.com",
      responsibilities: [
        "Led a team of 5 support specialists handling enterprise client requests",
        "Improved ticket resolution time by 32% through process optimization",
        "Collaborated with product teams to implement customer-requested features"
      ],
      skills: [
        { name: "Zendesk", color: "bg-blue-100 text-blue-800" },
        { name: "Intercom", color: "bg-indigo-100 text-indigo-800" },
        { name: "Customer Support", color: "bg-green-100 text-green-800" },
        { name: "Team Leadership", color: "bg-yellow-100 text-yellow-800" }
      ]
    },
    {
      id: 2,
      title: "Technical Support Specialist",
      company: "Intercom",
      period: "Mar 2018 - Dec 2019",
      location: "Remote",
      logo: "https://logo.clearbit.com/intercom.com",
      responsibilities: [
        "Managed 50+ customer support tickets daily with 98% satisfaction rate",
        "Developed internal knowledge base reducing time to resolution",
        "Conducted client training sessions on product features"
      ],
      skills: [
        { name: "Intercom", color: "bg-indigo-100 text-indigo-800" },
        { name: "Customer Support", color: "bg-green-100 text-green-800" },
        { name: "Knowledge Base", color: "bg-purple-100 text-purple-800" }
      ]
    },
    {
      id: 3,
      title: "Customer Success Representative",
      company: "Freshdesk",
      period: "Jun 2016 - Feb 2018",
      location: "Boston, MA",
      logo: "https://logo.clearbit.com/freshworks.com",
      responsibilities: [
        "Handled tier 1 support for SaaS customers",
        "Created documentation and video tutorials for common issues",
        "Achieved 95% satisfaction rating across all customer interactions"
      ],
      skills: [
        { name: "Freshdesk", color: "bg-green-100 text-green-800" },
        { name: "Documentation", color: "bg-blue-100 text-blue-800" },
        { name: "SaaS", color: "bg-purple-100 text-purple-800" }
      ]
    }
  ] : resume?.experience;

  const educationData = isLoading ? [
    {
      id: 1,
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      period: "2012 - 2016",
      location: "Berkeley, CA",
      logo: "https://logo.clearbit.com/berkeley.edu",
      achievements: [
        "Graduated with honors (3.8 GPA)",
        "Senior Project: Automated Customer Support Chatbot",
        "Teaching Assistant for Introduction to Programming"
      ],
      keywords: [
        { name: "Computer Science", color: "bg-blue-100 text-blue-800" },
        { name: "AI", color: "bg-purple-100 text-purple-800" },
        { name: "Teaching", color: "bg-yellow-100 text-yellow-800" }
      ]
    }
  ] : resume?.education;

  const skills = isLoading ? [
    { id: 1, name: "Customer Support Platforms", level: "Expert" },
    { id: 2, name: "Technical Troubleshooting", level: "Expert" },
    { id: 3, name: "Knowledge Base Development", level: "Advanced" },
    { id: 4, name: "User Training", level: "Advanced" },
    { id: 5, name: "JavaScript", level: "Intermediate" },
    { id: 6, name: "React", level: "Intermediate" },
    { id: 7, name: "Python", level: "Intermediate" },
    { id: 8, name: "SQL", level: "Intermediate" }
  ] : resume?.skills;

  const certifications = isLoading ? [
    { id: 1, name: "Zendesk Support Administrator", issuer: "Zendesk", date: "2021" },
    { id: 2, name: "Certified Customer Support Professional", issuer: "ICMI", date: "2020" },
    { id: 3, name: "Intercom Product Specialist", issuer: "Intercom", date: "2019" },
    { id: 4, name: "Freshdesk Support Specialist", issuer: "Freshworks", date: "2017" },
    { id: 5, name: "ITIL Foundation", issuer: "Axelos", date: "2016" }
  ] : resume?.certifications;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 pb-12">
      <motion.div 
        className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex items-center mb-2">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mr-2">
                <FiArrowLeft className="mr-1" /> Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-neutral-800">Resume</h1>
          </div>
          <p className="text-sm text-neutral-600">A detailed overview of my professional experience and skills</p>
        </div>
        <Button className="mt-3 sm:mt-0" variant="outline">
          <FiDownload className="mr-2" />
          Download PDF
        </Button>
      </motion.div>

      {/* Personal Info Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader className="flex flex-row items-start space-x-4 pb-2">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">John Doe</CardTitle>
              <p className="text-neutral-600 text-sm font-medium">Product Support Specialist</p>
              <div className="flex items-center mt-1 text-sm text-neutral-500">
                <span>San Francisco, CA</span>
                <span className="mx-2">•</span>
                <span>john.doe@example.com</span>
                <span className="mx-2">•</span>
                <span>(123) 456-7890</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="secondary">Available for Work</Badge>
                <Badge variant="outline">Remote</Badge>
                <Badge variant="outline">Relocation</Badge>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
            <CardTitle className="text-lg flex items-center">
              <FiBriefcase className="mr-2" /> Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {experienceData?.map((experience) => (
              <ExperienceCard
                key={experience.id}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                location={experience.location}
                logo={experience.logo}
                responsibilities={experience.responsibilities}
                skills={experience.skills}
              />
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Education Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
            <CardTitle className="text-lg flex items-center">
              <i className="bx bx-graduation mr-2"></i> Education
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {educationData?.map((education) => (
              <div key={education.id} className="border-b border-neutral-200 pb-5 mb-5 last:mb-0 last:border-b-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-base font-medium text-neutral-800">{education.degree}</h4>
                    <p className="text-sm text-neutral-600">{education.institution}</p>
                    <div className="mt-1 flex items-center text-sm text-neutral-500">
                      <i className="bx bx-calendar-alt mr-1"></i>
                      <span>{education.period}</span>
                      <span className="mx-2">•</span>
                      <i className="bx bx-map mr-1"></i>
                      <span>{education.location}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img src={education.logo} alt={`${education.institution} logo`} className="h-10 w-10 rounded" />
                  </div>
                </div>
                <div className="mt-3">
                  <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                    {education.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.keywords.map((keyword, idx) => (
                    <span 
                      key={idx} 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${keyword.color}`}
                    >
                      {keyword.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
              <CardTitle className="text-lg flex items-center">
                <i className="bx bx-code-block mr-2"></i> Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {skills?.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-neutral-500">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full" 
                        style={{ 
                          width: skill.level === 'Expert' ? '95%' : 
                                 skill.level === 'Advanced' ? '80%' : 
                                 skill.level === 'Intermediate' ? '60%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
              <CardTitle className="text-lg flex items-center">
                <i className="bx bx-certification mr-2"></i> Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {certifications?.map((cert) => (
                  <div key={cert.id} className="pb-3 last:pb-0">
                    <h4 className="text-sm font-medium">{cert.name}</h4>
                    <div className="flex justify-between mt-1 text-xs text-neutral-500">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    {cert.id < certifications.length && <Separator className="mt-3" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
