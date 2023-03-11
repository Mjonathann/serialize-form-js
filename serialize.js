function serialize(form) {
    let data = "";
    
     data = Array.from(form.querySelectorAll("input, textarea")).map(el => {
        if (!el.name) {
            return;
        }
        if (el.type=="radio" || el.type=="checkbox") {
            return el.checked ? el.name+"="+el.checked : "";
        }
        return el.name+"="+encodeURIComponent(el.value.trim());
    }).filter(el => el).join("&");

    data += '&' + Array.from(form.querySelectorAll("select")).map(el => {
        if (!el.name) {
            return;
        }
        return el.name+"="+ encodeURIComponent(el.value.trim());
    }).filter(el => el).join("&");

    return data;
}