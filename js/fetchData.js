import { obj } from './test.js';
import './checkServer.js';

export function getTera(url) {
  fileResult.innerHTML = "";
  
  fetch(url).then(res => res.json())
    .then(data => {
      // Jika file adalah sebuah array
      let files = [data]; // Sesuaikan struktur dengan data JSON yang kamu kasih

      for (let i = 0; i < files.length; i++) {
        let file = files[i]; // Mengakses elemen tunggal dari array

        let row = document.createElement('div');
        row.classList.add('row');

        let thumb = document.createElement('img');
        let thumbCell = document.createElement('div');
        thumb.classList.add('thumb');
        thumbCell.classList.add('cell');

        let fileName = document.createElement('span');
        let fileNameCell = document.createElement('div');
        fileName.classList.add('fileName', 'title', 'is-6');
        fileNameCell.classList.add('cell');

        let fileSize = document.createElement('span');
        let fileSizeCell = document.createElement('div');
        fileSize.classList.add('fileSize', 'subtitle', 'is-6');
        fileSizeCell.classList.add('cell');

        let copyBtn = document.createElement('span');
        let copyBtnCell = document.createElement('div');
        copyBtn.classList.add('material-symbols-outlined');
        copyBtnCell.classList.add('cell', 'last');

        let downBtn = document.createElement('span');
        let downBtnCell = document.createElement('div');
        downBtn.classList.add('material-symbols-outlined');
        downBtn.textContent = 'download';
        downBtnCell.classList.add('cell', 'last');

        // Set thumbnail, name, dan ukuran file dari data
        thumb.src = file.thumbnail;
        thumbCell.append(thumb);
        fileName.textContent = file.title; // Menampilkan title dari JSON
        fileSize.innerHTML = `<br> ${file.size ? file.size : 'Unknown'} MB`; // Jika size ada, tampilkan
        fileName.append(fileSize);
        fileNameCell.append(fileName);

        // Copy button
        copyBtn.textContent = 'content_copy';
        copyBtn.addEventListener('click', function() {
          navigator.clipboard.writeText(file.url);
        });
        copyBtnCell.append(copyBtn);

        // Download button
        downBtn.addEventListener('click', function() {
          window.open(file.url, '_blank');
        });
        downBtnCell.append(downBtn);

        // Append cells ke row
        row.append(thumbCell);
        row.append(fileNameCell);
        row.append(copyBtnCell);
        row.append(downBtnCell);

        // Append row ke fileResult
        fileResult.append(row);
      }

      // Hapus loading state
      footer.classList.remove('is-hidden');
      hiddenItem.classList.add('is-hidden');
      fetchBtn.classList.remove('is-loading');
      fetchBtn.disabled = false;
    })
    .catch(error => {
      console.error('Error:', error);
      fetchBtn.classList.remove('is-loading');
      fetchBtn.disabled = false;
      hiddenItem.classList.add('is-hidden');
      footer.classList.add('is-hidden');
    });

  saweria.addEventListener('click', function() {
    window.open('https://saweria.co/mininxd', '_blank');
  });
  
  whatsapp.addEventListener('click', function() {
    window.open('https://whatsapp.com/channel/0029VaieVG35K3zatnIond0s', '_blank');
  });
}
