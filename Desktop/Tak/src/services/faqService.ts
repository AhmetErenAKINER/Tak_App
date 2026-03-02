import { FaqItem } from "../types";

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is TAK Medical Assistant?",
    answer:
      "TAK is a modular medical support app that helps users access quick guidance, educational content, and registration for care follow-up.",
  },
  {
    id: "faq-2",
    question: "Can this app replace a doctor?",
    answer:
      "No. TAK supports awareness and communication. For emergencies or diagnosis, always consult a licensed healthcare professional.",
  },
  {
    id: "faq-3",
    question: "Is my submitted information private?",
    answer:
      "This demo stores data in memory only. In production, secure backend storage, encryption, and legal compliance are required.",
  },
];

const simulateDelay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const faqService = {
  async getFaqs(): Promise<FaqItem[]> {
    await simulateDelay(700);
    return FAQ_DATA;
  },
};
