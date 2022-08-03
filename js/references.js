// JSON REFERENCES

// Why do this? To make adding new links easier, while using JSON file.

const requestURL = ".\\data\\references.json";

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const references = jsonObject["references"];
		const referencesView = document.querySelector("#references");

		for (let i = 0; i < references.length; i++) {
			let button = document.createElement("button");
			button.classList.add("btn", "button-reference", "btn-dark", "tooltip-top", "me-1");
			button.setAttribute("type", "button");
			// button.setAttribute("data-bs-placement", "top");
			button.setAttribute("data-bs-toggle", "collapse");
			button.setAttribute("data-bs-target", `#${references[i].lowercased_id}`);
			button.setAttribute("aria-expanded", "false");
			button.setAttribute("aria-controls", `${references[i].lowercased_id}`);
			button.setAttribute("data-content", i+1);
			button.innerText = `${references[i].name}`;
			referencesView.appendChild(button);
			// buttons.parentNode.insertBefore(button, buttons.nextSibling);
		}
		
		let horizontalRule = document.createElement("hr");
		referencesView.appendChild(horizontalRule);

		let cards = document.createElement("div");
		cards.classList.add("d-flex", "flex-wrap", "gap-2", "position-relative");

		for (let i = 0; i < references.length; i++) {
			let links = references[i].links;

			let div1 = document.createElement("div");
			div1.classList.add("position-absolute", "start-0", "top-0");
			div1.setAttribute("style", "min-height: 120px;");

			let div2 = document.createElement("div");
			div2.classList.add("collapse", "collapse-horizontal", "card-border", "mb-5");
			div2.setAttribute("data-bs-parent", "#references");
			div2.setAttribute("id", `${references[i].lowercased_id}`);

			let div3 = document.createElement("div");
			div3.classList.add("card", "card-body", "text-white", "bg-dark");
			div3.setAttribute("style", "width: 300px;");

			let h2 = document.createElement("h2");
			h2.classList.add("ms-auto", "me-auto");
			h2.innerText = `${references[i].name}`;

			let div4 = document.createElement("div");
			div4.classList.add("list-group");

			for (let i = 0; i < links.length; i++) {
				let anchor = document.createElement("a");
				let icon = document.createElement("i");

				anchor.classList.add("list-group-item", "list-group-item-action");
				anchor.setAttribute("href", `${links[i].url}`);
				anchor.setAttribute("target", "_blank");
				anchor.innerText = `${links[i].name}`;

				icon.classList.add("fas", "fa-external-link", "ms-2");

				anchor.appendChild(icon);
				div4.appendChild(anchor);
			}

			div3.appendChild(h2);
			div3.appendChild(div4);
			div2.appendChild(div3);
			div1.appendChild(div2);
			cards.appendChild(div1);
			referencesView.appendChild(cards);


		}
	});
