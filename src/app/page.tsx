
import MenuBar from "@/components/MenuBar"

export default function Indexpage(){
return (<div>
  <div>
    <MenuBar />
    
    
    <div>
      <div className="alert alert-warming" role="alert">
        <p className="fonts itim-regular">เว็บไซต์นี้ยังทำไม่เสร็จใจเย็นๆอย่าพึ่งรีบเข้า</p>
      </div>
    </div>
    <div className="section1-box">
      <h1 className="section1-name tagesschrift-regular "> Hey i'm watcharapon</h1>
      <p className="section1-meta-data tagesschrift-regular "> i'm Batman</p>
      <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/494579083_2065714320589798_9070237940695331893_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=C7c__lutb0cQ7kNvwEvhLL-&_nc_oc=AdmqHhzFahlmGgAo5N4gUQ3RRAqGKx_OmZWFc8HLZV0SN7SoORpeukEp77vLFZAF5pA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fbkk10-1.fna&oh=03_Q7cD2AGSQcS5YvtrTZp8nQQgRdiBANnD22CwdfiozgmD_rk5Jw&oe=683BB2F4" className="section1-picture" />
    </div>
    <div className="section2-box">
      <a className="section2-contact-link tagesschrift-regular" href="https://www.facebook.com/watcharapon.kokarw">🚀 facebook 🚀</a>
      <br />
      <a className="section2-contact-link tagesschrift-regular" href="https://www.instagram.com/this1xfolkk_/?next=%2F">🚀 IG 🚀</a>
      <br />
      <a className="section2-contact-link tagesschrift-regular" href="https://github.com/fokelnwza007">🚀 Github
        🚀</a>
      <br />
    </div>
    <div className="section3-box">
      <div className="section2-box-a">
        <h1>การศึกษา</h1>
        <h1>I am studying at Rajamangala University, Bangkok.</h1>
      </div>
      <div className="section2-box-b">
        <h1>กีฬาที่ชอบ</h1>
        <h1>I like to play football.</h1>
      </div>
    </div>
    <h3 className="text-center">จัดทำโดย นาย วัชรพล กอแก้ว</h3>
    <p className="text-center">รหัสนึกศึกษา 67605050016-1</p>
  </div>
  {'}'}
</div>
)
}