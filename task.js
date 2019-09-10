"use strict";

function add_button(e, v) {
    let cell = e.childNodes[3];
    let btn = cell.getElementsByTagName("input");
    if (btn.length > 0) return;
    btn = document.createElement("input");
    btn.setAttribute("name", `_ctl2:myGrid:_ctl${v}:addTaking`);
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "(ゝ∀･)b");
    btn.setAttribute("id", `_ctl2_myGrid__ctl${v}_addTaking`);
    cell.appendChild(btn);
}

function task() {
    let rows = document.getElementById("_ctl2_myGrid").getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        add_button(rows[i], i + 1);
    }
}

if (new URL(window.location.href).searchParams.get("tabindex") == "1") {
    try {
        task();
    } catch (e) {
        console.log("Failed to add buttons to table.");
    }
}
