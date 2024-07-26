export const dateFormatter = (date, format) => {
    const dateTo = new Date(date);
    const day = String(dateTo.getUTCDate()).padStart(2, '0');
    const month = String(dateTo.getUTCMonth() + 1).padStart(2, '0');
    const year = dateTo.getUTCFullYear();
    if (format == 'dd-mm-yyyy') {
        return `${day}-${month}-${year}`;
    } else {
        return `${year}-${month}-${day}`
    }
}

