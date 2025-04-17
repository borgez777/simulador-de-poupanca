window.addEventListener('DOMContentLoaded', () => {
    // Recuperar login salvo (index.html)
    const usuarioSalvo = localStorage.getItem('usuario');
    const senhaSalva = localStorage.getItem('senha');
    if (usuarioSalvo && senhaSalva && document.getElementById('usuario')) {
        document.getElementById('usuario').value = usuarioSalvo;
        document.getElementById('senha').value = senhaSalva;
    }

    // Recuperar resultado salvo (inicio.html)
    const resultadoSalvo = localStorage.getItem('resultadoSimulador');
    if (resultadoSalvo && document.getElementById('resultado')) {
        document.getElementById('resultado').innerHTML = resultadoSalvo;
    }
});