function openPopup(newsNumber) {
    document.querySelectorAll('.popup').forEach(popupItem => {
        popupItem.style.display = 'none';
    });
    
    const popup = document.getElementById('popup' + newsNumber);
    if (popup) {
        popup.style.display = 'block';
    }
    
    document.querySelectorAll('.news').forEach(news => {
        news.style.opacity = '0.3';
    });
    
    function handleClick(event) {
        if (popup && !popup.contains(event.target) && !event.target.closest('button')) {
            closePopup();
        }
    }
    
    openPopup.handleClick = handleClick;
    document.addEventListener('click', handleClick);
}

function closePopup() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
    
    document.querySelectorAll('.news').forEach(news => {
        news.style.opacity = '1';
    });
    
    if (openPopup.handleClick) {
        document.removeEventListener('click', openPopup.handleClick);
    }
}