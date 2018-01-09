import 'babel-polyfill'
import { PhotoEditor } from 'photo-editor';

import Pencil from './pencil-tool';

const pencilButtonEl = document.getElementById('pencil');
const canvasButtonEl = document.getElementById('canvas');

const photoEditor = new PhotoEditor(canvasButtonEl, {
  tools: {
    pencil: Pencil,
  },
});

photoEditor.addListener('enableTool', (tool) => {
  if (tool === 'pencil') {
    pencilButtonEl.style.border = '2px solid #aa0000';
  }
});

photoEditor.addListener('disableTool', () => {
  pencilButtonEl.style.removeProperty('border');
});

pencilButtonEl.onclick = () => {
  photoEditor.toggleTool('pencil');
};