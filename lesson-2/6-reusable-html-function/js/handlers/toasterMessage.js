function createToaster(type = "", message = ""){
    const html = `<div class="toaster ${type}"> 
    <span>${type}</span>
    <span>${message}</span>
    </div>`;
    return html;
}
