import banner from '../images/tech-girl.jpg';
import banner2 from '../images/DALL·E 2025-01-26 17.36.21 - A conceptual representation of software for fake news and social media.webp'


const Header = () => {
  return (
<section className="max-container padding-x py-4  relative">
      <div className="w-full h-[400px] overflow-hidden rounded-lg">
        <img
          src={banner2}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
      )
}

export default Header