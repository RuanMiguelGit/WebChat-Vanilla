    // Solution to get the date found at: https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format and modify to accept hours and convert to the right format by RuanMiguelGit
function formatAMPM(date) {
    let dd = date.getDate();
    let mm = date.getMonth();
    const yyyy = date.getFullYear();
    if (dd < 10) {
        dd = `0${dd}`;
    } 
    
    if (mm < 10) {
        mm = `0${mm}`;
    } 
    const strTime = `${dd}-${mm}-${yyyy}`;
    return strTime;
  }

  const timeHours = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const seconds = date.getSeconds();
    hours %= 12;
    hours = hours || 12; 
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strHour = `${hours}:${minutes}:${seconds} ${ampm}`;
    return strHour;
  };

  module.exports = {
    formatAMPM,
    timeHours,
  };
