import {obj} from './test.js';
import './checkServer.js';

export function getTera(url) {
  fileResult.innerHTML = "";
fetch(url).then(res => {
  return res.json();
}).then(data => {
      if (data.status) {
        const file = data.data;

        let row = document.createElement('div');
        row.classList.add('row');
        
        let thumb = document.createElement('img');
        let thumbCell = document.createElement('div');
        thumb.classList.add('thumb');
        thumb.src = file.thumbnail;
        thumbCell.append(thumb);

        let fileName = document.createElement('span');
        let fileNameCell = document.createElement('div');
        fileName.classList.add('fileName', 'title', 'is-6');
        fileName.textContent = file.title;

        let fileSize = document.createElement('span');
        let fileSizeCell = document.createElement('div');
        fileSize.classList.add('fileSize', 'subtitle', 'is-6');
        fileSize.textContent = `${(file.duration_ms / 1000).toFixed(2)} seconds`; // Durasi dalam detik
        fileNameCell.append(fileName, fileSize);

        let copyBtn = document.createElement('span');
        copyBtn.classList.add('material-symbols-outlined');
        copyBtn.textContent = 'content_copy';
        copyBtn.addEventListener('click', function() {
          navigator.clipboard.writeText(file.sd);
        });

        let downBtn = document.createElement('span');
        downBtn.classList.add('material-symbols-outlined');
        downBtn.textContent = 'download';
        downBtn.addEventListener('click', function() {
          window.open(file.url, '_blank');
        });

        let copyBtnCell = document.createElement('div');
        copyBtnCell.classList.add('cell', 'last');
        copyBtnCell.append(copyBtn);

        let downBtnCell = document.createElement('div');
        downBtnCell.classList.add('cell', 'last');
        downBtnCell.append(downBtn);

        row.append(thumbCell, fileNameCell, copyBtnCell, downBtnCell);
        fileResult.append(row);

        footer.classList.remove('is-hidden');
        hiddenItem.classList.add('is-hidden');
        fetchBtn.classList.remove('is-loading');
        fetchBtn.disabled = false;

        saweria.addEventListener('click', function() {
          window.open('https://saweria.co/mininxd', '_blank');
        });

        whatsapp.addEventListener('click', function() {
          window.open('https://whatsapp.com/channel/0029VaieVG35K3zatnIond0s', '_blank');
        });
      }
    })
  .then(e => {
  console.log(e)
  fetchBtn.classList.remove('is-loading');
  fetchBtn.disabled = false;
  hiddenItem.classList.add('is-hidden');
  footer.classList.add('is-hidden');
})
}