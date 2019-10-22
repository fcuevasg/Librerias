/**
 * Parsea un json a HTML.
 *
 * 
 * @author: Javi_C
 * @param {object} json El json que se desea parsear.
 * @param {boolean} formato Si se quiere recibir un nodo (false) o el html del json (true)
 * 
 * 
 */

class htmlToJson {
    constructor() {
        this.json;
        this.formato;
    }
    setJson(_json) {
        this.json = _json;
    }
    getJson() {
        return this.json;
    }

    setFormato(_format) {
        this.formato = _format;
    }

    createTag(_data) {

        if (!_data) {
            _data = this.json;
        }
        let etiqueta = _data.tag;
        let nodo = document.createElement(etiqueta);
        if (_data.id) {
            nodo.setAttribute("id", _data.id);
        }
        nodo.setAttribute("class", _data.class);
        if (_data.title) {
            nodo.setAttribute("title", _data.title);
        }
        return nodo;
    }


    parsehtmlToJson(_data = null) {
        let nodo;
        if (!_data) {
            _data = this.json;
        }
        nodo = this.createTag(_data);
        let contenido = _data.content;
        if (typeof contenido == "object") {
            console.log(contenido)
            if (contenido.length) {
                for (const key in contenido) {
                    nodo.appendChild(this.parsehtmlToJson(contenido[key]))
                }
            } else {
                nodo.appendChild(this.parsehtmlToJson(contenido));
            }
        } else {
            nodo.innerHTML = contenido;
        }

        if (this.formato) {
            return nodo.innerHTML;
        } else {
            return nodo;
        }

    }

}