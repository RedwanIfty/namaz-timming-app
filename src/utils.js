// Utility function to convert 24-hour time to 12-hour format with AM/PM
export const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(':');
    let hours = parseInt(hour);
    const isPM = hours >= 12;
    hours = hours % 12 || 12; // Convert to 12-hour format, if 0, set to 12
    const ampm = isPM ? 'PM' : 'AM';
    return `${hours}:${minute} ${ampm}`;
  };
  