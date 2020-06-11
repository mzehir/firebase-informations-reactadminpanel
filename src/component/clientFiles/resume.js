// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import ResumeFire from '../../config/resumeFire'
import {
    Button,
    FormText,
    Table
} from 'reactstrap';

const Resume = () => {

    const [calisilanFirma, setcalisilanFirma] = useState('')
    const [calisilanFirmaZamani, setcalisilanFirmaZamani] = useState('')
    const [calisilanFirmaPozisyon, setcalisilanFirmaPozisyon] = useState('')
    const [calisilanFirmaTecrube, setcalisilanFirmaTecrube] = useState('')

    const [okunanOkul, setokunanOkul] = useState('')
    const [okunanOkulZamani, setokunanOkulZamani] = useState('')
    const [okunanOkulBolum, setokunanOkulBolum] = useState('')
    const [okunanOkulTecrube, setokunanOkulTecrube] = useState('')

    const [yetkinAlan, setyetkinAlan] = useState('')
    const [yetkinAlanYuzde, setyetkinAlanYuzde] = useState('')

    const [tamamlananProjeIsmi, settamamlananProjeIsmi] = useState('')
    const [tamamlananProjeOzellik1, settamamlananProjeOzellik1] = useState('')
    const [tamamlananProjeOzellik1Aciklama, settamamlananProjeOzellik1Aciklama] = useState('')
    const [tamamlananProjeOzellik2, settamamlananProjeOzellik2] = useState('')
    const [tamamlananProjeOzellik2Aciklama, settamamlananProjeOzellik2Aciklama] = useState('')
    const [tamamlananProjeOzellik3, settamamlananProjeOzellik3] = useState('')
    const [tamamlananProjeOzellik3Aciklama, settamamlananProjeOzellik3Aciklama] = useState('')
    const [tamamlananProjeOzellik4, settamamlananProjeOzellik4] = useState('')
    const [tamamlananProjeOzellik4Aciklama, settamamlananProjeOzellik4Aciklama] = useState('')

    const [calisilanFirmalarListesi, setcalisilanFirmalarListesi] = useState([])
    const [okunanOkullarListesi, setokunanOkullarListesi] = useState([])
    const [yetkinAlanlarListesi, setyetkinAlanlarListesi] = useState([])
    const [tamamlananProjelerListesi, settamamlananProjelerListesi] = useState([])

    useEffect(() => {
        ResumeFire.getResume().then(((data) => {
            debugger
            if (data) {
                setcalisilanFirmalarListesi(data.CalismaGecmisi)
                setokunanOkullarListesi(data.EgitimGecmisi)
                setyetkinAlanlarListesi(data.YetkinAlanlar)
                settamamlananProjelerListesi(data.TamamlananProjeler)
                alert("geldi")
            }
        }))
    }, [])


    return (
        <div className="col-md-10 mt-5">
            <div className="row">
                <div className="col-md-12">

                    <div className="text-center card">
                        <div className="card-header">
                            <strong>CV Sayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">

                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Deneyim Geçmişi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Önceki Dönemde Çalışılan Şirket:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setcalisilanFirma(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana önceden çalışmış olduğunuz şirket ismi giriniz.
                                                    Mesela <strong>Akart İnşaat A.Ş</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Çalışılan Yıl Miktarı:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setcalisilanFirmaZamani(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana şirkette çalıştığınız yıl  bilginizi giriniz. Mesela <strong>2014 - 2018 </strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Çalışılan Pozisyon:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setcalisilanFirmaPozisyon(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana şirketteki çalışma pozisyonu bilgisini giriniz. Mesela <strong>Resepsiyon Görevlisi</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Kazanılan Tecrübe:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => setcalisilanFirmaTecrube(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana çalışılan şirketteki kazanılan tecrübe bilgisini giriniz. Yada şirket ile alakalı dikkat çekici
                                                    başka bir bilgide verilebilir. Tüm bilgiler 7 - 8 cümleyi geçmemesi tavsiye edilir.</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={calismaGecmisiKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Deneyim Geçmişleri</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Şirket</th>
                                                    <th>Yıl Bilgisi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {calisilanFirmalarListesi && calisilanFirmalarListesi.length > 0 && calisilanFirmalarListesi.map((firma, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{firma.calisilanFirma}</td>
                                                            <td>{firma.calisilanFirmaZamani}</td>
                                                            <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Deneyim Geçmişi Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eğitim Geçmişi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Önceki Dönemde Okunan Okul:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setokunanOkul(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana önceden okumuş olduğunuz okul ismi giriniz.
                                                    Mesela <strong>Ali Dilmen Anadolu Lisesi</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Okunan Yıl Bilgisi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setokunanOkulZamani(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana okuduğunuz okul yıl  bilginizi giriniz. Mesela <strong>2014 - 2018 </strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Okunan Bölüm:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setokunanOkulBolum(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana okunan bölüm bilgisini giriniz. Mesela <strong>Sayısal Bölümü</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Kazanılan Tecrübe:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => setokunanOkulTecrube(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana okulda kazanılan tecrübe bilgisini giriniz. Yada okul ile alakalı dikkat çekici
                                                    başka bir bilgide verilebilir. Tüm bilgiler 7 - 8 cümleyi geçmemesi tavsiye edilir.</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={egitimGecmisiKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Eğitim Geçmişleri</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Okul</th>
                                                    <th>Yıl Bilgisi</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {okunanOkullarListesi && okunanOkullarListesi.length > 0 && okunanOkullarListesi.map((okul, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{okul.okunanOkul}</td>
                                                            <td>{okul.okunanOkulZamani}</td>
                                                            <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Eğitim Geçmişi Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Yetkinlik Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Yetkinlik Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Yetkinlik Bilgisi Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Yetkin Olunan Alan:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setyetkinAlan(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yetkin olunan bir alan bilgisi giriniz.
                                                    Mesela <strong>HTML</strong> gibi...</FormText> Tavsiye edilen yetkinlik alan sayısı maximum 8 adettir ve 4'ün katlarıdır.
                                                </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Yetkinlik Yüzdesi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => setyetkinAlanYuzde(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana yetkin olunan alanın yüzdesel belirtecini giriniz.. Mesela <strong> 98 </strong> gibi...</FormText>
                                            </div>
                                        </div>


                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={yetkiAlanlarKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Yetkinlik Bilgisi</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Yetkinlik</th>
                                                    <th>Yüzdesii</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {yetkinAlanlarListesi && yetkinAlanlarListesi.length > 0 && yetkinAlanlarListesi.map((yetkinlik, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{yetkinlik.yetkinAlan}</td>
                                                            <td>{yetkinlik.yetkinAlanYuzde}</td>
                                                            <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Yetkinlik Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Yetkinlik Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Tamamlanan Progeler Bilgisi Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Tamamlanan Progeler Bilgisi Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Tamamlanan Projeler Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje İsmi:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => settamamlananProjeIsmi(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana tamamlanan projenin ismi bilgisini giriniz.
                                                    Mesela <strong>React Admin Paneli </strong> gibi... Yada <strong>Sokak Hayvanlarını Koruyalım</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>


                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 1:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => settamamlananProjeOzellik1(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana tamamlanan projenin bir özelliği bilgisini giriniz. Yada projeyi 4 ana bölüme bölün ve bir adımını girin.
                                                    Mesela <strong>Proje analizi</strong> gibi... Yada <strong>Veritabanı İşlemleri</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 1 Açıklama:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => settamamlananProjeOzellik1Aciklama(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana projenin 1. özelliği açıklamasını giriniz. Cümle sayısı 3'ü geçmemesi tavsiye edilir.
                                                    </FormText>
                                            </div>
                                        </div>


                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 2:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => settamamlananProjeOzellik2(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana tamamlanan projenin bir özelliği bilgisini giriniz. Yada projeyi 4 ana bölüme bölün ve bir adımını girin.
                                                    Mesela <strong>Proje analizi</strong> gibi... Yada <strong>Veritabanı İşlemleri</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 2 Açıklama:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => settamamlananProjeOzellik2Aciklama(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana projenin 2. özelliği açıklamasını giriniz. Cümle sayısı 3'ü geçmemesi tavsiye edilir.
                                                    </FormText>
                                            </div>
                                        </div>


                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 3:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => settamamlananProjeOzellik3(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana tamamlanan projenin bir özelliği bilgisini giriniz. Yada projeyi 4 ana bölüme bölün ve bir adımını girin.
                                                    Mesela <strong>Proje analizi</strong> gibi... Yada <strong>Veritabanı İşlemleri</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 3 Açıklama:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => settamamlananProjeOzellik3Aciklama(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana projenin 3. özelliği açıklamasını giriniz. Cümle sayısı 3'ü geçmemesi tavsiye edilir.
                                                    </FormText>
                                            </div>
                                        </div>


                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 4:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input onChange={e => settamamlananProjeOzellik4(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana tamamlanan projenin bir özelliği bilgisini giriniz. Yada projeyi 4 ana bölüme bölün ve bir adımını girin.
                                                    Mesela <strong>Proje analizi</strong> gibi... Yada <strong>Veritabanı İşlemleri</strong> gibi...
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Proje Özelliği 4 Açıklama:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea onChange={e => settamamlananProjeOzellik4Aciklama(e.target.value)} className="form-control"></textarea>
                                                <FormText color="muted">Lütfen bu alana projenin 4. özelliği açıklamasını giriniz. Cümle sayısı 3'ü geçmemesi tavsiye edilir.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={tamamlananProjelerKaydet} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Tamamlanmış Projeler</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Proje</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {tamamlananProjelerListesi && tamamlananProjelerListesi.length > 0 && tamamlananProjelerListesi.map((proje, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{proje.tamamlananProjeIsmi}</td>
                                                            <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Tamamlanan Progeler Bilgisi Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Tamamlanan Progeler Bilgisi Bitişi//////////////////////////////////////// */}

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={deleteResume} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

    async function calismaGecmisiKaydet() {
        try {
            var data = {
                calisilanFirma: calisilanFirma,
                calisilanFirmaZamani: calisilanFirmaZamani,
                calisilanFirmaPozisyon: calisilanFirmaPozisyon,
                calisilanFirmaTecrube: calisilanFirmaTecrube,
            }
            await ResumeFire.calismaGecmisiToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function egitimGecmisiKaydet() {
        try {
            var data = {
                okunanOkul: okunanOkul,
                okunanOkulZamani: okunanOkulZamani,
                okunanOkulBolum: okunanOkulBolum,
                okunanOkulTecrube: okunanOkulTecrube,
            }
            await ResumeFire.egitimGecmisiToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function yetkiAlanlarKaydet() {
        try {
            var data = {
                yetkinAlan: yetkinAlan,
                yetkinAlanYuzde: yetkinAlanYuzde,
            }
            await ResumeFire.yetkinAlanlarToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function tamamlananProjelerKaydet() {
        try {
            var data = {
                tamamlananProjeIsmi: tamamlananProjeIsmi,
                tamamlananProjeOzellik1: tamamlananProjeOzellik1,
                tamamlananProjeOzellik1Aciklama: tamamlananProjeOzellik1Aciklama,
                tamamlananProjeOzellik2: tamamlananProjeOzellik2,
                tamamlananProjeOzellik2Aciklama: tamamlananProjeOzellik2Aciklama,
                tamamlananProjeOzellik3: tamamlananProjeOzellik3,
                tamamlananProjeOzellik3Aciklama: tamamlananProjeOzellik3Aciklama,
                tamamlananProjeOzellik4: tamamlananProjeOzellik4,
                tamamlananProjeOzellik4Aciklama: tamamlananProjeOzellik4Aciklama
            }
            await ResumeFire.tamamlananProjeToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function deleteResume() {
        await ResumeFire.deleteResume()
    }
}

export default Resume