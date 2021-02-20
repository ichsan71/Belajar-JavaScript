// membuat object pesawat
function Pesawat(pilot, trek, penumpang, kas) {
    this.pilot = pilot;
    this.trek = trek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang,bayar) {
        if (this.penumpang.length == 0) {
            console.log('Penumpang kosong');
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (namaPenumpang == this.penumpang[i]) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang; 
            }
        }
    }

}
var pesawat1 = new Pesawat('san', ['cileungsi', 'cibubur'], [], 0);
