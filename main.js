// opening the mobile icon on mobile view

    const menuBar = document.getElementById("barIcon");
    const menuList = document.getElementById("list");

    menuBar.addEventListener("click", ()=> {
        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
        } else {
            menuList.style.display = 'block';
        }
    });


