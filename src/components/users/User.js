import React, { useState } from 'react';
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const User = () => {
     // eslint-disable-next-line
     const [backgroundColors, setBackgroundColors] = useState([
        '#D1FFA2',
        '#00CF95',
        '#0098EF',
        '#6D0AD3',
        '#7B77FF',
        '#4ED99C',
        '#EEEEEE',
        '#15B7B9',
        '#BBE9DB'
    ])

    const randomColor = bgColors => bgColors[Math.floor(Math.random() * bgColors.length)]

    return (
        // TODO: replace localhost with props.match.url --> how to get props?
        <Link to={`localhost:3000/${this.this.props.user.id}/todos`} key={this.props.user.id}>
            <Col xs={4} style={{ margin: '10px auto' }}>
                <Col xs={12} className="card" style={{ backgroundColor: `${randomColor(backgroundColors)}`}}>
                    <div style={{ textAlign: 'center' }}>
                        <h3><b>{this.props.user.userName}</b></h3>
                        <img src={`https://robohash.org/${this.props.user.username}.png?size=200x200`} alt='Avatar' style={{ textAlign: 'center' }} />
                    </div>
                    <hr/>
                    <div style={{
                        backgroundColor: '#FFF',
                        textAlign: 'left',
                        paddingLeft: '8px',
                        margin: '-8px auto 14px'
                    }}>
                        <p><strong>Name: </strong>{this.props.user.name}</p>
                        <p><strong>Email: </strong>{this.props.user.email}</p>
                        <p><strong>Company: </strong>{this.props.user.company.name}</p>
                        <p><strong>Website: </strong>{this.props.user.website}</p>
                    </div>
                </Col>
            </Col>
        </Link>
    )
}

export default User