import './Hero.css';
import myImg from '../assets/NandiniMPrakashPic.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
            <p className='greeting'>Hey, I'm</p>
            <h1 className='name'>Nandini M Prakash</h1>
            <p className='subtitle'>I’m a third-year undergraduate student, always fascinated by the ever-evolving world of technology and its real-world applications. I am a passionate learner who actively seeks opportunities to grow, aiming to strengthen both my technical and interpersonal skills through practical experience. I also enjoy reading and writing stories and poetry, and I hold a black belt in Karate. Heeyah!</p>
        </div>
        <div className="hero-image">
          <img src={myImg} alt="Nandini" />
        </div>
      </div>
    </section>
  );
}