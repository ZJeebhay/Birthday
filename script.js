function blowOutCandle() {
    let flame = document.getElementById("flame");
    flame.style.animation = "none"; 
    flame.style.opacity = "0"; 
    setTimeout(() => { flame.style.display = "none"; }, 300);

    triggerConfetti();
}

function triggerConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";

    let confettiPieces = [];

    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 1
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach((piece, index) => {
            ctx.fillStyle = piece.color;
            ctx.fillRect(piece.x, piece.y, piece.size, piece.size);
            piece.y += piece.speed;

            if (piece.y > canvas.height) {
                confettiPieces[index].y = 0;
                confettiPieces[index].x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
    
    setTimeout(() => {
        canvas.style.display = "none";
    }, 5000);
}
