import { Album } from "../models/Album.js";
import { Method } from "../models/method.js";
let method = new Method();
method.layAlbum();
document.getElementById("btnThemAlbum").onclick = () => {
  let al = new Album();
  console.log(al);

  let arrInput = document.querySelectorAll("input, select");
  console.log(arrInput);
  for (let input of arrInput) {
    let id = input.id;
    let value = input.value;
    al[id] = value;
  }
  method.themAlbum(al);
  renderAlbum(method.danhSachAlbum);
};
const renderAlbum = (album) => {
  const contentGallery = album.reduce((content, item, index) => {
    return (content += `
      <div class="col-md-4">
          <div class="card mb-4 box-shadow" >
              <div class="responsive-img"  style="background-image: url('${item.linkAnh}');">
              </div>
              <div class="card-body">
                  <h3>${item.tenAlbum}</h3>
                  <p class="card-text">${item.moTa}</p>
                  <p class="card-text">Type: ${item.loaiAlbum}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                          <button type="button" class="btn btn-success text-white btn-sm btn-outline-secondary mr-2" onclick="updateAlbum('${item.tenAlbum}')">Update</button>
                          <button type="button" class="btn btn-danger text-white btn-sm btn-outline-secondary" onclick="xoaAlbum('${item.tenAlbum}')">Delete</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `);
  }, ``);

  document.getElementById("content").innerHTML = contentGallery;
};
renderAlbum(method.danhSachAlbum);

window.updateAlbum = (name) => {
  const index = method.checkIndex(name);
  let currentAlbum = method.danhSachAlbum[index];

  let arrInput = document.querySelectorAll("input,select");
  for (let input of arrInput) {
    input.value = currentAlbum[input.id];
  }
  document.getElementById("form").scrollIntoView();
  document.getElementById("tenAlbum").disabled = true;
  document.getElementById("btnCapNhatAlbum").disabled = false;
  document.getElementById("btnThemAlbum").disabled = true;
};
window.xoaAlbum = (tenAlbum) => {
  method.xoaAlbum(tenAlbum);
  method.luuAlbum();
  alert(tenAlbum);
  renderAlbum(method.danhSachAlbum);
};
document.getElementById("btnCapNhatAlbum").onclick = () => {
  let album = new Album();
  const arrInput = document.querySelectorAll("input, select");
  for (let input of arrInput) {
    album[input.id] = input.value;
    input.value = "";
  }
  method.updateAlbum(album.tenAlbum, album);
  method.luuAlbum();
  renderAlbum(method.danhSachAlbum);
  document.getElementById("btnCapNhatAlbum").disabled = true;
  document.getElementById("btnThemAlbum").disabled = false;
};
