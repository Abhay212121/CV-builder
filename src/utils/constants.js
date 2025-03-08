const personalData = {
    name: 'Abhay Sharma', email: 'abhay.work.02@gmail.com', phone: '+91 9971119813', github: 'github.com/Abhay212121', linkedin: 'linkedin.com/in/abhay-sharma2121'
}

const educationData = [
    { collegeName: 'MGM College of Engineering and Technology (AKTU University)', course: 'Bachelor of Technology in Computer Science ', location: 'Noida, UP', duration: '2021 - 2025' },

    { collegeName: 'St. Columbus School', course: 'High School', location: 'Faridabad, HR', duration: '2009 - 2021' }
]

const experienceData = [
    { companyName: 'Digital Supreme', role: 'Software Engineering Intern', time: 'Jul 2024 - Aug 2024', desc: 'Developed and deployed their website from scratch with the help of my team' }
]

const projectData = [
    { projectName: 'CV builder', time: 'Jan 2025', desc: 'A website to easily make you CV / Resume' },

    { projectName: 'Procrastinot', time: 'Dec 2024', desc: 'A simple and intuitive web app to create, organize, and manage your daily tasks' },

    { projectName: 'Weatherly', time: 'Nov 2024', desc: ' real-time weather web App to display live weather data' }
]

const newPersonalData = {
    name: '', email: '', phone: '', github: '', linkedin: ''
}

const newEducationData = [{ collegeName: '', course: '', location: '', duration: '' }]

const newExperienceData = [{ companyName: '', role: '', time: '', desc: '' }]

const newProjectData = [{ projectName: '', time: '', desc: '' }]

const emptyPersonalData = {
    name: '', email: '', phone: '', github: '', linkedin: ''
}

const emptyEducationData = { collegeName: '', course: '', location: '', duration: '' }

const emptyExperienceData = { companyName: '', role: '', time: '', desc: '' }

const emptyProjectData = { projectName: '', time: '', desc: '' }


export { personalData, educationData, experienceData, projectData, newPersonalData, newEducationData, newExperienceData, newProjectData, emptyProjectData, emptyExperienceData, emptyEducationData, emptyPersonalData }