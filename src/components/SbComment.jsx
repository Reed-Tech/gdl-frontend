import React from 'react'
import { Button } from 'react-bootstrap'
import userImg from '../assets/images/Avatar.png'



function SbComment() {
    return (
        <div className="blogComment">
            <div className="blogComment__header">
                <h1>COMMENTS</h1>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="blogComment__content">
                        <div className="blogComment__content--comment">
                            <img alt="usersImg" className="blogComment__content--comment-img" src={userImg}/>
                            <div className="blogComment__content--comment-text">
                                <h4>Funke</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.</p>
                            </div>
                        </div>
                        <div className="blogComment__content--comment">
                            <img alt="usersImg" className="blogComment__content--comment-img" src={userImg}/>
                            <div className="blogComment__content--comment-text">
                                <h4>Funke</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.</p>
                            </div>
                        </div>
                        <div className="blogComment__content--comment">
                            <img alt="usersImg" className="blogComment__content--comment-img" src={userImg}/>
                            <div className="blogComment__content--comment-text">
                                <h4>Funke</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.</p>
                            </div>
                        </div>
                        <div className="blogComment__content--comment">
                            <img alt="usersImg" className="blogComment__content--comment-img" src={userImg}/>
                            <div className="blogComment__content--comment-text">
                                <h4>Funke</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.</p>
                            </div>
                        </div>
                        <div className="blogComment__content--comment">
                            <img alt="usersImg" className="blogComment__content--comment-img" src={userImg}/>
                            <div className="blogComment__content--comment-text">
                                <h4>Funke</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blogComment__review">
                        <div className="blogComment__review--content">
                            <p>
                                Did you enjoy this piece?<br />
                            </p>
                            <div className="blogComment__form">
                                <span className="blogComment__form--label">
                                    Your Comment
                                </span>
                                <div>
                                    <textarea className="blogComment__form--input" name="comment" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="blogComment__form">
                                <span className="blogComment__form--label">
                                    Name
                                </span>
                                <div>
                                    <input className="blogComment__form--input-1" name="name"/>
                                </div>
                            </div>
                            <div className="blogComment__form">
                                <span className="blogComment__form--label">
                                    Email
                                </span>
                                <div>
                                    <input className="blogComment__form--input-1" name="email" />
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                <label htmlFor="vehicle2" className="blogComment__form--label-1"> Post as Anonymous</label>
                            </div>
                            
                            <div className="blogComment__form">
                                <Button  className="blogComment__form--btn">Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SbComment
