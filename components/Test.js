import React from 'react'
import Image from 'next/image'
import profilePic from '../image/mail_unopen.jpg'
export default function Top() {
    const [colorBind, setColorBind] = React.useState(false);
 return (
   <>
    <div>
    <Image src={profilePic} alt="Picture of the author" width={500} height={500} />
    </div>
     <div className="top-wrap">
     </div>
     <style jsx>{`
       .top-wrap {
         background-color: ${colorBind? "red": "blue"};
         height: 100px;
        }
     `}</style>
   </>
 )};