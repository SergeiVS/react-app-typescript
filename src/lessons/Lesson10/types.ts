export interface University {
  country: string;
  name: string;
  alpha_two_code: string;
  "state-province": string | null;
  domains: string[];
  web_pages: string[];
}
