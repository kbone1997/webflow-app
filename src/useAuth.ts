import { useEffect, useState } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const token = import.meta.env.VITE_TOKEN;

    useEffect(() => {
        // Make a request to your backend to check the token's validity
        const checkAuth = async () => {
            try {
                await fetch('https://sheetdb.io/api/v1/f3vdwvj0et1zj', {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data[0].status)
                        if (data[0].status === "TRUE") {
                            //const data = await response.json();
                            // If the token is valid, set isAuthenticated to true
                            console.log("response is ok")
                            setIsAuthenticated(true);
                        } else {
                            setIsAuthenticated(false);
                        }
                    });
            } catch (error) {
                console.error("Error checking authentication:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return { isAuthenticated, loading };
};

export default useAuth;
