// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import AboutFire from '../../config/aboutFire';
import {
    Button,
    FormText,
    Table
} from 'reactstrap';

const About = () => {

    const [nameAndSurname, setnameAndSurname] = useState('')
    const [lokasyon, setlokasyon] = useState('')
    const [coverLetter, setcoverLetter] = useState('')
    const [meslekiDeneyim, setmeslekiDeneyim] = useState('')
    const [projeBilgisi, setprojeBilgisi] = useState('')
    const [ikinciHizmetBilgisi, setikinciHizmetBilgisi] = useState('')

    const [hobi, sethobi] = useState('')
    const [hobiİconu, sethobiİconu] = useState('')

    const [digerHizmet, setdigerHizmet] = useState('')
    const [digerHizmetİconu, setdigerHizmetİconu] = useState('')

    const [referansİsmi, setreferansİsmi] = useState('')
    const [referansMeslek, setreferansMeslek] = useState('')
    const [referansMedyaHesap, setreferansMedyaHesap] = useState('')
    const [referansYorum, setreferansYorum] = useState('')

    const [onYaziFormListe, setonYaziFormListe] = useState([])
    const [hobilerListe, sethobilerListe] = useState([])
    const [ikiniHizmetListe, setikiniHizmetListe] = useState([])
    const [referansListe, setreferansListe] = useState([])

    useEffect(() => {
        AboutFire.getHakkimda().then(((data) => {
            debugger
            if (data) {
                setonYaziFormListe(data.OnYaziBilgileri)
                sethobilerListe(data.HobiBilgileri)
                setikiniHizmetListe(data.IkinciHizmetBilgisi)
                setreferansListe(data.ReferansBilgileri)
            }
        }))
    }, [])

    return (
        <div className="col-md-10 mt-5">
            <div className="row">
                <div className="col-md-12">

                    <div className="text-center card">
                        <div className="card-header">
                            <strong>Hakkımda Sayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">

                                    {/* /////////////////////////////////////Ön Yazı Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Ön Yazı Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Ön Yazı Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Ad ve Soyad :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={onYaziFormListe ? onYaziFormListe.nameAndSurname : ""} onChange={e => setnameAndSurname(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana adınızı ve soyadınızı giriniz. Mesela <strong>Ahmet Aslan</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Lokasyon Bilgisi :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={onYaziFormListe ? onYaziFormListe.lokasyon : ""} onChange={e => setlokasyon(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana ikamet ettiğiniz şehir bilgisini giriniz. Mesela <strong>Kocaali / SAKARYA</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Ön Yazı :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea defaultValue={onYaziFormListe ? onYaziFormListe.coverLetter : ""} onChange={e => setcoverLetter(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana site ziyaretçilerinin okuyacağı sizi anlatan bir yazı giriniz.
                                                Mesela bu yazı okuyucuyu sıkmamalı ve sizin hakkınızda bilgi verici olmalıdır.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Mesleki Deneyim :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={onYaziFormListe ? onYaziFormListe.meslekiDeneyim : ""} onChange={e => setmeslekiDeneyim(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana mesleki deneyim bilginizi giriniz. Mesela <strong>5 Yıl Genel Müdürlük</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Proje Bilgisi :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={onYaziFormListe ? onYaziFormListe.projeBilgisi : ""} onChange={e => setprojeBilgisi(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yer aldığınız proje sayısını veya başarı ile tamaladığınız proje bilgisini giriniz.
                                                     Mesela <strong>13 Proje</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>İkinci Bir Hizmet Bilgisi :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={onYaziFormListe ? onYaziFormListe.ikinciHizmetBilgisi : ""} onChange={e => setikinciHizmetBilgisi(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana ikinci bir hizmet bilginizi giriniz.
                                                     Mesela öğretmen olduğunuzu varsayarsak <strong>Özel Ders (Tarih)</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>CV Yükle :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input className="file" type="file"></input>
                                                <FormText color="muted">Lütfen buradan cv yükleme işlemini yapınız. Dosya formatı
                                                        <strong> PDF</strong> olmalıdır.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Fotoğraf Yükle :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input className="file" type="file"></input>
                                                <FormText color="muted">Lütfen buradan fotoğraf yükleme işlemini yapınız. </FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={onYaziFormSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////Ön Yazı Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Ön Yazı Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Hobiler Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Hobiler Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Hobiler Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Hobi Ekle:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => sethobi(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana kişisel hobi bilgisi giriniz. Mesela <strong>Satranç</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Hobi İconu:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => sethobiİconu(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">
                                                    Öncelikle https://fontawesome.com/ adresine gidelim. Daha sonra arama butonuna iconunu eklemek istediğimiz sosyal medya hesap ismini yazalım.
                                                    Mesela <strong>githup </strong> gibi. Sonrasında arama sonucu ile karşımıza gelen iconlardan beğendiğimiz icona tıklayalım.
                                                    Karşımıza gelen sayfada en üst kısımda yer alan mesela fab fa-chess yazısının <strong>fa-chess </strong> bölümünü kopyalayalım ve bu alana yapıştıralım.
                                                    Önerilen hobi sayısı maximum 8 adettir ve 4'ün katlarıdır.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={hobilerFormSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Hobiler</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Hobi</th>
                                                    <th>İcon Kodu</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {hobilerListe && hobilerListe.length > 0 && hobilerListe.map((hobi, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{hobi.hobi}</td>
                                                            <td>{hobi.hobiİconu}</td>
                                                            <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Hobiler Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Hobiler Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////2. Hizmet Bilgi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////2. Hizmet Bilgi Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Diğer Hizmetler Bilgi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>2.Bir Hizmet Ekle:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setdigerHizmet(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana ziyaretçilere sağlayabileceğiniz hizmet bilgisi giriniz. Mesela Web Developer mesleği için
                                                    <strong> Mobil Programlama</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Hizmet İconu:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setdigerHizmetİconu(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">
                                                    Öncelikle https://fontawesome.com/ adresine gidelim. Daha sonra arama butonuna iconunu eklemek istediğimiz sosyal medya hesap ismini yazalım.
                                                    Mesela <strong>githup </strong> gibi. Sonrasında arama sonucu ile karşımıza gelen iconlardan beğendiğimiz icona tıklayalım.
                                                    Karşımıza gelen sayfada en üst kısımda yer alan mesela fab fa-chess yazısının <strong>fa-chess </strong> bölümünü kopyalayalım ve bu alana yapıştıralım.
                                                    Önerilen hobi sayısı maximum 8 adettir ve 4'ün katlarıdır.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={ikinciHizmetFormSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Diğer Hizmetler</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Hizmet</th>
                                                    <th>İcon Kodu</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {ikiniHizmetListe && ikiniHizmetListe.length > 0 && ikiniHizmetListe.map((hizmet, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{hizmet.digerHizmet}</td>
                                                            <td>{hizmet.digerHizmetİconu}</td>
                                                            <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////2. Hizmet Bilgi Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////2. Hizmet Bilgi Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Referanslar Bilgi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Referanslar Bilgi Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Referanslar Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>İsim:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setreferansİsmi(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana size referans olabilecek müşteriniz yada tanıdığınız bilgisini giriniz. Mesela
                                                    <strong> Ahmet Faruk Sarı</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Meslek:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setreferansMeslek(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana size referans olan kişinin meslek bilgisini giriniz. Mesela
                                                    <strong> Öğretmen</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Sosyal Medya Hesabı:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setreferansMedyaHesap(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana size referans olan kişinin herhangi bir sosyal medya adres bilgisini giriniz. Mesela
                                                    <strong>  https://www.linkedin.com/in/m %C3%BCmin-zehir-4168481a3/</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Referans Yorumu:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => setreferansYorum(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">
                                                    Lütfen bu alana size referans olan kişinin sizin hakkınızdaki görüş bilgisini giriniz.
                                                       <strong> Değerlendirmenin 5 - 6 cümleyi geçmemesi tavsiye edilir.</strong>
                                                </FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={referansBilgisiFormSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Referanslar</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>İsim</th>
                                                    <th>Sosyal Medya Adresi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {referansListe && referansListe.length > 0 && referansListe.map((referans, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{referans.referansİsmi}</td>
                                                            <td>{referans.referansMedyaHesap}</td>
                                                            <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Referanslar Bilgi Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Referanslar Bilgi Formu Bitişi//////////////////////////////////////// */}

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={deleteHakkimda} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

    async function onYaziFormSave(data) {
        try {
            var data = {
                nameAndSurname: nameAndSurname,
                lokasyon: lokasyon,
                coverLetter: coverLetter,
                meslekiDeneyim: meslekiDeneyim,
                projeBilgisi: projeBilgisi,
                ikinciHizmetBilgisi: ikinciHizmetBilgisi
            }
            await AboutFire.onYaziFormToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function hobilerFormSave(data) {
        try {
            var data = {
                hobi: hobi,
                hobiİconu: hobiİconu,
            }
            await AboutFire.hobilerFormToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function ikinciHizmetFormSave(data) {
        try {
            var data = {
                digerHizmet: digerHizmet,
                digerHizmetİconu: digerHizmetİconu,
            }
            await AboutFire.ikinciHizmetFormToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function referansBilgisiFormSave(data) {
        try {
            var data = {
                referansİsmi: referansİsmi,
                referansMeslek: referansMeslek,
                referansMedyaHesap: referansMedyaHesap,
                referansYorum, referansYorum
            }
            await AboutFire.referansBilgisiFormToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function deleteHakkimda() {
        await AboutFire.deleteHakkimda()
    }

}

export default About