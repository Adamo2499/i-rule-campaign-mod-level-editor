function exportJSON() {
    const form = document.getElementById("editor");
    const formData = new FormData(form);

    const json = {};

    for (const [key, value] of formData.entries()) {
        if (value.trim() === "") continue;   // skip empty fields
        (value !== 'on' && value !== "off") ? json[key] = value : (value === 'on') ? json[key] = 1 : json[key] = 0;
    }

    document.getElementById('output').style.visibility = 'visible';
    document.getElementById("output").textContent =
        JSON.stringify(json, null, 2);
}

function saveJSON() {
    const form = document.getElementById("editor");
    const formData = new FormData(form);

    const json = {};

    for (const [key, value] of formData.entries()) {
        if (value.trim() === "") continue;
        json[key] = value;
    }

    const blob = new Blob(
        [JSON.stringify(json, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "level.json";
    a.click();

    URL.revokeObjectURL(url);
}