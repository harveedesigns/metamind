export interface StepData {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  imageUrl: string;
  bg?: string
}


export const dummyStepData: StepData[] = [
  {
    id: 1,
    stepNumber: 'STEP 1',
    title: 'Choosing the symptom',
    description: 'Choose your concerns from our list of conditions or share how you’re feeling.',
    imageUrl: "https://res.cloudinary.com/dekfm4tfh/video/upload/v1743916395/step1_ed_osvyhf.mp4",
    bg: "red.100"
  },
  {
    id: 2,
    stepNumber: 'STEP 2',
    title: 'Selecting the therapist',
    description: 'Browse through our list of qualified therapists and choose the one that suits you best.',
    imageUrl: 'https://res.cloudinary.com/dekfm4tfh/video/upload/v1743916395/STEP_2_Fin_ec3hiy.mp4',
    bg: "#EAF475"
  },
  {
    id: 3,
    stepNumber: 'STEP 3',
    title: 'Booking the session',
    description: 'Pick a convenient time and book your session with the therapist.',
    imageUrl: 'https://res.cloudinary.com/dekfm4tfh/video/upload/v1743916395/STEP_3_dtqnc8.mp4',
    bg: "#86C6F4"
  },
  {
    id: 4,
    stepNumber: 'STEP 4',
    title: 'Starting the therapy',
    description: 'Attend your session and begin your journey towards better mental health.',
    imageUrl: 'https://res.cloudinary.com/dekfm4tfh/video/upload/v1743916394/STEP_4_vewyds.mp4',
    bg: "#9DEAB2"
  },
];