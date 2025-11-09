export const formatarDataPadrao = (data: { seconds: number; nanoseconds: number } | string) => {
    if (typeof data === "string") {
        const date = new Date(data)
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
    }

    const date = new Date(data.seconds * 1000);
    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })
}