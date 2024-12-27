"use client";

import { 
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

// about data
const about = {
    title: "About me",
    description: "I am a beginner in programming, and now I am studying at Purwadhika as a fullstack web developer, I come from Medan, North Sumatra, and now I live in Jakarta.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Yogas Wara"
        },
        {
            fieldName: "Phone",
            fieldValue: "+62 812 3470 1212"
        },
        {
            fieldName: "Experience",
            fieldValue: "Purwadhika bootcamp"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indonesia"
        },
        {
            fieldName: "Github",
            fieldValue: "YogasWara18"
        },
        {
            fieldName: "Email",
            fieldValue: "teukukurniayogaswara@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "Indonesia, English otw ✌️"
        },
    ]
};

// experience data
const experience = {
    icon: "/assests/resume/badge.svg",
    title: "My experience",
    description: "I am currently taking programming training at Purwadhika Bootcamp, and I am taking the Full Stack Web Development class.",
    items: [
        {
            company: "Tech Industry.",
            position: "Fullstack Development",
            duration: "2024 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Frond-End Developper Intern",
            duration: "2021 - 2022",
        },
        {
            company: "E-commerce Starup",
            position: "Freelance Web Development",
            duration: "2020 - 2021",
        },
    ],
};

// education data
const education = {
    icon: "/assests/resume/cap.svg",
    title: "My education",
    description: "Now I am studying at the Purwadhika bootcamp as a full stack web developer.",
    items: [
        {
            institution: "Purwadhika bootcamp.",
            degree: "Full Stack Web Development",
            duration: "2024 - Present",
        },
    ],
};
       
// skiils data 
const skills = {
    title: "My skills",
    description: "The following are the skills I use.",
    skillList : [
        {
            icon: <FaHtml5/>,
            name: "Html 5",
        },
        {
            icon: <FaCss3/>,
            name: "Css 3",
        },
        {
            icon: <FaJs/>,
            name: "Javascript",
        },
        {
            icon: <FaReact/>,
            name: "React.js",
        },
        {
            icon: <FaNodeJs/>,
            name: "Node.js",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwind.css"
        }
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return ( 
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
}} 
className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"

>
<div className="container mx-auto">
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
        
        {/* experience */}
        <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                            return ( 
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                <div className="flex items-center gap-3">
                                    {/* dot */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.company}</p>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                </ScrollArea>
            </div>
            </TabsContent>
            
             {/* education */}
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                            return ( 
                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                                <span className="text-accent">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                <div className="flex items-center gap-3">
                                    {/* dot */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.institution}</p>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                </ScrollArea>
            </div>
            </TabsContent>
            
             {/* skills */}
        <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                    </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                        return <li key={index}>
                            <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="capitalize">{skill.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                
                    })}
                </ul>
            </div>
            </TabsContent>
        
             {/* about me */}
        <TabsContent value="about" 
        className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                        </li>
                        );
                    })}
                </ul>
            </div>
            </TabsContent>
        </div>
    </Tabs>
</div>
</motion.div>
);
};

export default Resume;




