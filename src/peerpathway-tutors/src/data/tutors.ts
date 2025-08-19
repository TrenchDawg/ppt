export interface Tutor {
    id: number;
    name: string;
    subject: string;
    bio: string;
    hourlyRate: number;
    calendlyUrl?: string;
}

export const tutors: Tutor[] = [
    {
        id: 1,
        name: "Kiran Rao",
        subject: "Mathematics",
        bio: "Experienced math tutor with a passion for helping students succeed.",
        hourlyRate: 30,
        calendlyUrl: "https://calendly.com/kiran-rao",
    },
    {
        id: 2,
        name: "Julius Lesnick Schafer",
        subject: "Physics",
        bio: "Physics enthusiast with a knack for making complex concepts simple.",
        hourlyRate: 35,
        calendlyUrl: "https://calendly.com/julius-schafer",
    },
    {
        id: 3,
        name: "Alexander Fiterman",
        subject: "Chemistry",
        bio: "Chemistry tutor with a focus on practical applications and experiments.",
        hourlyRate: 30,
    },
    {
        id: 4,
        name: "Isaac Hochglaube",
        subject: "Biology",
        bio: "Biology tutor with a strong background in environmental science.",
        hourlyRate: 30,
    },
    {
        id: 5,
        name: "Owen Lowry",
        subject: "English",
        bio: "English tutor specializing in literature and writing skills.",
        hourlyRate: 30,
    },
    {
        id: 6,
        name: "Blake Saikin",
        subject: "History",
        bio: "History tutor with a passion for storytelling and critical thinking.",
        hourlyRate: 30,
    },
    {
        id: 7,
        name: "Joseph Novak",
        subject: "Computer Science",
        bio: "Computer Science tutor with experience in programming and software development.",
        hourlyRate: 35,
    },
];