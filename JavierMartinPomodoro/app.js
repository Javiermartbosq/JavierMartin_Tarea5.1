let tiempoRestante = 25 * 60; // 25 minutos en segundos
let temporizadorActivo = false;
let intervalo;

function iniciarTemporizador() {
    if (!temporizadorActivo) {
        temporizadorActivo = true;
        intervalo = setInterval(contarTiempo, 1000); // Ejecuta la función contarTiempo cada segundo
        document.getElementById("iniciar").disabled = true; // Desactiva el botón "Iniciar"
        document.getElementById("detener").disabled = false; // Habilita el botón "Detener"
    }
}

function detenerTemporizador() {
    clearInterval(intervalo);
    temporizadorActivo = false;
    document.getElementById("iniciar").disabled = false; // Reactiva el botón "Iniciar"
    document.getElementById("detener").disabled = true; // Desactiva el botón "Detener"
}

function resetearTemporizador() {
    clearInterval(intervalo);
    temporizadorActivo = false;
    tiempoRestante = 25 * 60; // Resetea el tiempo a 25 minutos
    document.getElementById("temporizador").textContent = "25:00";
    document.getElementById("iniciar").disabled = false;
    document.getElementById("detener").disabled = true;
    document.getElementById("mensaje").textContent = ""; // Borra el mensaje de descanso
}

function contarTiempo() {
    if (tiempoRestante > 0) {
        tiempoRestante--;
        mostrarTiempo();
    } else {
        clearInterval(intervalo); // Detiene el temporizador
        document.getElementById("mensaje").textContent = "¡Hora de tomar un descanso!";
        setTimeout(resetearTemporizador, 5000); // Resetea después de 5 segundos
    }
}

function mostrarTiempo() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    document.getElementById("temporizador").textContent = `${formatearTiempo(minutos)}:${formatearTiempo(segundos)}`;
}

function formatearTiempo(tiempo) {
    return tiempo < 10 ? "0" + tiempo : tiempo;
}
