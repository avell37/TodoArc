export const FormateDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${day}.${month}.${year}`;
}