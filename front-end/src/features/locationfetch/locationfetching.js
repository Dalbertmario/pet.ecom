import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

async function fetchLocationData() {
    try {
        const result = await fetch("https://ipinfo.io/json?token=6d91dfa20407f1");
        return await result.json();
    } catch (error) {
        console.error("Error fetching location data:", error);
        throw error;
    }
}

function UseLocationFetching() {
    const api = import.meta.env.VITE_API_BACKEND;
    const { data, isError, isLoading } = useQuery({
        queryKey: ["location"],
        queryFn: fetchLocationData,
    });
    
    useEffect(() => {
        if (data) {
            fetch(`${api}/visitors/data`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).catch((error) => console.error("Error sending data to backend:", error));
        }
    }, [data, api]);

    return { data, isError, isLoading };
}

export default UseLocationFetching;
