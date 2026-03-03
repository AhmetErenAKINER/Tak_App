import { FaqItem } from "../types";

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "IDRAR KACAGIM OLDUGU ZAMAN HASTA BEZI KULLANMAK ZOR OLUYOR. BASKA ONERILECEGINIZ BIR SEY VAR MI?",
    answer:
      "Cilt sagligini koruyan urunleri ve mesane egitimi planini uzmaninizla birlikte degerlendirebilirsiniz.",
  },
  {
    id: "faq-2",
    question: "SOGUK HAVALARDA AYAKKABISIZ BALKONA YA DA BAHCEYE CIKMAK IDRAR KACAGINA SEBEP OLUR MU?",
    answer:
      "Tek basina dogrudan sebep olmaz; ancak soguk hava sik idrara cikma hissini arttirabilir.",
  },
  {
    id: "faq-3",
    question: "TAK SIRASINDA PENIS EREKSIYON (SERTLESME) OLURSA NE YAPMALIYIM?",
    answer:
      "Panik yapmadan kisa bir sure bekleyin. Sorun tekrarlarsa saglik uzmaninizdan teknik destek alin.",
  },
  {
    id: "faq-4",
    question: "TUVALET SANDALYESINDE TAK YAPMAMDA SAKINCA VAR MI?",
    answer:
      "Uygun hijyen ve guvenli pozisyon saglandiginda uygulanabilir; bireysel durumunuza gore uzmaninizla planlayin.",
  },
  {
    id: "faq-5",
    question: "OTONOMIK DISREFLEKSI DURUMUNDA NE YAPMALIYIM?",
    answer:
      "Bu durum acil degerlendirme gerektirir. Hemen tetikleyiciyi ortadan kaldirin ve tibbii yardim alin.",
  },
  {
    id: "faq-6",
    question: "OTONOMIK DISREFLEKSI NEDIR?",
    answer:
      "Ozellikle omurilik yaralanmasi olan bireylerde gorulen ani tansiyon yukselmesiyle seyreden acil bir durumdur.",
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
  async getAll(): Promise<FaqItem[]> {
    await simulateDelay(320);
    return FAQ_DATA;
  },
};
