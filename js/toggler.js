var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="collapse"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
