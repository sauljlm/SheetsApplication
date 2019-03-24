const build = (function(){
  const container = document.querySelector('.cont-table');
  let instance = null;
  let DATA = [[]];
  const abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
  let lastIndex = 0;

  return class Build {
    constructor() {
      if(instance) return instance;
      return instance = this;
      this.listenClick();
    }

    addRow(value = '') {
      let column = [];
      for (let i = 0; i < DATA[0].length; i++) {
        column.push(value);
      }
      DATA.push(column);
      return DATA;
    }

    addColumn(value = '') {
      DATA.forEach((row) => {
        row.push(value);
      }); 
    }

    addIndexTop(tr) {
      for (let i = 0; i < DATA[0].length; i++) {
        tr.appendChild(createDoom.th(this.gerenateABC()));
      }
    }

    gerenateABC() {
      lastIndex = parseInt(lastIndex);
      lastIndex ++;
      console.log(lastIndex);
      return abc[lastIndex];
    }

    listenClick() {
      DATA.forEach((i) => {
        i.forEach((j) => {
          DATA[i][j].addEventListener('click', () => {
            this.click();
            console.log('listo');
          });
        });
      });
    }

    render() {
      container.innerHTML = '';
      let table = createDoom.element('table');
      DATA.forEach((row, rowIndex) => {
        let tr = createDoom.tr();
        if (rowIndex === 0){
          this.addIndexTop(tr);
        } else {

        tr.appendChild(createDoom.th(rowIndex+1));

        row.forEach((column, columnIndex) => {
          tr.appendChild(createDoom.td(column, rowIndex, columnIndex));
        });
        table.setAttribute('class', 'customers');
        table.appendChild(tr);
        }
      });
      container.appendChild(table);
    }

    write() {
      const input = CreateDoom.element('input', {type: 'type', value : 'text'});
      input.CreateDoom.atribute({type: 'class', value : 'write'});
      row.appendChild(input);
    }
  }  
})();
