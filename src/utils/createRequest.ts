const baseUrl = "http://localhost:3333";
const baseUrlAuth = "https://api-crud-user.pedagogico.cubos.academy";

export async function createRequest(url: string, initialValues: object) {
  const response = await fetch(`${baseUrl}${url}`, initialValues);
  return await response.json();
}

export async function createRequestAuth(url: string, initialValues: object) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(`${baseUrlAuth}${url}`, {
    headers,
    ...initialValues,
  });
  return await response.json();
}
