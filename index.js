const input = document.querySelector('.formText');
const button = document.querySelector('.formButton');
const origin = document.querySelector('.origin');
const translit = document.querySelector('.translit');

function letterTranslit() {
  const inputValue = input.value;
  let answer = '';
  const converter = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'sch',
    ь: '',
    ы: 'y',
    ъ: '',
    э: 'e',
    ю: 'yu',
    я: 'ya',

    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'E',
    Ж: 'Zh',
    З: 'Z',
    И: 'I',
    Й: 'Y',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'C',
    Ч: 'Ch',
    Ш: 'Sh',
    Щ: 'Sch',
    Ь: '',
    Ы: 'Y',
    Ъ: '',
    Э: 'E',
    Ю: 'Yu',
    Я: 'Ya',
  };

  for (let i = 0; i < inputValue.length; i += 1) {
    if (converter[inputValue[i]] === undefined) {
      answer += inputValue[i];
    } else {
      answer += converter[inputValue[i]];
    }
  }
  return answer;
}

function newLineAdd() {
  const newLineOrigin = document.createElement('li');
  newLineOrigin.className = 'newLine';
  const newDivTextOrigin = document.createElement('div');
  newDivTextOrigin.className = 'newDivText';
  const newTextOrigin = document.createElement('p');
  newTextOrigin.innerText = input.value;
  newDivTextOrigin.appendChild(newTextOrigin);
  newLineOrigin.appendChild(newDivTextOrigin);
  origin.appendChild(newLineOrigin);

  const newLineTranslit = document.createElement('li');
  newLineTranslit.className = 'newLine';
  const newDivTextTranslit = document.createElement('div');
  newDivTextTranslit.className = 'newDivText';
  const newTextTranslit = document.createElement('p');
  newTextTranslit.innerText = letterTranslit();
  const deleteButton = document.createElement('img');
  deleteButton.className = 'delete';
  deleteButton.setAttribute('src', './icons/delete.svg');
  deleteButton.setAttribute('alt', '');
  newDivTextTranslit.appendChild(newTextTranslit);
  newLineTranslit.appendChild(newDivTextTranslit);
  newLineTranslit.appendChild(deleteButton);
  translit.appendChild(newLineTranslit);

  deleteButton.addEventListener('click', () => {
    newLineOrigin.remove();
    newLineTranslit.remove();
  });

  if (input.value.length > 7) {
    const fullTextOrigin = document.createElement('p');
    fullTextOrigin.className = 'fullText';
    fullTextOrigin.innerText = input.value;
    newLineOrigin.appendChild(fullTextOrigin);

    const fullTextTranslit = document.createElement('p');
    fullTextTranslit.className = 'fullText';
    fullTextTranslit.innerText = newTextTranslit.innerText;
    newLineTranslit.appendChild(fullTextTranslit);

    newTextOrigin.onmouseover = () => {
      fullTextOrigin.style.display = 'unset';
    };

    newTextOrigin.onmouseout = () => {
      fullTextOrigin.style.display = 'none';
    };

    newTextTranslit.onmouseover = () => {
      fullTextTranslit.style.display = 'unset';
    };

    newTextTranslit.onmouseout = () => {
      fullTextTranslit.style.display = 'none';
    };
  }
}

button.addEventListener('click', () => {
  if (input.value !== '') {
    newLineAdd();
    input.value = '';
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (input.value !== '') {
      newLineAdd();
      input.value = '';
    }
  }
});

const deleteAll = document.querySelector('.deleteAll');

function deleteLines() {
  const liColumn1 = document.querySelector('.column1').querySelectorAll('li');
  const liColumn2 = document.querySelector('.column2').querySelectorAll('li');
  for (let i = 1; i < liColumn1.length; i += 1) liColumn1[i].remove();
  for (let i = 1; i < liColumn2.length; i += 1) liColumn2[i].remove();
}

deleteAll.addEventListener('click', () => {
  deleteLines();
});
