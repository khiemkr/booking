import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './CategorySelect.scss'
import HomeFooter from '../../HomePage/Section/HomeFooter';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ab1 from '../../../assets/about/ab1.jpeg';
import ab2 from '../../../assets/about/ab2.jpeg';
import ab3 from '../../../assets/about/ab3.jpeg';
import ab4 from '../../../assets/about/ab4.jpeg';
import { getAllSpecialist } from '../../../services/userService'

const images = [
    ab1, ab2, ab3, ab4
];
class CategorySelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {},
            arrSpecialty: [],
        }
    }
    async componentDidMount() {
        await this.getAllSpecialist();
    }
    handleview = () => {
        this.props.history.push(`/specialty`)
    }
    getAllSpecialist = async () => {
        let response = await getAllSpecialist();
        console.log('kiem tra', response)
        if (response && response.success === true) {
            this.setState({
                arrSpecialty: response.result
            })


        }
        // console.log('get user from node.js', response.result)
    }
    render() {
        let arrSpecialty = this.state.arrSpecialty 
        console.log(this.state)
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='category-container'>
                    <div className='row category-intro'>
                        <span className='category-intro-item'>
                            <b>CÁC CHUYÊN KHOA PHỔ BIẾN</b>
                        </span>
                        <div className='border'></div>
                    </div>
                    <div className='category-intro-slide'>
                        <Zoom scale={0.4}>
                            {
                                images.map((each, index) => <img key={index} style={{ width: "100%", height: '200px', objectFit: 'cover' }} src={each} />)
                            }
                        </Zoom>
                    </div>
                    <div class="row">
                        <div className='col-3 category-sidebar'>
                            <nav class="category">
                                <h3 class="category-sidebar-heading">
                                    <i class="fas fa-align-justify"></i>
                                    Trang chủ
                                </h3>
                                <ul class="category-list">
                                    {
                                        arrSpecialty && arrSpecialty.map((item, index) => {
                                            return (
                                                <li class="category-item ">
                                                    {item.departmentName}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className='col-9 category-content-list' >
                            {
                                arrSpecialty && arrSpecialty.map((item, index) => {
                                    let imageBase64 = '';
                                    imageBase64 = new Buffer(item.image,'base64').toString('binary')
                                    return (
                                        <>
                                            <div className='row category-content-list-item'>
                                                <div className='col-5 category-content-list-item-img '
                                                    style={{ backgroundImage: `url(${imageBase64})`}}
                                                >

                                                </div>
                                                <div className='col-7 category-content-list-item-desc'>
                                                    <div className='category-content-list-item-desc-title'>
                                                        {item.departmentName}
                                                    </div>
                                                    <p>{item.description}
                                                    </p>
                                                    <button onClick={() => this.handleview()} className='category-content-list-item-desc-btn'> Xem chi tiet </button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
