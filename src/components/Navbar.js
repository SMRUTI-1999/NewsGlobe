import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        let { title } = this.props
        return (
            <nav className={`navbar navbar-expand-lg fixed-top navbar-${this.props.mode} bg-${this.props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{display: 'flex', alignItems:'center'}}>
                        <input type="text" name="" id="searchBox" onKeyUp={this.props.searchNews} placeholder='search news...'/>
                        <button className="btn btn-primary btn-sm mx-2" onClick={this.props.searchNews}>Search</button>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={this.props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${this.props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{`${this.props.mode === 'light' ? 'Enable' : 'Disable'} darkmode`}</label>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar