import { VideoItem } from "../types";

const VIDEO_DATA: VideoItem[] = [
  {
    id: "vid-1",
    title: "How to measure body temperature at home",
    category: "Self-care",
    duration: "04:30",
    url: "https://www.youtube.com/watch?v=V6fTH5xCT8s",
  },
  {
    id: "vid-2",
    title: "When to seek urgent medical support",
    category: "Emergency",
    duration: "05:12",
    url: "https://www.youtube.com/watch?v=igN8W7IhA0A",
  },
  {
    id: "vid-3",
    title: "Hydration and recovery best practices",
    category: "Recovery",
    duration: "03:48",
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
};
