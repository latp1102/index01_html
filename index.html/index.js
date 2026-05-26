function startCelebration() {
    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value;
    if (name !== "Cao Thị Phương" || dob !== "2007-07-05") {
        alert("Sai thông tin! Vui lòng nhập lại.");
        return;
    }
    document.getElementById("inputContainer").classList.add("hidden");
    document.getElementById("card").style.display = "block";
    document.getElementById("greetingMessage").innerText = `Chúc em luôn vui vẻ, hạnh phúc và tràn đầy năng lượng! 💖`;
}

function startCelebration() {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    if (name.trim() === "" || dob.trim() === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    document.getElementById("inputContainer").classList.add("hidden");
    document.getElementById("card").style.display = "block";
    document.getElementById("greetingMessage").innerText = `Chúc em luôn vui vẻ, hạnh phúc và tràn đầy năng lượng! 💖`;
    createHeartPattern();
    createMovingHearts();
}

function createHeartPattern() {
    const heartContainer = document.querySelector(".heart-container");
    const positions = [
        {x: -30, y: -50}, {x: -10, y: -50}, {x: 10, y: -50},
        {x: -30, y: -30}, {x: -30, y: -10},
        {x: -10, y: 10}, {x: 10, y: 30}, {x: 30, y: 30},
        {x: 30, y: 10}, {x: 30, y: -10}, {x: 30, y: -30}
    ];
    
}

function createFloatingHearts() {
    for (let i = 0; i < 20; i++) { 
        let heart = document.createElement("img");
        heart.src = "https://cdn-icons-png.flaticon.com/512/833/833472.png";
        heart.className = "heart-flying";


        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";


        heart.style.animationDuration = `${3 + Math.random() * 3}s`;
        heart.style.animationDelay = `${Math.random() * 3}s`;

        document.body.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function startCelebration() {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    if (name.trim() === "" || dob.trim() === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    document.getElementById("inputContainer").classList.add("hidden");
    document.getElementById("card").style.display = "block";
    document.getElementById("greetingMessage").innerText = `Chúc em ngày càng xinh gái, luôn vui vẻ, hạnh phúc và tràn đầy năng lượng! 💖`;
    setInterval(createFloatingHearts, 1000); 
}

function startCelebration() {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    if (name.trim() === "" || dob.trim() === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
}
    document.getElementById("inputContainer").classList.add("hidden");
    document.getElementById("card").style.display = "block";
    document.getElementById("greetingMessage").innerText = `Chúc em ngày càng xinh gái, luôn vui vẻ, hạnh phúc và tràn đầy năng lượng! 💖`;

    let audio = document.getElementById("bgMusic");
    audio.style.display = "block"; 
    audio.play(); 

    setInterval(createFloatingHearts, 1000);
}
