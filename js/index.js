alert('Test!');
function exportJSON() {
    const form = document.getElementById("editor");
    const formData = new FormData(form);

    const json = {};

    for (const [key, value] of formData.entries()) {
        if (value.trim() === "") continue;   // skip empty fields
        json[key] = value;
    }

    document.getElementById("output").textContent =
        JSON.stringify(json, null, 2);
}