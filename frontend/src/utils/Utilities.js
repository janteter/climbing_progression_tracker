export function dateFormat() {
        const currDate = new Date();
        const day = currDate.getDate().toString().padStart(2, "0");
        const year = currDate.getFullYear().toString();
        const month = (currDate.getMonth()+1).toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    }