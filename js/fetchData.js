import { obj } from './test.js';
import './checkServer.js';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function createElement(tag, classList = [], textContent = '') {
  const element = document.createElement(tag);
  if (classList.length) element.classList.add(...classList);
  if (textContent) element.textContent = textContent;
  return element;
}

function appendFileData(file) {
  const row = createElement('div', ['row']);

  // Thumbnail
  const thumbCell = createElement('div', ['cell']);
  const thumb = createElement('img', ['thumb']);
  thumb.src = file.thumbnail;
  thumbCell.appendChild(thumb);

  // File Name and Duration (dipisah menjadi dua elemen berbeda)
  const fileNameCell = createElement('div', ['cell']);
  
  const fileName = createElement('span', ['fileName', 'title', 'is-6'], file.title);  // Nama file
  const fileDuration = createElement('span', ['fileDuration', 'subtitle', 'is-6'], `${Math.floor(file.duration_ms / 1000)} seconds`);
  fileDuration.style.display = 'block';  // Durasi pasti di bawah nama

  // Tambahkan nama dan durasi ke cell
  fileNameCell.appendChild(fileName);
  fileNameCell.appendChild(document.createElement('br'));  // Tambah line break agar durasi di bawah nama
  fileNameCell.appendChild(fileDuration);  // Durasi di bawah nama

  // HD Button
  const hdBtnCell = createElement('div', ['cell', 'last']);
  const hdBtn = createElement('span', ['material-symbols-outlined'], 'HD');
  hdBtn.addEventListener('click', () => window.open(file.hd, '_blank'));
  hdBtnCell.appendChild(hdBtn);

  // SD Button
  const sdBtnCell = createElement('div', ['cell', 'last']);
  const sdBtn = createElement('span', ['material-symbols-outlined'], 'SD');
  sdBtn.addEventListener('click', () => window.open(file.sd, '_blank'));
  sdBtnCell.appendChild(sdBtn);

  // Append all elements to the row
  row.append(thumbCell, fileNameCell, hdBtnCell, sdBtnCell);
  fileResult.appendChild(row);
}

export async function getTera(url) {
  fileResult.innerHTML = "";
  fetchBtn.classList.add('is-loading');
  fetchBtn.disabled = true;

  try {
    const data = await fetchData(url);
    const files = Array.isArray(data) ? data : [data];
    files.forEach(file => appendFileData(file));

    // Remove loading state
    footer.classList.remove('is-hidden');
    hiddenItem.classList.add('is-hidden');
  } catch (error) {
    footer.classList.add('is-hidden');
    hiddenItem.classList.add('is-hidden');
  } finally {
    fetchBtn.classList.remove('is-loading');
    fetchBtn.disabled = false;
  }

  // Event listeners untuk Saweria dan WhatsApp
  saweria.addEventListener('click', () => window.open('https://saweria.co/mininxd', '_blank'));
  whatsapp.addEventListener('click', () => window.open('https://whatsapp.com/channel/0029VaieVG35K3zatnIond0s', '_blank'));
}
