import { RegistrationPayload } from "../types";

const simulateDelay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const registrationService = {
  async submit(payload: RegistrationPayload): Promise<{ ok: boolean }> {
    // Demo: Gercek API yerine yerel log kullanilir.
    console.log("Kayit olustur payload:", payload);
    await simulateDelay(800);
    return { ok: true };
  },
};
