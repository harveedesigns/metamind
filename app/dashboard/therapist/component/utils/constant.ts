export const titles = [
  { label: "Mr.", value: "Mr." },
  { label: "Mrs.", value: "Mrs." },
  { label: "Ms.", value: "Ms." },
  { label: "Dr.", value: "Dr." },
]

export const initialValues = {
    title: titles[0],
    name: "",
    backgroundVideo:"",
    username: "",
    experience: "",
    reviews: [{ description: "", rating: "",dateInfo : "", name : "" }],
    expertise: [],
    languages : [],
    licence: "",
    address : "",
    availability: [],
    time: "",
    link: "",
    charges: "",
    bio: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    code: "",
    qualifications: "",
    professionalInfo: "",
    pic: {file : []},
    // New fields for the Details section
    aboutMe: {
      title: "About Me",
      paragraphs: [""],
    },
    affiliations: [],
    services: [],
    conditions: [],
    stats: [
      { value: 0, label: "YEARS OF EXPERIENCE" },
      { value: 0, label: "HOURS OF THERAPY" },
      { value: 0, label: "HOURS IN ASSESSMENT" },
    ],
  }