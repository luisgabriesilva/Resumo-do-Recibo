const clientes = ["John S.", "Emma M.", "Frank T."];
const recibos = [
    ["ovos", "pão branco", "leite"],
    ["leite", "queijo", "manteiga", "mistura para panqueca", "farinha"],
    ["cereais", "pão integral", "leite", "queijo", "ovos", "baunilha"]
];
const prices = {
    "ovos": 3.50,
    "pão branco": 4.50,
    "leite": 5.99,
    "queijo": 6.50,
    "manteiga": 3.45,
    "mistura para panqueca": 4.50,
    "farinha": 5.75,
    "cereais": 4.50,
    "pão integral": 6.50,
    "baunilha": 8.75
};

function setElementText(id, text) {
    document.getElementById(id).innerText = text;
}

function popularTabela() {
    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i];
        const recibo = recibos[i];
        let recibo_list = "";
        let sum = 0;
        for (let j = 0; j < recibo.length; j++) {
            const item =recibo[j];
            const price = prices[item];
            recibo_list += item + "\n";
            sum += price;
        }
        setElementText("cliente" + i.toString(), clientes);
        setElementText("recibo" + i.toString(), recibo_list);
        setElementText("total" + i.toString(), sum);
    }
}