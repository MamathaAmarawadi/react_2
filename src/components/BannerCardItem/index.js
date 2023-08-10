// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <div>
      <div className={className}>
        <div className="content">
          <h1 className="name">{headerText}</h1>
          <p className="para">{description}</p>
          <button className="btn">Show More</button>
        </div>
      </div>
    </div>
  )
}
export default BannerCard
