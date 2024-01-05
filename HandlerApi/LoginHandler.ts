import useSWR from "swr";

export default function HandlerLoginFetcher(
  username: string,
  password: string,
  shouldFetch: boolean
) {
  const fetcher = async (url: string | URL | Request) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: username,
        Password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR(
    shouldFetch ? "http://localhost:2000/api/auth" : null,
    fetcher
  );

  return {
    data,
    isFetching: !error && !data,
    isError: error,
  };
}