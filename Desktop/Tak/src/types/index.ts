export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type RegistrationPayload = {
  fullName: string;
  age: string;
  phone: string;
  symptoms: string;
};

export type VideoItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
  url: string;
};
