import Fire from './config';

class ResumeFire {

    // ########################################Tümsel CV(Resume) / Firebase İşlemleri#########################################################################
    async getResume() {
        let resumeDto = await Fire.db.collection('Admin').doc('CV');
        return await resumeDto.get()
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


    deleteResume() {
        if (window.confirm('Tüm CV sayfası bilgilerini silmek üzeresiniz emin misiniz?') === true) {
            return Fire.db.collection(`Admin`).doc("CV").delete()
        } else {
            console.log("...")
        }
    }
    // ########################################Tümsel CV(Resume) / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Mesleki Çalışma Geçmişi / Firebase İşlemleri#########################################################################
    async getCalismaGecmisi() {
        let calismaGecmisiDto = await Fire.db.collection('Admin').doc('CV').get()
        return calismaGecmisiDto.get('CalismaGecmisi')
    }


    async calismaGecmisiToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let calismaGecmisiDto = await this.getCalismaGecmisi()
        let calismaGecmisiListesi = []

        if (!resumeDto) {
            calismaGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'CalismaGecmisi': calismaGecmisiListesi
            })
        } else if (resumeDto && !calismaGecmisiDto) {
            calismaGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'CalismaGecmisi': calismaGecmisiListesi
            })
        } else {
            calismaGecmisiDto.push(data);
            for (let i = 0; i < calismaGecmisiDto.length; i++) {
                calismaGecmisiListesi.push(calismaGecmisiDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'CalismaGecmisi': calismaGecmisiListesi
            })
        }
    }
    // ########################################Mesleki Çalışma Geçmişi / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Eğitim Geçmişi / Firebase İşlemleri#########################################################################
    async getEgitimGecmisi() {
        let egitimGecmisiDto = await Fire.db.collection('Admin').doc('CV').get()
        return egitimGecmisiDto.get('EgitimGecmisi')
    }


    async egitimGecmisiToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let egitimGecmisiDto = await this.getEgitimGecmisi()
        let egitimGecmisiListesi = []

        if (!resumeDto) {
            egitimGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'EgitimGecmisi': egitimGecmisiListesi
            })
        } else if (resumeDto && !egitimGecmisiDto) {
            egitimGecmisiListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'EgitimGecmisi': egitimGecmisiListesi
            })
        } else {
            egitimGecmisiDto.push(data);
            for (let i = 0; i < egitimGecmisiDto.length; i++) {
                egitimGecmisiListesi.push(egitimGecmisiDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'EgitimGecmisi': egitimGecmisiListesi
            })
        }
    }
    // ########################################Eğitim Geçmişi / Firebase İşlemleri#########################################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Yetkin Alanlar Bilgi Formu / Firebase İşlemleri#############################################################
    async getYetkinAlanlar() {
        let yetkinAlanlarDto = await Fire.db.collection('Admin').doc('CV').get()
        return yetkinAlanlarDto.get('YetkinAlanlar')
    }


    async yetkinAlanlarToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let yetkinAlanlarDto = await this.getYetkinAlanlar()
        let yetkinAlanlarListesi = []

        if (!resumeDto) {
            yetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'YetkinAlanlar': yetkinAlanlarListesi
            })
        } else if (resumeDto && !yetkinAlanlarDto) {
            yetkinAlanlarListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'YetkinAlanlar': yetkinAlanlarListesi
            })
        } else {
            yetkinAlanlarDto.push(data);
            for (let i = 0; i < yetkinAlanlarDto.length; i++) {
                yetkinAlanlarListesi.push(yetkinAlanlarDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'YetkinAlanlar': yetkinAlanlarListesi
            })
        }
    }
    // ########################################Yetkin Alanlar Bilgi Formu / Firebase İşlemleri#############################################################

    //************************************************************************************************************************************************
    //************************************************************************************************************************************************
    //************************************************************************************************************************************************

    // ########################################Tamamlanan Projeler Formu / Firebase İşlemleri#############################################################
    async getTamamlananProjeler() {
        let tamamlananProjelerDto = await Fire.db.collection('Admin').doc('CV').get()
        return tamamlananProjelerDto.get('TamamlananProjeler')
    }


    async tamamlananProjeToFire(data) {
        debugger
        let resumeDto = await this.getResume()
        let tamamlananProjelerDto = await this.getTamamlananProjeler()
        let tamamlananProjelerListesi = []

        if (!resumeDto) {
            tamamlananProjelerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').set({
                'TamamlananProjeler': tamamlananProjelerListesi
            })
        } else if (resumeDto && !tamamlananProjelerDto) {
            tamamlananProjelerListesi.push(data)
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'TamamlananProjeler': tamamlananProjelerListesi
            })
        } else {
            tamamlananProjelerDto.push(data);
            for (let i = 0; i < tamamlananProjelerDto.length; i++) {
                tamamlananProjelerListesi.push(tamamlananProjelerDto[i])
            }
            alert("Kayıt işlemi başarıyla sağlamıştır. Eklenen hesap bilgisini görmek için sayfayı yenileyiniz.")
            return Fire.db.collection('Admin').doc('CV').update({
                'TamamlananProjeler': tamamlananProjelerListesi
            })
        }
    }
    // ########################################Tamamlanan Projeler Formu / Firebase İşlemleri#############################################################

}

export default new ResumeFire();