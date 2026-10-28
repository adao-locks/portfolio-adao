export const PROFILE = {
  email: 'eduardoadaolocks@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eduardoadaolocks/',
  github: 'https://github.com/adao-locks',
  whatsapp: 'https://wa.me/5547992006045',
  whatsappLabel: '(47) 99200-6045',
  cv: 'assets/curriculo-eduardo-adao-locks.pdf',
  avatar: 'https://avatars.githubusercontent.com/u/122515706?s=200&v=4',
};

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
