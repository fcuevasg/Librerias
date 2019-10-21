
/**
 * Parsea un json a HTML.
 *
 * 
 * @author: Javi_C
 * @param {object} json El json que se desea parsear.
 * @param {boolean} formato Si se quiere recibir un nodo (false) o el html del json (true)
 * 
 */
function html_to_json(json, formato) {

    let tag = json.tag;
    //console.log(tag);
    let nodo = document.createElement(tag);
    if (json.id) {
        nodo.setAttribute("id", json.id);
    }

    nodo.setAttribute("class", json.class);
    if (json.title) {
        nodo.setAttribute("title", json.title);
    }
    let contenido = json.content;
    if (typeof contenido == "object") {
        if (contenido.length) {
            for (const key in contenido) {
                //   console.log(key);
                nodo.appendChild(html_to_json(contenido[key]))
            }
        } else {
            nodo.appendChild(html_to_json(contenido));
        }
    } else {

        nodo.innerHTML = json.content;
        //  nodo.appendChild(document.createTextNode(json.content));
    }


    if (formato) {
        return nodo.innerHTML;
    } else {
        return nodo;
    }



}