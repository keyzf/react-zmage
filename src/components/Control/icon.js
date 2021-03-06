// React Libs
import React from 'react'

class RotateLeft extends React.PureComponent {
    render() {
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 28 28">
                <path d="M15.4,4.5V0L8.7,6.7l6.7,6.6V7.5c4.2,0.7,7.4,4.3,7.4,8.7s-3.2,8-7.4,8.7v3c5.8-0.7,10.4-5.7,10.4-11.7S21.3,5.3,15.4,4.5 M6.7,25.6c1.7,1.3,3.7,2.1,5.8,2.4v-3c-1.3-0.2-2.5-0.7-3.6-1.5L6.7,25.6 M5.2,17.7h-3c0.3,2.1,1.1,4,2.4,5.8l2.1-2.1 C5.9,20.3,5.4,19.1,5.2,17.7 M6.7,11.1L4.6,9c-1.3,1.7-2.2,3.7-2.4,5.8h3C5.4,13.5,5.9,12.2,6.7,11.1z"/>
            </svg>
        )
    }
}

class RotateRight extends React.PureComponent {
    render() {
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200">
                <path d="M137.6,47.6L89.9,0v32.8C48.7,38.1,15.9,73,15.9,116.4s32.8,78.3,74.1,83.6v-21.2C60.3,173.5,37,148.1,37,116.4 S60.3,59.3,89.9,54v41.3C89.9,95.2,137.6,47.6,137.6,47.6z M184.1,105.8c-2.1-14.8-7.4-28.6-16.9-41.3l-14.8,14.8 c5.3,8.5,9.5,16.9,10.6,26.5H184.1z M111.1,178.8V200c14.8-2.1,28.6-7.4,41.3-16.9l-14.8-14.8C129.1,173.5,120.6,177.8,111.1,178.8 L111.1,178.8z M152.4,153.4l14.8,14.8c9.5-12.7,15.9-26.5,16.9-41.3H163C161.9,136.5,157.7,145,152.4,153.4z"/>
            </svg>
        )
    }
}

export { RotateLeft, RotateRight };