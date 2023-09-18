export function createTokenHeader() {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic MG9hYzZ1bDQ5ZUpMbE1zRWoyOTc6WlRoX3oySnM1cGhnaGFKWjB6aVR3SnBoNTVraHRySjNWaG1rR3pmag==",
  };

  return headers;
}

export function defaultHeader() {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  return headers;
}
