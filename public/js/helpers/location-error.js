let loading_screen_component = document.querySelector('#loading-screen');
loading_screen_component.parentNode.removeChild(loading_screen_component);

document.querySelector('#fetch-task').textContent = "Cannot Fetch your Location";