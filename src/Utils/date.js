/**
 * Converts unix timestamp into a time ago string like 2 hours ago
 *
 * @param {string} date unix timestamp
 */
export const timeAgo = unixTimestamp => {
  const date = new Date(parseInt(unixTimestamp));


 const seconds = Math.floor((new Date() - date) / 1000);


  let interval = Math.floor(seconds / 31536000);


  if (interval === 1) {
    return interval + 'year ago';
  }else if(interval > 1){
    return interval + "years ago"
  }

  interval = Math.floor(seconds / 2628002.88);
  if (interval === 1) {
    return `${interval}month ago`;
  }else if(interval >1){
    return `${interval}months ago`
  }

  interval = Math.floor(seconds / 86400);
  if (interval === 1) {
    return `${interval} day ago`;
  }else if(interval > 1){
    return `${interval}days ago`;
  }


  interval = Math.floor(seconds / 3600);
  if (interval === 1) {
    return  `${interval}hr ago`;
  }else if(interval > 1){
    return  `${interval}hrs ago`;
  }



  interval = Math.floor(seconds / 60);
  if (interval === 1) {
    return `${interval}min`;
  }else if(interval > 1){
     return `${interval}mins`;
  }

  interval = Math.floor(seconds / 5);
  if (interval >= 1) {
    return  'few sec ago';
  }
  return  'just now';
};













/**
 * Converts unix timestamp to current date
 *
 * @param {string} date unix timestamp
 */
export const currentDate = unixTimestamp => {
  const date = new Date(unixTimestamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[date.getMonth()];

  const year = date.getFullYear().toString();
  var day = date.getDate() + 1;

  return ` ${month} ${day} ${year} `;
};














/**
 * Creates day of the week and date
 *
 * @param {string} day unix timestamp
 */
export const  weekDay =  (unixTimestamp) => {
  const date = new Date(parseInt(unixTimestamp));
  const day = date.getDay(); // mon,Tue,Wed,Thur, Fri... in string
  const year = date.getFullYear();
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  const month = months[date.getMonth()];

  const intDay = date.getDate()
   if(day === 0){
      return `Sun ${intDay}/${month}/${year}`
    }
    if(day === 1){
      return `Mon ${intDay}/${month}/${year}`
    }
    if(day === 2){
    return `Tue ${intDay}/${month}/${year}`
   }
      if(day === 3){
      return `Wed ${intDay}/${month}/${year}`
    }
    if(day === 4){
      return `Thur ${intDay}/${month}/${year}`
    }
    if(day === 5){
      return `Fri ${intDay}/${month}/${year}`
    }
    if(day === 6){
      return `Sat ${intDay}/${month}/${year}`
    }
    return day
}