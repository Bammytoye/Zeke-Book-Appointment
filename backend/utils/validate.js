const VALID_TIMES = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00",
];

const VALID_SERVICES = ["consultation", "strategy", "review", "onboarding"];

export const validateBooking = ({ name, email, service, date, time }) => {
  if (!name || name.trim().length < 2)
    return "Name must be at least 2 characters.";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Valid email is required.";

  if (!VALID_SERVICES.includes(service))
    return "Invalid service selected.";

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date))
    return "Date must be YYYY-MM-DD.";

  const today = new Date().toISOString().split("T")[0];
  if (date < today)
    return "Date cannot be in the past.";

  const day = new Date(date + "T00:00:00").getDay();
  if (day === 0 || day === 6)
    return "No weekend bookings.";

  if (!VALID_TIMES.includes(time))
    return "Invalid time slot.";

  return null;
};

export { VALID_TIMES, VALID_SERVICES };