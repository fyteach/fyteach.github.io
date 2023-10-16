// Function to format the current date and time as "MM/DD/YYYY HH:MM:SS" format
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1);//.padStart(2, '0');
  const day = String(now.getDate());//.padStart(2, '0');

  return `${month}/${day}/${year}`;
}

// Function to add the paragraph at the bottom of the page
function addLastUpdated() {
  const DataDiv = document.getElementsByClassName('date');
  
  if (DataDiv.length > 0) {
    const Span = document.createElement('span');
    const lastUpdatedTime = getCurrentDateTime();
    Span.textContent = `Last updated: ${lastUpdatedTime}`;
    Span.style.cssText += 'font: 0.7em monospace; text-align: center; bottom: 0; left: 6%; position: absolute; color: #6296ff;';
    DataDiv[0].insertAdjacentElement('afterend', Span);
  }
}

window.addEventListener('load', addLastUpdated);
