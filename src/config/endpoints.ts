export interface Endpoints {
  createTokenURL: string;
  getProvinceURL: string;
  pushAddress: string;
}

export const endpoints: Endpoints = {
  createTokenURL:
    "https://cnapreview.okta.com/oauth2/aus97z9wk98gzOGFD297/v1/token?clientId=0oac6ul49eJLlMsEj297&grant_type=client_credentials&scope=scope:openid:billing:jupiter:read",
  getProvinceURL:
    "https://jupiter-orchestration-ete1.gcp.cna.com/api/countryStateProvincesList",
  pushAddress:
    "https://jupiter-orchestration-ete1.gcp.cna.com/api/accountBillingAddress/getStandardizedAddress",
};
