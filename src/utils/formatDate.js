export const formatDateToSpanish = isoString => {
    if (!isoString) return ""

    const date = new Date(isoString)

    if (Number.isNaN(date.getTime())) return ""

    return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    }).format(date)
}