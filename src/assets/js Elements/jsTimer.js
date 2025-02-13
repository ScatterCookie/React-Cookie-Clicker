import { useEffect } from "react";

export default function useTimer(duration = 1000, callback) {
    useEffect(() => {
        const interval = setInterval(() => {
            callback();
        }, duration)

        return () => {
            clearInterval(interval);
        }
    });
}