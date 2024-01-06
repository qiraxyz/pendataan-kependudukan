// LoginHandler.ts
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { LoginCredentials } from "@/model/login.model";
import { setCookie, hasCookie } from "cookies-next";

export default function HandlerLoginFetcher(credentials: LoginCredentials) {
  const router = useRouter();

  const fetcher = async (url: string | URL | Request) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: credentials.username,
        Password: credentials.password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    if (data && !hasCookie("jwtToken")) {
      setCookie("jwtToken", data.data.token);
      router.replace("/");
    }

    return data;
  };

  const { data, error } = useSWR(
    credentials.shouldFetch ? "http://localhost:2000/api/auth" : null,
    fetcher
  );

  return {
    data,
    isFetching: !error && !data,
    isError: error,
  };
}
