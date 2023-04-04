const calendarContainer = document.getElementById('calendar-container');
const calendar = document.getElementById('calendar');
const selectDate = document.getElementById('select-date');

calendarContainer.addEventListener('click', () => {
  selectDate.focus();
});

selectDate.addEventListener('input', (e) => {
  const date = new Date(e.target.value);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  calendar.innerText = formattedDate;
});