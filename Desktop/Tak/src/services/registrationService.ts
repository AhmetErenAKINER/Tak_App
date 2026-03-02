import { RegistrationPayload } from "../types";

const simulateDelay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const registrationService = {
  async submit(payload: RegistrationPayload): Promise<{ ok: boolean }> {
    void payload;
    await simulateDelay(800);
    return { ok: true };
  },
};
