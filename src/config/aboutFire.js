import Fire from './config';

class AboutFire {

    // ########################################Tümsel Hakkımda(About) / Firebase İşlemleri#########################################################################
    async getHakkimda() {
        let hakkimdaDto = await Fire.db.collection('Admin').doc('Hakkimda');
        return await hakkimdaDto.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    return data
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }


    deleteHakkimda() {
        if (window.confirm('Tüm hakkımda bilgilerini silmek üzeresiniz emin misiniz?') === true) {
            return Fire.db.collection(`Admin`).doc("Hakkimda").delete()
        } else {
            console.log("...")
        }
    }
    // ########################################Tümsel Hakkımda(About) / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Ön Yazı  Formu / Firebase İşlemleri#########################################################################
    async getOnYaziForm() {
        let onYaziDto = await Fire.db.collection('Admin').doc('Hakkimda').get()
        return onYaziDto.get('OnYaziBilgileri')
    }


    async onYaziFormToFire(data) {
        debugger
        let hakkimdaDto = await this.getHakkimda()
        if (hakkimdaDto) {
            return await Fire.db.collection('Admin').doc('Hakkimda').update({
                'OnYaziBilgileri': data
            })
        } else {
            return await Fire.db.collection(`Admin`).doc('Hakkimda').set({
                'OnYaziBilgileri': data
            })
        }


    }
    // ########################################Ön Yazı  Formu / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Hobiler Formu / Firebase İşlemleri#########################################################################
    async getHobiler() {
        let hobilerDto = await Fire.db.collection('Admin').doc('Hakkimda').get()
        return hobilerDto.get('HobiBilgileri')
    }


    async hobilerFormToFire(data) {
        debugger
        let hakkimdaDto = await this.getHakkimda()
        let hobilerDto = await this.getHobiler()
        let hobilerListesi = []

        if (!hakkimdaDto) {
            hobilerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').set({
                'HobiBilgileri': hobilerListesi
            })
        } else if (hakkimdaDto && !hobilerDto) {
            hobilerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').update({
                'HobiBilgileri': hobilerListesi
            })
        } else {
            hobilerDto.push(data);
            for (let i = 0; i < hobilerDto.length; i++) {
                hobilerListesi.push(hobilerDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').update({
                'HobiBilgileri': hobilerListesi
            })
        }
    }
    // ########################################Hobiler Formu Bilgiler / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################İkinci Hizmet Bilgi Formu / Firebase İşlemleri#############################################################
    async getikinciHizmet() {
        let ikinciHizmetDto = await Fire.db.collection('Admin').doc('Hakkimda').get()
        return ikinciHizmetDto.get('IkinciHizmetBilgisi')
    }


    async ikinciHizmetFormToFire(data) {
        debugger
        let hakkimdaDto = await this.getHakkimda()
        let ikinciHizmetDto = await this.getikinciHizmet()
        let ikinciHizmetListesi = []

        if (!hakkimdaDto) {
            ikinciHizmetListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').set({
                'IkinciHizmetBilgisi': ikinciHizmetListesi
            })
        } else if (hakkimdaDto && !ikinciHizmetDto) {
            ikinciHizmetListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').update({
                'IkinciHizmetBilgisi': ikinciHizmetListesi
            })
        } else {
            ikinciHizmetDto.push(data);
            for (let i = 0; i < ikinciHizmetDto.length; i++) {
                ikinciHizmetListesi.push(ikinciHizmetDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').update({
                'IkinciHizmetBilgisi': ikinciHizmetListesi
            })
        }
    }
    // ########################################İkinci Hizmet Bilgi Formu / Firebase İşlemleri#############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Referans Bilgi Formu / Firebase İşlemleri##############################################################
    async getReferansBilgisi() {
        let referansBilgisiDto = await Fire.db.collection('Admin').doc('Hakkimda').get()
        return referansBilgisiDto.get('ReferansBilgileri')
    }


    async referansBilgisiFormToFire(data) {
        debugger
        let hakkimdaDto = await this.getHakkimda()
        let referansBilgisiDto = await this.getReferansBilgisi()
        let referansBilgilerListesi = []

        if (!hakkimdaDto) {
            referansBilgilerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').set({
                'ReferansBilgileri': referansBilgilerListesi
            })
        } else if (hakkimdaDto && !referansBilgisiDto) {
            referansBilgilerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').update({
                'ReferansBilgileri': referansBilgilerListesi
            })
        } else {
            referansBilgisiDto.push(data);
            for (let i = 0; i < referansBilgisiDto.length; i++) {
                referansBilgilerListesi.push(referansBilgisiDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('Hakkimda').update({
                'ReferansBilgileri': referansBilgilerListesi
            })
        }
    }
    // ########################################Referans Bilgi Formu / Firebase İşlemleri##############################################################

}

export default new AboutFire();