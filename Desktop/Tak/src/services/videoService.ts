import { VideoItem } from "../types";

const VIDEO_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: "Uriner sistem nedir?",
    category: "Bilgilendirme",
    duration: "04:30",
    thumbnail: "https://picsum.photos/seed/tak-video-1/480/280",
    url: "https://www.youtube.com/watch?v=V6fTH5xCT8s",
  },
  {
    id: "vid-2",
    title: "Ne kadar sıvı almalıyım?",
    category: "Bakım",
    duration: "05:12",
    thumbnail: "https://picsum.photos/seed/tak-video-2/480/280",
    url: "https://www.youtube.com/watch?v=igN8W7IhA0A",
  },
  {
    id: "vid-3",
    title: "TAK sondasının özellikleri",
    category: "Eğitim",
    duration: "03:48",
    thumbnail: "https://picsum.photos/seed/tak-video-3/480/280",
    url: "https://www.youtube.com/watch?v=9iMGFqMmUFs",
  },
  {
    id: "vid-4",
    title: "Kadınlar için TAK işlem basamakları",
    category: "Eğitim",
    duration: "04:01",
    thumbnail: "https://picsum.photos/seed/tak-video-4/480/280",
    url: "https://www.youtube.com/watch?v=igN8W7IhA0A",
  },
  {
    id: "vid-5",
    title: "Erkekler için TAK işlem basamakları",
    category: "Eğitim",
    duration: "03:56",
    thumbnail: "https://picsum.photos/seed/tak-video-5/480/280",
    url: "https://www.youtube.com/watch?v=V6fTH5xCT8s",
  },
  {
    id: "vid-6",
    title: "TAK sırasında kullanılabilecek pozisyonlar",
    category: "Eğitim",
    duration: "05:18",
    thumbnail: "https://picsum.photos/seed/tak-video-6/480/280",
    url: "https://www.youtube.com/watch?v=9iMGFqMmUFs",
  },
];

const simulateDelay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const videoService = {
  async getVideos(): Promise<VideoItem[]> {
    await simulateDelay(900);
    return VIDEO_DATA;
  },
  async getAll(): Promise<VideoItem[]> {
    await simulateDelay(450);
    return VIDEO_DATA;
  },
};
