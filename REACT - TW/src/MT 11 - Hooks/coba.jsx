import React, { useState, useEffect } from "react";

export function useOnlineStatus(key) {
    const [status, setStatus] = useState(key);

    useEffect(() => {
        function handleOnline() {
            setStatus(true);
        }

        function handleOffline() {
            setStatus(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return status;
}

export function StatusBar() {
    const isOnline = useOnlineStatus(navigator.onLine);

    return <h1 className="">{isOnline ? "Online" : "Disconnected"}</h1>;
}
