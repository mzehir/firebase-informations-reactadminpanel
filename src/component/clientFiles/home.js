// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import HomeFire from '../../config/homeFire';
import {
    Button,
    FormText,
    Table
} from 'reactstrap';

const Home = () => {

    const [nameAndSurname, setnameAndSurname] = useState('')
    const [business1, setbusiness1] = useState('')
    const [business2, setbusiness2] = useState('')
    const [business3, setbusiness3] = useState('')

    const [socialMediaAccount, setsocialMediaAccount] = useState('')
    const [socialMediaAccountIcon, setsocialMediaAccountIcon] = useState('')

    const [personelDataList, setpersonelDataList] = useState([])
    const [sosyalMedyaList, setsosyalMedyaList] = useState([])

    useEffect(() => {
        HomeFire.getAnasayfa().then(((data) => {
            debugger
            if (data) {
                setpersonelDataList(data.PersonelBilgisi)
                setsosyalMedyaList(data.SosyalMedyaHesap)
            }
        }))
    }, [])


    return (
        <div className="col-md-10 mt-5">
            <div className="row">
                <div className="col-md-12">

                    <div className="text-center card">
                        <div className="card-header">
                            <strong>Anasayfa Ayarları</strong>
                        </div>

                        <div>
                            <div className="card-body">
                                <div className="row">
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-12 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Kişisel Bilgiler Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Ad ve Soyad :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.nameAndSurname : ""} onChange={e => setnameAndSurname(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana adınızı ve soyadınızı giriniz. Mesela <strong>Ahmet Aslan</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Meslek Bilgisi :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.business1 : ""} onChange={e => setbusiness1(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana meslek bilginizi giriniz. Mesela <strong>Yazılım Mühendisi</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Meslek Bilgisi 2 :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.business2 : ""} onChange={e => setbusiness2(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana 2.meslek bilginizi giriniz. Mesela <strong>Web Developer</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2">
                                                <label>Meslek Bilgisi 3 :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={personelDataList ? personelDataList.business3 : ""} onChange={e => setbusiness3(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana 3.meslek bilginizi giriniz. Mesela <strong>Web Tasarımcı</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-3">
                                            <button onClick={personelDataSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Kişisel Bilgiler Formu Bitişi//////////////////////////////////////// */}


                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Başlangıcı//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Başlangıcı//////////////////////////////////////// */}
                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Sosyal Medya Hesapları Formu</strong>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Sosyal Medya Hesapları:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={socialMediaAccount} onChange={e => setsocialMediaAccount(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">Lütfen bu alana sosyal medya hesabı profil linkinizi giriniz. Mesela <strong>https://github.com/mzehir</strong> gibi...</FormText>
                                            </div>
                                        </div>

                                        <div className="row text-left mb-5">
                                            <div className="col-md-2 ">
                                                <label>Sosyal Medya Hesap İconu :</label>
                                            </div>
                                            <div className="col-md-10">
                                                <input defaultValue={socialMediaAccountIcon} onChange={e => setsocialMediaAccountIcon(e.target.value)} className="form-control"></input>
                                                <FormText color="muted">
                                                    Öncelikle https://fontawesome.com/ adresine gidelim. Daha sonra arama butonuna iconunu eklemek istediğimiz sosyal medya hesap ismini yazalım.
                                                    Mesela <strong>githup </strong> gibi. Sonrasında arama sonucu ile karşımıza gelen iconlardan beğendiğimiz icona tıklayalım.
                                                    Karşımıza gelen sayfada en üst kısımda yer alan mesela fab fa-github yazısının <strong>fa-github </strong> bölümünü kopyalayalım ve bu alana yapıştıralım.
                                                    </FormText>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button onClick={socialMediaSave} className="btn btn-success btn-block">Bilgileri Kaydet</button>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-5">
                                        <div className="card-header shadow-lg p-3 mb-5 bg-dark rounded text-white">
                                            <strong>Eklenen Sosyal Medya Hesapları</strong>
                                        </div>

                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Hesap</th>
                                                    <th>İcon Kodu</th>
                                                    <th>Sil</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {sosyalMedyaList && sosyalMedyaList.length > 0 && sosyalMedyaList.map((sosyalMedya, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{sosyalMedya.socialMediaAccount}</td>
                                                            <td>{sosyalMedya.socialMediaAccountIcon}</td>
                                                            <button onClick={() => deleted({index})} className="btn btn-danger btn-block mt-1">Sil</button>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Bitişi//////////////////////////////////////// */}
                                    {/* /////////////////////////////////////Sosyal Medya Hesapları Formu Bitişi//////////////////////////////////////// */}

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={deleteAnasayfa} className="btn btn-danger btn-block">Tüm Sayfayı Sil</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

    async function personelDataSave() {
        try {
            var data = {
                nameAndSurname: nameAndSurname,
                business1: business1,
                business2: business2,
                business3: business3,
            }
            await HomeFire.personelDataToFire(data)
        } catch (error) {
            alert(error.message)
        }
    }

    async function socialMediaSave() {
        try {
            if (!socialMediaAccount || !socialMediaAccountIcon) {
                alert('Lütfen bilgileri eksiksiz giriniz.')
            } else {
                var data = {
                    socialMediaAccount: socialMediaAccount,
                    socialMediaAccountIcon: socialMediaAccountIcon,
                }
                await HomeFire.socialMediaDataToFire(data)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    async function deleteAnasayfa() {
        await HomeFire.deleteAnasayfa()
    }

    async function deleted(data) {
        debugger
        await HomeFire.deletedd(data)
    }

}

export default Home 
