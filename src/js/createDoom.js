const createDoom = (function(){
  return class CreateDoom {
    static element (type, atribute) {
      let element = document.createElement(`${type}`);
      if(atribute) {
        element.atribute(element, atribute);
      }
      return element;
    }
  
    static atribute(element, atribute) {
      element.setAttribute(`${atribute.type}`, `${atribute.value}`);
      return element;
    }
  
  
    static btn(src, atribute) {
      let btn = document.createElement('button');
      if(atribute) {
        btn.setAttribute(`${atribute.type}`, `${atribute.value}`);
      }
      if(src) {
        let icon = document.createElement('img');
        icon.setAttribute('src', `${src}`);
        btn.appendChild(icon);
      }
      return btn;
    }

    static tr() {
      let tr = this.element('tr');
      return tr;
    }

    static th(index ='') {
      if (index === 0) index = '';
      let th = this.element('th');
      th.innerHTML = index;
      return th;
    }

    static td(value = '', rowIndex, columnIndex) {
        let td = this.element('td');
        td.innerHTML = value;
        td.setAttribute('data-array', `${rowIndex}:${columnIndex}`);
        return td
    }
  
    /**
     * Disable a button
     * @param {HTMLButtonElement} button
     */
    static disableButton (button) {
        if(!(button instanceof HTMLButtonElement))
            throw new Error(`Invalid button is not a HTMLButtonElement: ${button}`);
  
        button.setAttribute('disabled', '');
        button.classList.add('disabled');
    }
  
    /**
     * Disable a button
     * @param {HTMLButtonElement} button
     */
    static enableButton (button) {
        if(!(button instanceof HTMLButtonElement)) {
            throw new Error(`Invalid button is not a HTMLButtonElement: ${button}`);
        }
        button.removeAttribute('disabled');
        button.classList.remove('disabled');
    }
  }

})();
