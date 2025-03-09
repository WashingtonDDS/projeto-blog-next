const baseUrl = "https://localhost:3333";
export async function createRequest<T>(
  url: string,
  initialValues: object
): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`, initialValues);

  return await response.json();
}
