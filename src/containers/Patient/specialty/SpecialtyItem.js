import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './SpecialtyItem.scss'
import HomeFooter from '../../HomePage/Section/HomeFooter';
import { withRouter } from 'react-router';

class CategorySelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {} 
        }
    }
    handlShowdetail = (doctor) =>{
        this.props.history.push(`/detail-doctor/45`)
    }
    async componentDidMount() {
    }
    render() {
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='specialty-container'>
                    <div className='specialty-banner'>
                        <div className='specialty-banner-opacity'> 
                            <div className='specialty-intro'>
                                <div className='specialty-title'>
                                    <span>Thần Kinh</span>
                                </div>
                                <div className='specialty-description'>
                                    <p>
                                        Hệ thống thần kinh ngoại biên là những phần của hệ thống thần kinh nằm ngoài não và tủy sống. Nó bao gồm các dây thần kinh sọ não và các dây thần kinh tủy sống từ nguyên ủy cho đến tận cùng. Các tế bào sừng trước tủy sống, mặc dù về nguyên lý là một phần của hệ thần kinh trung ương,
                                        nhưng đôi khi được cho rằng là một phần của hệ thống thần kinh ngoại biên bởi vì chúng là một phần của đơn vị vận động.
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className='specialty-content'>
                        <div className='specialty-content-intro'>
                            <p>Bác sĩ ăn khách</p>
                        </div>
                        <div className='row specialty-content-item'>
                            <div className='col-6 specialty-content-item-info'>
                                <div className='specialty-content-item-info-avt'>
                                </div>
                                <div className='specialty-content-item-info-description'>
                                    <span>BS. Nguyen Van A</span>
                                    <p> Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên</p>
                                </div>
                            </div>
                            <div className='col-6 specialty-content-item-celender'>
                                <div className='specialty-content-item-celender-header'>
                                    <span><i class="fas fa-calendar"></i>  Lich Kham</span>
                                </div>
                                <div className='row specialty-content-item-celender-content'>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='specialty-content-item-celender-price'>
                                    <span>GIA KHAM : </span> 
                                    <p>500.000VND</p>
                                </div>
                                <button 
                                    onClick={() => this.handlShowdetail()}
                                    className='specialty-content-item-celender-btn-detail'>
                                    Xem chi tiet
                                </button>
                            </div>
                        </div>
                        <div className='row specialty-content-item'>
                            <div className='col-6 specialty-content-item-info'>
                                <div className='specialty-content-item-info-avt'>
                                </div>
                                <div className='specialty-content-item-info-description'>
                                    <span>BS. Nguyen Van A</span>
                                    <p> Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên</p>
                                </div>
                            </div>
                            <div className='col-6 specialty-content-item-celender'>
                                <div className='specialty-content-item-celender-header'>
                                    <span><i class="fas fa-calendar"></i>  Lich Kham</span>
                                </div>
                                <div className='row specialty-content-item-celender-content'>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='specialty-content-item-celender-price'>
                                    <span>GIA KHAM : </span> 
                                    <p>500.000VND</p>
                                </div>
                                <button 
                                    className='specialty-content-item-celender-btn-detail'
                                    onClick={() => this.handlShowdetail()}
                                >
                                    Xem chi tiet
                                </button>
                            </div>
                        </div>
                        <div className='row specialty-content-item'>
                            <div className='col-6 specialty-content-item-info'>
                                <div className='specialty-content-item-info-avt'>
                                </div>
                                <div className='specialty-content-item-info-description'>
                                    <span>BS. Nguyen Van A</span>
                                    <p> Chuyên gia về Thần kinh Sọ não và Cột sống
                                        Nguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam
                                        Bác sĩ khám cho người bệnh từ 13 tuổi trở lên</p>
                                </div>
                            </div>
                            <div className='col-6 specialty-content-item-celender'>
                                <div className='specialty-content-item-celender-header'>
                                    <span><i class="fas fa-calendar"></i>  Lich Kham</span>
                                </div>
                                <div className='row specialty-content-item-celender-content'>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='specialty-content-item-celender-content'>
                                            <p>8:00AM - 10:00AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='specialty-content-item-celender-price'>
                                    <span>GIA KHAM : </span> 
                                    <p>500.000VND</p>
                                </div>
                                <button 
                                    onClick={() => this.handlShowdetail()}
                                    className='specialty-content-item-celender-btn-detail'>
                                    Xem chi tiet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(CategorySelect));
