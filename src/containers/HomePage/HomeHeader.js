import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import * as actions from "../../store/actions";
import { FormattedMessage } from 'react-intl';
import Login from '../Auth/Login';
import { withRouter } from 'react-router';
import _ from 'lodash'

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfoPatient: []
        }

    }
    handleShowLoginPage = () => {

        this.props.history.push(`/login`)

    }
    handleHome = () => {
        this.props.history.push(`/home`)

    }
    handleCategory = () => {
        this.props.history.push(`/category`)

    }
    handleShowProfile = (patient) => { 
        
        // console.log(patient[0].idPatient)
        this.props.history.push(`/profile/${patient[0].idPatient ? patient[0].idPatient : patient[0].idPatient}`) 
    }
    componentDidMount() {
        let {userInfo} = this.props;
        let user = [];
        if(userInfo && !_.isEmpty(userInfo)){
            // let userPatient = userInfo[0].name;
            // console.log('kiem tra ten', userPatient)
        }
        this.setState({
            userInfoPatient: user
        })
    }
    render() {       
        const { processLogout, userInfo } = this.props;
        // console.log(userInfo)
        // console.log('check',userInfo?.[0]?.name)
        let infoPatient = userInfo?.[0]?.name;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            {/* <i className='fas fa-bars'></i> */}
                            <div onClick={() => this.handleHome()} className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div onClick={() => this.handleCategory()} className='child-content'>
                                <div><b>Chuy??n Khoa</b></div>
                                <div className='sub-title'>T??m b??c s?? theo chuy??n khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>D???ch v???</b></div>
                                <div className='sub-title'>Ch???n g??i kh??m b???nh</div>
                            </div>
                            <div className='child-content'>
                                <div><b>B??c s??</b></div>
                                <div className='sub-title'>Ch???n b??c s?? gi???i</div>
                            </div>
                        </div>
                        <div onClick={infoPatient ? () => this.handleShowProfile(userInfo) : () => this.handleShowLoginPage()} className='right-content'>
                            {infoPatient ?
                                <div className='show-infor'>
                                    {infoPatient}
                                </div> :
                                <button
                                    className='btn-login'
                                    onClick={() => { this.handleShowLoginPage() }}
                                >????NG NH???P
                                </button>
                            }
                            <div className={ infoPatient ? 'btn btn-logout btn-logout-patient' : 'btnoverlow'}
                            >
                                <i class="fas fa-user"></i>
                                <ul className='testshow'>
                                    <li onClick={() => this.handleShowProfile(userInfo)}>Profile</li>
                                    <li onClick={processLogout} >LogOut</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                    <div className='home-header-banner'>
                        <div className='content-up'>
                            <div className='title1'>N???N T???NG Y T???</div>
                            <div className='title2'>CH??M S??C S???C KH???E TO??N DI???N</div>
                            <div className='search'>
                                <i className='fas fa-search'></i>
                                <input type='text' placeholder='T??m ki???m b??c s??' />
                            </div>
                        </div>
                        <div className='content-down'>
                            <div className='options'>
                                <div onClick={() => this.handleCategory()} className='option-child'>
                                    <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                    <div className='text-child'>Kh??m chuy??n khoa</div>
                                </div>
                                <div onClick={() => this.handleCategory()} className='option-child'>
                                    <div className='icon-child'><i className='far fa-hospital'></i></div>
                                    <div className='text-child'>Kh??m t???ng qu??t</div>
                                </div>
                                <div onClick={() => this.handleCategory()} className='option-child'>
                                    <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                    <div className='text-child'>X??t nghi???m y h???c</div>
                                </div>
                                <div onClick={() => this.handleCategory()} className='option-child'>
                                    <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                    <div className='text-child'>Ph???u thu???t ch???nh h??nh</div>
                                </div>
                                {/* <div onClick={() => this.handleCategory()} className='option-child'>
                                    <div className='icon-child'><i className="fas fa-address-card"></i></div>
                                    <div className='text-child'>T?? v???n tr???c ti???p</div>
                                </div>
                                <div onClick={() => this.handleCategory()} className='option-child'>
                                    <div className='icon-child'><i className='far fa-hospital'></i></div>
                                    <div className='text-child'>C?? s??? h??? t???ng</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };

};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
