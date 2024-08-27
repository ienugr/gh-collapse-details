function collapseDetails() {
    const openDetailsElements = document.querySelectorAll('details[open]');
    openDetailsElements.forEach(details => {
      details.removeAttribute('open');
    });
  }
  
  // Add a button to the page
  const button = document.createElement('button');
  button.innerText = 'Collapse Details';
  button.className = 'btn btn-sm'; // GitHub button style classes
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.zIndex = 1000;
  button.style.backgroundColor = '#2ea44f'; // GitHub green button
  button.style.color = '#ffffff'; // White text color
  button.style.border = '1px solid rgba(27, 31, 35, 0.15)'; // Border similar to GitHub's button border
  button.style.borderRadius = '6px'; // Rounded corners
  button.style.padding = '5px 12px'; // Padding similar to GitHub buttons
  
  button.addEventListener('click', collapseDetails);
  document.body.appendChild(button);
  