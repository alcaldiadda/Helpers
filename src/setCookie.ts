export const setCookie = (domain: string, name: string, value: string, hours: number, isSecure?: boolean) => {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  const domainScope = domain ? `domain=${domain};` : "";
  const secure = isSecure ? "secure" : "";
  const path = "path=/";

  if (typeof window !== "undefined") {
    window.document.cookie = `${name}=${value}; ${expires}; ${domainScope} ${path}; ${secure}`;
  }
};
