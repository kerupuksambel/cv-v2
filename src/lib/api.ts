export const BASE_URL = "https://api.kerupuksambel.net/api"
// export const BASE_URL = "http://localhost:6060/api"

interface ResponseT {
    success: boolean,
    data: any
}

// TODO: set this in util to be accessed by other components
export async function fetchAPI(path: string): Promise<ResponseT> {
    const response = await fetch(`${BASE_URL}/${path}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    //    And can also be used here ↴
    return await response.json() as ResponseT;
}