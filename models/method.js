export class Method {
  danhSachAlbum = [];
  constructor() {}
  themAlbum(album) {
    this.danhSachAlbum.push(album);
  }
  checkIndex(name){
    return this.danhSachAlbum.findIndex((item) =>item.tenAlbum === name);
  }
  xoaAlbum(name) {
    let index = this.checkIndex(name)
    if (index !== -1) {
      this.danhSachAlbum.splice(index, 1);
    }
  }

  luuAlbum() {
    let sAlbum = JSON.stringify(this.danhSachAlbum);
    localStorage.setItem("album", sAlbum);
  }
  layAlbum() {
    if (localStorage.getItem("album")) {
      let album = JSON.parse(localStorage.getItem("album"));
      this.danhSachAlbum = album;
    } else {
      this.danhSachAlbum = [];
    }
  }
  updateAlbum(name, album) {
    let index = this.checkIndex(name);
    this.danhSachAlbum[index] = album;
  }
}
