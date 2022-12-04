import React, { Component } from 'react'

export class Modal extends Component {
    render() {
        return (
            <div className='modal'>
                <img className='card___img modal__img' src={'./img/' + this.props.item.img} alt="img" onClick={() => this.props.onShowModal(this.props.item)} />
                <h3 className='card__title'>{this.props.item.title}</h3>
                <p className='card__desc'>{this.props.item.desc}</p>
                <b className='card__price'>{this.props.item.price}</b>
                <div className='card__add' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default Modal  