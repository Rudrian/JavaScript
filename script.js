function converterTemperatura() {
    let celsius = document.getElementById('celsius').value;

    let fahrenheit = (celsius * 9/5) + 32;

    alert("A temperatura é: " + fahrenheit);
}
