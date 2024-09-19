import { obj } from './test.js';
import './checkServer.js';

export function getTera(url) {
  fileResult.innerHTML = "";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let files = [data]; // Sesuaikan struktur dengan data JSON yang kamu kasih

      for (let i = 0; i < files.length; i++) {
        let file = files[i];

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

        let fileDuration = document.createElement('span');
        let fileDurationCell = document.createElement('div');
        fileDuration.classList.add('fileDuration', 'subtitle', 'is-6');
        fileDurationCell.classList.add('cell');

        let hdBtn = document.createElement('span');
        let hdBtnCell = document.createElement('div');
        hdBtn.classList.add('material-symbols-outlined');
        hdBtnCell.classList.add('cell', 'last');

        let sdBtn = document.createElement('span');
        let sdBtnCell = document.createElement('div');
        sdBtn.classList.add('material-symbols-outlined');
        sdBtn.textContent = 'SD';
        sdBtnCell.classList.add('cell', 'last');

        // Set thumbnail, name, dan duration dari data
        thumb.src = file.thumbnail;
        thumbCell.append(thumb);
        fileName.textContent = file.title;
        fileDuration.innerHTML = `<br> ${Math.floor(file.duration_ms / 1000)} seconds`;
        fileName.append(fileDuration);
        fileNameCell.append(fileName);

        // HD button
        hdBtn.textContent = 'HD';
        hdBtn.addEventListener('click', function () {
          window.open(file.hd, '_blank');
        });
        hdBtnCell.append(hdBtn);

        // SD button
        sdBtn.addEventListener('click', function () {
          window.open(file.sd, '_blank');
        });
        sdBtnCell.append(sdBtn);

        // Append cells ke row
        row.append(thumbCell);
        row.append(fileNameCell);
        row.append(hdBtnCell);
        row.append(sdBtnCell);

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

  saweria.addEventListener('click', function () {
    window.open('https://saweria.co/mininxd', '_blank');
  });

  whatsapp.addEventListener('click', function () {
    window.open('https://whatsapp.com/channel/0029VaieVG35K3zatnIond0s', '_blank');
  });
}
