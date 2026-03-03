export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type RegistrationPayload = {
  fullName: string;
  age?: string;
  phone?: string;
  symptoms?: string;
};

export type VideoItem = {
  id: string;
  title: string;
  category?: string;
  duration?: string;
  thumbnail: string;
  url: string;
};

export type CategoryItem = {
  id: string;
  title: string;
  route: "/videos" | "/register" | "/faq" | "/expert";
  image: string;
};

export type ExpertQuestion = {
  id: string;
  text: string;
  createdAt: string;
};
