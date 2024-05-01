const age = () => {
    // Calculate age using my birthdate
    const birthdate = new Date("2004-03-19");
    const today = new Date();
    const diff = today.getTime() - birthdate.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    return age;
}
export default age;