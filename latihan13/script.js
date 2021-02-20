var penumpang = [];
              
var tambahpenumpang = function(nama,penumpang) {
        // jika angkot kosong
        if (penumpang.length == 0) {
            penumpang.push(nama);
            return penumpang;
        } else {
            //telusuri dari awal 
            for (var j = 0; j < penumpang.length; j++) {
                if (penumpang[j] == undefined) {
                    penumpang[j] = nama;
                    return penumpang;
                } else if (penumpang[j] == nama) {
                    console.log('Dah ade')
                    return penumpang;
                }
                else if(j == penumpang.length - 1){
                    penumpang.push(nama);
                    return penumpang;
                } 
            }
        }
    }
var hapuspenumpang = function(nama,penumpang) {
    // jika angkot kosong
    if (penumpang == 0) {
        console.log('tak de orang');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (nama == penumpang[i]) {
                penumpang[i] = undefined;
                return penumpang;
            } else {
                console.log('tak de pun');
                return penumpang;
            }
        }
    }
}

    
