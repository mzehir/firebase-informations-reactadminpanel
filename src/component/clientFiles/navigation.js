import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div className="col-md-2">
                <div className="list-group mt-5">
                    <a href="#" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Anasayfa / Home</a>

                    <a href="#" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Hakkımda / About</a>

                    <a href="#" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">CV / Resume</a>

                    <a href="#" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Ürünlerim / Portfolio</a>

                    <a href="#" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">Yazılarım / Blog</a>

                    <a href="#" className="list-group-item list-group-item-action mb-4 shadow-lg p-3 bg-white rounded">İletişim / Contact</a>
                </div>
            </div>
        )
    }
}
