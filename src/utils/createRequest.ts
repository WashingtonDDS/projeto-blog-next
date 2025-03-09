const baseUrl = "http://localhost:3333";
const baseUrlAuth = "https://api-crud-user.pedagogico.cubos.academy";

export async function createRequest(url: string, initialValues: object) {
  const response = await fetch(`${baseUrl}${url}`, initialValues);
  return await response.json();
}
