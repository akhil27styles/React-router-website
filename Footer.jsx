import React from 'react'

const Footer = () => {
    let date=new Date();
    let year=date.getFullYear();
    return (
        <div>
            <footer className="w-100 bg-light text-center " id="footer">
                <p>{year} Akhil .All rights Reserved | Terms and conditions</p>
            </footer>
        </div>
    )
}

export default Footer
