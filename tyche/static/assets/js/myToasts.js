function toastHTML(tag, text, path, color = "danger") {
    return `<div class="toast" data-bs-autohide="true" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <div data-lottie
                     data-lottie-autoplay
                     data-lottie-loop
                     data-lottie-path=${path}
                     style="width: 30px">
                </div>
                <i class="bi bi-x-circle-fill  me-2"></i>
                <strong class="me-auto text-${color}">${tag}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${text}
            </div>
        </div>`;

}

function createDOMElement(tag, text, path) {
    const template = document.createElement("toast");
    template.innerHTML = toastHTML(tag, text, path).trim()
    return template.firstChild;

}

function createToast(tag, text, path) {
    const toastContainer = document.getElementById("toast-container")
    const domElement = createDOMElement(tag, text, path);
    toastContainer.appendChild(domElement);
    const toast = new bootstrap.Toast(domElement);
    toast.show();

}

function create_message_toast(tag, text, path) {
    createToast(tag, text, path);
}
