const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const interval = setInterval(() => {
    const now = new Date();
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear();
    document.getElementById('date').innerHTML = dataHora;
    const horaData = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes());
    document.getElementById('time').innerHTML = horaData;
}, 1000);
                