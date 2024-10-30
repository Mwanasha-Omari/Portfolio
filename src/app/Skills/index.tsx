import React from 'react';
const Skills = () => {
const skills = [
 { name: 'HTML/CSS', percentage: 98 },
 { name: 'React.js', percentage: 90 },
 { name: 'Next.js', percentage: 80 },
 { name: 'Python', percentage: 60 },
 { name: 'Kotlin', percentage: 50 },
 { name: 'Data Science', percentage: 75 },
 ];
return (
<section id="skills" className="scroll-mt-36 container mx-auto px-4 py-12 mt-36">
<h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
{skills.map((skill, index) => (
<div key={index} className="w-full px-8">
<div className="h-12 bg-gray-200 rounded-full relative">
<div
className="h-full bg-blue rounded-full transition-all duration-500 ease-in-out"
style={{ width: `${skill.percentage}%` }}
></div>
<div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
<span className="text-sm font-medium text-white">{skill.name}</span>
<span className="text-sm font-medium text-gray-800">{skill.percentage}%</span>
</div>
</div>
</div>
 ))}
</div>
</section>
 );
};
export default Skills;